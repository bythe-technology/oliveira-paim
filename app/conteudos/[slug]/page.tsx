import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { CtaBand } from "@/components/cta";
import { articles } from "@/lib/content";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const a = articles.find((item) => item.slug === slug); return a ? { title: a.title, description: a.excerpt } : {}; }
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const a = articles.find((item) => item.slug === slug); if (!a) notFound(); return <><article className="article-page"><header className="article-hero"><Image className="article-hero-background" src={a.coverImage} alt={`Imagem de abertura: ${a.title}`} fill priority sizes="100vw" /><div className="article-hero-overlay" /><div className="container article-hero-inner"><div><Link className="back-link" href="/conteudos"><ArrowLeft aria-hidden="true" /> Conteúdos</Link><span className="eyebrow">{a.category} · {a.readTime} de leitura</span><h1>{a.title}</h1><p>{a.excerpt}</p></div></div></header><div className="narrow article-body"><p className="lead">{a.intro}</p>{a.sections.map((s) => <section key={s.title}><h2>{s.title}</h2><p>{s.body}</p></section>)}<aside><strong>Importante</strong><p>Este conteúdo tem caráter informativo e não substitui uma análise profissional aplicada à realidade da sua empresa.</p></aside></div></article><CtaBand /></>; }
