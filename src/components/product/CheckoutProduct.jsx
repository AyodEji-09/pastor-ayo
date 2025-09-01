"use client"

import { Card } from "@/components/ui/card";
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

export const CheckoutProduct = ({ product }) => {
  return (
    <Card className="tw-overflow-hidden tw-bg-gradient-card tw-shadow-elegant">
      <div className="tw-aspect-video tw-w-full tw-overflow-hidden">
        <Image
          src={product.img_url}
          alt={product.title}
          // fill
          width={200}
          height={200}
          className="tw-h-full tw-w-full tw-object-cover tw-transition-smooth tw-hover:scale-105"
        />
      </div>

      <div className="tw-p-6 tw-space-y-4">
        <div className="tw-space-y-2">
          <h2 className="tw-text-2xl tw-font-bold tw-text-foreground">
            {product.title}
          </h2>
          <p className="tw-text-muted-foreground tw-leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="tw-flex tw-items-center tw-gap-3">
          <span className="tw-text-3xl tw-font-bold tw-bg-gradient-primary tw-bg-clip-text">
            {product.price_ngn}
          </span>
          {product.price_ngn && (
            <>
              {/* <span className="tw-text-lg tw-text-muted-foreground tw-line-through">
                ${product.price_ngn}
              </span> */}
              {/* <span className="tw-px-2 tw-py-1 tw-bg-destructive tw-text-destructive-foreground tw-text-xs tw-font-semibold tw-rounded-full">
                {discount}% OFF
              </span> */}
            </>
          )}
        </div>

        {/* <div className="tw-space-y-3">
          <h3 className="tw-font-semibold tw-text-foreground">
            What&apos;s included:
          </h3>
          <ul className="tw-space-y-2">
            {product.features.map((feature, index) => (
              <li
                key={index}
                className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-muted-foreground"
              >
                <div className="tw-w-1.5 tw-h-1.5 tw-bg-primary tw-rounded-full tw-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </Card>
  );
};
