import type { MetadataRoute } from "next";
import { articles, services } from "@/lib/content";
import { site } from "@/lib/site";

const updatedAt = new Date("2026-10-07T12:00:00-03:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/solucoes", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/empresa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/conteudos", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/diagnostico", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contato", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/privacidade", priority: 0.3, changeFrequency: "yearly" as const },
  ];
  const servicePages = services.map(({ slug }) => ({ path: `/solucoes/${slug}`, priority: 0.9, changeFrequency: "monthly" as const }));
  const articlePages = articles.map(({ slug }) => ({ path: `/conteudos/${slug}`, priority: 0.7, changeFrequency: "monthly" as const }));

  return [...corePages, ...servicePages, ...articlePages].map(({ path, priority, changeFrequency }) => ({
    url: `${site.url}${path}`,
    lastModified: updatedAt,
    changeFrequency,
    priority,
  }));
}
