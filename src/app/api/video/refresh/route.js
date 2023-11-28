import { NextResponse } from "next/server";
import { db } from "@/database";
import { VIDEOS } from "@/database/schema";
import { asc, desc, eq, sql } from "drizzle-orm";

export async function GET() {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    const channelId = process.env.GHGF_CHANNEL_ID;
    const videoMaxResults = process.env.MAX_RESULTS;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${videoMaxResults}&type=video`;
    const res = await fetch(url, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    const data = await res.json();
    const videos = data.items;
    let videoData = [];

    if (!videos.length) {
      return NextResponse.json(
        {
          data: [],
          message: "Unable to fetch video",
        },
        { status: 400 }
      );
    }
    videos.map((video) => {
      const data = {
        videoId: video?.id?.videoId,
        title: video?.snippet?.title,
        description: video?.snippet?.description,
        thumbnail: video?.snippet?.thumbnails?.medium?.url,
        publishedTime: video?.snippet?.publishedAt,
        published: false,
      };
      videoData.push(data);
    });

    await db
      .insert(VIDEOS)
      .values(videoData)
      .onDuplicateKeyUpdate({ set: { id: sql`id` } });

    return NextResponse.json(
      {
        data: videoData,
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
