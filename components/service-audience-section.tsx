import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { SectionTitle } from "@/components/section";

type ServiceAudienceSectionProps = {
  title: string;
  description: string;
  items: string[];
};

export function ServiceAudienceSection({ title, description, items }: ServiceAudienceSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="section section-soft">
      <div className="container split service-audience-layout">
        <SectionTitle eyebrow="Para quem é" title={title} text={description} />
        <ul className="service-audience-list">
          {items.map((item) => (
            <li key={item}>
              <CheckCircle size={22} weight="regular" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
