"use client";

import { useEffect, useState } from "react";
import { CheckoutProduct } from "./CheckoutProduct";
import { CheckoutForm } from "./CheckoutForm";
import { ResolvedCartItem } from "@/lib/pricing";

export const CheckoutWrapper = ({
  items,
  initialCountry,
}: {
  items: ResolvedCartItem[];
  initialCountry: string;
}) => {
  const [country, setCountry] = useState(initialCountry);

  useEffect(() => {
    if (initialCountry) {
      setCountry(initialCountry);
    }
  }, [initialCountry]);

  return (
    <div className="grid lg:grid-cols-2 gap-8 animate-slide-up">
      {/* Product Details */}
      <div>
        <CheckoutProduct items={items} country={country} />
      </div>

      {/* Checkout Form */}
      <div>
        <CheckoutForm
          country={country}
          items={items}
          onCountryChange={setCountry}
        />
      </div>
    </div>
  );
};