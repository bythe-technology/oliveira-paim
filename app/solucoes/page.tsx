import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { CtaBand } from "@/components/cta";
import { serviceIcons } from "@/components/icons";
import { PageHero } from "@/components/section";
import { services } from "@/lib/content";

export const metadata: Metadata = { title: "Soluções", description: "BPO financeiro, consultoria empresarial, gestão de pessoas, compliance e assessoria jurídica." };

export default function SolucoesPage() {
  return <><PageHero eyebrow="Soluções" title="Estrutura para organizar o presente e preparar o crescimento." text="Serviços que podem atuar de forma independente ou integrada, conforme as prioridades e a maturidade de cada empresa." image="/images/strategy-session.png" imageAlt="Planejamento e análise empresarial" /><section className="section"><div className="container solutions-list">{services.map((s, i) => { const Icon = serviceIcons[s.slug as keyof typeof serviceIcons]; return <article key={s.slug}><div className="solution-number">0{i + 1}</div><Icon size={42} weight="thin" /><div><span className="eyebrow">{s.eyebrow}</span><h2>{s.title}</h2><p>{s.summary}</p><Link className="text-link dark" href={`/solucoes/${s.slug}`}>Conhecer solução <ArrowRight /></Link></div></article>; })}</div></section><CtaBand /></>;
}
