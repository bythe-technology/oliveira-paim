import { ArrowRight, Tag } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export function TrademarkHomeCallout() {
  return <aside className="trademark-home-callout">
    <span className="trademark-home-icon"><Tag size={26} weight="regular" aria-hidden="true" /></span>
    <div>
      <span className="eyebrow">Um bom primeiro passo</span>
      <h3>Quer entender como registrar o nome da sua empresa?</h3>
      <p>Veja como funciona a busca de anterioridade, a definição de classes e o acompanhamento do pedido no INPI.</p>
    </div>
    <Link className="text-link dark" href="/solucoes/registro-de-marca">Conheça Registro de Marca <ArrowRight aria-hidden="true" /></Link>
  </aside>;
}
