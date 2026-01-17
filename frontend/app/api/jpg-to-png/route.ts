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

    // ❌ Validate JPG/JPEG
    if (
      file.type !== "image/jpeg" &&
      file.type !== "image/jpg"
    ) {
      return NextResponse.json(
        { error: "Only JPG/JPEG files are allowed" },
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

    // Convert File → Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 🔥 Convert JPG → PNG
    const outputBuffer = await convertImage(buffer, "png");

    // ✅ Return file
    return new NextResponse(outputBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition":
          "attachment; filename=converted.png",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to convert image" },
      { status: 500 }
    );
  }
}
