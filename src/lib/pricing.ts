import { books } from "@/lib/data";
import { getBundleBySlug } from "@/lib/saleBooks";
import { slugify } from "@/lib/utils";

export type CartItemRef = {
  slug: string;
  type: "book" | "bundle";
  quantity: number;
};

export type ResolvedCartItem = {
  slug: string;
  type: "book" | "bundle";
  title: string;
  description?: string;
  img?: string;
  img_url?: string;
  price_ngn: string;
  price_usd: string;
  quantity: number;
};

export type OrderTotals = {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  totalQuantity: number;
};

const roundToTwo = (value: number) => Math.round(value * 100) / 100;

export function resolveCartItem(item: CartItemRef): ResolvedCartItem | undefined {
  if (item.type === "bundle") {
    const bundle = getBundleBySlug(item.slug);
    if (!bundle) return undefined;
    return {
      slug: item.slug,
      type: "bundle",
      title: bundle.title,
      description: bundle.description,
      img: bundle.image,
      img_url: bundle.image_url,
      price_ngn: bundle.price_ngn ?? "0",
      price_usd: bundle.price_usd ?? "0",
      quantity: item.quantity,
    };
  }

  const book = books.find((b) => slugify(b.title) === item.slug);
  if (!book) return undefined;
  return {
    slug: item.slug,
    type: "book",
    title: book.title,
    description: book.description,
    img: book.img,
    img_url: book.img_url,
    price_ngn: book.price_ngn,
    price_usd: book.price_usd,
    quantity: item.quantity,
  };
}

export function resolveUnitPrice(item: ResolvedCartItem, country: string): number {
  if (item.type === "bundle") {
    const bundle = getBundleBySlug(item.slug);
    if (bundle) {
      if (country === "NG") {
        return bundle.onSale && bundle.sale_price_ngn
          ? Number(bundle.sale_price_ngn)
          : Number(bundle.price_ngn || 0);
      }
      return bundle.onSale && bundle.sale_price_usd
        ? Number(bundle.sale_price_usd)
        : Number(bundle.price_usd || 0);
    }
  }

  const num = Number(country === "NG" ? item.price_ngn : item.price_usd);
  return Number.isFinite(num) ? num : 0;
}

export function calculateShipping(totalQuantity: number, country: string): number {
  if (country === "NG") return 5000;
  if (country === "US") return Math.ceil(Math.max(totalQuantity, 0) / 4) * 5;
  return 0;
}

export function computeOrderTotals(
  items: ResolvedCartItem[],
  country: string,
): OrderTotals {
  const totalQuantity = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = roundToTwo(
    items.reduce((sum, i) => sum + resolveUnitPrice(i, country) * i.quantity, 0),
  );
  const shipping = roundToTwo(calculateShipping(totalQuantity, country));
  const tax = roundToTwo((subtotal + shipping) * 0.075);
  const total = roundToTwo(subtotal + shipping + tax);
  return { subtotal, shipping, tax, total, totalQuantity };
}