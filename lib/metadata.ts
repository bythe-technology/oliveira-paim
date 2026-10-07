import type { Metadata } from "next";
import { site } from "./site";

type MetadataOptions = {
  type?: "website" | "article";
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
};

export function createMetadata(title: string, description: string, path = "", image = "/images/hero-boardroom.png", options: MetadataOptions = {}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    keywords: [...site.keywords, ...(options.keywords ?? [])],
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    category: "Assessoria empresarial",
    alternates: { canonical: url, languages: { "pt-BR": url } },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "pt_BR",
      type: options.type ?? "website",
      images: [{ url: image, width: 1200, height: 630, alt: `${site.shortName} — ${title}` }],
      ...(options.type === "article" ? { publishedTime: options.publishedTime, modifiedTime: options.modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  };
}
