import ImageUpload from "@/components/ImageUpload";

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
