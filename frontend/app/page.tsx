import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Format Converter – PNG, JPG, WEBP Online Free",
  description:
    "Free online image format converter. Convert PNG to JPG, JPG to PNG, PNG to WEBP, JPG to WEBP and WEBP to JPG instantly. No upload limits, secure & fast.",
};

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

export default function HomePage() {
  return (
    <main className="px-4 sm:px-8 py-10 text-white">
      {/* HERO */}
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold">
          Fast & Free Image Converter
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300">
          Convert PNG, JPG, and WEBP images instantly.  
          No signup. No limits. 100% free.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/png-to-jpg"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-center"
          >
            Convert Images
          </Link>

          <Link
            href="#tools"
            className="border border-gray-400 px-6 py-3 rounded-xl font-semibold text-center text-white"
          >
            View Tools
          </Link>
        </div>
      </section>

      {/* TOOLS */}
      <section
        id="tools"
        className="max-w-6xl mx-auto mt-14 sm:mt-20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Image Conversion Tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="bg-white text-black rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {tool.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
