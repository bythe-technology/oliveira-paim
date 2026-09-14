import { PageHero } from "@/components/section";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = createMetadata("Política de Privacidade", "Entenda como a Oliveira & Paim trata dados pessoais conforme a LGPD.", "/privacidade");

export default function PrivacidadePage() {
  return <><PageHero eyebrow="Privacidade e LGPD" title="Transparência no tratamento de dados pessoais." text="Conheça as práticas aplicáveis aos dados tratados por meio deste site e de seus canais de atendimento." image="/images/instagram/governanca-abstrata.png" imageAlt="Representação visual de governança e proteção de informações" /><article className="section legal"><div className="narrow">
    <p className="muted">Última atualização: 14 de setembro de 2026.</p>
    <h2>Controlador</h2><p>O controlador é {site.legalName}, CNPJ {site.cnpj}, com atuação em Brasília/DF e atendimento em todo o Brasil. Dúvidas sobre privacidade podem ser enviadas para <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. Este é o canal de privacidade da empresa; eventual identificação formal de encarregado será atualizada nesta política.</p>
    <h2>Dados e finalidades</h2><p>Podemos tratar nome, empresa, área de interesse, descrição do desafio e dados de contato fornecidos voluntariamente. Esses dados são usados para responder solicitações, realizar atendimento pré-contratual, elaborar propostas, cumprir obrigações legais e proteger direitos. Dados técnicos mínimos, como endereço IP, navegador e registros de acesso, podem ser processados pela infraestrutura para disponibilização e segurança do site.</p>
    <h2>Bases legais</h2><p>Conforme o caso, o tratamento se fundamenta em procedimentos preliminares relacionados a contrato, execução de contrato, cumprimento de obrigação legal ou regulatória, exercício regular de direitos, legítimo interesse com avaliação de necessidade e impacto, ou consentimento quando exigido.</p>
    <h2>Diagnóstico e WhatsApp</h2><p>O formulário prepara a mensagem no navegador e não mantém as respostas em banco de dados próprio. Ao continuar, os dados são encaminhados pelo usuário ao WhatsApp e passam a ser tratados pela Oliveira & Paim para atendimento, além de estarem sujeitos às políticas da plataforma.</p>
    <h2>Compartilhamento, retenção e segurança</h2><p>Dados podem ser processados por fornecedores essenciais de hospedagem e comunicação, limitados à prestação de seus serviços, ou compartilhados quando houver obrigação legal. São mantidos pelo período necessário às finalidades informadas, à relação contratual e aos prazos legais. Adotamos medidas administrativas e técnicas proporcionais aos riscos, embora nenhum ambiente digital seja totalmente imune a incidentes.</p>
    <h2>Direitos dos titulares</h2><p>Nos termos da LGPD, o titular pode solicitar confirmação e acesso, correção, anonimização, bloqueio ou eliminação quando cabíveis, portabilidade, informação sobre compartilhamentos, revisão de decisões automatizadas, oposição e revogação do consentimento. A solicitação poderá exigir confirmação de identidade.</p>
    <h2>Cookies e Analytics</h2><p>O funcionamento básico não depende de cookies de publicidade. Caso a medição analítica seja ativada, ela somente será carregada após consentimento, que poderá ser recusado. Preferências de consentimento são armazenadas localmente no navegador.</p>
    <h2>Links de terceiros e alterações</h2><p>Instagram, LinkedIn e WhatsApp possuem políticas próprias. Esta política poderá ser atualizada para refletir mudanças legais, técnicas ou operacionais, com indicação da data da versão vigente.</p>
  </div></article></>;
}
