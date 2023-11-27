import { NextResponse } from "next/server";
import { db } from "@/database";
import { BOOKINGS } from "@/database/schema";
import { and, between, eq, like, or } from "drizzle-orm";

// export async function GET() {
//   try {
//     const bookings = await db.select().from(BOOKINGS);
//     return NextResponse.json({ data: bookings });
//   } catch (error) {
//     return NextResponse.json({ data: error });
//   }
// }
export async function POST(request) {
  const body = await request.json();

  const { start_date, end_date, location } = body;
  console.log({ start_date, end_date, location })

  try {
    const bookings = await db
      .select()
      .from(BOOKINGS)
      .where(
        and(
          between(BOOKINGS.event_date, start_date, end_date),
          eq(BOOKINGS.booking_type, "ministry"),
          or(
            like(BOOKINGS.event_address, `%${location}%`),
            like(BOOKINGS.event_city, `%${location}%`),
            like(BOOKINGS.event_country, `%${location}%`),
            like(BOOKINGS.event_state, `%${location}%`)
          )
        )
      )
    return NextResponse.json({ data: bookings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: error });
  }
}
