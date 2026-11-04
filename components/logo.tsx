import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.css";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link className={`brand ${light ? "brand-light" : ""}`} href="/" aria-label="Oliveira & Paim - início">
      <Image src={light ? "/images/logo-gold.png" : "/images/logo-positive.png"} alt="Oliveira & Paim Assessoria Empresarial" width={1280} height={620} className={styles.image} priority />
    </Link>
  );
}
