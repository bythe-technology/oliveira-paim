import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/section";
import { articles } from "@/lib/content";

export const metadata: Metadata = { title: "Conteúdos", description: "Conteúdos sobre gestão, finanças, pessoas, compliance e direito empresarial." };
export default function ConteudosPage() { return <><PageHero eyebrow="Conteúdos" title="Clareza também se constrói com informação." text="Reflexões práticas para líderes que querem tomar decisões mais conscientes e estruturar empresas mais fortes." /><section className="section"><div className="container articles-grid articles-full">{articles.map((a) => <article className="article-card" key={a.slug}><span>{a.category} · {a.readTime}</span><h2>{a.title}</h2><p>{a.excerpt}</p><Link href={`/conteudos/${a.slug}`}>Ler artigo <ArrowRight /></Link></article>)}</div></section></>; }
