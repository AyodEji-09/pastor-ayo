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
import { slugify } from "@/app/(home)/shop/page";

// interface CheckoutFormProps {
//   product: {
//     id: string,
//     name: string,
//     price: number,
//   };
//   onSuccess: () => void;
//   onError: () => void;
// }

export const CheckoutForm = ({ product }) => {
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

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  async function handleBuy(formData, book) {
    console.log("buy book");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: book.priceId, book, data: formData }),
      });

      const data = await res.json();
      console.log({ data });

      window.location.href = data.url; // redirect to Stripe Checkout
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
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
    <Card className="tw-bg-gradient-card tw-shadow-elegant">
      <div className="tw-p-6">
        <div className="tw-flex tw-items-center tw-gap-2 tw-mb-6">
          <CreditCard className="tw-w-5 tw-h-5 tw-text-primary" />
          <h2 className="tw-text-xl tw-font-semibold">Payment Details</h2>
        </div>

        <form onSubmit={handleSubmit} className="tw-space-y-6">
          {/* Contact Information */}
          <div className="tw-space-y-4">
            <h3 className="tw-font-medium tw-flex tw-items-center tw-gap-2">
              <User className="tw-w-4 tw-h-4" />
              Contact Information
            </h3>
            <div className="tw-grid tw-gap-4">
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
              <div className="tw-grid tw-grid-cols-2 tw-gap-4">
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
          <div className="tw-space-y-4">
            <h3 className="tw-font-medium tw-flex tw-items-center tw-gap-2">
              <MapPin className="w-4 h-4" />
              Shipping Address
            </h3>
            <div className="tw-grid tw-gap-4">
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
              <div className="tw-grid tw-grid-cols-2 tw-gap-4">
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
              <div className="tw-grid tw-grid-cols-2 tw-gap-4">
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

          {/* Payment Information */}
          {/* <div className="tw-space-y-4">
            <h3 className="tw-font-medium tw-flex tw-items-center tw-gap-2">
              <Lock className="tw-w-4 tw-h-4" />
              Payment Information
            </h3>
            <div className="tw-grid tw-gap-4">
              <div>
                <Label htmlFor="nameOnCard">Name on Card</Label>
                <Input
                  id="nameOnCard"
                  placeholder="John Doe"
                  value={formData.nameOnCard}
                  onChange={(e) =>
                    handleInputChange("nameOnCard", e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) =>
                    handleInputChange("cardNumber", e.target.value)
                  }
                  required
                />
              </div>
              <div className="tw-grid tw-grid-cols-2 tw-gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) =>
                      handleInputChange("expiryDate", e.target.value)
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange("cvv", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div> */}

          {/* Order Summary */}
          <div className="tw-border-t tw-pt-4">
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
              <span className="tw-text-muted-foreground">{product.title}</span>
              <span className="tw-font-semibold">{product.displayPrice}</span>
            </div>
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
              <span className="tw-text-muted-foreground">Shipping</span>
              <span className="tw-font-semibold tw-text-success">FREE</span>
            </div>
            <div className="tw-flex tw-justify-between tw-items-center tw-text-lg tw-font-bold tw-border-t tw-pt-4">
              <span>Total</span>
              <span className="tw-bg-gradient-primary tw-bg-clip-text">
                {product.displayPrice}
              </span>
            </div>
          </div>

          <Button
            type="submit"
            variant="checkout"
            size="lg"
            className="tw-w-full"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <div className="tw-flex tw-items-center tw-gap-2">
                <div className="tw-w-4 tw-h-4 tw-border-2 tw-border-primary-foreground tw-border-t-transparent tw-rounded-full tw-animate-spin" />
                Processing Payment...
              </div>
            ) : (
              `Complete Purchase - ${product.displayPrice}`
            )}
          </Button>

          <p className="tw-text-xs tw-text-muted-foreground tw-text-center">
            Your payment information is secure and encrypted.
            <span className="tw-flex tw-items-center tw-justify-center tw-gap-1 tw-mt-1">
              <Lock className="tw-w-3 tw-h-3" />
              256-bit SSL encryption
            </span>
          </p>
        </form>
      </div>
    </Card>
  );
};
