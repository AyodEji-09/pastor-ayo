import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { book } = await req.json();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url:
      "http://localhost:5000/checkout/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:5000/checkout/failure",
    line_items: [{ price: book.price_ngn, quantity: 1 }],
  });

  return NextResponse.json({ url: session.url });
}
