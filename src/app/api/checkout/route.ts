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
  let totalAmount: number;

  if (pricing) {
    totalAmount = pricing.totalAmount;
  } else {
    // Fallback calculation
    const bookPrice = parseFloat(isNigeria ? book.price_ngn : book.price_usd);
    const shippingFee = isNigeria ? 5000 : 5;
    const taxAmount = (bookPrice + shippingFee) * 0.075;
    totalAmount = bookPrice + shippingFee + taxAmount;
  }

  console.log("📦 Creating Stripe session for:", book.title, {
    country,
    totalAmount,
    currency,
  });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${process.env.BASE_URL}/checkout/${slug}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/checkout/${slug}/failure`,
      line_items: [
        {
          price_data: {
            unit_amount: Math.round(totalAmount * 100), // Stripe expects kobo/cents
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
        totalAmount: Math.round(totalAmount * 100), // Store as cents
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
