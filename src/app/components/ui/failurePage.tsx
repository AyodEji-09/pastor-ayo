"use client";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XCircle, RefreshCw, CreditCard, Phone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { books } from "@/lib/data";
import { product as prd } from "./successPage";

const PaymentFailed = ({ product }: { product: typeof prd }) => {
  const router = useRouter();
  useEffect(() => {
    // Redirect to home if no product data
    if (!product) {
      router.push("/checkout");
    }
  }, [product]);

  if (!product) return null;

  const handleRetryPayment = () => {
    router.push("/checkout");
  };

  const commonIssues = [
    {
      issue: "Insufficient funds",
      solution: "Check your account balance or try a different payment method",
    },
    {
      issue: "Expired card",
      solution: "Update your card information with the current expiry date",
    },
    {
      issue: "Incorrect card details",
      solution: "Verify your card number, CVV, and billing address",
    },
    {
      issue: "Bank security hold",
      solution: "Contact your bank to authorize the transaction",
    },
  ];

  return (
    <div className="tw-bg-gradient-subtle">
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
        <div className="tw-max-w-2xl tw-mx-auto">
          {/* Error Header */}
          <div className="tw-text-center tw-mb-8 tw-animate-fade-in">
            <div className="tw-w-16 tw-h-16 tw-bg-destructive tw-rounded-full tw-flex tw-items-center tw-justify-center tw-mx-auto tw-mb-4 tw-shadow-elegant">
              <XCircle className="tw-w-8 tw-h-8 tw-text-destructive-foreground" />
            </div>
            <h1 className="tw-text-3xl tw-font-bold tw-text-foreground tw-mb-2">
              Payment Failed
            </h1>
            <p className="tw-text-muted-foreground">
              We couldn&apos;t process your payment. Don&apos;t worry, no
              charges were made to your account.
            </p>
          </div>

          {/* Order Summary */}
          <Card className="tw-bg-gradient-card tw-shadow-elegant tw-mb-6 tw-animate-slide-up">
            <div className="tw-p-6">
              <h2 className="tw-text-xl tw-font-semibold tw-mb-4">
                Your Order
              </h2>

              <div className="tw-flex tw-items-center tw-gap-4 tw-p-4 tw-bg-muted/30 tw-rounded-lg">
                {/* <img
                  src={product.image}
                  alt={product.name}
                  className="tw-w-16 tw-h-16 tw-object-cover tw-rounded-lg"
                /> */}
                <div className="tw-flex-1">
                  <h3 className="tw-font-semibold">{product.name}</h3>
                  <p className="tw-text-muted-foreground tw-text-sm">
                    Attempted payment amount
                  </p>
                </div>
                <div className="tw-text-right">
                  <span className="tw-text-xl tw-font-bold">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Common Issues */}
          <Card className="tw-bg-gradient-card tw-shadow-elegant tw-mb-6 tw-animate-slide-up">
            <div className="tw-p-6">
              <h2 className="tw-text-xl tw-font-semibold tw-mb-4">
                Common Issues & Solutions
              </h2>

              <div className="tw-space-y-4">
                {commonIssues.map((item, index) => (
                  <div
                    key={index}
                    className="tw-border-l-4 tw-border-primary tw-pl-4"
                  >
                    <h3 className="tw-font-medium tw-text-sm">{item.issue}</h3>
                    <p className="tw-text-sm tw-text-muted-foreground">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="tw-space-y-4 tw-animate-slide-up">
            <Button
              variant="secondary"
              size="lg"
              className="tw-w-full"
              onClick={handleRetryPayment}
            >
              <RefreshCw className="tw-w-4 tw-h-4" />
              Try Payment Again
            </Button>

            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push("/checkout")}
              >
                <CreditCard className="tw-w-4 tw-h-4" />
                Try Different Method
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push("/checkout")}
              >
                Continue Shopping
              </Button>
            </div>
          </div>

          {/* Support Options */}
          <Card className="tw-bg-gradient-card tw-shadow-elegant tw-mt-6 tw-animate-slide-up">
            <div className="tw-p-6">
              <h2 className="tw-text-xl tw-font-semibold tw-mb-4">
                Need Help?
              </h2>

              <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4">
                <div className="tw-flex tw-items-center tw-gap-3 tw-p-4 tw-bg-muted/30 tw-rounded-lg">
                  <Phone className="tw-w-5 tw-h-5 tw-text-primary" />
                  <div>
                    <h3 className="tw-font-medium">Call Support</h3>
                    <a
                      href="tel:+1234567890"
                      className="tw-text-sm tw-text-primary hover:tw-underline"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="tw-flex tw-items-center tw-gap-3 tw-p-4 tw-bg-muted/30 tw-rounded-lg">
                  <Mail className="tw-w-5 tw-h-5 tw-text-primary" />
                  <div>
                    <h3 className="tw-font-medium">Email Support</h3>
                    <a
                      href="mailto:support@example.com"
                      className="tw-text-sm tw-text-primary hover:tw-underline"
                    >
                      support@example.com
                    </a>
                  </div>
                </div>
              </div>

              <p className="tw-text-sm tw-text-muted-foreground tw-mt-4 tw-text-center">
                Our support team is available 24/7 to help resolve any payment
                issues.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
