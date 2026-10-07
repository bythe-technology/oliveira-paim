import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { CtaBand } from "@/components/cta";
import { StructuredData } from "@/components/structured-data";
import { articles } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbsSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article
    ? createMetadata(article.title, article.excerpt, `/conteudos/${article.slug}`, article.coverImage, { type: "article", keywords: [article.category] })
    : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  return <>
    <StructuredData data={[
      articleSchema(article),
      breadcrumbsSchema([{ name: "Início", path: "/" }, { name: "Conteúdos", path: "/conteudos" }, { name: article.title, path: `/conteudos/${article.slug}` }]),
    ]} />
    <article className="article-page" data-analytics="article"><header className="article-hero"><Image className="article-hero-background" src={article.coverImage} alt={`Imagem de abertura: ${article.title}`} fill priority sizes="100vw" /><div className="article-hero-overlay" /><div className="container article-hero-inner"><div><Link className="back-link" href="/conteudos"><ArrowLeft aria-hidden="true" /> Conteúdos</Link><span className="eyebrow">{article.category} · {article.readTime} de leitura</span><h1>{article.title}</h1><p>{article.excerpt}</p></div></div></header><div className="narrow article-body"><p className="lead">{article.intro}</p>{article.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}<aside><strong>Importante</strong><p>Este conteúdo tem caráter informativo e não substitui uma análise profissional aplicada à realidade da sua empresa.</p></aside></div></article>
    <CtaBand />
  </>;
}
