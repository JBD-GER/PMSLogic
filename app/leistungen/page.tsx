import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ServicesHeroImage } from "@/components/HotelImages";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ServiceVisual } from "@/components/ServiceVisual";
import {
  breadcrumbSchema,
  createMetadata,
  itemListSchema,
  servicePages,
  softwareSchema,
  webPageSchema
} from "@/lib/content";

export const metadata = createMetadata({
  title: "PMSLogic Leistungen | Hotelsoftware, PMS, Housekeeping, KI und Reporting",
  description:
    "PMSLogic Leistungen für Hotels: Hotel PMS, Reservierungsmanagement, Housekeeping, Rechnungen, Gästekommunikation, Integrationen, Reporting und KI.",
  path: "/leistungen"
});

export default function LeistungenPage() {
  return (
    <>
      <JsonLd id="services-software-jsonld" data={softwareSchema()} />
      <JsonLd
        id="services-webpage-jsonld"
        data={webPageSchema({
          name: "PMSLogic Leistungen",
          description:
            "Leistungen für digitale Hotelprozesse: Hotel PMS, Reservierungsmanagement, Housekeeping, Rechnungen, Gästekommunikation, Integrationen, Reporting und KI.",
          path: "/leistungen",
          primaryImage: "/hero-images/leistungen-hotelprozesse.jpg"
        })}
      />
      <JsonLd
        id="services-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Leistungen", path: "/leistungen" }
        ])}
      />
      <JsonLd
        id="services-list-jsonld"
        data={itemListSchema({
          name: "PMSLogic Leistungsbereiche",
          description:
            "Leistungsseiten für Hotel PMS, Reservierung, Housekeeping, Rechnungen, Gästekommunikation, Wellness, Integrationen, Reporting und KI.",
          items: servicePages.map((service) => ({
            name: service.label,
            path: `/leistungen/${service.slug}`,
            description: service.metaDescription
          }))
        })}
      />

      <PageHero
        eyebrow="Leistungen"
        title="PMSLogic Leistungen für digitale Hotelprozesse"
        text="Von Hotel PMS und Reservierungsmanagement bis Housekeeping, Rechnungen, Gästekommunikation, Integrationen, Reporting und PMSAI: PMSLogic präsentiert Hotelsoftware als verbundenen Betriebsfluss."
        secondaryHref="/demo"
        secondaryLabel="Demo anfragen"
      >
        <ServicesHeroImage />
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Leistungsbereiche</p>
              <h2>Die wichtigsten Hotelprozesse in eigenen Bereichen erklärt</h2>
              <p>
                Jede Leistungsseite zeigt Nutzen, typische Module, Prozesslogik
                und relevante Fragen. So können Besucher schnell verstehen,
                welcher Teil von PMSLogic ihr konkretes Problem löst.
              </p>
            </div>
          </div>
          <div className="service-grid">
            {servicePages.map((service) => (
              <Link
                href={`/leistungen/${service.slug}`}
                className="service-card"
                key={service.slug}
              >
                <span className="service-card-eyebrow">{service.eyebrow}</span>
                <h3>{service.label}</h3>
                <p>{service.lead}</p>
                <strong>Leistung ansehen</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split-section">
          <div className="split-copy">
            <p className="eyebrow">Präsentation der Leistungen</p>
            <h2>Technisch sauber getrennt, inhaltlich verbunden</h2>
            <p>
              Die Website unterscheidet bewusst zwischen Funktionsmodulen und
              Leistungsseiten. Funktionen erklären, was PMSLogic kann.
              Leistungen erklären, welchen Hotelprozess PMSLogic verbessert.
            </p>
            <ul className="check-list">
              <li>Klare Unterseiten für konkrete Fragen von Hoteliers</li>
              <li>Interne Verlinkung zwischen Funktionen, Leistungen und Demo</li>
              <li>Klare Darstellung für Hoteliers statt rein technischer Module</li>
              <li>Erweiterbar für weitere Branchen- oder Prozessseiten</li>
            </ul>
          </div>
          <ServiceVisual
            title="Hotelsoftware Prozess"
            steps={[
              "Anfrage",
              "Reservierung",
              "Aufenthalt",
              "Abrechnung",
              "Auswertung"
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Welche PMSLogic Leistung ist für Ihr Hotel entscheidend?"
        text="In der Demo sprechen wir über Ihre aktuellen Abläufe und zeigen genau die Bereiche, die für Ihr Haus relevant sind."
        secondaryHref="/funktionen"
        secondaryLabel="Funktionen ansehen"
      />
    </>
  );
}
