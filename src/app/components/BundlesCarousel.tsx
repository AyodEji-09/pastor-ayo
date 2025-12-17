"use client";

import React, { useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Link from "next/link";

import { SaleBundle, listSaleBundles } from "@/lib/saleBooks";

/**
 * BundlesCarousel
 *
 * - Embla-based fading carousel for book bundles
 * - Respects parent aspect ratio
 * - Autoplays gently with fade transitions
 * - Clickable slides that route to checkout
 */

export default function BundlesCarousel() {
  // Fetch bundles once — static, memoized, intentional
  const bundles: SaleBundle[] = useMemo(() => listSaleBundles(), []);

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
              <Link
                href={`/checkout/${encodeURIComponent(bundle.slug)}`}
                aria-label={`Buy ${bundle.title}`}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${imageSrc})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
