import type { Metadata } from "next";
import ImageUpload from "@/components/ImageUpload";

export const metadata: Metadata = {
  title: "WEBP to JPG Converter Online – Free Tool",
  description:
    "Convert WEBP to JPG online easily. Free WEBP to JPEG image converter compatible with all devices.",
};

export default function WebpToJpgPage() {
  return (
    <ImageUpload
      title="WEBP to JPG Converter"
      apiEndpoint="/api/webp-to-jpg"
      accept="image/webp"
      outputFileName="converted.jpg"
    />
  );
}
