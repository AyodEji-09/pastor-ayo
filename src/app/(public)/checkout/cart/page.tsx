"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckoutWrapper } from "@/app/components/ui/CheckoutWrapper";
import { useCart } from "@/lib/cart-context";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const getCountryFromCookie = () => {
  if (typeof document === "undefined") return "US";
  const match = document.cookie.match(/(?:^|;\s*)country=([^;]*)/);
  return match ? decodeURIComponent(match[1]).toUpperCase() : "US";
};

const CartCheckout = () => {
  const { resolvedItems } = useCart();
  const [country, setCountry] = useState("US");

  useEffect(() => {
    setCountry(getCountryFromCookie());
  }, []);

  return (
    <div className="bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Complete Your Order
            </h1>
          </div>

          {resolvedItems.length === 0 ? (
            <Card className="max-w-md mx-auto p-10 text-center bg-gradient-card shadow-elegant">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-1">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-6">
                Add some books to your cart before checking out.
              </p>
              <Button asChild size="lg">
                <Link href="/shop">Browse Books</Link>
              </Button>
            </Card>
          ) : (
            <CheckoutWrapper items={resolvedItems} initialCountry={country} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;