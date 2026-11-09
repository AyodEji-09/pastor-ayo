"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { SaleBundle, listSaleBundles } from "@/lib/saleBooks";

function imagePath(image: string) {
  return /^(https?:\/\/|\/)/.test(image) ? image : `/book-covers/${image}`;
}

function PromoSlide({ bundle }: { bundle: SaleBundle }) {
  const image = bundle.image ?? bundle.image_url;
  const priceNgn = bundle.onSale
    ? bundle.sale_price_ngn ?? bundle.price_ngn
    : bundle.price_ngn;
  const priceUsd = bundle.onSale
    ? bundle.sale_price_usd ?? bundle.price_usd
    : bundle.price_usd;

  return (
    <article className="grid h-full w-full md:grid-cols-[5fr_7fr]">
      <div className="flex items-center justify-center border-b border-border bg-card p-4 sm:p-5 md:border-r md:border-b-0 md:p-6">
      <picture className="block h-44 w-full sm:h-56 md:h-80">
        {bundle.bannerMobileImage && (
          <source media="(max-width: 639px)" srcSet={imagePath(bundle.bannerMobileImage)} />
        )}
        {bundle.bannerDesktopImage && (
          <source media="(min-width: 640px)" srcSet={imagePath(bundle.bannerDesktopImage)} />
        )}
        {/* Native img is required for picture's art-directed sources. */}

        <img
          src={imagePath(image ?? "")}
          alt={bundle.title}
          width={1080}
          height={1350}
          loading="eager"
          decoding="async"
          className="block h-full w-full object-contain"
          style={{ objectPosition: bundle.bannerPosition ?? "center" }}
        />
      </picture>
      </div>
      <div className="flex min-w-0 flex-col justify-center bg-secondary/20 p-5 sm:p-6 lg:p-8">
        <h2 className="text-2xl leading-tight font-bold text-foreground sm:text-3xl">
          {bundle.bannerHeadline ?? bundle.title}
        </h2>
        {bundle.description && (
          <p className="mt-3 text-base leading-relaxed text-foreground/80">
            {bundle.description}
          </p>
        )}
        <div className="my-4 border-y border-border py-3">
          <p className="text-xs font-semibold tracking-wide text-foreground/70 uppercase">Combo price</p>
          <p className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-semibold tabular-nums">
            {priceNgn && <span className="text-3xl text-primary">₦{Number(priceNgn).toLocaleString("en-NG")}</span>}
            {priceNgn && priceUsd && <span aria-hidden="true" className="text-xl text-foreground/50">/</span>}
            {priceUsd && <span className="text-2xl text-foreground">${priceUsd}</span>}
          </p>
        </div>
        <Button asChild className="h-11 w-full self-start px-6 sm:w-auto">
          <Link href={`/checkout/${encodeURIComponent(bundle.slug)}`} aria-label={`Order ${bundle.title} now`}>
            Order Combo Now
          </Link>
        </Button>
      </div>
    </article>
  );
}

function RotatingPromos({ bundles }: { bundles: SaleBundle[] }) {
  const plugins = useMemo(() => [
    Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true }),
    Fade(),
  ], []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins);
  const [selected, setSelected] = useState(0);
  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      if (reducedMotion.matches) emblaApi.plugins().autoplay?.stop();
      else emblaApi.plugins().autoplay?.play();
    };
    updateMotion();
    reducedMotion.addEventListener("change", updateMotion);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
      reducedMotion.removeEventListener("change", updateMotion);
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full touch-pan-y">
          {bundles.map((bundle, index) => (
            <div
              key={bundle.id}
              className="relative min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${bundles.length}`}
              inert={index !== selected}
            >
              <PromoSlide bundle={bundle} />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-center" aria-label="Choose a promo">
        {bundles.map((bundle, index) => (
          <button
            key={bundle.id}
            type="button"
            aria-label={`Show ${bundle.title}`}
            aria-pressed={selected === index}
            onClick={() => emblaApi?.scrollTo(index, true)}
            className="flex h-6 w-8 items-center justify-center rounded focus-visible:outline-2 focus-visible:outline-primary"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${selected === index ? "bg-primary" : "bg-foreground/40"}`} />
          </button>
        ))}
      </div>
    </>
  );
}

export default function BundlesCarousel() {
  const bundles = useMemo(() => {
    const offers = listSaleBundles();
    return [
      ...offers.filter((bundle) => bundle.id === "halloween-christmas-combo"),
      ...offers.filter((bundle) => bundle.id !== "halloween-christmas-combo"),
    ];
  }, []);
  if (bundles.length === 0) return null;

  return (
    <section
      className={`relative w-full overflow-hidden rounded-lg border border-border bg-background ${bundles.length > 1 ? "pb-8" : ""}`}
      aria-label="Book offers"
      aria-roledescription={bundles.length > 1 ? "carousel" : undefined}
    >
      {bundles.length === 1
        ? <PromoSlide bundle={bundles[0]} />
        : <RotatingPromos bundles={bundles} />}
    </section>
  );
}
