import {
  ArrowRight,
  Buildings,
  CheckCircle,
  ClockCounterClockwise,
  FileText,
  MagnifyingGlass,
  Scales,
  ShieldCheck,
  Tag,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { SectionTitle } from "@/components/section";
import {
  trademarkBenefits,
  trademarkConsiderations,
  trademarkFaqs,
  trademarkScope,
  trademarkSteps,
} from "@/lib/trademark-content";

const benefitIcons = [ShieldCheck, Scales, MagnifyingGlass, Buildings] as const;
const stepIcons = [MagnifyingGlass, Tag, FileText, ClockCounterClockwise, Scales, CheckCircle] as const;
const diagnosticHref = "/diagnostico?assunto=registro-de-marca#solicitar-diagnostico";

export function TrademarkServiceContent() {
  return <>
    <section className="section trademark-intro">
      <div className="container">
        <div className="trademark-intro-copy">
          <SectionTitle
            eyebrow="Como ajudamos"
            title="O nome da sua empresa é um ativo. E ativo se protege."
            text="A marca é uma das formas pelas quais clientes reconhecem um negócio. Orientamos a busca, a definição do escopo e o acompanhamento do pedido de registro junto ao INPI."
          />
          <p className="trademark-legal-note"><ShieldCheck size={25} weight="regular" aria-hidden="true" /><span><strong>O que o registro assegura?</strong> A exclusividade passa a valer após a concessão do INPI e dentro dos produtos ou serviços especificados. A análise e a decisão cabem ao órgão.</span></p>
        </div>
        <div className="trademark-benefit-grid">
          {trademarkBenefits.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return <article className="trademark-benefit" key={benefit.title}>
              <Icon size={27} weight="light" aria-hidden="true" />
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section className="section section-soft trademark-process">
      <div className="container">
        <SectionTitle
          eyebrow="Como funciona"
          title="Um caminho acompanhado em cada etapa."
          text="Da pesquisa inicial às movimentações do pedido, o trabalho é organizado conforme a realidade da empresa e o escopo aprovado."
        />
        <ol className="trademark-step-grid">
          {trademarkSteps.map((step, index) => {
            const Icon = stepIcons[index];
            return <li className="trademark-step" key={step.title}>
              <div className="trademark-step-top"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={24} weight="regular" aria-hidden="true" /></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>;
          })}
        </ol>
        <div className="trademark-process-note"><WarningCircle size={21} aria-hidden="true" /><p>O INPI decide se o pedido pode ser registrado. A busca e a classificação orientam a estratégia, mas não garantem disponibilidade nem concessão.</p></div>
      </div>
    </section>

    <section className="section dark-section trademark-scope">
      <div className="container trademark-scope-layout">
        <div>
          <SectionTitle
            eyebrow="Frentes de atuação"
            title="O escopo acompanha a necessidade da empresa."
            text="O trabalho pode abranger as etapas abaixo, conforme a análise inicial e a proposta aprovada."
          />
          <Link className="text-link" href={diagnosticHref}>Conversar sobre minha marca <ArrowRight aria-hidden="true" /></Link>
        </div>
        <ul className="trademark-scope-list">
          {trademarkScope.map((item) => <li key={item}><CheckCircle size={21} weight="regular" aria-hidden="true" /><span>{item}</span></li>)}
        </ul>
      </div>
    </section>

    <section className="section trademark-considerations">
      <div className="container trademark-considerations-layout">
        <SectionTitle
          eyebrow="Análise preventiva"
          title="Pesquisar antes ajuda a decidir com mais contexto."
          text="Uma avaliação inicial pode revelar pontos que merecem atenção antes de protocolar o pedido ou ampliar os investimentos na marca."
        />
        <ul className="trademark-considerations-list">
          {trademarkConsiderations.map((item) => <li key={item}><MagnifyingGlass size={20} aria-hidden="true" /><span>{item}</span></li>)}
        </ul>
      </div>
    </section>

    <section className="section section-soft trademark-faq-section">
      <div className="container trademark-faq-layout">
        <div className="trademark-investment">
          <SectionTitle
            eyebrow="Atuação personalizada"
            title="O escopo parte do diagnóstico, não de um pacote genérico."
            text="A quantidade de classes, a profundidade da busca e a necessidade de manifestações variam conforme o negócio."
          />
          <div className="trademark-investment-note">
            <Tag size={24} aria-hidden="true" />
            <div><h3>Como é definido o investimento</h3><p>Apresentamos o valor após entender as classes e as etapas necessárias. Serviços adicionais e taxas oficiais são informados separadamente antes de qualquer contratação.</p></div>
          </div>
          <Link className="text-link dark" href={diagnosticHref}>Solicitar diagnóstico <ArrowRight aria-hidden="true" /></Link>
        </div>
        <div className="trademark-faq">
          <span className="eyebrow">Perguntas frequentes</span>
          {trademarkFaqs.map((item) => <details key={item.question}>
            <summary>{item.question}<ArrowRight size={18} aria-hidden="true" /></summary>
            <p>{item.answer}</p>
          </details>)}
        </div>
      </div>
    </section>
  </>;
}
