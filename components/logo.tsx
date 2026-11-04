import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.css";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand ${light ? "brand-light" : ""}`} href="/" aria-label="Oliveira & Paim - início">
      <Image src="/images/oliveira-paim-logo.webp" alt="Oliveira & Paim Assessoria Empresarial" width={121} height={68} className={styles.image} priority />
    </Link>
  );
}
