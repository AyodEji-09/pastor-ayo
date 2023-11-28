import { NextResponse } from "next/server";
import { db } from "@/database";
import { VIDEOS } from "@/database/schema";
import { asc, desc, eq, sql } from "drizzle-orm";

export async function GET() {
  try {
    const videos = await db
      .select()
      .from(VIDEOS)
      .orderBy(desc(VIDEOS.publishedTime));

    return NextResponse.json(
      {
        data: videos,
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

  try {
    const updateLinkPositions = async (newPositions) => {
      const promises = newPositions.map(({ id }) => {
        return db
          .update(VIDEOS)
          .set({ published: true })
          .where(eq(VIDEOS.id, id));
      });
      return Promise.all(promises);
    };

    await updateLinkPositions(body);

    return NextResponse.json({ data: [], message: "updated" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "error" },
      { status: 400 }
    );
  }
}

export async function PUT(request) {
  const body = await request.json();

  try {
    const updateLinkPositions = async (newPositions) => {
      const promises = newPositions.map(({ id }) => {
        return db
          .update(VIDEOS)
          .set({ published: false })
          .where(eq(VIDEOS.id, id));
      });
      return Promise.all(promises);
    };

    await updateLinkPositions(body);

    return NextResponse.json({ data: [], message: "updated" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { data: error, message: "error" },
      { status: 400 }
    );
  }
}
