"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import toast, { Toaster } from "react-hot-toast";

function getCountryFromCookie() {
  if (typeof document === "undefined") return "US";

  const match = document.cookie.match(/(?:^|;\s*)country=([^;]*)/);
  return match ? decodeURIComponent(match[1]).toUpperCase() : "US";
}

const SupportCheckoutForm = () => {
  const [country, setCountry] = useState("US");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isNigeria = country === "NG";
  const currencySymbol = isNigeria ? "₦" : "$";

  useEffect(() => {
    setCountry(getCountryFromCookie());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsedAmount = Number(amount);
    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      toast.error("Please enter a valid amount");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/checkout/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parsedAmount, country }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.url) {
        throw new Error(data?.message || "Unable to start checkout");
      }

      window.location.href = data.url;
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to start checkout. Please try again.",
      );
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />

      <Card className="bg-white border shadow-sm">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="support-amount">Amount</Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                  {currencySymbol}
                </span>
                <Input
                  id="support-amount"
                  type="text"
                  inputMode="decimal"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-10 h-12 text-base"
                  disabled={isLoading}
                  required
                />
              </div>
              <p className="text-sm text-gray-500">
                Enter any amount you would like to give. You will be redirected
                to Stripe to complete your support securely.
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  Redirecting to checkout...
                </span>
              ) : (
                "Continue to Stripe"
              )}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Secure checkout powered by Stripe
            </p>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default SupportCheckoutForm;
