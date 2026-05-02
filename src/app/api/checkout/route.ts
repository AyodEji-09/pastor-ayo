import { slugify } from "@/lib/utils";
import { books } from "@/lib/data";
import { getBundleBySlug } from "@/lib/saleBooks";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const data = payload?.data;
    const rawBookSlug = String(payload?.bookSlug || "").trim().toLowerCase();

    if (!rawBookSlug) {
      return NextResponse.json({ message: "Missing book slug" }, { status: 400 });
    }

    const country = data?.country || "US";
    const isNigeria = country === "NG";
    const currency = isNigeria ? "ngn" : "usd";

    const bundle = getBundleBySlug(rawBookSlug);
    const legacyBook = books.find((b) => slugify(b.title) === rawBookSlug);

    if (!bundle && !legacyBook) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }

    const slug = bundle ? bundle.slug : slugify(legacyBook!.title);
    const title = bundle ? bundle.title : legacyBook!.title;

    const bundlePrice = isNigeria
      ? bundle?.onSale && bundle.sale_price_ngn
        ? bundle.sale_price_ngn
        : bundle?.price_ngn
      : bundle?.onSale && bundle.sale_price_usd
        ? bundle.sale_price_usd
        : bundle?.price_usd;

    let bookPrice = Number(
      bundle
        ? bundlePrice || 0
        : isNigeria
          ? legacyBook!.price_ngn
          : legacyBook!.price_usd,
    );
    let shippingFee = country === "US" ? 5 : country === "NG" ? 5000 : 0;
    let taxAmount = (bookPrice + shippingFee) * 0.075;
    let totalAmount = bookPrice + shippingFee + taxAmount;

    bookPrice = Number(bookPrice.toFixed(2));
    shippingFee = Number(shippingFee.toFixed(2));
    taxAmount = Number(taxAmount.toFixed(2));
    totalAmount = Number(totalAmount.toFixed(2));

    const amountMinor = Math.round(totalAmount * 100);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${process.env.BASE_URL}/checkout/${slug}/success?session_id={CHECKOUT_SESSION_ID}&country=${country}&currency=${currency}&amount=${amountMinor}&book=${bookPrice.toFixed(2)}&shipping=${shippingFee.toFixed(2)}&tax=${taxAmount.toFixed(2)}`,
      cancel_url: `${process.env.BASE_URL}/checkout/${slug}/failure?country=${country}&currency=${currency}&amount=${amountMinor}`,
      line_items: [
        {
          price_data: {
            unit_amount: amountMinor, // Stripe expects kobo/cents
            currency,
            product_data: {
              name: title,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        bookSlug: slug,
        email: data?.email,
        country: country,
        totalAmount: amountMinor, // Store as cents
        currency,
        bookPrice: bookPrice.toFixed(2),
        shippingFee: shippingFee.toFixed(2),
        taxAmount: taxAmount.toFixed(2),
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
