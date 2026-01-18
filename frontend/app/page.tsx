import Link from "next/link";

const tools = [
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
  {
    title: "JPG to PNG",
    description: "Convert JPG images to PNG format.",
    href: "/jpg-to-png",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Fast & Free Image Converter
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Convert PNG, JPG, and WEBP images instantly.  
          No signup. No limits. 100% free.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/png-to-webp"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Convert Images
          </Link>

          <Link
            href="#tools"
            className="border border-gray-300 px-8 py-3 rounded-xl font-semibold text-gray-700 hover:border-gray-400 transition"
          >
            View Tools
          </Link>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Image Conversion Tools
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
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

      {/* Trust Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">
          Why use ImageConverter?
        </h3>

        <div className="grid gap-6 sm:grid-cols-3 mt-8">
          <div>
            <p className="text-3xl">⚡</p>
            <h4 className="font-semibold mt-2">Fast</h4>
            <p className="text-sm text-gray-600">
              Instant image processing using modern tech.
            </p>
          </div>

          <div>
            <p className="text-3xl">🔒</p>
            <h4 className="font-semibold mt-2">Secure</h4>
            <p className="text-sm text-gray-600">
              Files are processed securely and never stored.
            </p>
          </div>

          <div>
            <p className="text-3xl">💯</p>
            <h4 className="font-semibold mt-2">Free</h4>
            <p className="text-sm text-gray-600">
              No signup. No watermark. No limits.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
