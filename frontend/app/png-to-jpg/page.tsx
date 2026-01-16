import ImageUpload from "../../components/ImageUpload";

export const metadata = {
  title: "Convert PNG to JPG Online Free",
  description:
    "Convert PNG images to JPG online for free. Fast, secure, and high-quality PNG to JPG converter.",
};

export default function PngToJpgPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Convert PNG to JPG Online</h1>

      <p>
        Upload a PNG image and convert it into JPG format instantly.
      </p>

      <ImageUpload />
    </main>
  );
}
