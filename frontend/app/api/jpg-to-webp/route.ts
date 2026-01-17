export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { convertImage } from "@/lib/imageConverter";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    // ❌ No file
    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    // ❌ Validate JPG / JPEG
    if (file.type !== "image/jpeg" && file.type !== "image/jpg") {
      return NextResponse.json(
        { error: "Only JPG/JPEG files are allowed" },
        { status: 400 }
      );
    }

    // ❌ Size limit (10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size must be under 10MB" },
        { status: 400 }
      );
    }

    // File → Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 🔥 Convert JPG → WEBP
    const outputBuffer = await convertImage(buffer, "webp");

    // ✅ RETURN BINARY (Web-safe)
    return new Response(new Uint8Array(outputBuffer), {
      headers: {
        "Content-Type": "image/webp",
        "Content-Disposition":
          "attachment; filename=converted.webp",
      },
    });
  } catch (error) {
    console.error("JPG to WEBP conversion failed:", error);
    return NextResponse.json(
      { error: "Failed to convert JPG to WEBP" },
      { status: 500 }
    );
  }
}
