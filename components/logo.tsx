import Link from "next/link";
import Image from "next/image";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand ${light ? "brand-light" : ""}`} href="/" aria-label="Oliveira & Paim - início">
      <Image className="brand-mark" src="/images/instagram/logo-oficial.jpg" alt="" width={38} height={38} />
      <span className="brand-copy"><span className="brand-main">OLIVEIRA &amp; PAIM</span><span className="brand-sub">ASSESSORIA EMPRESARIAL</span></span>
    </Link>
  );
}
