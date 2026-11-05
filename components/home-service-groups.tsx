import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { serviceGroupIcons, serviceIcons } from "@/components/icons";
import { homeServiceGroups, services } from "@/lib/content";

const servicesBySlug = new Map(services.map((service) => [service.slug, service]));

export function HomeServiceGroups() {
  return (
    <div className="service-groups">
      {homeServiceGroups.map((group, groupIndex) => {
        const GroupIcon = serviceGroupIcons[group.id];

        return (
          <article
            className="service-group reveal"
            style={{ "--reveal-delay": `${groupIndex * 90}ms` } as CSSProperties}
            key={group.id}
          >
            <header className="service-group-heading">
              <GroupIcon size={32} weight="light" aria-hidden="true" />
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </header>
            <div className="service-group-list">
              {group.serviceSlugs.map((slug) => {
                const service = servicesBySlug.get(slug);
                if (!service) return null;

                const ServiceIcon = serviceIcons[service.slug];
                return (
                  <Link className="service-group-link" href={`/solucoes/${service.slug}`} key={service.slug}>
                    <ServiceIcon size={22} weight="regular" aria-hidden="true" />
                    <span>
                      {service.title}
                      <small>{service.summary}</small>
                    </span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
}
