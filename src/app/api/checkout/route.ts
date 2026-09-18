import { slugify } from "@/lib/utils";
import { books } from "@/lib/data";
import { getBundleBySlug } from "@/lib/saleBooks";
import {
  computeOrderTotals,
  resolveCartItem,
  resolveUnitPrice,
  type CartItemRef,
} from "@/lib/pricing";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const data = payload?.data;
    const country = data?.country || "US";
    const isNigeria = country === "NG";
    const currency = isNigeria ? "ngn" : "usd";

    // Normalize requested items (support both multi-item carts and legacy single-bookSlug)
    let refs: CartItemRef[] = [];

    if (Array.isArray(payload?.items) && payload.items.length > 0) {
      refs = payload.items
        .map((it: Record<string, unknown>) => ({
          slug: String(it?.slug || "").trim().toLowerCase(),
          type: it?.type === "bundle" ? ("bundle" as const) : ("book" as const),
          quantity: Math.max(1, Math.floor(Number(it?.quantity) || 1)),
        }))
        .filter((i: CartItemRef) => i.slug);
    } else if (payload?.bookSlug) {
      const rawBookSlug = String(payload.bookSlug).trim().toLowerCase();
      const bundle = getBundleBySlug(rawBookSlug);
      const legacyBook = books.find((b) => slugify(b.title) === rawBookSlug);

      if (!bundle && !legacyBook) {
        return NextResponse.json({ message: "Book not found" }, { status: 404 });
      }

      refs = [
        {
          slug: bundle ? bundle.slug : slugify(legacyBook!.title),
          type: bundle ? "bundle" : "book",
          quantity: 1,
        },
      ];
    }

    if (refs.length === 0) {
      return NextResponse.json(
        { message: "No items in order" },
        { status: 400 },
      );
    }

    const items = refs
      .map(resolveCartItem)
      .filter((item): item is NonNullable<typeof item> => Boolean(item));

    if (items.length !== refs.length) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }

    const { subtotal, shipping, tax, total } = computeOrderTotals(items, country);
    const amountMinor = Math.round(total * 100);

    const slugForUrl =
      items.length === 1 ? items[0].slug : "cart";

    const lineItems = items.map((item) => ({
      price_data: {
        unit_amount: Math.round(resolveUnitPrice(item, country) * 100), // Stripe expects kobo/cents
        currency,
        product_data: {
          name: item.title,
        },
      },
      description: item.title,
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${process.env.BASE_URL}/checkout/${slugForUrl}/success?session_id={CHECKOUT_SESSION_ID}&country=${country}&currency=${currency}&amount=${amountMinor}&book=${subtotal.toFixed(2)}&shipping=${shipping.toFixed(2)}&tax=${tax.toFixed(2)}`,
      cancel_url: `${process.env.BASE_URL}/checkout/cart`,
      line_items: [
        ...lineItems,
        {
          price_data: {
            unit_amount: Math.round(shipping * 100),
            currency,
            product_data: { name: "Shipping" },
          },
          description: "Shipping",
          quantity: 1,
        },
        {
          price_data: {
            unit_amount: Math.round(tax * 100),
            currency,
            product_data: { name: "Tax (7.5%)" },
          },
          description: "Tax (7.5%)",
          quantity: 1,
        },
      ],
      metadata: {
        bookSlug: slugForUrl,
        email: data?.email,
        country: country,
        totalAmount: amountMinor, // Store as cents
        currency,
        subtotal: subtotal.toFixed(2),
        shippingFee: shipping.toFixed(2),
        taxAmount: tax.toFixed(2),
      },
    });

    console.log("✅ Stripe session created successfully:", session.id);
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("❌ Stripe Error", error);
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 },
    );
  }
}