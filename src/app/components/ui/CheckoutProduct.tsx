"use client";

import { Card } from "@/components/ui/card";
import { ResolvedCartItem, computeOrderTotals, resolveUnitPrice } from "@/lib/pricing";
import Image from "next/image";
import { useEffect, useState } from "react";

const formatPrice = (price: number, isNigeria: boolean) => {
  const currency = isNigeria ? "₦" : "$";
  return `${currency}${price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const imageFor = (img?: string, img_url?: string) =>
  img ? `/book-covers/${img}` : img_url || "/book-covers/fallback-image.jpg";

export const CheckoutProduct = ({
  items,
  country: propsCountry,
}: {
  items: ResolvedCartItem[];
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
          new RegExp(
            "(?:^|; )" + name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "=([^;]*)",
          ),
        );
        return match ? match[1] : null;
      };
      const storedCountry = getCookie("country");
      if (storedCountry) {
        setCountry(storedCountry);
      }
    }
  }, [propsCountry]);

  const isNigeria = country === "NG";
  const totals = computeOrderTotals(items, country);

  // Single item: keep the existing large product card aesthetic
  if (items.length === 1) {
    const item = items[0];
    const unitPrice = resolveUnitPrice(item, country);
    return (
      <Card className="overflow-hidden bg-gradient-card shadow-elegant pt-0">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={imageFor(item.img, item.img_url)}
            alt={item.title}
            width={200}
            height={300}
            objectFit="cover"
            className="h-full w-full object-cover transition-smooth hover:scale-105 duration-300"
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">{item.title}</h2>
            <p className="text-muted-foreground leading-relaxed line-clamp-4">
              {item.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold bg-gradient-primary bg-clip-text">
              {formatPrice(unitPrice, isNigeria)}
            </span>
          </div>
        </div>
      </Card>
    );
  }

  // Multiple items: stacked summary list
  return (
    <Card className="overflow-hidden bg-gradient-card shadow-elegant pt-0">
      <div className="p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">
          Order Summary
          <span className="ml-2 text-sm font-medium text-muted-foreground">
            ({totals.totalQuantity} {totals.totalQuantity === 1 ? "item" : "items"})
          </span>
        </h2>
        <div className="space-y-4">
          {items.map((item) => {
            const unitPrice = resolveUnitPrice(item, country);
            const lineTotal = unitPrice * item.quantity;
            return (
              <div
                key={`${item.type}-${item.slug}`}
                className="flex gap-4 items-center border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="w-16 h-20 overflow-hidden rounded-md shrink-0 bg-muted">
                  <Image
                    src={imageFor(item.img, item.img_url)}
                    alt={item.title}
                    width={64}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {formatPrice(unitPrice, isNigeria)} × {item.quantity}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-semibold">
                    {formatPrice(lineTotal, isNigeria)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};