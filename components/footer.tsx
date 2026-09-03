import Link from "next/link";
import Image from "next/image";
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./logo";
import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><Logo light /><p>Gestão organizada, decisões mais seguras e crescimento com estrutura.</p></div>
        <div><h3>Navegação</h3><Link href="/empresa">A empresa</Link><Link href="/solucoes">Soluções</Link><Link href="/conteudos">Conteúdos</Link><Link href="/diagnostico">Diagnóstico</Link></div>
        <div><h3>Contato</h3><a href={whatsappUrl("Olá! Gostaria de conversar com a Oliveira & Paim.")} target="_blank" rel="noreferrer">{site.phoneDisplay}</a><a href={`mailto:${site.email}`}>{site.email}</a><span>{site.location}</span><span>{site.serviceArea}</span></div>
        <div><h3>Acompanhe</h3><div className="socials"><a href={site.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><InstagramLogo aria-hidden="true" /></a><a href={site.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><LinkedinLogo aria-hidden="true" /></a><a href={whatsappUrl("Olá! Gostaria de saber mais sobre os serviços.")} aria-label="WhatsApp" target="_blank" rel="noreferrer"><WhatsappLogo aria-hidden="true" /></a></div></div>
      </div>
      <div className="container footer-signature">
        <a className="bythe-badge" href="https://bythe.tech" target="_blank" rel="noopener noreferrer" aria-label="Desenvolvido por BYTHE — visitar site (abre em nova aba)">
          <span>Desenvolvido por</span>
          <span className="bythe-badge-mark"><Image src="/images/bythe-logo.svg" alt="BYTHE" width={34} height={27} /></span>
        </a>
        <p>© {new Date().getFullYear()} Oliveira &amp; Paim. Todos os direitos reservados.</p>
        <Link className="footer-privacy" href="/privacidade">Privacidade</Link>
      </div>
    </footer>
  );
}
