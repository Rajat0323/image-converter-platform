import type { Metadata } from "next";
import ImageUpload from "@/components/ImageUpload";

export const metadata: Metadata = {
  title: "PNG to JPG Converter Online – Free & Fast",
  description:
    "Convert PNG to JPG online for free. High quality PNG to JPEG image converter. No watermark, no signup, works on mobile.",
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
