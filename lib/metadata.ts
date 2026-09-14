import type { Metadata } from "next";
import { site } from "./site";

export function createMetadata(title: string, description: string, path = "", image = "/images/hero-boardroom.png"): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, locale: "pt_BR", type: "website", images: [{ url: image }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
