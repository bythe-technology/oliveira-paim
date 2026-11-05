export const diagnosticTopics = {
  diagnostico: "Diagnóstico empresarial",
  financeiro: "Organização financeira",
  "bpo-financeiro": "BPO Financeiro",
  "registro-de-marca": "Registro de Marca",
  processos: "Processos empresariais",
  pessoas: "Gestão de pessoas",
  riscos: "Compliance e gestão de riscos",
  "consultoria-tributaria": "Consultoria tributária",
  "compliance-lgpd": "Compliance e LGPD",
  "projetos-sociais-culturais": "Projetos sociais e culturais",
} as const;

export type DiagnosticTopicSlug = keyof typeof diagnosticTopics;
export type DiagnosticCampaign = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

export function getDiagnosticTopic(value: unknown): DiagnosticTopicSlug | undefined {
  if (typeof value !== "string" || !Object.hasOwn(diagnosticTopics, value)) return undefined;
  return value as DiagnosticTopicSlug;
}

function getSafeCampaignValue(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const normalized = value.trim();
  return /^[A-Za-z0-9._-]{1,60}$/.test(normalized) ? normalized : undefined;
}

export function getDiagnosticCampaign(values: Record<string, unknown>): DiagnosticCampaign {
  return {
    utm_source: getSafeCampaignValue(values.utm_source),
    utm_medium: getSafeCampaignValue(values.utm_medium),
    utm_campaign: getSafeCampaignValue(values.utm_campaign),
    utm_content: getSafeCampaignValue(values.utm_content),
    utm_term: getSafeCampaignValue(values.utm_term),
  };
}
