import { EnvelopeSimple, InstagramLogo, LinkedinLogo, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/section";
import { site, whatsappUrl } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata("Contato em Brasília", "Fale com a Oliveira & Paim Assessoria Empresarial e Jurídica. Sede em Brasília e atendimento em todo o Brasil.", "/contato", "/images/hero-contato-editorial.webp");

export default function ContatoPage() {
  const items = [[WhatsappLogo, "WhatsApp", site.phoneDisplay, whatsappUrl("Olá! Vim pelo site da Oliveira & Paim e gostaria de conversar.")], [EnvelopeSimple, "E-mail", site.email, `mailto:${site.email}`], [MapPin, "Localização", site.location, null], [InstagramLogo, "Instagram", "@oliveiraepaim", site.instagram], [LinkedinLogo, "LinkedIn", "Oliveira & Paim", site.linkedin]] as const;
  return <><PageHero className="company-hero" eyebrow="Contato" title="Vamos conversar sobre o próximo passo da sua empresa." text="Atendemos empresas, organizações da sociedade civil e produtores culturais em todo o Brasil. Escolha o canal mais conveniente para conversar com nossa equipe." image="/images/hero-contato-editorial.webp" imageAlt="Cena ilustrativa de ambiente para atendimento consultivo" /><section className="section"><div className="container contact-grid">{items.map(([Icon, label, value, href]) => <article key={label}><Icon size={34} weight="thin" aria-hidden="true" /><span>{label}</span>{href ? <a href={href} aria-label={`${label}: ${value}`} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"><h2>{value}</h2></a> : <h2>{value}</h2>}</article>)}</div></section></>;
}
