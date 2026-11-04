const diagnosticTopics = {
  diagnostico: "Diagnóstico empresarial",
  financeiro: "Organização financeira",
  "bpo-financeiro": "BPO Financeiro",
  processos: "Processos empresariais",
  pessoas: "Gestão de pessoas",
  riscos: "Compliance e gestão de riscos",
  "consultoria-tributaria": "Consultoria tributária",
  "compliance-lgpd": "Compliance e LGPD",
  "projetos-sociais-culturais": "Projetos sociais e culturais",
} as const;

export function getDiagnosticTopic(value: unknown): string | undefined {
  if (typeof value !== "string" || !Object.hasOwn(diagnosticTopics, value)) return undefined;
  return diagnosticTopics[value as keyof typeof diagnosticTopics];
}
