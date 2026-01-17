export const runtime = "nodejs";

import sharp from "sharp";
import { NextResponse } from "next/server";

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

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 🔁 convert using sharp
    const outputBuffer = await sharp(buffer)
      .png() // or jpeg(), webp()
      .toBuffer();

    // ✅ ALWAYS return Uint8Array
    return new Response(new Uint8Array(outputBuffer), {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition":
          'attachment; filename="converted.png"',
      },
    });
  } catch (error) {
    console.error("Conversion error:", error);
    return NextResponse.json(
      { error: "Conversion failed" },
      { status: 500 }
    );
  }
}
