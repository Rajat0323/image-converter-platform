import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header style={{ padding: 12, borderBottom: "1px solid #222" }}>
      <Link href="/" style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <Image src="/logo.png" alt="Logo" width={36} height={36} />
        <strong>ImageFormatConverter</strong>
      </Link>
    </header>
  );
}
