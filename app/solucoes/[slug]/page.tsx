import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { CtaBand } from "@/components/cta";
import { PageHero, SectionTitle } from "@/components/section";
import { StructuredData } from "@/components/structured-data";
import { services } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbsSchema, serviceSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service
    ? createMetadata(service.seoTitle, service.seoDescription, `/solucoes/${service.slug}`, service.heroImage, { keywords: service.keywords })
    : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return <>
    <StructuredData data={[
      serviceSchema(service),
      breadcrumbsSchema([{ name: "Início", path: "/" }, { name: "Soluções", path: "/solucoes" }, { name: service.title, path: `/solucoes/${service.slug}` }]),
    ]} />
    <PageHero eyebrow={service.eyebrow} title={service.title} text={service.summary} image={service.heroImage} imageAlt={`Oliveira & Paim — ${service.title}`}><Link className="button button-gold" href="/diagnostico">Solicitar diagnóstico</Link></PageHero>
    <section className="section"><div className="container split"><div><SectionTitle eyebrow="Como ajudamos" title="Mais controle, consistência e visão para decidir." text={service.description} /><div className="outcome-list">{service.outcomes.map((outcome) => <span key={outcome}><Check weight="bold" aria-hidden="true" />{outcome}</span>)}</div></div><div className="deliverables"><span className="eyebrow">Frentes de atuação</span>{service.deliverables.map((deliverable, index) => <div key={deliverable}><strong>{String(index + 1).padStart(2, "0")}</strong><p>{deliverable}</p></div>)}</div></div></section>
    <section className="section section-soft"><div className="container centered-copy"><SectionTitle eyebrow="Atuação personalizada" title="O escopo parte do diagnóstico, não de um pacote genérico." text="A profundidade, a frequência e as entregas são definidas conforme a realidade da empresa, preservando objetividade e capacidade de execução." center /><Link className="text-link dark" href="/solucoes">Conheça as outras soluções <ArrowRight aria-hidden="true" /></Link></div></section>
    <CtaBand />
  </>;
}
