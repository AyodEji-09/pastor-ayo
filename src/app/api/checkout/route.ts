import { slugify } from "@/lib/utils";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: Request) {
  const { data, book, pricing } = await req.json();

  // Use country from form data (client has already selected it)
  const country = data?.country || "US";
  const isNigeria = country === "NG";
  const currency = isNigeria ? "ngn" : "usd";
  const slug =
    (book && book.slug && String(book.slug).trim()) || slugify(book.title);

  // Use pricing data from client if available, otherwise calculate
  let bookPrice: number;
  let shippingFee: number;
  let taxAmount: number;
  let totalAmount: number;

  if (pricing) {
    bookPrice = Number(pricing.bookPrice || 0);
    shippingFee = Number(pricing.shippingFee || 0);
    taxAmount = Number(pricing.taxAmount || 0);
    totalAmount = Number(pricing.totalAmount || 0);
  } else {
    // Fallback calculation
    bookPrice = parseFloat(isNigeria ? book.price_ngn : book.price_usd);
    shippingFee = isNigeria ? 5000 : 5;
    taxAmount = (bookPrice + shippingFee) * 0.075;
    totalAmount = bookPrice + shippingFee + taxAmount;
  }

  bookPrice = Number(bookPrice.toFixed(2));
  shippingFee = Number(shippingFee.toFixed(2));
  taxAmount = Number(taxAmount.toFixed(2));
  totalAmount = Number(totalAmount.toFixed(2));

  console.log("📦 Creating Stripe session for:", book.title, {
    country,
    totalAmount,
    currency,
  });

  try {
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
              name: book.title,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        bookId: book.id,
        email: data?.email,
        country: country,
        totalAmount: amountMinor, // Store as cents
        currency,
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
