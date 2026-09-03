import type { ReactNode } from "react";
import Image from "next/image";

export function SectionTitle({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return <div className={`section-title reveal ${center ? "center" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text ? <p>{text}</p> : null}</div>;
}

export function PageHero({ eyebrow, title, text, image, imageAlt, children }: { eyebrow: string; title: string; text: string; image: string; imageAlt: string; children?: ReactNode }) {
  return <section className="page-hero"><Image className="page-hero-background" src={image} alt={imageAlt} fill priority sizes="100vw" /><div className="page-hero-overlay" /><div className="container page-hero-inner"><div className="page-hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{children}</div></div></section>;
}
