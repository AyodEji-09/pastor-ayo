"use client";

import { Card } from "@/components/ui/card";
import { BookType } from "@/lib/data";
import Image from "next/image";
import { useMemo, useEffect, useState } from "react";

export const CheckoutProduct = ({
  product,
  country: propsCountry,
}: {
  product: BookType;
  country?: string;
}) => {
  const [country, setCountry] = useState(propsCountry || "US");

  // Update country when props change (from parent wrapper)
  useEffect(() => {
    if (propsCountry) {
      setCountry(propsCountry);
    }
  }, [propsCountry]);

  // Read country from cookies on client side if no prop provided
  useEffect(() => {
    if (!propsCountry) {
      const getCookie = (name: string) => {
        const match = document.cookie.match(
          new RegExp("(?:^|; )" + name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "=([^;]*)")
        );
        return match ? match[1] : null;
      };
      const storedCountry = getCookie("country");
      if (storedCountry) {
        setCountry(storedCountry);
      }
    }
  }, [propsCountry]);

  // Format price with proper currency and comma separators
  const formatPrice = (price: string | number, isNigeria: boolean) => {
    const numPrice = typeof price === "string" ? parseFloat(price) : price;
    const currency = isNigeria ? "₦" : "$";
    return `${currency}${numPrice.toLocaleString()}`;
  };

  // Calculate display price based on country
  const displayPrice = useMemo(() => {
    const isNigeria = country === "NG";
    const price = isNigeria ? product.price_ngn : product.price_usd;
    return formatPrice(price, isNigeria);
  }, [country, product]);

  return (
    <Card className="overflow-hidden bg-gradient-card shadow-elegant pt-0">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={
            product.img
              ? `/book-covers/${product.img}`
              : product.img_url || "/book-covers/fallback-image.jpg"
          }
          alt={product.title}
          // fill
          width={200}
          height={300}
          objectFit="cover"
          className="h-full w-full object-cover transition-smooth hover:scale-105 duration-300"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            {product.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold bg-gradient-primary bg-clip-text">
            {displayPrice}
          </span>
          {product.price_ngn && (
            <>
              {/* <span className="text-lg text-muted-foreground line-through">
                ${product.price_ngn}
              </span> */}
              {/* <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full">
                {discount}% OFF
              </span> */}
            </>
          )}
        </div>

        {/* <div className="space-y-3">
          <h3 className="font-semibold text-foreground">
            What&apos;s included:
          </h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </Card>
  );
};
