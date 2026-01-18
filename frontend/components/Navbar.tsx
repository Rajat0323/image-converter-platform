"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const links = [
  { href: "/png-to-webp", label: "PNG → WEBP" },
  { href: "/jpg-to-webp", label: "JPG → WEBP" },
  { href: "/webp-to-jpg", label: "WEBP → JPG" },
  { href: "/jpg-to-png", label: "JPG → PNG" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="border-b sticky top-0 z-50 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Image Converter Platform"
            width={36}
            height={36}
            priority
          />
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            ImageConverter
          </span>
        </Link>

        {/* NAV LINKS + THEME */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition ${
                    isActive
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-lg border text-sm dark:border-gray-700"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
}
