import ImageUpload from "@/components/ImageUpload";

export default function PngToWebpPage() {
  return (
    <ImageUpload
      title="PNG to WEBP Converter"
      apiEndpoint="/api/png-to-webp"
      accept="image/png"
      outputFileName="converted.webp"
    />
  );
}
