import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function CtaBand() {
  return <section className="cta-band"><div className="container cta-band-inner"><div><span className="eyebrow">Próximo passo</span><h2>Vamos entender o que sua empresa precisa organizar?</h2></div><Link className="button button-gold" href="/diagnostico">Solicitar diagnóstico <ArrowRight weight="bold" /></Link></div></section>;
}
