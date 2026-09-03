import Link from "next/link";
export default function NotFound() { return <section className="not-found"><div><span className="eyebrow">Erro 404</span><h1>Esta página não foi encontrada.</h1><p>O endereço pode ter mudado. Volte ao início para continuar navegando.</p><Link className="button button-gold" href="/">Voltar ao início</Link></div></section>; }
