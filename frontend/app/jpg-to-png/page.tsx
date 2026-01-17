import ImageUpload from "@/components/ImageUpload";

export default function JpgToPngPage() {
  return (
    <ImageUpload
      title="JPG to PNG Converter"
      apiEndpoint="/api/jpg-to-png"
      accept="image/jpeg"
      outputFileName="converted.png"
    />
  );
}
