import type { DiagnosticCampaign } from "@/lib/diagnostic-topics";

type DiagnosticMessageData = {
  name: string;
  company: string;
  challenge: string;
  topicLabel?: string;
  campaign: DiagnosticCampaign;
};

export function buildDiagnosticMessage({ name, company, challenge, topicLabel, campaign }: DiagnosticMessageData): string {
  const campaignLines = Object.entries(campaign)
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([key, value]) => `${key.replace("utm_", "").replace("_", " ")}: ${value}`);
  const topicLine = topicLabel ? `Tema de interesse: ${topicLabel}\n` : "";
  const campaignLine = campaignLines.length ? `Origem da publicação: ${campaignLines.join(" | ")}\n` : "";
  return `Olá! Gostaria de solicitar um diagnóstico empresarial completo.\n\nNome: ${name}\nEmpresa: ${company}\n${topicLine}${campaignLine}Assunto: Diagnóstico completo\nPrincipal desafio: ${challenge}`;
}
