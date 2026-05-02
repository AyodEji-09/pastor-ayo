"use client";
import { BookType } from "@/lib/data";
import { SaleBundle } from "@/lib/saleBooks";
import { CheckCircle, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ReceiptProps {
  product: BookType | SaleBundle | undefined;
  orderNumber: string;
  estimatedDelivery: string;
  bookPrice?: number;
  shippingFee?: number;
  taxAmount?: number;
  totalAmount?: number;
}

const Receipt = ({
  product,
  orderNumber,
  estimatedDelivery,
  bookPrice = 0,
  shippingFee = 0,
  taxAmount = 0,
  totalAmount = 0,
}: ReceiptProps) => {
  return (
    <div className="tw-w-full tw-max-w-2xl tw-mx-auto">
      <Card className="tw-border-0 tw-shadow-2xl tw-overflow-hidden tw-print:shadow-none">
        {/* Receipt Header */}
        <div className="tw-bg-gradient-to-r tw-from-emerald-600 tw-to-emerald-700 tw-px-8 tw-py-8 tw-text-white">
          <div className="tw-flex tw-items-center tw-justify-between tw-mb-6">
            <div>
              <h1 className="tw-text-3xl tw-font-bold tw-mb-1">
                Order Confirmed
              </h1>
              <p className="tw-text-emerald-100">Your payment was successful</p>
            </div>
            <CheckCircle className="tw-w-12 tw-h-12 tw-text-emerald-100" />
          </div>

          <div className="tw-border-t tw-border-emerald-500 tw-pt-4 tw-mt-4">
            <p className="tw-text-sm tw-text-emerald-100 tw-mb-1">
              Order Number
            </p>
            <p className="tw-font-mono tw-text-2xl tw-font-bold">
              {orderNumber}
            </p>
          </div>
        </div>

        {/* Receipt Body */}
        <div className="tw-px-8 tw-py-8">
          {/* Order Status */}
          <div className="tw-mb-8 tw-p-4 tw-bg-emerald-50 tw-rounded-lg tw-border tw-border-emerald-200">
            <div className="tw-flex tw-items-center tw-gap-3">
              <div className="tw-w-8 tw-h-8 tw-bg-emerald-500 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                <CheckCircle className="tw-w-5 tw-h-5 tw-text-white" />
              </div>
              <div>
                <p className="tw-font-semibold tw-text-slate-900">
                  Payment Received
                </p>
                <p className="tw-text-sm tw-text-slate-600">
                  Your order is being prepared for shipment
                </p>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="tw-mb-8">
            <h2 className="tw-text-lg tw-font-bold tw-text-slate-900 tw-mb-4 tw-pb-3 tw-border-b-2 tw-border-emerald-200">
              Order Details
            </h2>

            <div className="tw-space-y-4">
              <div className="tw-flex tw-items-start tw-justify-between tw-p-4 tw-bg-slate-50 tw-rounded-lg">
                <div>
                  <p className="tw-font-semibold tw-text-slate-900">
                    {product?.title}
                  </p>
                  <p className="tw-text-sm tw-text-slate-600 tw-mt-1">
                    Digital book
                  </p>
                </div>
                <div className="tw-text-right">
                  <p className="tw-font-bold tw-text-emerald-600">
                    ${bookPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="tw-mb-8 tw-p-6 tw-bg-gradient-to-br tw-from-slate-50 tw-to-blue-50 tw-rounded-lg tw-border tw-border-slate-200">
            <h3 className="tw-font-bold tw-text-slate-900 tw-mb-4">
              Cost Summary
            </h3>

            <div className="tw-space-y-3">
              <div className="tw-flex tw-justify-between tw-items-center">
                <span className="tw-text-slate-700">Book Price</span>
                <span className="tw-font-semibold tw-text-slate-900">
                  ${bookPrice.toFixed(2)}
                </span>
              </div>

              <div className="tw-flex tw-justify-between tw-items-center">
                <span className="tw-text-slate-700">Shipping</span>
                <span className="tw-font-semibold tw-text-slate-900">
                  ${shippingFee.toFixed(2)}
                </span>
              </div>

              <div className="tw-flex tw-justify-between tw-items-center">
                <span className="tw-text-slate-700">Tax (7.5%)</span>
                <span className="tw-font-semibold tw-text-slate-900">
                  ${taxAmount.toFixed(2)}
                </span>
              </div>

              <div className="tw-border-t-2 tw-border-slate-300 tw-pt-3 tw-mt-3 tw-flex tw-justify-between tw-items-center">
                <span className="tw-font-bold tw-text-slate-900">
                  Total Amount
                </span>
                <span className="tw-text-2xl tw-font-bold tw-bg-gradient-to-r tw-from-emerald-600 tw-to-emerald-700 tw-bg-clip-text tw-text-transparent">
                  ${totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-mb-8">
            <div className="tw-p-4 tw-bg-blue-50 tw-rounded-lg tw-border tw-border-blue-200">
              <p className="tw-text-xs tw-text-blue-700 tw-uppercase tw-tracking-wide tw-font-semibold tw-mb-2">
                Estimated Delivery
              </p>
              <p className="tw-text-lg tw-font-bold tw-text-blue-900">
                {estimatedDelivery}
              </p>
            </div>

            <div className="tw-p-4 tw-bg-purple-50 tw-rounded-lg tw-border tw-border-purple-200">
              <p className="tw-text-xs tw-text-purple-700 tw-uppercase tw-tracking-wide tw-font-semibold tw-mb-2">
                Status
              </p>
              <p className="tw-text-lg tw-font-bold tw-text-purple-900">
                Processing
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="tw-p-6 tw-bg-amber-50 tw-rounded-lg tw-border tw-border-amber-200 tw-mb-8">
            <h3 className="tw-font-bold tw-text-amber-900 tw-mb-3">
              What Happens Next?
            </h3>
            <ol className="tw-space-y-2 tw-text-sm tw-text-amber-900">
              <li className="tw-flex tw-gap-3">
                <span className="tw-font-bold tw-text-amber-600">1.</span>
                <span>
                  You&apos;ll receive a confirmation email within minutes
                </span>
              </li>
              <li className="tw-flex tw-gap-3">
                <span className="tw-font-bold tw-text-amber-600">2.</span>
                <span>We&apos;ll process your order within 1-2 business days</span>
              </li>
              <li className="tw-flex tw-gap-3">
                <span className="tw-font-bold tw-text-amber-600">3.</span>
                <span>
                  Your item will be shipped with a tracking number included
                </span>
              </li>
            </ol>
          </div>

          {/* Footer */}
          <div className="tw-border-t tw-border-slate-200 tw-pt-6 tw-text-center tw-text-xs tw-text-slate-500">
            <p className="tw-mb-2">
              Receipt Date: {new Date().toLocaleDateString()}
            </p>
            <p>
              Questions? Contact{" "}
              <a
                href="mailto:info@ayodejianifowose.com"
                className="tw-text-emerald-600 tw-hover:underline"
              >
                info@ayodejianifowose.com
              </a>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="tw-px-8 tw-py-6 tw-bg-slate-50 tw-border-t tw-border-slate-200 tw-flex tw-gap-3 tw-justify-center tw-print:hidden">
          <Button
            onClick={() => window.print()}
            className="tw-bg-emerald-600 tw-hover:bg-emerald-700 tw-text-white tw-font-semibold"
          >
            <Printer className="tw-w-4 tw-h-4 tw-mr-2" />
            Print Receipt
          </Button>
          <Button
            onClick={() => window.print()}
            variant="outline"
            className="tw-border-2 tw-border-emerald-200 tw-text-emerald-700 tw-hover:bg-emerald-50"
          >
            <Download className="tw-w-4 tw-h-4 tw-mr-2" />
            Download PDF
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Receipt;
