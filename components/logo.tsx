import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand ${light ? "brand-light" : ""}`} href="/" aria-label="Oliveira & Paim - início">
      <span className="brand-copy"><span className="brand-main">OLIVEIRA &amp; PAIM</span><span className="brand-sub">ASSESSORIA EMPRESARIAL</span></span>
    </Link>
  );
}
