import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { CtaBand } from "@/components/cta";
import { PageHero, SectionTitle } from "@/components/section";
import { services } from "@/lib/content";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const s = services.find((item) => item.slug === slug); return s ? { title: s.title, description: s.summary } : {}; }
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const s = services.find((item) => item.slug === slug); if (!s) notFound(); return <><PageHero eyebrow={s.eyebrow} title={s.title} text={s.summary}><Link className="button button-gold" href="/diagnostico">Conversar sobre esta solução</Link></PageHero><section className="section"><div className="container split"><div><SectionTitle eyebrow="Como ajudamos" title="Mais controle, consistência e visão para decidir." text={s.description} /><div className="outcome-list">{s.outcomes.map((o) => <span key={o}><Check weight="bold" />{o}</span>)}</div></div><div className="deliverables"><span className="eyebrow">Frentes de atuação</span>{s.deliverables.map((d, i) => <div key={d}><strong>0{i + 1}</strong><p>{d}</p></div>)}</div></div></section><section className="section section-soft"><div className="container centered-copy"><SectionTitle eyebrow="Atuação personalizada" title="O escopo parte do diagnóstico, não de um pacote genérico." text="A profundidade, a frequência e as entregas são definidas conforme a realidade da empresa, preservando objetividade e capacidade de execução." center /><Link className="text-link dark" href="/solucoes">Conheça as outras soluções <ArrowRight /></Link></div></section><CtaBand /></>; }
