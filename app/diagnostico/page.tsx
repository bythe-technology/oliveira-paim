import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { DiagnosticForm } from "@/components/diagnostic-form";
import { PageHero } from "@/components/section";

export const metadata: Metadata = { title: "Diagnóstico empresarial", description: "Conte o desafio da sua empresa e solicite uma conversa com a Oliveira & Paim." };
export default function DiagnosticoPage() { return <><PageHero eyebrow="Diagnóstico empresarial" title="O primeiro passo é entender o que precisa ser organizado." text="Responda algumas perguntas rápidas. As informações serão levadas ao WhatsApp para iniciar uma conversa objetiva com nossa equipe." /><section className="section"><div className="container form-layout"><div><h2>Uma conversa orientada pelo seu contexto.</h2><p>O diagnóstico ajuda a localizar prioridades e identificar quais competências podem gerar mais valor neste momento.</p><div className="check-list"><span><CheckCircle /> Sem compromisso</span><span><CheckCircle /> Atendimento personalizado</span><span><CheckCircle /> Informações não armazenadas</span></div></div><DiagnosticForm /></div></section></>; }
