export type ServiceSlug =
  | "assessoria-empresarial"
  | "bpo-financeiro"
  | "registro-de-marca"
  | "assessoria-juridica-empresarial"
  | "gestao-de-pessoas"
  | "consultoria-planejamento-tributario"
  | "consultoria-de-marketing";

export type Service = {
  slug: ServiceSlug;
  eyebrow: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  summary: string;
  overviewTitle?: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  targetAudience?: {
    title: string;
    description: string;
    items: string[];
  };
  heroImage: string;
};

export const services: Service[] = [
  {
    slug: "assessoria-empresarial",
    eyebrow: "Estratégia que sai do papel",
    title: "Assessoria Empresarial",
    seoTitle: "Assessoria Empresarial em Brasília",
    seoDescription: "Assessoria empresarial para organizar gestão, finanças, pessoas e processos. Diagnóstico, planejamento e acompanhamento para pequenas e médias empresas.",
    keywords: ["assessoria empresarial", "consultoria empresarial", "assessoria empresarial Brasília", "diagnóstico empresarial"],
    summary: "Nossa principal frente de atuação: assessoria integrada em gestão, finanças, pessoas e processos para apoiar a rotina e as decisões da empresa.",
    description: "Analisamos o momento da empresa, identificamos gargalos e estruturamos um plano objetivo, com prioridades, responsáveis e indicadores.",
    outcomes: ["Prioridades bem definidas", "Processos mais eficientes", "Crescimento com método"],
    deliverables: ["Diagnóstico empresarial", "Planejamento estratégico", "Mapeamento e melhoria de processos", "Indicadores e plano de ação"],
    heroImage: "/images/assessoria-reuniao-estrategica.webp",
  },
  {
    slug: "bpo-financeiro",
    eyebrow: "Controle para decidir melhor",
    title: "BPO Financeiro",
    seoTitle: "BPO Financeiro em Brasília",
    seoDescription: "BPO financeiro em Brasília e atendimento nacional: contas a pagar e receber, conciliação, fluxo de caixa, relatórios e consultoria financeira.",
    keywords: ["BPO financeiro", "terceirização financeira", "BPO financeiro Brasília", "gestão financeira empresarial"],
    summary: "Sua rotina financeira organizada por especialistas, com visão clara do que acontece no negócio.",
    description: "Assumimos processos financeiros essenciais e transformamos dados dispersos em uma visão gerencial confiável para apoiar decisões mais seguras. A proposta é definida conforme o porte da empresa, o volume de rotinas e a complexidade da operação.",
    outcomes: ["Mais previsibilidade de caixa", "Rotina financeira organizada", "Decisões apoiadas por indicadores"],
    deliverables: ["Contas a receber", "Contas a pagar", "Controle de transferências", "Conciliação bancária", "Relatórios gerenciais e indicadores financeiros", "Fluxo de caixa mensal e anual", "Precificação e consultoria financeira", "Sistema financeiro incluso"],
    heroImage: "/images/luis-bpo-financeiro.webp",
  },
  {
    slug: "registro-de-marca",
    eyebrow: "Propriedade intelectual",
    title: "Registro de Marca",
    seoTitle: "Registro de Marca em Brasília",
    seoDescription: "Registro de marca no INPI com busca de anterioridade, definição de classes e acompanhamento processual. Entenda as etapas para proteger o nome que seu negócio construiu.",
    keywords: ["registro de marca", "registro de marca INPI", "registro de marca Brasília", "busca de anterioridade", "propriedade intelectual empresarial"],
    summary: "Proteja o nome que seu negócio já construiu. Orientação para busca, definição de classes e acompanhamento do pedido no INPI.",
    description: "Apoiamos empresas na organização das etapas do pedido de registro de marca, incluindo pesquisa de anterioridade, avaliação das classes pertinentes e acompanhamento administrativo. A concessão depende da análise e decisão do INPI.",
    outcomes: ["Mais clareza sobre as etapas do pedido", "Análise inicial de disponibilidade e classes pertinentes", "Acompanhamento de prazos e comunicações do processo"],
    deliverables: ["Pesquisa de anterioridade", "Orientação para definição das classes e apresentação da marca", "Preparação e protocolo do pedido, conforme escopo aprovado", "Acompanhamento do processo e orientação sobre exigências e oposições"],
    heroImage: "/images/hero-registro-marca.webp",
  },
  {
    slug: "assessoria-juridica-empresarial",
    eyebrow: "Crescer com segurança",
    title: "Compliance e Assessoria Jurídica",
    seoTitle: "Assessoria Jurídica Empresarial em Brasília",
    seoDescription: "Assessoria jurídica empresarial em Brasília para contratos, compliance, LGPD, governança e prevenção de riscos, com atendimento em todo o Brasil.",
    keywords: ["assessoria jurídica empresarial", "advogado empresarial Brasília", "contratos empresariais", "compliance", "LGPD para empresas"],
    summary: "Assessoria consultiva em contratos, conformidade, governança e proteção de dados, com atuação técnica e informativa.",
    description: "Apoiamos a organização jurídica e documental de empresas e projetos, com análise individualizada, caráter preventivo e observância às normas aplicáveis à advocacia.",
    outcomes: ["Riscos identificados com antecedência", "Relações comerciais mais bem documentadas", "Governança proporcional ao negócio"],
    deliverables: ["Revisão e elaboração de contratos", "Compliance e códigos internos", "LGPD e proteção de dados", "Orientação jurídica empresarial"],
    heroImage: "/images/eduardo-assessoria-juridica.webp",
  },
  {
    slug: "gestao-de-pessoas",
    eyebrow: "Pessoas certas, estrutura saudável",
    title: "Gestão de Pessoas",
    seoTitle: "Gestão de Pessoas para Empresas",
    seoDescription: "Assessoria em gestão de pessoas, recrutamento e seleção, liderança, desempenho, cargos e salários para empresas em Brasília e todo o Brasil.",
    keywords: ["gestão de pessoas", "recrutamento e seleção", "consultoria de RH Brasília", "desenvolvimento de lideranças"],
    summary: "Práticas de RH que conectam talentos, liderança e cultura aos objetivos da organização.",
    description: "Apoiamos a empresa na construção de equipes mais alinhadas, lideranças preparadas e políticas transparentes para desenvolver e reter talentos.",
    outcomes: ["Papéis e expectativas claros", "Lideranças mais preparadas", "Maior coerência na gestão"],
    deliverables: ["Recrutamento e seleção", "Cargos, salários e competências", "Avaliação de desempenho", "Treinamento e desenvolvimento"],
    heroImage: "/images/instagram/luis-executivo.webp",
  },
  {
    slug: "consultoria-planejamento-tributario",
    eyebrow: "Direito tributário e gestão fiscal",
    title: "Consultoria e Planejamento Tributário",
    seoTitle: "Consultoria e Planejamento Tributário em Brasília",
    seoDescription: "Consultoria tributária, assessoria fiscal preventiva, fiscalizações, contencioso administrativo e judicial e recuperação de créditos fiscais.",
    keywords: ["consultoria tributária", "planejamento tributário", "assessoria fiscal", "recuperação de créditos fiscais"],
    summary: "Conhecimentos jurídicos e contábeis integrados para orientar decisões tributárias em múltiplos setores, nas esferas administrativa e judicial.",
    description: "Nossa equipe multidisciplinar integra conhecimentos jurídicos e contábeis para oferecer consultoria e planejamento tributário de alta precisão em múltiplos setores da economia, cobrindo as esferas administrativa e judicial. Realizamos auditorias voltadas a reestruturações societárias e prestamos assessoria fiscal preventiva, trabalhando lado a lado com os departamentos fiscal e contábil dos clientes para mitigar riscos com o fisco.",
    outcomes: ["Análise tributária alinhada ao setor de atuação", "Integração com os departamentos fiscal e contábil", "Assessoria preventiva e acompanhamento de riscos fiscais"],
    deliverables: [
      "Consultoria Tributária Setorial: atuação especializada em infraestrutura, construção civil, serviços, indústria, comércio, agronegócio, educação, franquias e tecnologia.",
      "Acompanhamento de Fiscalizações: suporte estratégico em procedimentos fiscais nas instâncias municipal, estadual e federal.",
      "Contencioso Administrativo: defesa técnica contra autos de infração e demais autuações junto aos órgãos fiscais.",
      "Contencioso Judicial: condução de ações e medidas judiciais relacionadas a matérias tributárias.",
      "Recuperação de Créditos Fiscais: identificação e restituição de tributos pagos indevidamente ou a maior, conforme análise técnica e requisitos legais.",
    ],
    heroImage: "/images/hero-empresa-editorial.webp",
  },
  {
    slug: "consultoria-de-marketing",
    eyebrow: "Estratégia de marketing",
    title: "Consultoria de Marketing",
    seoTitle: "Consultoria de Marketing Empresarial",
    seoDescription: "Consultoria de marketing empresarial para posicionamento de marca, conteúdo, canais e alinhamento com vendas, conectada à operação e aos objetivos do negócio.",
    keywords: ["consultoria de marketing empresarial", "consultoria de marketing Brasília", "posicionamento de marca", "planejamento de conteúdo", "estratégia de canais", "alinhamento entre marketing e vendas", "atração e qualificação de demanda"],
    summary: "Estratégia de posicionamento, conteúdo e canais conectada aos objetivos e à realidade da empresa.",
    overviewTitle: "Marketing dentro da estratégia.",
    description: "Marketing precisa conversar com a gestão, a capacidade operacional e os objetivos comerciais. A consultoria considera o cenário atual, a concorrência e o público para organizar prioridades de posicionamento, comunicação e vendas no curto, médio e longo prazo.",
    outcomes: ["Leitura do posicionamento, do público e do contexto competitivo", "Diretrizes de mensagem, conteúdo e canais prioritários", "Plano de ação relacionado a objetivos e recursos"],
    deliverables: [
      "Diagnóstico e posicionamento de marca: análise do cenário atual, do público e da concorrência para identificar diferenciais que podem orientar a comunicação.",
      "Planejamento estratégico de conteúdo e canais: definição de diretrizes editoriais, mensagens-chave e ações nos canais mais relevantes para o processo de decisão dos clientes.",
      "Atração e qualificação de demanda: estratégias para aproximar públicos aderentes, estruturar a captação e qualificar oportunidades, com critérios de acompanhamento compatíveis com os recursos disponíveis.",
      "Alinhamento entre vendas e posicionamento: revisão da consistência entre o discurso de mercado, a experiência do cliente e o que a empresa entrega.",
    ],
    targetAudience: {
      title: "Marketing com direção de negócio.",
      description: "A consultoria é indicada para negócios que buscam organizar a comunicação como parte da estratégia empresarial.",
      items: [
        "Empresas com operação estruturada que querem avaliar fatores ligados à estagnação das vendas ou à atração de novos clientes.",
        "Negócios que precisam profissionalizar a comunicação e o posicionamento para conversar com públicos e mercados mais exigentes.",
        "Empresas que procuram conectar marketing à realidade financeira, operacional e às metas do negócio.",
      ],
    },
    heroImage: "/images/hero-conteudos-editorial.webp",
  },
];

export type HomeServiceGroupId = "operations" | "protection" | "growth";

export type HomeServiceGroup = {
  id: HomeServiceGroupId;
  title: string;
  description: string;
  serviceSlugs: ServiceSlug[];
};

export const homeServiceGroups: HomeServiceGroup[] = [
  {
    id: "operations",
    title: "Organizar a operação",
    description: "Gestão, finanças e pessoas com mais clareza na rotina.",
    serviceSlugs: ["assessoria-empresarial", "bpo-financeiro", "gestao-de-pessoas"],
  },
  {
    id: "protection",
    title: "Proteger a empresa",
    description: "Atenção aos aspectos jurídicos, de conformidade e tributários.",
    serviceSlugs: ["assessoria-juridica-empresarial", "consultoria-planejamento-tributario"],
  },
  {
    id: "growth",
    title: "Crescer com apoio",
    description: "Proteção da marca e comunicação alinhada aos objetivos do negócio.",
    serviceSlugs: ["registro-de-marca", "consultoria-de-marketing"],
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
  coverImage: string;
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
    coverImage: "/images/strategy-session.png",
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
    coverImage: "/images/instagram/luis-financeiro.webp",
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
    coverImage: "/images/eduardo-contratos.webp",
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
    coverImage: "/images/instagram/governanca-abstrata.png",
  },
];
