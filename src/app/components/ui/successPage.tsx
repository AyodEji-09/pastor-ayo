"use client";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookType } from "@/lib/data";
import { SaleBundle } from "@/lib/saleBooks";
import { CheckCircle, Download, Mail, Package, Shield } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { openReceiptTemplate } from "./receiptTemplate";

type VerifiedSession = {
  currency: string;
  amountMinor: number;
  bookPrice: number;
  shippingFee: number;
  taxAmount: number;
};

const PaymentSuccess = ({
  product,
  bookPrice = 0,
  shippingFee = 0,
  taxAmount = 0,
  totalAmount = 0,
}: {
  product: BookType | SaleBundle | undefined;
  bookPrice?: number;
  shippingFee?: number;
  taxAmount?: number;
  totalAmount?: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [verified, setVerified] = useState<VerifiedSession | null>(null);
  const [verifying, setVerifying] = useState(true);
  const [verifyError, setVerifyError] = useState<string | null>(null);
  const orderNumber = useMemo(
    () => `ORD-${Math.random().toString(36).slice(2, 11).toUpperCase()}`,
    [],
  );
  const estimatedDelivery = new Date(
    Date.now() + 5 * 24 * 60 * 60 * 1000,
  ).toLocaleDateString();
  const currencyFromQuery = (searchParams.get("currency") || "usd").toLowerCase();
  const currency = currencyFromQuery === "ngn" ? "NGN" : "USD";
  const amountMinor = Number(searchParams.get("amount") || 0);
  const bookFromQuery = Number(searchParams.get("book") || 0);
  const shippingFromQuery = Number(searchParams.get("shipping") || 0);
  const taxFromQuery = Number(searchParams.get("tax") || 0);
  const fallbackBookPrice = Number(
    currency === "NGN" ? product?.price_ngn ?? 0 : product?.price_usd ?? 0,
  );
  const receiptBookPrice =
    bookFromQuery > 0 ? bookFromQuery : bookPrice > 0 ? bookPrice : fallbackBookPrice;
  const receiptShipping = shippingFromQuery > 0 ? shippingFromQuery : shippingFee;
  const receiptTax = taxFromQuery > 0 ? taxFromQuery : taxAmount;
  const calculatedTotal =
    totalAmount > 0
      ? totalAmount
      : receiptBookPrice + receiptShipping + receiptTax;
  const receiptTotal = amountMinor > 0 ? amountMinor / 100 : calculatedTotal;

  useEffect(() => {
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      setVerifyError("Missing payment session. Unable to verify payment.");
      setVerifying(false);
      return;
    }

    const verify = async () => {
      try {
        const res = await fetch(
          `/api/checkout/session?session_id=${encodeURIComponent(sessionId)}`,
        );

        if (!res.ok) {
          const data = await res.json().catch(() => ({ message: "Verification failed" }));
          throw new Error(data?.message || "Verification failed");
        }

        const data: VerifiedSession = await res.json();
        setVerified(data);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Verification failed";
        setVerifyError(message);
      } finally {
        setVerifying(false);
      }
    };

    verify();
  }, [searchParams]);

  const effectiveCurrency = verified?.currency || currency;
  const effectiveBook = verified?.bookPrice || receiptBookPrice;
  const effectiveShipping = verified?.shippingFee || receiptShipping;
  const effectiveTax = verified?.taxAmount || receiptTax;
  const effectiveTotal =
    verified && verified.amountMinor > 0
      ? verified.amountMinor / 100
      : receiptTotal;

  const effectiveFormattedAmount = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: effectiveCurrency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(effectiveTotal);

  const handleReceiptDownload = () => {
    openReceiptTemplate({
      orderNumber,
      productTitle: product?.title ?? "Product",
      bookPrice: effectiveBook,
      shippingFee: effectiveShipping,
      taxAmount: effectiveTax,
      totalAmount: effectiveTotal,
      estimatedDelivery,
      supportEmail: "info@ayodejianifowose.com",
      supportPhone: "(123) 456-7890",
      currency: effectiveCurrency,
    });
  };

  if (verifying) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <Card className="border border-slate-200 shadow-sm p-8 text-center">
              <p className="text-slate-700">Verifying payment...</p>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (verifyError) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <Card className="border border-rose-200 shadow-sm p-8 text-center">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">
                Unable to verify payment
              </h2>
              <p className="text-slate-600 mb-6">{verifyError}</p>
              <Button onClick={() => router.push("/")}>Back to Home</Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Payment Successful!
            </h1>
            <p className="text-base text-slate-600 max-w-xl mx-auto leading-7">
              Your order has been confirmed. A separate professional receipt can
              be downloaded below.
            </p>
          </div>

          <Card className="border border-slate-200 shadow-sm mb-8 overflow-hidden">
            <div className="bg-white px-8 py-5 border-b border-slate-200">
              <p className="text-xs text-slate-600 uppercase tracking-[0.12em] font-semibold">
                Order Number
              </p>
              <p className="font-mono text-xl font-semibold text-slate-900 mt-1">
                {orderNumber}
              </p>
            </div>

            <div className="p-8 sm:p-10">
              <div className="space-y-7">
                <div className="flex justify-between items-start pb-6 border-b border-slate-200">
                  <div className="pr-4">
                    <p className="text-xs text-slate-500 uppercase tracking-[0.12em] font-semibold mb-2">
                      Product
                    </p>
                    <p className="text-lg font-semibold text-slate-900 leading-7">
                      {product?.title}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-[0.12em] font-semibold mb-2">
                      Amount Paid
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                      {effectiveFormattedAmount}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-[0.12em] font-semibold mb-2">
                      Estimated Delivery
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      {estimatedDelivery}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <Card className="border border-slate-200 shadow-sm p-6 sm:p-7">
              <div className="flex justify-center mb-4">
                <div className="w-11 h-11 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-center font-semibold text-slate-900 mb-2 text-lg">
                Confirmation Email
              </h3>
              <p className="text-center text-sm leading-6 text-slate-600">
                You&apos;ll receive an order confirmation with tracking details
                within minutes.
              </p>
            </Card>

            <Card className="border border-slate-200 shadow-sm p-6 sm:p-7">
              <div className="flex justify-center mb-4">
                <div className="w-11 h-11 bg-amber-100 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-amber-600" />
                </div>
              </div>
              <h3 className="text-center font-semibold text-slate-900 mb-2 text-lg">
                Processing
              </h3>
              <p className="text-center text-sm leading-6 text-slate-600">
                We&apos;ll process and prepare your order within 1-2 business
                days.
              </p>
            </Card>

            <Card className="border border-slate-200 shadow-sm p-6 sm:p-7">
              <div className="flex justify-center mb-4">
                <div className="w-11 h-11 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-center font-semibold text-slate-900 mb-2 text-lg">
                Fulfillment
              </h3>
              <p className="text-center text-sm leading-6 text-slate-600">
                You will receive updates as your order moves to delivery.
              </p>
            </Card>
          </div>

          <Card className="border border-slate-200 bg-white shadow-sm mb-8 p-6 sm:p-7">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <p className="text-sm leading-6 text-slate-700">
                Your payment is secure and encrypted. No charges were made until
                your payment was successful.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
              onClick={() => router.push("/")}
            >
              Continue Shopping
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border border-emerald-300 text-emerald-700 hover:bg-emerald-50 font-semibold"
              onClick={handleReceiptDownload}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Receipt
            </Button>
          </div>

          <Card className="border border-slate-200 shadow-sm p-7 sm:p-8 bg-white text-center">
            <h3 className="font-semibold text-slate-900 mb-2 text-lg">
              Questions?
            </h3>
            <p className="text-sm leading-6 text-slate-600 mb-5">
              Our support team is here to help 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@ayodejianifowose.com"
                className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Email Support
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="tel:+1234567890"
                className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                Call (123) 456-7890
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
