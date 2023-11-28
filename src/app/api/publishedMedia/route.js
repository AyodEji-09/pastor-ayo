import { NextResponse } from "next/server";
import { db } from "@/database";
import { VIDEOS, MUSICS, LATESTTRACKS } from "@/database/schema";
import { asc, desc, eq, sql } from "drizzle-orm";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const video = +searchParams.get("video");
  const music = +searchParams.get("music");
  try {
    const videos = await db
      .select()
      .from(VIDEOS)
      .where(eq(VIDEOS.published, true))
      .limit(video ? video : 0)
      .orderBy(desc(VIDEOS.publishedTime));
    const musics = await db
      .select()
      .from(MUSICS)
      .limit(music ? music : 0)
      .where(eq(MUSICS.published, true))
      .orderBy(desc(MUSICS.publishedTime));
    const latestTrack = await db.query.LATESTTRACKS.findFirst();

    return NextResponse.json(
      {
        videos,
        musics,
        latestTrack,
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
