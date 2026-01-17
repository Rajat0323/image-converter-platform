import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e5e7eb",
        padding: "12px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Image Format Converter Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* Brand Name */}
        <Link
          href="/"
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textDecoration: "none",
            color: "#111827",
          }}
        >
          ImageFormatConverter
        </Link>
      </div>
    </header>
  );
}
