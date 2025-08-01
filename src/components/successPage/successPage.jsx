'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Download, Package, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
export const product = {
    id: "wireless-headphones-pro",
    name: "Wireless Headphones Pro",
    price: 199,
    originalPrice: 299,
    description:
      "Experience premium sound quality with our latest wireless headphones featuring advanced noise cancellation and 30-hour battery life.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Premium drivers for superior sound",
      "Comfortable over-ear design",
      "Quick charge - 5 min for 2 hours",
      "Bluetooth 5.2 connectivity",
      "Voice assistant integration",
      "1-year warranty included",
    ],
  };

const PaymentSuccess = () => {
    const router = useRouter()
  const orderNumber = `ORD-${Math.random()
    .toString(36)
    .substr(2, 9)
    .toUpperCase()}`;
  const estimatedDelivery = new Date(
    Date.now() + 5 * 24 * 60 * 60 * 1000
  ).toLocaleDateString();

  return (
    <div className="tw-min-h-screen tw-bg-gradient-subtle">
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
        <div className="tw-max-w-2xl tw-mx-auto">
          {/* Success Header */}
          <div className="tw-text-center tw-mb-8 tw-animate-fade-in">
            <div className="tw-w-16 tw-h-16 tw-bg-success tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-4 tw-shadow-elegant">
              <CheckCircle className="tw-w-8 tw-h-8 tw-text-success-foreground" />
            </div>
            <h1 className="tw-text-3xl tw-font-bold tw-text-foreground tw-mb-2">
              Payment Successful!
            </h1>
            <p className="tw-text-muted-foreground">
              Thank you for your purchase. Your order has been confirmed.
            </p>
          </div>

          {/* Order Details */}
          <Card className="tw-bg-gradient-card tw-shadow-elegant tw-mb-6 tw-animate-slide-up">
            <div className="tw-p-6">
              <h2 className="tw-text-xl tw-font-semibold tw-mb-4 tw-flex tw-items-center tw-gap-2">
                <Package className="tw-w-5 tw-h-5 tw-text-primary" />
                Order Details
              </h2>

              <div className="tw-space-y-4">
                <div className="tw-flex tw-justify-between tw-items-center tw-py-2 tw-border-b">
                  <span className="tw-text-muted-foreground">Order Number</span>
                  <span className="tw-font-mono tw-font-semibold">
                    {orderNumber}
                  </span>
                </div>

                <div className="tw-flex tw-justify-between tw-items-center tw-py-2 tw-border-b">
                  <span className="tw-text-muted-foreground">Product</span>
                  <span className="tw-font-semibold">{product?.name}</span>
                </div>

                <div className="tw-flex tw-justify-between tw-items-center tw-py-2 tw-border-b">
                  <span className="tw-text-muted-foreground">Amount Paid</span>
                  <span className="tw-font-semibold text-success">
                    ${product?.price}
                  </span>
                </div>

                <div className="tw-flex tw-justify-between tw-items-center tw-py-2">
                  <span className="tw-text-muted-foreground">
                    Estimated Delivery
                  </span>
                  <span className="tw-font-semibold">{estimatedDelivery}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Next Steps */}
          <Card className="tw-bg-gradient-card tw-shadow-elegant tw-mb-6 tw-animate-slide-up">
            <div className="tw-p-6">
              <h2 className="tw-text-xl tw-font-semibold tw-mb-4">
                What happens next?
              </h2>

              <div className="tw-space-y-4">
                <div className="tw-flex tw-items-start tw-gap-3">
                  <Mail className="tw-w-5 tw-h-5 tw-text-primary tw-mt-0.5" />
                  <div>
                    <h3 className="tw-font-medium">Confirmation Email</h3>
                    <p className="tw-text-sm tw-text-muted-foreground">
                      You&apos;ll receive an order confirmation email with
                      tracking details within the next few minutes.
                    </p>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-gap-3">
                  <Package className="tw-w-5 tw-h-5 tw-text-primary tw-mt-0.5" />
                  <div>
                    <h3 className="tw-font-medium">Processing & Shipping</h3>
                    <p className="tw-text-sm tw-text-muted-foreground">
                      Your order will be processed within 1-2 business days and
                      shipped with tracking information.
                    </p>
                  </div>
                </div>

                <div className="tw-flex tw-items-start tw-gap-3">
                  <Download className="tw-w-5 tw-h-5 tw-text-primary tw-mt-0.5" />
                  <div>
                    <h3 className="tw-font-medium">Digital Resources</h3>
                    <p className="tw-text-sm tw-text-muted-foreground">
                      Access user manual, warranty information, and companion
                      app download links.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-gap-4 atw-nimate-slide-up">
            <Button
              variant="checkout"
              size="lg"
              className="flex-1"
              onClick={() => router.push("/")}
            >
              Continue Shopping
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={() => window.print()}
            >
              <Download className="w-4 h-4" />
              Download Receipt
            </Button>
          </div>

          {/* Support */}
          <div className="tw-text-center tw-mt-8 tw-p-4 tw-bg-muted/30 tw-rounded-lg">
            <p className="tw-text-sm tw-text-muted-foreground">
              Need help? Contact our support team at{" "}
              <a
                href="mailto:support@example.com"
                className="tw-text-primary tw-hover:underline"
              >
                support@example.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+1234567890"
                className="tw-text-primary tw-hover:underline"
              >
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
