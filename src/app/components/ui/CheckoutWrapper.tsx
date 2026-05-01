"use client";

import { useState } from "react";
import { CheckoutProduct } from "./CheckoutProduct";
import { CheckoutForm } from "./CheckoutForm";
import { BookType } from "@/lib/data";

export const CheckoutWrapper = ({
  product,
  initialCountry,
}: {
  product: BookType;
  initialCountry: string;
}) => {
  const [country, setCountry] = useState(initialCountry);

  return (
    <div className="grid lg:grid-cols-2 gap-8 animate-slide-up">
      {/* Product Details */}
      <div>
        <CheckoutProduct product={product} country={country} />
      </div>

      {/* Checkout Form */}
      <div>
        <CheckoutForm
          country={initialCountry}
          product={product}
          onCountryChange={setCountry}
        />
      </div>
    </div>
  );
};
