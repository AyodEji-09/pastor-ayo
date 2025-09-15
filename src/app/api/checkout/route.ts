import { slugify } from "@/lib/utils";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: Request) {
  const { data, book } = await req.json();

  const country = data?.country || "US"; // fallback to US
  const isNigeria = country === "NG";

  const price = isNigeria ? book.price_ngn : book.price_usd;
  const currency = isNigeria ? "ngn" : "usd";
  const slug = slugify(book.title);

  console.log("📦 Creating Stripe session for:", book.title, {
    country,
    price,
    currency,
  });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `http://localhost:5000/checkout/${slug}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:5000/checkout/${slug}/failure`,
      line_items: [
        {
          price_data: {
            unit_amount: price * 100, // Stripe expects kobo/cents
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
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Error", error);
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
