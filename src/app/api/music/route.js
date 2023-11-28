import { NextResponse } from "next/server";
import { db } from "@/database";
import { MUSICS } from "@/database/schema";
import { asc, desc, eq, sql } from "drizzle-orm";

export async function GET() {
  try {
    const musics = await db
      .select()
      .from(MUSICS)
      .orderBy(desc(MUSICS.publishedTime));

    return NextResponse.json(
      {
        data: musics,
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
          .update(MUSICS)
          .set({ published: true })
          .where(eq(MUSICS.id, id));
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
          .update(MUSICS)
          .set({ published: false })
          .where(eq(MUSICS.id, id));
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
