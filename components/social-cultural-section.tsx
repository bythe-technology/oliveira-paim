import { SectionTitle } from "./section";
import { whatsappUrl } from "@/lib/site";

export function SocialCulturalSection() {
  return (
    <section className="section section-soft">
      <div className="container">
        <SectionTitle eyebrow="Projetos sociais e culturais" title="Gestão e segurança jurídica para iniciativas que geram impacto." text="Também atendemos organizações da sociedade civil e produtores culturais em todo o Brasil, com assessoria administrativa, financeira e jurídica integrada." />
        <div className="split" style={{ marginTop: 32, gap: 32, alignItems: "start" }}>
          <div><h3>Assessoria administrativa e financeira</h3><p className="large-copy">Luís Henrique Oliveira Paim apoia a organização administrativa e financeira, o planejamento, a estruturação de projetos e a gestão de processos, com experiência em iniciativas públicas, privadas e culturais.</p></div>
          <div><h3>Assessoria jurídica</h3><p className="large-copy">Eduardo Osmar de Oliveira atua na elaboração e revisão de contratos e parcerias, direitos autorais e de imagem, proteção de dados e conformidade documental, apoiando a prevenção de riscos na execução dos projetos.</p></div>
        </div>
        <a className="button button-gold" href={whatsappUrl("Olá! Gostaria de conversar sobre assessoria para um projeto social ou cultural.")} target="_blank" rel="noopener noreferrer">Conversar sobre meu projeto</a>
      </div>
    </section>
  );
}
