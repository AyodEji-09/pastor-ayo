// /pages/api/webhook.ts
import { buffer } from "micro";
import Stripe from "stripe";
import prisma from "../../lib/prisma";

export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    const rawBody = await buffer(req);
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Webhook Error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("✅ Payment succeeded:", session);

    // Save session to DB
    await prisma.order.create({
      data: {
        stripeSessionId: session.id,
        customerEmail: session.customer_email,
        amountPaid: session.amount_total,
        currency: session.currency,
        bookId: session.metadata.book_id, // optional: add book_id in metadata during checkout
        status: "paid",
      },
    });
    // Send order email
  }

  res.status(200).json({ received: true });
}
