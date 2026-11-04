"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { whatsappUrl } from "@/lib/site";

type Data = { name: string; company: string; challenge: string };

type DiagnosticFormProps = { topic?: string };

export function DiagnosticForm({ topic }: DiagnosticFormProps) {
  const [data, setData] = useState<Data>({ name: "", company: "", challenge: "" });
  const [error, setError] = useState("");
  const started = useRef(false);
  const update = (key: keyof Data, value: string) => setData((current) => ({ ...current, [key]: value }));
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!data.name.trim() || !data.company.trim() || !data.challenge.trim()) { setError("Preencha todos os campos para continuar."); return; }
    const topicLine = topic ? `Tema de interesse: ${topic}\n` : "";
    const message = `Olá! Gostaria de solicitar um diagnóstico empresarial completo.\n\nNome: ${data.name.trim()}\nEmpresa: ${data.company.trim()}\n${topicLine}Assunto: Diagnóstico completo\nPrincipal desafio: ${data.challenge.trim()}`;
    window.dispatchEvent(new CustomEvent("op:track", { detail: { event: "diagnostic_complete" } }));
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }
  const trackStart = () => {
    if (started.current) return;
    started.current = true;
    window.dispatchEvent(new CustomEvent("op:track", { detail: { event: "diagnostic_start" } }));
  };
  return <form className="diagnostic-form" onSubmit={submit} onFocusCapture={trackStart} noValidate>
    <div className="field-row"><label>Seu nome<input name="name" type="text" value={data.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label><label>Empresa<input name="company" type="text" value={data.company} onChange={(e) => update("company", e.target.value)} autoComplete="organization" /></label></div>
    <p><strong>{topic ? `Tema da publicação: ${topic}` : "Assunto: Diagnóstico completo"}</strong><br />{topic ? "Este tema só contextualiza a conversa; o diagnóstico continua avaliando a empresa como um todo." : "Você não precisa saber qual serviço contratar. Vamos começar entendendo sua empresa."}</p>
    <label>Conte brevemente o principal desafio<textarea name="challenge" rows={5} value={data.challenge} onChange={(e) => update("challenge", e.target.value)} autoComplete="off" placeholder="Ex.: precisamos organizar o fluxo de caixa e ter mais clareza para decidir…" /></label>
    {error ? <p className="form-error" role="alert" aria-live="polite">{error}</p> : null}
    <button className="button button-gold" type="submit" data-track="diagnostic_whatsapp">Continuar no WhatsApp <ArrowSquareOut weight="bold" aria-hidden="true" /></button>
    <p className="form-note">Seus dados não são armazenados neste site. A conversa continuará diretamente no WhatsApp.</p>
  </form>;
}
