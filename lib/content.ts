export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  commercialOffer?: {
    price: string;
    period: string;
    note: string;
  };
};

export const services: Service[] = [
  {
    slug: "bpo-financeiro",
    eyebrow: "Controle para decidir melhor",
    title: "BPO Financeiro",
    summary: "Sua rotina financeira organizada por especialistas, com visão clara do que acontece no negócio.",
    description: "Assumimos processos financeiros essenciais e transformamos dados dispersos em uma visão gerencial confiável para apoiar decisões mais seguras.",
    outcomes: ["Mais previsibilidade de caixa", "Rotina financeira organizada", "Decisões apoiadas por indicadores"],
    deliverables: ["Contas a receber", "Contas a pagar", "Controle de transferências", "Conciliação bancária", "Relatórios gerenciais e indicadores financeiros", "Fluxo de caixa mensal e anual", "Precificação e consultoria financeira", "Sistema financeiro incluso"],
    commercialOffer: {
      price: "R$ 890",
      period: "por mês",
      note: "Valor inicial. O investimento final varia conforme o volume de movimentações e o escopo definido no diagnóstico.",
    },
  },
  {
    slug: "consultoria-empresarial",
    eyebrow: "Estratégia que sai do papel",
    title: "Consultoria Empresarial",
    summary: "Diagnóstico, planejamento e processos para transformar intenção de crescimento em direção prática.",
    description: "Analisamos o momento da empresa, identificamos gargalos e estruturamos um plano objetivo, com prioridades, responsáveis e indicadores.",
    outcomes: ["Prioridades bem definidas", "Processos mais eficientes", "Crescimento com método"],
    deliverables: ["Diagnóstico empresarial", "Planejamento estratégico", "Mapeamento e melhoria de processos", "Indicadores e plano de ação"],
  },
  {
    slug: "gestao-de-pessoas",
    eyebrow: "Pessoas certas, estrutura saudável",
    title: "Gestão de Pessoas",
    summary: "Práticas de RH que conectam talentos, liderança e cultura aos objetivos da organização.",
    description: "Apoiamos a empresa na construção de equipes mais alinhadas, lideranças preparadas e políticas transparentes para desenvolver e reter talentos.",
    outcomes: ["Papéis e expectativas claros", "Lideranças mais preparadas", "Maior coerência na gestão"],
    deliverables: ["Recrutamento e seleção", "Cargos, salários e competências", "Avaliação de desempenho", "Treinamento e desenvolvimento"],
  },
  {
    slug: "compliance-juridico",
    eyebrow: "Crescer com segurança",
    title: "Compliance e Assessoria Jurídica",
    summary: "Prevenção de riscos, contratos e práticas de governança adequadas à realidade da empresa.",
    description: "Traduzimos exigências jurídicas e de integridade em instrumentos práticos que protegem relações, dados, reputação e continuidade do negócio.",
    outcomes: ["Riscos identificados mais cedo", "Relações comerciais protegidas", "Governança proporcional ao negócio"],
    deliverables: ["Revisão e elaboração de contratos", "Compliance e códigos internos", "LGPD e proteção de dados", "Orientação jurídica empresarial"],
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  intro: string;
  sections: { title: string; body: string }[];
};

export const articles: Article[] = [
  {
    slug: "diagnostico-empresarial",
    category: "Estratégia",
    title: "O que um diagnóstico empresarial revela sobre o seu negócio",
    excerpt: "Um check-up objetivo ajuda a enxergar gargalos, prioridades e oportunidades antes que o improviso cobre seu preço.",
    readTime: "4 min",
    intro: "Empresas podem ter potencial, clientes e uma boa equipe e, ainda assim, perder ritmo por falta de uma visão integrada. O diagnóstico empresarial organiza essa leitura.",
    sections: [
      { title: "Olhar além do sintoma", body: "Atrasos, retrabalho e falta de caixa costumam ser sintomas. O diagnóstico relaciona finanças, processos, pessoas e riscos para localizar causas e dependências." },
      { title: "Transformar análise em prioridade", body: "O valor não está em produzir um documento extenso, mas em definir o que precisa acontecer primeiro, quem conduz cada frente e como acompanhar a evolução." },
      { title: "Criar um ponto de partida confiável", body: "Com informações organizadas, a liderança reduz decisões reativas e passa a comparar cenários com mais clareza." },
    ],
  },
  {
    slug: "bpo-financeiro-organizacao",
    category: "Financeiro",
    title: "BPO financeiro: organização para a empresa voltar a crescer",
    excerpt: "Terceirizar a operação financeira pode liberar tempo da liderança sem abrir mão do controle.",
    readTime: "5 min",
    intro: "Quando a liderança centraliza pagamentos, cobranças e conferências, decisões estratégicas disputam espaço com tarefas operacionais. O BPO muda essa dinâmica.",
    sections: [
      { title: "Rotina antes do relatório", body: "Indicadores confiáveis dependem de uma rotina consistente: documentos organizados, lançamentos conferidos, conciliações e responsabilidades definidas." },
      { title: "Controle não é centralização", body: "A empresa continua decidindo. A assessoria executa e organiza a informação para que os responsáveis tenham visibilidade e façam escolhas com segurança." },
      { title: "Acompanhamento consultivo", body: "Relatórios ganham utilidade quando são interpretados no contexto do negócio e conectados às próximas decisões." },
    ],
  },
  {
    slug: "contratos-como-protecao",
    category: "Jurídico",
    title: "Contratos empresariais como instrumentos de proteção e crescimento",
    excerpt: "Clareza nas responsabilidades reduz conflitos e dá sustentação a relações comerciais mais maduras.",
    readTime: "4 min",
    intro: "Um contrato não deve ser tratado como mera formalidade. Ele registra expectativas, distribui responsabilidades e oferece critérios para situações de mudança ou conflito.",
    sections: [
      { title: "Modelos genéricos deixam lacunas", body: "Prazos, entregas, confidencialidade, propriedade intelectual e condições de saída variam conforme a operação. O documento precisa refletir a relação real." },
      { title: "Prevenir custa menos", body: "Revisar condições antes da assinatura costuma ser mais simples do que reconstruir evidências e negociar soluções quando o problema já existe." },
      { title: "Contrato também organiza", body: "Além da proteção jurídica, uma boa redação melhora a comunicação entre áreas e parceiros." },
    ],
  },
  {
    slug: "compliance-lgpd-pmes",
    category: "Compliance",
    title: "Compliance e LGPD também são estratégicos para pequenas empresas",
    excerpt: "Boas práticas proporcionais ao porte fortalecem confiança, reputação e continuidade.",
    readTime: "5 min",
    intro: "Integridade e proteção de dados não precisam começar com estruturas complexas. Pequenas empresas podem avançar com medidas proporcionais e bem priorizadas.",
    sections: [
      { title: "Mapear riscos reais", body: "O primeiro passo é entender quais dados, relações e decisões representam maior exposição para a operação." },
      { title: "Políticas que funcionam", body: "Regras internas precisam ser claras, acessíveis e conectadas à rotina. Documentos que ninguém conhece não mudam comportamentos." },
      { title: "Confiança como ativo", body: "Clientes e parceiros valorizam empresas que demonstram responsabilidade na gestão de informações e relações." },
    ],
  },
];
