import ImageUpload from "@/components/ImageUpload";

export default function PngToJpgPage() {
  return (
    <div className="px-4 py-10">
      <ImageUpload
        title="PNG to JPG Converter"
        apiEndpoint="/api/png-to-jpg"
        accept="image/png"
        outputFileName="converted.jpg"
      />
    </div>
  );
}
