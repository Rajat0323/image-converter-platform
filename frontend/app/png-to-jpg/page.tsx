import ImageUpload from "@/components/ImageUpload";

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
