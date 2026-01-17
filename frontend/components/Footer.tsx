import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 text-center sm:text-left sm:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold">ImageConverter</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Free online image converter for PNG, JPG, and WEBP files.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Tools</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/png-to-webp">PNG to WEBP</Link></li>
            <li><Link href="/jpg-to-webp">JPG to WEBP</Link></li>
            <li><Link href="/webp-to-jpg">WEBP to JPG</Link></li>
            <li><Link href="/jpg-to-png">JPG to PNG</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Privacy</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Files are processed instantly and never stored.
          </p>
        </div>
      </div>

      <div className="border-t text-center text-sm py-4 text-gray-500">
        © {new Date().getFullYear()} ImageConverter. All rights reserved.
      </div>
    </footer>
  );
}
