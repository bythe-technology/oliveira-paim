"use client";

import Link from "next/link";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Logo } from "./logo";

const links = [
  ["/empresa", "A empresa"],
  ["/solucoes", "Soluções"],
  ["/conteudos", "Conteúdos"],
  ["/contato", "Contato"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Logo light />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link href="/diagnostico" className="button button-gold nav-cta">Agendar diagnóstico</Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>
          {open ? <X size={26} /> : <List size={28} />}
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`}>
        {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link href="/diagnostico" className="button button-gold" onClick={() => setOpen(false)}>Agendar diagnóstico</Link>
      </div>
    </header>
  );
}
