import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { CtaBand } from "@/components/cta";
import { ServiceDeliverables } from "@/components/service-deliverables";
import { ServiceAudienceSection } from "@/components/service-audience-section";
import { TrademarkServiceContent } from "@/components/trademark-service-content";
import { PageHero, SectionTitle } from "@/components/section";
import { StructuredData } from "@/components/structured-data";
import { services } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbsSchema, faqSchema, serviceSchema } from "@/lib/structured-data";
import { trademarkFaqs } from "@/lib/trademark-content";

const trademarkDiagnosticHref = "/diagnostico?assunto=registro-de-marca#solicitar-diagnostico";
const marketingDiagnosticHref = "/diagnostico?assunto=consultoria-de-marketing#solicitar-diagnostico";

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

  const serviceAction: { href: string; label: string; title?: string; ctaLabel?: string } = service.slug === "registro-de-marca"
    ? { href: trademarkDiagnosticHref, label: "Solicitar diagnóstico", title: "Vamos entender como cuidar do nome da sua empresa?", ctaLabel: "Conversar sobre registro de marca" }
    : service.slug === "consultoria-de-marketing"
      ? { href: marketingDiagnosticHref, label: "Conversar sobre marketing", title: "Vamos conversar sobre o marketing da sua empresa?", ctaLabel: "Falar sobre marketing" }
      : { href: "/diagnostico", label: "Solicitar diagnóstico" };

  return <>
    <StructuredData data={[
      serviceSchema(service),
      breadcrumbsSchema([{ name: "Início", path: "/" }, { name: "Soluções", path: "/solucoes" }, { name: service.title, path: `/solucoes/${service.slug}` }]),
      ...(service.slug === "registro-de-marca" ? [faqSchema(trademarkFaqs)] : []),
    ]} />
    <PageHero className={service.slug === "assessoria-juridica-empresarial" ? "legal-service-hero" : service.slug === "bpo-financeiro" ? "bpo-financeiro-hero" : ""} eyebrow={service.eyebrow} title={service.title} text={service.summary} image={service.heroImage} imageAlt={service.slug === "registro-de-marca" ? "Profissional analisa documentos e elementos gráficos em uma mesa de trabalho" : service.slug === "assessoria-juridica-empresarial" ? "Cena ilustrativa de Eduardo Osmar de Oliveira analisando um documento jurídico" : service.slug === "bpo-financeiro" ? "Cena ilustrativa de Luís Henrique Oliveira Paim analisando relatórios financeiros" : service.slug === "consultoria-de-marketing" ? "Mesa de trabalho com caderno aberto, livros e um painel de indicadores" : service.slug === "assessoria-empresarial" ? "Empresária e consultor analisam relatórios de gestão em uma reunião" : `Oliveira & Paim — ${service.title}`}><Link className="button button-gold" href={serviceAction.href}>{serviceAction.label}</Link></PageHero>
    {service.slug === "registro-de-marca" ? <TrademarkServiceContent /> : <>
      <section className="section"><div className="container split"><div><SectionTitle eyebrow="Como ajudamos" title={service.overviewTitle ?? "Mais controle, consistência e visão para decidir."} text={service.description} /><div className="outcome-list">{service.outcomes.map((outcome) => <span key={outcome}><Check weight="bold" aria-hidden="true" />{outcome}</span>)}</div></div><ServiceDeliverables items={service.deliverables} /></div></section>
      {service.targetAudience ? <ServiceAudienceSection title={service.targetAudience.title} description={service.targetAudience.description} items={service.targetAudience.items} /> : null}
      <section className="section section-soft"><div className="container centered-copy"><SectionTitle eyebrow="Atuação personalizada" title="O escopo parte do diagnóstico, não de um pacote genérico." text="A profundidade, a frequência e as entregas são definidas conforme a realidade da empresa, preservando objetividade e capacidade de execução." center /><Link className="text-link dark" href="/solucoes">Conheça as outras soluções <ArrowRight aria-hidden="true" /></Link></div></section>
    </>}
    <CtaBand title={serviceAction.title} href={serviceAction.href} label={serviceAction.ctaLabel ?? serviceAction.label} />
  </>;
}
