import ImageUpload from "@/components/ImageUpload";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PNG to JPG Converter – Free Online Tool",
  description:
    "Convert PNG images to JPG online for free. Fast, secure, and no signup required.",
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
