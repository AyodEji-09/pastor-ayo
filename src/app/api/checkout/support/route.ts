import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const country = String(payload?.country || "US").toUpperCase();
    const amount = Number(payload?.amount);

    const isNigeria = country === "NG";
    const currency = isNigeria ? "ngn" : "usd";

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        { message: "Please enter a valid amount" },
        { status: 400 },
      );
    }

    const normalizedAmount = isNigeria
      ? Math.round(amount)
      : Math.round(amount * 100) / 100;
    const amountMinor = Math.round(normalizedAmount * 100);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${process.env.BASE_URL}/support/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/home#support`,
      line_items: [
        {
          price_data: {
            unit_amount: amountMinor,
            currency,
            product_data: {
              name: "Ministry Support",
              description: "Thank you for supporting our mission",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        type: "support",
        country,
        amount: String(amountMinor),
        currency,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("❌ Stripe support checkout error", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
