export const runtime = "nodejs";

import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    if (file.type !== "image/png") {
      return NextResponse.json(
        { error: "Only PNG files are allowed" },
        { status: 400 }
      );
    }

    // File → Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // PNG → JPG
    const jpgBuffer = await sharp(buffer)
      .jpeg({ quality: 90 })
      .toBuffer();

    // ✅ FIX: Buffer → Uint8Array
    return new Response(new Uint8Array(jpgBuffer), {
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition":
          'attachment; filename="converted.jpg"',
      },
    });
  } catch (error) {
    console.error("PNG to JPG error:", error);
    return NextResponse.json(
      { error: "Conversion failed" },
      { status: 500 }
    );
  }
}
