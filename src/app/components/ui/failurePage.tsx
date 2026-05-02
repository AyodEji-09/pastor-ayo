"use client";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, CreditCard, Mail, Phone, RefreshCw, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { BookType } from "@/lib/data";
import { SaleBundle } from "@/lib/saleBooks";

const PaymentFailed = ({
  product,
}: {
  product: BookType | SaleBundle | undefined;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    // Redirect to home if no product data
    if (!product) {
      router.push("/checkout");
    }
  }, [product, router]);

  if (!product) return null;

  const handleRetryPayment = () => {
    router.push("/checkout");
  };

  const currencyFromQuery = (searchParams.get("currency") || "usd").toLowerCase();
  const currency = currencyFromQuery === "ngn" ? "NGN" : "USD";
  const amountMinor = Number(searchParams.get("amount") || 0);
  const attemptedAmount =
    amountMinor > 0
      ? amountMinor / 100
      : Number(currency === "NGN" ? product.price_ngn : product.price_usd);
  const formattedAttemptedAmount = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(attemptedAmount);

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
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center">
                <XCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Payment Failed
            </h1>
            <p className="text-base text-slate-600 max-w-xl mx-auto leading-7">
              We couldn&apos;t process your payment this time. Don&apos;t worry
              - no charges were made to your account.
            </p>
          </div>

          <Card className="border border-slate-200 bg-white shadow-sm mb-8 p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-slate-700" />
              </div>
              <div>
                <h2 className="font-semibold text-slate-900 mb-2 text-lg">
                  What went wrong?
                </h2>
                <p className="text-sm leading-6 text-slate-700">
                  The payment processor declined your transaction. This can happen
                  for various reasons, but your item still awaits you.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm mb-8 overflow-hidden">
            <div className="bg-white px-8 py-5 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">
                Order Details
              </h2>
            </div>

            <div className="p-8 sm:p-10">
              <div className="flex items-center gap-5 p-6 bg-slate-50 rounded-lg border border-slate-200">
                <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-7 h-7 text-slate-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1 text-lg">
                    {product.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-6">
                    Attempted payment amount
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-slate-900">
                    {formattedAttemptedAmount}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              What should you do next?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-slate-200 shadow-sm p-7 sm:p-8 bg-white">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">
                      Try Again
                    </h3>
                    <p className="text-xs text-slate-500 uppercase tracking-[0.12em] font-semibold">
                      Recommended
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 text-sm leading-6">
                  Sometimes payment issues are temporary. Try your payment again
                  with the same or different card.
                </p>
                <Button
                  size="lg"
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold"
                  onClick={handleRetryPayment}
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Retry Payment
                </Button>
              </Card>

              <Card className="border border-slate-200 shadow-sm p-7 sm:p-8 bg-white">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-lg">
                    Different Method
                  </h3>
                </div>
                <p className="text-slate-600 mb-6 text-sm leading-6">
                  Try using a different card, digital wallet, or payment method
                  to complete your purchase.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold"
                  onClick={() => router.push("/checkout")}
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Try Different Method
                </Button>
              </Card>
            </div>
          </div>

          <Card className="border border-slate-200 shadow-sm mb-8 overflow-hidden">
            <div className="bg-white px-8 py-5 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">
                Common Issues & Solutions
              </h2>
            </div>

            <div className="p-8 sm:p-10">
              <div className="grid grid-cols-1 gap-4">
                {commonIssues.map((item, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-lg p-5 bg-slate-50"
                  >
                    <div className="flex gap-4">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          {item.issue}
                        </h3>
                        <p className="text-sm leading-6 text-slate-600">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-white px-8 py-5 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-900">Need Help Immediately?</h2>
            </div>

            <div className="p-8 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Call Support
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-slate-700 hover:text-slate-900 font-medium"
                    >
                      (123) 456-7890
                    </a>
                    <p className="text-xs text-slate-600 mt-3">
                      Available 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Email Support
                    </h3>
                    <a
                      href="mailto:info@ayodejianifowose.com"
                      className="text-slate-700 hover:text-slate-900 font-medium break-all"
                    >
                      info@ayodejianifowose.com
                    </a>
                    <p className="text-xs text-slate-600 mt-3">
                      Response within 2 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-sm text-center text-slate-700 leading-6">
                  Our support team is standing by to help you resolve this
                  payment issue quickly and securely.
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold"
              onClick={() => router.push("/")}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
