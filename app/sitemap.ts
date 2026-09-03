import type { MetadataRoute } from "next";
import { articles, services } from "@/lib/content";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { const paths = ["", "/empresa", "/solucoes", "/conteudos", "/diagnostico", "/contato", "/privacidade", ...services.map((s) => `/solucoes/${s.slug}`), ...articles.map((a) => `/conteudos/${a.slug}`)]; return paths.map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: path.startsWith("/conteudos/") ? "monthly" : "weekly", priority: path === "" ? 1 : 0.7 })); }
