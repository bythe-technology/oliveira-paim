"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { diagnosticTopics, type DiagnosticCampaign, type DiagnosticTopicSlug } from "@/lib/diagnostic-topics";
import { buildDiagnosticMessage } from "@/lib/diagnostic-message";
import { whatsappUrl } from "@/lib/site";

type Data = { name: string; company: string; challenge: string; topic: DiagnosticTopicSlug | "" };

type DiagnosticFormProps = { topic?: DiagnosticTopicSlug; campaign: DiagnosticCampaign };

export function DiagnosticForm({ topic, campaign }: DiagnosticFormProps) {
  const [data, setData] = useState<Data>({ name: "", company: "", challenge: "", topic: topic ?? "" });
  const [error, setError] = useState("");
  const started = useRef(false);
  const update = (key: keyof Data, value: string) => setData((current) => ({ ...current, [key]: value }));
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!data.name.trim() || !data.company.trim() || !data.challenge.trim()) { setError("Preencha todos os campos para continuar."); return; }
    const message = buildDiagnosticMessage({
      name: data.name.trim(),
      company: data.company.trim(),
      challenge: data.challenge.trim(),
      topicLabel: data.topic ? diagnosticTopics[data.topic] : undefined,
      campaign,
    });
    const campaignParameters = Object.fromEntries(Object.entries(campaign).filter((entry): entry is [string, string] => Boolean(entry[1])));
    window.dispatchEvent(new CustomEvent("op:track", { detail: { event: "diagnostic_complete", parameters: { interest_topic: data.topic || "not_selected", ...campaignParameters } } }));
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }
  const trackStart = () => {
    if (started.current) return;
    started.current = true;
    window.dispatchEvent(new CustomEvent("op:track", { detail: { event: "diagnostic_start", parameters: { interest_topic: data.topic || topic || "not_selected", ...campaign } } }));
  };
  return <form className="diagnostic-form" onSubmit={submit} onFocusCapture={trackStart} noValidate>
    <div className="field-row"><label>Seu nome<input name="name" type="text" value={data.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label><label>Empresa<input name="company" type="text" value={data.company} onChange={(e) => update("company", e.target.value)} autoComplete="organization" /></label></div>
    <label>Tema que motivou seu contato (opcional)<select name="topic" value={data.topic} onChange={(e) => update("topic", e.target.value as DiagnosticTopicSlug | "")} aria-describedby="diagnostic-topic-help"><option value="">Ainda não sei / diagnóstico amplo</option>{Object.entries(diagnosticTopics).map(([slug, label]) => <option key={slug} value={slug}>{label}</option>)}</select></label>
    <p className="form-context" id="diagnostic-topic-help">{data.topic ? `Tema pré-selecionado: ${diagnosticTopics[data.topic]}.` : "Você não precisa saber qual serviço contratar. Vamos começar entendendo sua empresa."} O diagnóstico continua considerando o negócio como um todo.</p>
    <label>Conte brevemente o principal desafio<textarea name="challenge" rows={5} value={data.challenge} onChange={(e) => update("challenge", e.target.value)} autoComplete="off" placeholder="Ex.: precisamos organizar o fluxo de caixa e ter mais clareza para decidir…" /></label>
    {error ? <p className="form-error" role="alert" aria-live="polite">{error}</p> : null}
    <button className="button button-gold" type="submit" data-track="diagnostic_whatsapp">Continuar no WhatsApp <ArrowSquareOut weight="bold" aria-hidden="true" /></button>
    <p className="form-note">Seus dados não são armazenados neste site. A conversa continuará diretamente no WhatsApp.</p>
  </form>;
}
