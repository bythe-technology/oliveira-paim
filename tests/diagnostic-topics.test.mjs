import assert from "node:assert/strict";
import test from "node:test";
import { getDiagnosticCampaign, getDiagnosticTopic } from "../lib/diagnostic-topics.ts";
import { buildDiagnosticMessage } from "../lib/diagnostic-message.ts";
import { services } from "../lib/content.ts";

test("reconhece temas válidos e rejeita valores fora da lista", () => {
  assert.equal(getDiagnosticTopic("bpo-financeiro"), "bpo-financeiro");
  assert.equal(getDiagnosticTopic("tema-inventado"), undefined);
  assert.equal(getDiagnosticTopic(["bpo-financeiro"]), undefined);
});

test("preserva UTMs simples para identificar a publicação", () => {
  assert.deepEqual(getDiagnosticCampaign({
    utm_source: "instagram",
    utm_medium: "social",
    utm_campaign: "diagnostico-empresarial",
    utm_content: "carrossel-09",
    utm_term: "bpo",
  }), {
    utm_source: "instagram",
    utm_medium: "social",
    utm_campaign: "diagnostico-empresarial",
    utm_content: "carrossel-09",
    utm_term: "bpo",
  });
});

test("descarta valores UTM inválidos, excessivos e não textuais", () => {
  assert.deepEqual(getDiagnosticCampaign({
    utm_source: "instagram/\"><script>",
    utm_medium: "a".repeat(61),
    utm_campaign: 42,
    utm_content: "post-bpo",
  }), {
    utm_source: undefined,
    utm_medium: undefined,
    utm_campaign: undefined,
    utm_content: "post-bpo",
    utm_term: undefined,
  });
});

test("leva tema e publicação ao texto do WhatsApp sem perder o diagnóstico amplo", () => {
  const message = buildDiagnosticMessage({
    name: "Teste",
    company: "Empresa de teste",
    challenge: "Organizar o fluxo de caixa",
    topicLabel: "BPO Financeiro",
    campaign: {
      utm_source: "instagram",
      utm_medium: "social",
      utm_campaign: "diagnostico",
      utm_content: "carrossel-09",
    },
  });

  assert.match(message, /diagnóstico empresarial completo/i);
  assert.match(message, /Tema de interesse: BPO Financeiro/);
  assert.match(message, /content: carrossel-09/);
  assert.match(message, /Principal desafio: Organizar o fluxo de caixa/);
  assert.doesNotMatch(message, /undefined/);
});

test("mantém os sete serviços na ordem aprovada para a home e soluções", () => {
  assert.deepEqual(services.map(({ title }) => title), [
    "Assessoria Empresarial",
    "BPO Financeiro",
    "Registro de Marca",
    "Compliance e Assessoria Jurídica",
    "Gestão de Pessoas",
    "Consultoria e Planejamento Tributário",
    "Consultoria de Marketing",
  ]);
  assert.equal(new Set(services.map(({ slug }) => slug)).size, services.length);
  assert.ok(services.every(({ summary, description, deliverables }) => summary && description && deliverables.length));
});
