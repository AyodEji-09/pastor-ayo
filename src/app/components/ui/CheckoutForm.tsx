"use client";
import { useState, useMemo } from "react";
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
import { books, BookType } from "@/lib/data";

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
    country: "US",
  });

  const handleSuccess = () => {
    // navigate("/payment-success", { state: { product } });
    // router.push("/checkout/success");
    console.log("success");
  };

  const handleError = () => {
    // navigate("/payment-failed", { state: { product } });
    console.log("error");
  };

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

  // Format price with proper currency and comma separators
  const formatPrice = (price: string | number, isNigeria: boolean) => {
    const numPrice = typeof price === "string" ? parseFloat(price) : price;
    const currency = isNigeria ? "₦" : "$";
    return `${currency}${numPrice.toLocaleString()}`;
  };

  // Calculate the current price based on selected country
  const currentPrice = useMemo(() => {
    const isNigeria = formData.country === "NG";
    const price = isNigeria ? product.price_ngn : product.price_usd;
    return formatPrice(price, isNigeria);
  }, [formData.country, product]);

  // Calculate shipping fee based on selected country
  const shippingFee = useMemo(() => {
    switch (formData.country) {
      case "US":
        return 5;
      case "NG":
        return 5000;
      default:
        return 0;
    }
  }, [formData.country]);

  // Calculate tax (7.5% of book + shipping)
  const taxAmount = useMemo(() => {
    const isNigeria = formData.country === "NG";
    const bookPrice = parseFloat(
      isNigeria ? product.price_ngn : product.price_usd,
    );
    const subtotal = bookPrice + shippingFee;
    return subtotal * 0.075;
  }, [formData.country, product, shippingFee]);

  // Calculate total price (book + shipping + tax)
  const totalPrice = useMemo(() => {
    const isNigeria = formData.country === "NG";
    const bookPrice = parseFloat(
      isNigeria ? product.price_ngn : product.price_usd,
    );
    const total = bookPrice + shippingFee + taxAmount;
    return formatPrice(total, isNigeria);
  }, [formData.country, product, shippingFee, taxAmount]);

  // Format tax display
  const taxDisplay = useMemo(() => {
    const isNigeria = formData.country === "NG";
    return formatPrice(taxAmount, isNigeria);
  }, [taxAmount, formData.country]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Notify parent when country changes
    if (field === "country" && onCountryChange) {
      onCountryChange(value);
    }
  };

  async function handleBuy(formData: FormData, book: BookType): Promise<void> {
    console.log("buy book");
    try {
      const isNigeria = formData.country === "NG";
      const bookPrice = parseFloat(
        isNigeria ? book.price_ngn : book.price_usd,
      );
      
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: book.displayPrice,
          book,
          data: formData,
          pricing: {
            bookPrice,
            shippingFee,
            taxAmount,
            totalAmount: bookPrice + shippingFee + taxAmount,
          },
        }),
      });

      const data: { url: string } = await res.json();
      console.log({ data });

      window.location.href = data.url; // redirect to Stripe Checkout
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    setIsProcessing(true);
    console.log({ formData });

    try {
      // Simulate payment processing
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      await handleBuy(formData, product);

      // Simulate success/failure (80% success rate)
      const isSuccess = Math.random() > 0.2;

      if (isSuccess) {
        toast({
          title: "Payment Successful!",
          description: "Your order has been processed successfully.",
        });
        handleSuccess();
      } else {
        throw new Error("Payment failed");
      }
    } catch (error) {
      console.log({ error });

      toast({
        title: "Payment Failed",
        description:
          "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      });
      handleError();
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
