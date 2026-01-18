import sharp from "sharp";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const input = Buffer.from(bytes);

    const output = await sharp(input).jpeg({ quality: 90 }).toBuffer();

    return new NextResponse(new Uint8Array(output), {
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition": 'attachment; filename="converted.jpg"',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Conversion failed" },
      { status: 500 }
    );
  }
}
