import type { Metadata } from "next";
import Link from "next/link";

/* =========================
   SEO METADATA (STRONG)
========================= */
export const metadata: Metadata = {
  title: "PNG to JPG Converter Online – Free Image Converter Tool",
  description:
    "Convert PNG to JPG online for free. Fast, secure & SEO-friendly image converter supporting PNG, JPG & WEBP formats. No signup required.",
};

/* =========================
   TOOLS DATA
========================= */
const tools = [
  { title: "PNG to JPG", href: "/png-to-jpg", desc: "Convert PNG images to JPG format online with high quality." },
  { title: "PNG to WEBP", href: "/png-to-webp", desc: "Convert PNG images to WEBP for better compression and performance." },
  { title: "JPG to WEBP", href: "/jpg-to-webp", desc: "Reduce JPG file size by converting images to WEBP format." },
  { title: "WEBP to JPG", href: "/webp-to-jpg", desc: "Convert WEBP images back to JPG for better compatibility." },
  { title: "JPG to PNG", href: "/jpg-to-png", desc: "Convert JPG images to PNG format with better clarity." },
];

export default function HomePage() {
  return (
    <div className="space-y-36">

      {/* =====================================================
         ABOVE THE FOLD – TOOLS (FIRST THING USER SEES)
      ===================================================== */}
      <section className="max-w-7xl mx-auto pt-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-14">
          Image Converter Online – PNG to JPG, WEBP & More
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="bg-white border rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{t.title}</h2>
              <p className="text-gray-600 text-sm">{t.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
         PRIMARY HERO – PNG TO JPG (MAIN KEYWORD)
      ===================================================== */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold">
          PNG to JPG Converter Online
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Convert PNG images to JPG format instantly using our free online
          PNG to JPG converter. No signup, no watermark, unlimited usage.
          This tool works directly in your browser and keeps your files secure.
        </p>

        <div className="mt-10">
          <Link
            href="/png-to-jpg"
            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-700"
          >
            Convert PNG to JPG
          </Link>
        </div>
      </section>

      {/* =====================================================
         LONG SEO CONTENT (1,200+ WORDS CORE)
      ===================================================== */}
      <section className="max-w-5xl mx-auto space-y-14 text-gray-700 leading-relaxed">

        <h2 className="text-3xl font-bold">Free Online Image Converter</h2>
        <p>
          ImageFormatConverter.in is a powerful and free online image converter
          designed to help users convert image formats such as PNG, JPG and WEBP
          quickly and securely. Whether you are a blogger, web developer,
          designer or student, our image conversion tools allow you to optimize
          images for faster loading and better SEO performance.
        </p>

        <p>
          Unlike traditional desktop software, our image converter works fully
          online in your browser. You do not need to install any application or
          create an account. All conversions happen instantly, making this tool
          ideal for daily image conversion needs.
        </p>

        <h2 className="text-3xl font-bold">Why Convert PNG to JPG?</h2>
        <p>
          PNG images are known for high quality but they often come with large
          file sizes. Converting PNG to JPG helps reduce image size without
          noticeable quality loss. JPG images load faster on websites, improve
          page speed scores and enhance overall SEO.
        </p>

        <p>
          If you manage a website or blog, using JPG instead of PNG can help
          reduce bandwidth usage and improve user experience. That is why PNG
          to JPG conversion is one of the most commonly used image optimization
          techniques.
        </p>

        <h2 className="text-3xl font-bold">PNG to JPG Converter Tool</h2>
        <p>
          Our PNG to JPG converter ensures high-quality output while compressing
          image size efficiently. This tool is perfect for photographers,
          bloggers, SEO experts and students who need fast image conversion
          without losing clarity.
        </p>

        <p>
          The converter supports bulk processing and works on all modern
          browsers including Chrome, Firefox, Edge and Safari.
        </p>

        <h2 className="text-3xl font-bold">Other Image Conversion Tools</h2>
        <p>
          Apart from PNG to JPG, ImageFormatConverter.in also provides multiple
          other image conversion tools to meet all your needs:
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <Link href="/png-to-webp" className="text-blue-600 font-medium">
              PNG to WEBP Converter
            </Link>{" "}
            – Convert PNG images to WEBP format for better compression.
          </li>
          <li>
            <Link href="/jpg-to-webp" className="text-blue-600 font-medium">
              JPG to WEBP Converter
            </Link>{" "}
            – Reduce JPG file size and improve website performance.
          </li>
          <li>
            <Link href="/webp-to-jpg" className="text-blue-600 font-medium">
              WEBP to JPG Converter
            </Link>{" "}
            – Convert WEBP images back to JPG format.
          </li>
          <li>
            <Link href="/jpg-to-png" className="text-blue-600 font-medium">
              JPG to PNG Converter
            </Link>{" "}
            – Convert JPG images to PNG when transparency is needed.
          </li>
        </ul>

        <h2 className="text-3xl font-bold">Secure & SEO-Friendly Image Conversion</h2>
        <p>
          All image conversions on ImageFormatConverter.in are performed securely.
          Files are processed instantly and never stored on our servers. This
          ensures complete privacy and data safety.
        </p>

        <p>
          Optimized images improve Core Web Vitals, reduce page load time and
          help your website rank better in Google search results. Using the
          right image format is a key factor in modern SEO.
        </p>
      </section>

      {/* =====================================================
         SECOND CTA – INTERNAL LINKING BOOST
      ===================================================== */}
      <section className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Start Using Our PNG to JPG Converter
        </h2>
        <p className="text-gray-600 mb-8">
          Convert PNG images to JPG instantly and optimize your images for web
          and SEO.
        </p>

        <Link
          href="/png-to-jpg"
          className="bg-green-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-green-700"
        >
          Convert PNG to JPG Now
        </Link>
      </section>

      {/* =====================================================
         FAQ SECTION (SEO GOLD)
      ===================================================== */}
      <section className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>

        <div>
          <h3 className="font-semibold text-lg">Is PNG to JPG converter free?</h3>
          <p>
            Yes, all tools on ImageFormatConverter.in are completely free with
            no hidden limits or subscriptions.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Are my images stored?</h3>
          <p>
            No, images are processed instantly and never stored on any server.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Does JPG help SEO?</h3>
          <p>
            Yes, JPG images are smaller in size and help improve page speed,
            which is a direct ranking factor in Google SEO.
          </p>
        </div>
      </section>

    </div>
  );
}
