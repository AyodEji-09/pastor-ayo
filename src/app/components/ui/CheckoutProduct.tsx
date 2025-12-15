"use client";

import { Card } from "@/components/ui/card";
import { BookType } from "@/lib/data";
import Image from "next/image";

// interface CheckoutProductProps {
//   product: {
//     id: string;
//     name: string;
//     price: number;
//     originalPrice?: number;
//     description: string;
//     features: string[];
//     image: string;
//   };
// }

export const CheckoutProduct = ({ product }: { product: BookType }) => {
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
            {product.displayPrice}
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
