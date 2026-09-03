export const site = {
  name: "Oliveira & Paim Assessoria Empresarial",
  shortName: "Oliveira & Paim",
  description:
    "BPO financeiro, consultoria, gestão de pessoas, compliance e assessoria jurídica para empresas que querem crescer com clareza e estrutura.",
  url: "https://oliveira-paim.vercel.app",
  email: "oliveirapaimassessoria@gmail.com",
  phone: "5561999823311",
  phoneDisplay: "(61) 99982-3311",
  serviceArea: "Atendimento em todo o Brasil",
  location: "Brasília/DF",
  instagram: "https://www.instagram.com/oliveiraepaim/",
  linkedin: "https://br.linkedin.com/company/op-assessoria",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
}
