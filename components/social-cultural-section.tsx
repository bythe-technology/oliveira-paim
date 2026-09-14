import { SectionTitle } from "./section";
import { whatsappUrl } from "@/lib/site";

export function SocialCulturalSection({ compact = false }: { compact?: boolean }) {
  if (compact) return <section className="section section-soft"><div className="container"><SectionTitle eyebrow="Projetos sociais e culturais" title="Assessoria integrada para iniciativas de impacto." text="Apoio administrativo, financeiro e jurídico para organizações da sociedade civil e produtores culturais." /><a className="text-link dark" href="/empresa#projetos-sociais-culturais">Conhecer esta atuação em detalhes →</a></div></section>;
  return (
    <section className="section section-soft" id="projetos-sociais-culturais">
      <div className="container">
        <SectionTitle eyebrow="Projetos sociais e culturais" title="Gestão e segurança jurídica para iniciativas que geram impacto." text="Também atendemos organizações da sociedade civil e produtores culturais em todo o Brasil, com assessoria administrativa, financeira e jurídica integrada." />
        <div className="split" style={{ marginTop: 32, gap: 32, alignItems: "start" }}>
          <div><h3>Assessoria administrativa e financeira</h3><p className="large-copy">Luís Henrique Oliveira Paim apoia a organização administrativa e financeira, o planejamento, a estruturação de projetos e a gestão de processos, com experiência em iniciativas públicas, privadas e culturais.</p></div>
          <div><h3>Assessoria jurídica</h3><p className="large-copy">Eduardo Osmar de Oliveira atua na elaboração e revisão de contratos e parcerias, direitos autorais e de imagem, proteção de dados e conformidade documental, apoiando a prevenção de riscos na execução dos projetos.</p></div>
        </div>
        <a className="button button-gold" href={whatsappUrl("Olá! Gostaria de solicitar um diagnóstico para um projeto social ou cultural.")} target="_blank" rel="noopener noreferrer">Solicitar diagnóstico</a>
      </div>
    </section>
  );
}
