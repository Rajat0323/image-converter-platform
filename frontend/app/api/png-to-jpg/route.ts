import { NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    // Convert File → Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // PNG → JPG
    const jpgBuffer = await sharp(buffer)
      .jpeg({ quality: 90 })
      .toBuffer();

    // ✅ CRITICAL FIX: Buffer → Uint8Array
    const uint8Array = new Uint8Array(jpgBuffer);

    return new NextResponse(uint8Array, {
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition": 'attachment; filename="converted.jpg"',
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
