import type { Metadata } from "next";
import ImageUpload from "@/components/ImageUpload";

export const metadata: Metadata = {
  title: "PNG to JPG Converter – Free Online Tool",
  description:
    "Convert PNG to JPG online for free. Fast, secure PNG to JPG converter with high quality output.",
};

export default function PngToJpgPage() {
  return (
    <ImageUpload
      title="PNG to JPG Converter"
      apiEndpoint="/api/png-to-jpg"
      accept="image/png"
      outputFileName="converted.jpg"
    />
  );
}
