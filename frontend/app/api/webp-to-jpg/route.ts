export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { convertImage } from "@/lib/imageConverter";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    // ❌ No file uploaded
    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    // ❌ Validate WEBP
    if (file.type !== "image/webp") {
      return NextResponse.json(
        { error: "Only WEBP files are allowed" },
        { status: 400 }
      );
    }

    // ❌ File size limit (10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size must be under 10MB" },
        { status: 400 }
      );
    }

    // File → Buffer (Node.js)
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 🔥 Convert WEBP → JPG (jpeg)
    const outputBuffer = await convertImage(buffer, "jpeg");

    // ✅ Return binary response (Web-safe)
    return new Response(new Uint8Array(outputBuffer), {
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition":
          "attachment; filename=converted.jpg",
      },
    });
  } catch (error) {
    console.error("WEBP to JPG conversion failed:", error);
    return NextResponse.json(
      { error: "Failed to convert WEBP to JPG" },
      { status: 500 }
    );
  }
}
