import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

interface ServiceOfferProps {
  price: string;
  period: string;
  note: string;
}

export function ServiceOffer({ price, period, note }: ServiceOfferProps) {
  return (
    <section className="section service-offer-section">
      <div className="container service-offer">
        <div>
          <span className="eyebrow">Condição inicial</span>
          <h2>Seu financeiro organizado enquanto você foca na empresa.</h2>
          <p>Uma rotina executada por especialistas, com informação clara para acompanhar o caixa e decidir com mais segurança.</p>
        </div>
        <aside className="service-price-card" aria-label={`Investimento a partir de ${price} ${period}`}>
          <span>A partir de</span>
          <strong>{price}</strong>
          <small>{period}</small>
          <p>{note}</p>
          <Link className="button button-gold" href="/diagnostico">Solicitar uma reunião <ArrowRight /></Link>
        </aside>
      </div>
    </section>
  );
}
