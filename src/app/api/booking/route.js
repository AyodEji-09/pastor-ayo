import { NextResponse } from "next/server";
import { db } from "@/database";
import { BOOKINGS } from "@/database/schema";
import { eq } from "drizzle-orm";

export async function GET(request) {
  try {
    const bookings = await db
      .select()
      .from(BOOKINGS)
      .where(eq(BOOKINGS.booking_type, "ministry"));
    return NextResponse.json({ data: searchParams });
  } catch (error) {
    return NextResponse.json({ data: error });
  }
}
export async function POST(request) {
  const body = await request.json();
  const {
    first_name,
    last_name,
    personal_email,
    personal_phone,
    org_name,
    org_email,
    org_phone,
    org_website,
    org_facebook,
    org_youtube,
    event_name,
    event_nature,
    event_address,
    event_country,
    event_state,
    event_city,
    event_time,
    event_date,
    prog_type,
    ministers_list,
    ticket,
    venue_capacity,
    recording_available,
    additional_info,
    counseling_groups,
  } = body;
  try {
    await db.insert(BOOKINGS).values({
      first_name,
      last_name,
      personal_email,
      personal_phone,
      org_name,
      org_email,
      org_phone,
      org_website,
      org_facebook,
      org_youtube,
      event_name,
      event_nature,
      event_address,
      event_country,
      event_state,
      event_city,
      event_time,
      event_date,
      prog_type,
      ministers_list,
      ticket,
      venue_capacity,
      recording_available,
      additional_info,
      counseling_groups,
    });
    return NextResponse.json({ data: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: error });
  }
}
