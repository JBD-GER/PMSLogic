import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { FaqList } from "@/components/FaqList";
import { SpaHotelImage } from "@/components/HotelImages";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ServiceVisual } from "@/components/ServiceVisual";
import {
  breadcrumbSchema,
  createMetadata,
  faqSchema,
  serviceSchema,
  servicePages,
  softwareSchema,
  webPageSchema
} from "@/lib/content";

type ServiceParams = {
  params: Promise<{
    slug: string;
  }>;
};

function getService(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params
}: ServiceParams): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return createMetadata({
      title: "PMSLogic Leistungen",
      description: "PMSLogic Leistungen für moderne Hotelsoftware.",
      path: "/leistungen"
    });
  }

  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/leistungen/${service.slug}`
  });
}

export default async function ServiceDetailPage({ params }: ServiceParams) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const related = servicePages.filter((item) => item.slug !== service.slug);

  return (
    <>
      <JsonLd id={`${service.slug}-software-jsonld`} data={softwareSchema()} />
      <JsonLd id={`${service.slug}-service-jsonld`} data={serviceSchema(service)} />
      <JsonLd
        id={`${service.slug}-webpage-jsonld`}
        data={webPageSchema({
          name: service.title,
          description: service.metaDescription,
          path: `/leistungen/${service.slug}`,
          primaryImage:
            service.slug === "wellness-spa-zusatzbereiche"
              ? "/hotel-images/spa-wellness.jpg"
              : "/seo/pmslogic-og.jpg"
        })}
      />
      <JsonLd id={`${service.slug}-faq-jsonld`} data={faqSchema(service.faq)} />
      <JsonLd
        id={`${service.slug}-breadcrumb-jsonld`}
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Leistungen", path: "/leistungen" },
          { name: service.label, path: `/leistungen/${service.slug}` }
        ])}
      />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        text={service.lead}
        secondaryHref="/demo"
        secondaryLabel="Demo anfragen"
      >
        {service.slug === "wellness-spa-zusatzbereiche" ? (
          <SpaHotelImage />
        ) : (
          <ServiceVisual title={service.label} steps={service.process} />
        )}
      </PageHero>

      <section className="section">
        <div className="container split-section">
          <div className="split-copy">
            <p className="eyebrow">Nutzen</p>
            <h2>{service.promise}</h2>
            <p>
              PMSLogic stellt diese Leistung als zusammenhängenden Prozess dar:
              nicht als isolierte Funktion, sondern als Arbeitsfluss für Teams,
              Gäste und Verwaltung.
            </p>
            <ul className="check-list">
              {service.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
          <div className="module-stack">
            {service.modules.map((module) => (
              <article className="module-stack-card" key={module.title}>
                <span>{module.title}</span>
                <p>{module.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container seo-panel">
          <p className="eyebrow">Einordnung</p>
          <h2>{service.label} mit PMSLogic</h2>
          {service.seoText.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">FAQ</p>
              <h2>Fragen zu {service.label}</h2>
              <p>
                Kurze Antworten zu Einsatz, Nutzen und technischer Einordnung
                dieser PMSLogic Leistung.
              </p>
            </div>
          </div>
          <FaqList items={service.faq} />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Weitere Leistungen</p>
              <h2>Verbundene Bereiche der Hotelsoftware</h2>
              <p>
                PMSLogic entfaltet den größten Nutzen, wenn Reservierung,
                Betrieb, Abrechnung, Kommunikation und Auswertung verbunden
                betrachtet werden.
              </p>
            </div>
          </div>
          <div className="service-grid compact">
            {related.slice(0, 4).map((item) => (
              <Link
                href={`/leistungen/${item.slug}`}
                className="service-card"
                key={item.slug}
              >
                <span className="service-card-eyebrow">{item.eyebrow}</span>
                <h3>{item.label}</h3>
                <p>{item.promise}</p>
                <strong>Mehr erfahren</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`${service.label} live in PMSLogic sehen`}
        text="Fordern Sie eine kostenlose Demo an. Wir zeigen die Leistung anhand realistischer Hotelprozesse und Ihrer aktuellen Anforderungen."
        secondaryHref="/leistungen"
        secondaryLabel="Alle Leistungen"
      />
    </>
  );
}
