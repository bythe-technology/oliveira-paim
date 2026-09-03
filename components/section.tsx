import type { ReactNode } from "react";

export function SectionTitle({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return <div className={`section-title reveal ${center ? "center" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text ? <p>{text}</p> : null}</div>;
}

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: ReactNode }) {
  return <section className="page-hero"><div className="page-hero-glow" /><div className="container page-hero-inner"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{children}</div></section>;
}
