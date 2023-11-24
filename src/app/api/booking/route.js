import { NextResponse } from "next/server";
import { db } from "@/database";

export async function GET(request) {
  try {
    const allUsers = await db.select().from(users);
    return NextResponse.json({ data: allUsers });
  } catch (error) {
    return NextResponse.json({ data: error });
  }
}
export async function POST(request) {
  try {
    const allUsers = await db.select().from(users);
    return NextResponse.json({ data: allUsers });
  } catch (error) {
    return NextResponse.json({ data: error });
  }
}
