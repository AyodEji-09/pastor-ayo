import { NextResponse } from "next/server";
import { db } from "@/database";
import { LATESTTRACKS, MUSICS } from "@/database/schema";
import { asc, desc, eq, sql } from "drizzle-orm";

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const channelId = process.env.MUSIC_CHANNEL_ID;
    const musicMaxResults = process.env.MAX_RESULTS;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${musicMaxResults}&type=video`;
    const res = await fetch(url);
    const data = await res.json();
    const musics = data.items;
    let musicData = [];

    if (!musics.length) {
      return NextResponse.json(
        {
          data: [],
          message: "Unable to fetch music",
        },
        { status: 400 }
      );
    }
    musics.map((music) => {
      const data = {
        videoId: music?.id?.videoId,
        title: music?.snippet?.title,
        description: music?.snippet?.description,
        thumbnail: music?.snippet?.thumbnails?.medium?.url,
        publishedTime: music?.snippet?.publishedAt,
        published: false,
      };
      musicData.push(data);
    });

    await db
      .insert(MUSICS)
      .values(musicData)
      .onDuplicateKeyUpdate({ set: { id: sql`id` } });

    return NextResponse.json(
      {
        data: musicData,
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

export async function PUT(request) {
  const body = await request.json();

  const {
    banner,
    title,
    author,
    spotify,
    youtube,
    iTunes,
    soundCloud,
    appleMusic,
    amazonMusic,
    boomPlay,
    googlePlay,
    deezer,
    netEase,
  } = body;
  try {
    await db
      .update(LATESTTRACKS)
      .set({
        banner,
        title,
        author,
        spotify,
        youtube,
        iTunes,
        soundCloud,
        appleMusic,
        amazonMusic,
        boomPlay,
        googlePlay,
        deezer,
        netEase,
      })
      .where(eq(LATESTTRACKS.id, 1));

    return NextResponse.json(
      {
        data: [],
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
