import { site } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: site.alternateNames,
    legalName: site.legalName,
    taxID: site.cnpj,
    url: site.url,
    logo: `${site.url}/icon.png`,
    image: `${site.url}/images/hero-socios.png`,
    description: site.description,
    email: site.email,
    telephone: site.phoneDisplay,
    areaServed: { "@type": "Country", name: "Brasil" },
    address: { "@type": "PostalAddress", addressLocality: "Brasília", addressRegion: "DF", addressCountry: "BR" },
    sameAs: [site.instagram, site.linkedin],
    founder: [
      { "@type": "Person", name: "Luís Henrique Oliveira Paim", jobTitle: "Diretor Executivo" },
      { "@type": "Person", name: "Eduardo Osmar de Oliveira", jobTitle: "Diretor Jurídico" },
    ],
    knowsAbout: ["Assessoria empresarial", "BPO financeiro", "Gestão de pessoas", "Compliance", "LGPD", "Contratos empresariais", "Assessoria jurídica empresarial"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    alternateName: site.alternateNames,
    inLanguage: "pt-BR",
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function breadcrumbsSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: `${site.url}${item.path}` })),
  };
}

export function serviceSchema(service: { title: string; summary: string; slug: string }) {
  const url = `${site.url}/solucoes/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,
    name: service.title,
    description: service.summary,
    url,
    serviceType: service.title,
    areaServed: { "@type": "Country", name: "Brasil" },
    provider: { "@id": `${site.url}/#organization` },
  };
}

export function articleSchema(article: { title: string; excerpt: string; slug: string; coverImage: string }) {
  const url = `${site.url}/conteudos/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}/#article`,
    headline: article.title,
    description: article.excerpt,
    image: `${site.url}${article.coverImage}`,
    mainEntityOfPage: url,
    inLanguage: "pt-BR",
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
