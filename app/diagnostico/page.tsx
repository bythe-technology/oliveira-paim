import Link from "next/link";
import { DiagnosticForm } from "@/components/diagnostic-form";
import { PageHero, SectionTitle } from "@/components/section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("Diagnóstico Empresarial Completo", "Entenda as causas dos desafios da sua empresa. O diagnóstico conecta finanças, processos, pessoas e riscos para orientar prioridades e um plano de ação.", "/diagnostico", "/images/instagram/luis-financeiro.webp");

const dimensions = [
  ["Finanças", "Fluxo de caixa, margem, preços e prazos de recebimento: o retrato financeiro do momento."],
  ["Processos", "Como o trabalho acontece, onde surgem retrabalhos e quais gargalos limitam a operação."],
  ["Pessoas", "Responsabilidades, liderança e alinhamento da equipe com as prioridades do negócio."],
  ["Riscos", "Pontos de atenção jurídicos, documentais e de gestão que precisam entrar na decisão."],
];
const signs = ["Fecha o mês sem saber a margem real", "Fatura, mas o caixa não acompanha", "Decide pela urgência da semana", "O dono é o gargalo de tudo", "O preço foi definido olhando o concorrente", "A equipe não sabe a prioridade do trimestre", "Crescer aumentou o problema"];

export default function DiagnosticoPage() {
  return <>
    <PageHero eyebrow="Diagnóstico empresarial" title="Antes de decidir, entenda o que está acontecendo." text="O sintoma pode ser o mesmo. A causa quase nunca é. O diagnóstico conecta finanças, processos, pessoas e riscos para entender o cenário da empresa e orientar o próximo passo." image="/images/instagram/luis-financeiro.webp" imageAlt="Luís Henrique Oliveira Paim, Diretor Executivo da Oliveira & Paim"><Link className="button button-gold" href="#solicitar-diagnostico">Solicitar diagnóstico completo</Link></PageHero>
    <section className="section"><div className="container split"><SectionTitle eyebrow="Da dúvida à clareza" title="O diagnóstico antecede o serviço." text="Você não precisa chegar sabendo se precisa de BPO financeiro, gestão de pessoas ou assessoria jurídica. Primeiro, entendemos o que está acontecendo; depois, identificamos o suporte adequado." /><div><h2>O caixa apertou. Mas por quê?</h2><p className="large-copy">Em uma empresa, o problema pode estar no preço. Em outra, no prazo de recebimento. Em uma terceira, em uma linha de produto que vende bem e dá prejuízo.</p><p className="large-copy">Agir apenas sobre o sintoma pode deixar a causa intacta. É o cruzamento das informações que permite enxergar como os problemas se conectam.</p></div></div></section>
    <section className="section section-soft"><div className="container"><SectionTitle eyebrow="Visão integrada" title="Quatro dimensões, uma leitura do negócio." text="Na rotina, essas áreas costumam ser tratadas separadamente. O diagnóstico analisa suas relações." /><div className="values-grid">{dimensions.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section dark-section"><div className="container split"><SectionTitle eyebrow="O que um diagnóstico entrega" title="Uma direção para os próximos passos." text="O trabalho organiza o cenário e transforma a análise em prioridades, conforme o escopo definido para sua empresa." /><ul><li>Prioridades para os próximos 30, 60 e 90 dias.</li><li>Indicadores que a empresa vai acompanhar.</li><li>O retrato financeiro do momento.</li><li>Um plano com responsáveis e prazos.</li></ul></div></section>
    <section className="section"><div className="container split"><SectionTitle eyebrow="Reconhece algum desses sinais?" title="Quando vale olhar para a empresa como um todo." text="Esses sinais ajudam a iniciar a conversa. A análise do contexto é que orienta as prioridades." /><ul>{signs.map(sign => <li key={sign}>{sign}</li>)}</ul></div></section>
    <section className="section section-soft" id="solicitar-diagnostico"><div className="container form-layout"><div><h2>Conte o que está acontecendo.</h2><p>Informe seu nome, sua empresa e o principal desafio que está vivendo. Não é necessário escolher uma área ou identificar a causa agora.</p><p>A solicitação seguirá para o WhatsApp da nossa equipe, onde combinaremos os próximos passos e o escopo do diagnóstico.</p></div><DiagnosticForm /></div></section>
  </>;
}
