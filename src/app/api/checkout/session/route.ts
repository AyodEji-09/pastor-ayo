import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { message: "Missing session_id" },
        { status: 400 },
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { message: "Session is not paid" },
        { status: 400 },
      );
    }

    const currency = (session.currency || "usd").toUpperCase();
    const amountMinor = Number(session.amount_total || 0);
    const metadata = session.metadata || {};

    const items = (session.line_items?.data || [])
      .filter((line) => line.description && line.description !== "Shipping" && line.description !== "Tax (7.5%)")
      .map((line) => ({
        title: line.description ?? "Book",
        quantity: line.quantity ?? 1,
        unitPrice: String(
          Number(line.amount_total || 0) / (line.quantity ?? 1) / 100,
        ),
      }));

    return NextResponse.json({
      sessionId: session.id,
      currency,
      amountMinor,
      bookPrice: Number(metadata.subtotal || metadata.bookPrice || 0),
      shippingFee: Number(metadata.shippingFee || 0),
      taxAmount: Number(metadata.taxAmount || 0),
      items,
    });
  } catch (error) {
    console.error("❌ Stripe session verification error", error);
    return NextResponse.json(
      { message: "Unable to verify session" },
      { status: 500 },
    );
  }
}