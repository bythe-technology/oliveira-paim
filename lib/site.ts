export const site = {
  legalName: "Oliveira & Paim Assessoria Empresarial LTDA",
  cnpj: "55.886.565/0001-00",
  name: "Oliveira & Paim Assessoria Empresarial",
  shortName: "Oliveira & Paim",
  description:
    "Assessoria empresarial e jurídica em Brasília, com atendimento nacional em BPO financeiro, gestão de pessoas, compliance, LGPD e contratos empresariais.",
  alternateNames: ["Oliveira e Paim", "O&P Assessoria Empresarial", "OP Assessoria"],
  keywords: [
    "Oliveira e Paim",
    "Oliveira & Paim",
    "assessoria empresarial Brasília",
    "assessoria jurídica empresarial",
    "advogado empresarial Brasília",
    "BPO financeiro Brasília",
    "consultoria empresarial Brasília",
    "compliance empresarial",
    "LGPD para empresas",
    "contratos empresariais",
    "gestão de pessoas",
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.oliveirapaim.com.br",
  email: "oliveirapaimassessoria@gmail.com",
  phone: "5561999823311",
  phoneDisplay: "(61) 99982-3311",
  serviceArea: "Atendimento em todo o Brasil",
  location: "Brasília/DF",
  instagram: "https://www.instagram.com/oliveiraepaim/",
  linkedin: "https://br.linkedin.com/company/op-assessoria",
  privacyEmail: "oliveirapaimassessoria@gmail.com",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
}
