"use client";

import React, { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";

import { SaleBundle, listSaleBundles } from "@/lib/saleBooks";
import { useCart } from "@/lib/cart-context";

/**
 * BundlesCarousel
 *
 * - Embla-based fading carousel for book bundles
 * - Respects parent aspect ratio
 * - Autoplays gently with fade transitions
 * - "Add to Cart" adds the bundle to the cart; "Buy Now" routes to checkout
 */

export default function BundlesCarousel() {
  // Fetch bundles once — static, memoized, intentional
  const bundles: SaleBundle[] = useMemo(() => listSaleBundles(), []);
  const { addItem } = useCart();
  const router = useRouter();

  // Embla setup: looping, fading, cinematic autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
    Fade(),
  ]);

  if (!bundles || bundles.length === 0) return null;

  return (
    <div
      ref={emblaRef}
      className="embla__viewport"
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div
        className="embla__container"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {bundles.map((bundle) => {
          const imageSrc = `/book-covers/${bundle.image_url}`;

          return (
            <div
              key={bundle.id}
              className="embla__slide"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${imageSrc})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                />
                <div
                  className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-3 z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => addItem(bundle.slug, "bundle")}
                    aria-label={`Add ${bundle.title} to cart`}
                    className="cursor-pointer inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm font-medium shadow-lg transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() =>
                      router.push(
                        `/checkout/${encodeURIComponent(bundle.slug)}`,
                      )
                    }
                    aria-label={`Buy ${bundle.title}`}
                    className="cursor-pointer inline-flex items-center rounded-md bg-white/90 text-foreground hover:bg-white px-4 py-2 text-sm font-medium shadow-lg transition-all"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}