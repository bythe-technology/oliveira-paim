import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Handshake, Scales, Target } from "@phosphor-icons/react/dist/ssr";
import { CtaBand } from "@/components/cta";
import { PageHero, SectionTitle } from "@/components/section";

export const metadata: Metadata = { title: "A empresa", description: "Conheça a Oliveira & Paim e sua abordagem integrada de assessoria empresarial." };

export default function EmpresaPage() {
  const values = [[Compass, "Clareza", "Traduzir cenários complexos em prioridades compreensíveis."], [Target, "Praticidade", "Conectar estratégia à rotina e às decisões que precisam acontecer."], [Scales, "Responsabilidade", "Atuar com critério técnico, ética e respeito ao contexto."], [Handshake, "Proximidade", "Construir soluções com diálogo, presença e acompanhamento."]];
  return <><PageHero eyebrow="A Oliveira & Paim" title="Uma visão integrada para empresas mais organizadas e seguras." text="Unimos gestão, finanças, pessoas, compliance e assessoria jurídica para apoiar pequenos e médios empresários em decisões que exigem clareza." />
  <section className="section"><div className="container split"><div><SectionTitle eyebrow="Nossa atuação" title="Estratégia personalizada, sem fórmulas prontas." text="Cada negócio possui um contexto próprio. Por isso, nosso trabalho começa pela compreensão da operação, das prioridades e das pessoas envolvidas." /><p className="large-copy">A partir dessa leitura, estruturamos soluções proporcionais ao momento da empresa e acompanhamos sua aplicação, conectando orientação técnica e execução.</p></div><div className="image-frame"><Image src="/images/strategy-session.png" alt="Reunião de estratégia empresarial" fill sizes="(max-width: 800px) 100vw, 50vw" /></div></div></section>
  <section className="section section-soft"><div className="container"><SectionTitle eyebrow="Princípios" title="O que orienta nosso trabalho." center /><div className="values-grid">{values.map(([Icon, title, text]) => { const ValueIcon = Icon as typeof Compass; return <article key={String(title)}><ValueIcon size={34} weight="thin" /><h3>{String(title)}</h3><p>{String(text)}</p></article>; })}</div></div></section>
  <section className="section dark-section"><div className="container"><SectionTitle eyebrow="Especialistas" title="Conhecimento complementar a serviço da sua empresa." text="A Oliveira & Paim reúne competências em gestão, finanças, pessoas, compliance e direito empresarial." /><div className="team-grid"><article><div className="team-initial">LP</div><div><h3>Luis Henrique Paim</h3><p>Atuação em gestão administrativa, assessoria financeira, planejamento e desenvolvimento empresarial.</p></div></article><article><div className="team-initial">EO</div><div><h3>Eduardo Osmar de Oliveira</h3><p>Atuação em compliance, gestão de riscos e assessoria jurídica empresarial.</p></div></article></div></div></section><CtaBand /></>;
}
