export const runtime = "nodejs";

import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const jpgBuffer = await sharp(buffer).jpeg().toBuffer();

    return new NextResponse(new Uint8Array(jpgBuffer), {
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition": "attachment; filename=converted.jpg",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to convert image" },
      { status: 500 }
    );
  }
}
