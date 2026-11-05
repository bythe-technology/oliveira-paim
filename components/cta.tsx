import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type CtaBandProps = {
  title?: string;
  href?: string;
  label?: string;
};

export function CtaBand({
  title = "Vamos entender o que sua empresa precisa organizar?",
  href = "/diagnostico",
  label = "Solicitar diagnóstico",
}: CtaBandProps) {
  return <section className="cta-band"><div className="container cta-band-inner"><div><span className="eyebrow">Próximo passo</span><h2>{title}</h2></div><Link className="button button-gold" href={href}>{label} <ArrowRight weight="bold" aria-hidden="true" /></Link></div></section>;
}
