"use client";

import { useEffect, useState } from "react";
import { HeaderStyleComponent } from "./HeroSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Heart, Lock } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function getCountryFromCookie() {
  if (typeof document === "undefined") return "US";

  const match = document.cookie.match(/(?:^|;\s*)country=([^;]*)/);
  return match ? decodeURIComponent(match[1]).toUpperCase() : "US";
}

const SupportSection = () => {
  const [country, setCountry] = useState("US");
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isNigeria = country === "NG";
  const currencySymbol = isNigeria ? "₦" : "$";

  useEffect(() => {
    setCountry(getCountryFromCookie());
  }, []);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen) {
      setAmount("");
      setIsLoading(false);
    }
  };

  const handleSupport = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <section id="support" className="px-4 py-12">
      <Toaster position="top-center" />

      <div className="container mx-auto rounded-2xl overflow-hidden shadow-xl bg-white">
        <div className="max-w-3xl mx-auto p-8 md:p-12 text-center space-y-8">
          <HeaderStyleComponent variant="dark" title="Ways to Support" />

          <div className="space-y-4 text-text text-base leading-relaxed">
            <p>
              Love what we create? You can be a part by subscribing to share our
              stories, and help us bring more books, animations, and inspiring
              content to children everywhere. We will be grateful for your
              generous donations and partnerships.
            </p>
            <p className="font-semibold text-primary">
              Every act of support helps us create, grow, and reach more young
              minds.
            </p>
          </div>

          <div className="flex justify-center">
            <Button size="lg" onClick={() => setOpen(true)}>
              <Heart className="w-4 h-4" />
              Support
            </Button>
          </div>

          <p className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <Lock className="w-3 h-3" />
            Secure checkout powered by Stripe
          </p>
        </div>
      </div>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Support Our Mission</DialogTitle>
            <DialogDescription>
              Enter any amount you would like to give. You will be redirected to
              Stripe to complete your support securely.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSupport} className="space-y-4">
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
                  className="pl-10 h-12 text-base border-2 focus:border-primary focus:ring-0! transition-colors"
                  disabled={isLoading}
                  required
                  autoFocus
                />
              </div>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleOpenChange(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Redirecting...
                  </div>
                ) : (
                  "Continue to Stripe"
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SupportSection;
