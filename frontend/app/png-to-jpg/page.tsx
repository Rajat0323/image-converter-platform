import ImageUploadBox from "@/app/components/ImageUploadBox";
import ToolCards from "@/app/components/ToolCards";

export const metadata = {
  title: "Convert PNG to JPG Online Free | ImageFormatConverter",
  description:
    "Convert PNG images to high-quality JPG instantly. No signup, no watermark, 100% free.",
};

export default function PngToJpgPage() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold">PNG to JPG Converter</h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Convert PNG images to high-quality JPG instantly.
          No signup • No watermark • 100% Free
        </p>
      </section>

      {/* Upload Box */}
      <div className="max-w-6xl mx-auto px-4">
        <ImageUploadBox />
      </div>

      {/* Other Tools */}
      <section className="max-w-6xl mx-auto px-4 mt-24">
        <h2 className="text-2xl font-bold text-center mb-10">
          Other Image Conversion Tools
        </h2>
        <ToolCards />
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 mt-24 pb-20 text-center">
        <h2 className="text-2xl font-bold mb-10">How it works</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
            Upload PNG Image
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
            Convert Automatically
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-700">
            Download JPG
          </div>
        </div>
      </section>
    </div>
  );
}
