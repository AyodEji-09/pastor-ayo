import { NextResponse } from "next/server";
import { db } from "@/database";
import { BOOKINGS } from "@/database/schema";
import { asc, desc, eq } from "drizzle-orm";
import { sendMail } from "@/lib/mail";
import { BASE_URL } from "@/utils/data";
import { bookingMail } from "@/lib/emailTemplates/bookingMail";
import { upload } from "@/lib/cloudinary";

export async function GET() {
  try {
    const bookings = await db.query.BOOKINGS.findMany({
      orderBy: [asc(BOOKINGS.event_date)],
    });

    return NextResponse.json(
      {
        data: bookings,
        message: "Successful",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: [],
        message: error,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const body = await request.json();
  const {
    booking_type,
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
    booking_confirmed,
    event_slug,
    event_banner,
  } = body;
  try {
    const alreadyBookedDate = await db.query.BOOKINGS.findFirst({
      where: eq(BOOKINGS.event_date, event_date),
    });
    if (alreadyBookedDate) {
      return NextResponse.json(
        {
          data: [],
          message:
            "The date you selected has already been booked, Please select another date or contact me.",
        },
        { status: 406 }
      );
    }

    let res;
    if (booking_type == "ministry" && event_banner) {
      res = await upload(event_banner);
      if (res.success != "ok")
        return NextResponse.json(
          {
            data: [],
            message: "Image not processed",
          },
          { status: 406 }
        );
    }

    await db.insert(BOOKINGS).values({
      booking_type,
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
      event_banner: res?.data,
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
      booking_confirmed,
      event_slug,
    });

    let bookingURL = `${BASE_URL}/admin/bookings?open=${event_slug}#${event_slug}`;
    let adminEmail = process.env.ADMIN_EMAIL;

    const response = await sendMail(
      bookingMail(`${first_name} ${last_name}`, personal_email, bookingURL),
      "New Booking Alert!!!",
      adminEmail
    );

    return NextResponse.json({ data: [], message: "success" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { data: error, message: "error" },
      { status: 400 }
    );
  }
}
