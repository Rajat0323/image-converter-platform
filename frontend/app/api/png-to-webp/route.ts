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

    // ❌ Validate PNG file
    if (file.type !== "image/png") {
      return NextResponse.json(
        { error: "Only PNG files are allowed" },
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

    // Convert File → Buffer (Node.js runtime)
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 🔥 Convert PNG → WEBP
    const outputBuffer = await convertImage(buffer, "webp");

    // ✅ Return binary response (TypeScript-safe)
    return new Response(new Uint8Array(outputBuffer), {
      headers: {
        "Content-Type": "image/webp",
        "Content-Disposition":
          "attachment; filename=converted.webp",
      },
    });
  } catch (error) {
    console.error("PNG to WEBP conversion failed:", error);
    return NextResponse.json(
      { error: "Failed to convert PNG to WEBP" },
      { status: 500 }
    );
  }
}
