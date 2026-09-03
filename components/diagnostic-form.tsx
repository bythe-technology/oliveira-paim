"use client";

import { FormEvent, useState } from "react";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { whatsappUrl } from "@/lib/site";

type Data = { name: string; company: string; area: string; challenge: string };

export function DiagnosticForm() {
  const [data, setData] = useState<Data>({ name: "", company: "", area: "", challenge: "" });
  const [error, setError] = useState("");
  const update = (key: keyof Data, value: string) => setData((current) => ({ ...current, [key]: value }));
  function submit(event: FormEvent) {
    event.preventDefault();
    if (!data.name.trim() || !data.company.trim() || !data.area || !data.challenge.trim()) { setError("Preencha todos os campos para continuar."); return; }
    const message = `Olá! Gostaria de solicitar um diagnóstico empresarial.\n\nNome: ${data.name}\nEmpresa: ${data.company}\nÁrea prioritária: ${data.area}\nPrincipal desafio: ${data.challenge}`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }
  return <form className="diagnostic-form" onSubmit={submit} noValidate>
    <div className="field-row"><label>Seu nome<input value={data.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" /></label><label>Empresa<input value={data.company} onChange={(e) => update("company", e.target.value)} autoComplete="organization" /></label></div>
    <label>Qual área precisa de mais atenção?<select value={data.area} onChange={(e) => update("area", e.target.value)}><option value="">Selecione</option><option>BPO Financeiro</option><option>Consultoria Empresarial</option><option>Gestão de Pessoas</option><option>Compliance e Jurídico</option><option>Diagnóstico completo</option></select></label>
    <label>Conte brevemente o principal desafio<textarea rows={5} value={data.challenge} onChange={(e) => update("challenge", e.target.value)} placeholder="Ex.: precisamos organizar o fluxo de caixa e ter mais clareza para decidir..." /></label>
    {error ? <p className="form-error" role="alert">{error}</p> : null}
    <button className="button button-gold" type="submit">Continuar no WhatsApp <ArrowSquareOut weight="bold" /></button>
    <p className="form-note">Seus dados não são armazenados neste site. A conversa continuará diretamente no WhatsApp.</p>
  </form>;
}
