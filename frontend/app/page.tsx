import Link from "next/link";
import type { Metadata } from "next";

/* =======================
   SEO METADATA
======================= */
export const metadata: Metadata = {
  title: "Image Format Converter – PNG, JPG, WEBP Online Free",
  description:
    "Free online image format converter. Convert PNG to JPG, JPG to PNG, PNG to WEBP, JPG to WEBP and WEBP to JPG instantly. No signup, no limits, 100% free.",
};

/* =======================
   TOOLS DATA
======================= */
const tools = [
  {
    title: "PNG to JPG",
    description: "Convert PNG images to high-quality JPG format.",
    href: "/png-to-jpg",
  },
  {
    title: "JPG to PNG",
    description: "Convert JPG images to lossless PNG format.",
    href: "/jpg-to-png",
  },
  {
    title: "PNG to WEBP",
    description: "Convert PNG images to high-quality WEBP format.",
    href: "/png-to-webp",
  },
  {
    title: "JPG to WEBP",
    description: "Reduce JPG size by converting to WEBP.",
    href: "/jpg-to-webp",
  },
  {
    title: "WEBP to JPG",
    description: "Convert WEBP images back to JPG easily.",
    href: "/webp-to-jpg",
  },
];

/* =======================
   PAGE COMPONENT
======================= */
export default function HomePage() {
  return (
    <main className="space-y-24 px-4 py-10">

      {/* ================= HERO ================= */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Fast & Free Image Converter
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Convert PNG, JPG, and WEBP images instantly.  
          No signup. No limits. 100% free.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            href="/png-to-jpg"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Convert Images
          </Link>

          <Link
            href="#tools"
            className="border border-gray-500 px-8 py-3 rounded-xl font-semibold text-gray-200 hover:border-gray-300 transition"
          >
            View Tools
          </Link>
        </div>
      </section>

      {/* ================= TOOLS ================= */}
      <section id="tools" className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Image Conversion Tools
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="bg-white text-black rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {tool.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-6">
          Why use ImageFormatConverter?
        </h3>

        <div className="grid gap-8 sm:grid-cols-3 mt-8">
          <div>
            <p className="text-4xl">⚡</p>
            <h4 className="font-semibold mt-2 text-white">Fast</h4>
            <p className="text-sm text-gray-300">
              Instant image processing using modern technology.
            </p>
          </div>

          <div>
            <p className="text-4xl">🔒</p>
            <h4 className="font-semibold mt-2 text-white">Secure</h4>
            <p className="text-sm text-gray-300">
              Files are processed securely and never stored.
            </p>
          </div>

          <div>
            <p className="text-4xl">💯</p>
            <h4 className="font-semibold mt-2 text-white">Free</h4>
            <p className="text-sm text-gray-300">
              No signup. No watermark. No limits.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
