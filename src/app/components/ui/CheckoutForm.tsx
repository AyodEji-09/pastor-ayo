"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Lock, MapPin, User } from "lucide-react";
import { BookType } from "@/lib/data";
import { slugify } from "@/lib/utils";

const roundToTwo = (value: number) => Math.round(value * 100) / 100;

const formatPrice = (price: string | number, isNigeria: boolean) => {
  const numPrice =
    typeof price === "string" ? parseFloat(price) : roundToTwo(price);
  const currency = isNigeria ? "₦" : "$";
  return `${currency}${numPrice.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const resolveBasePrice = (product: BookType, country: string) => {
  const isNigeria = country === "NG";
  const parsed = Number(isNigeria ? product.price_ngn : product.price_usd);
  if (Number.isFinite(parsed) && parsed > 0) {
    return parsed;
  }

  if (product.displayPrice) {
    const normalized = product.displayPrice.replace(/[^0-9.]/g, "");
    const fallback = Number(normalized);
    if (Number.isFinite(fallback) && fallback > 0) {
      return fallback;
    }
  }

  return 0;
};

export const CheckoutForm = ({
  product,
  country,
  onCountryChange,
}: {
  product: BookType;
  country: string;
  onCountryChange?: (country: string) => void;
}) => {
  // const product = books.find((b) => slugify(b.title) === book);
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: country || "US",
  });

  const bookSlug = slugify(product.title);

  interface FormData {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }

  const isNigeria = formData.country === "NG";
  const basePrice = resolveBasePrice(product, formData.country);
  const shippingFee =
    formData.country === "US" ? 5 : formData.country === "NG" ? 5000 : 0;
  const taxAmount = roundToTwo((basePrice + shippingFee) * 0.075);
  const totalAmount = roundToTwo(basePrice + shippingFee + taxAmount);
  const currentPrice = formatPrice(basePrice, isNigeria);
  const taxDisplay = formatPrice(taxAmount, isNigeria);
  const totalPrice = formatPrice(totalAmount, isNigeria);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Notify parent when country changes
    if (field === "country" && onCountryChange) {
      onCountryChange(value);
    }
  };

  async function handleBuy(formData: FormData): Promise<void> {
    console.log("buy book");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookSlug,
          data: formData,
        }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({ message: "Unable to create checkout session" }));
        throw new Error(payload?.message || "Unable to create checkout session");
      }

      const data: { url: string } = await res.json();
      console.log({ data });

      if (!data?.url) {
        throw new Error("Checkout URL not returned");
      }

      window.location.href = data.url; // redirect to Stripe Checkout
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setIsProcessing(true);
    console.log({ formData });

    try {
      await handleBuy(formData);
    } catch (error) {
      console.log({ error });

      toast({
        title: "Payment Failed",
        description:
          "There was an issue starting checkout. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="bg-gradient-card shadow-elegant">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <CreditCard className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">Payment Details</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <User className="w-4 h-4" />
              Contact Information
            </h3>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Shipping Address
            </h3>
            <div className="grid gap-4">
              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input
                  id="address"
                  placeholder="123 Main Street"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="New York"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    placeholder="NY"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    placeholder="10001"
                    value={formData.zipCode}
                    onChange={(e) =>
                      handleInputChange("zipCode", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) =>
                      handleInputChange("country", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="NG">Nigeria</SelectItem>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      <SelectItem value="AU">Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

           {/* Order Summary */}
           <div className="border-t pt-4">
             <div className="flex justify-between items-center mb-4">
               <span className="text-muted-foreground">{product.title}</span>
               <span className="font-semibold">{currentPrice}</span>
             </div>
             <div className="flex justify-between items-center mb-4">
               <span className="text-muted-foreground">Shipping</span>
               <span className="font-semibold text-success">
                 <ul className="list-dis list-inside">
                   {formData.country === "US" && <li>United States: $5</li>}
                   {formData.country === "NG" && <li>Lagos: ₦5,000</li>}
                   {formData.country !== "US" && formData.country !== "NG" && (
                     <li>Shipping is not free</li>
                   )}
                 </ul>
               </span>
             </div>
             <div className="flex justify-between items-center mb-4">
               <span className="text-muted-foreground">Tax (7.5%)</span>
               <span className="font-semibold">{taxDisplay}</span>
             </div>
             <span className="text-muted-foreground font-extralight text-sm max-w-[100px]">
               The shipping fee is not included in the total price. For other
               countries, the shipping fee will be communicated.
             </span>
             <div className="flex justify-between items-center text-lg font-bold border-t pt-4">
               <span>Total</span>
               <span className="bg-gradient-primary bg-clip-text">
                 {totalPrice}
               </span>
             </div>
           </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                Processing Payment...
              </div>
            ) : (
              `Complete Purchase - ${totalPrice}`
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Your payment information is secure and encrypted.
            <span className="flex items-center justify-center gap-1 mt-1">
              <Lock className="w-3 h-3" />
              256-bit SSL encryption
            </span>
          </p>
        </form>
      </div>
    </Card>
  );
};
