import ImageUpload from "@/components/ImageUpload";

export default function JpgToWebpPage() {
  return (
    <ImageUpload
      title="JPG to WEBP Converter"
      apiEndpoint="/api/jpg-to-webp"
      accept="image/jpeg"
      outputFileName="converted.webp"
    />
  );
}
