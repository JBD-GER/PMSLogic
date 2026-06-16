import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FeatureGroupSection } from "@/components/FeatureSections";
import { FunctionsHeroImage } from "@/components/HotelImages";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import {
  breadcrumbSchema,
  createMetadata,
  featureGroups,
  itemListSchema,
  softwareSchema,
  webPageSchema
} from "@/lib/content";

export const metadata = createMetadata({
  title: "PMSLogic Funktionen | Hotel PMS, Reservierungen, Housekeeping, Rechnung",
  description:
    "Alle PMSLogic Funktionen: PMSCore, PMSOperations, PMSChannels, PMSFinance, PMSGuest, PMSRevenue, PMSConnect und PMSAI für moderne Hotelsoftware.",
  path: "/funktionen"
});

export default function FunktionenPage() {
  return (
    <>
      <JsonLd id="functions-software-jsonld" data={softwareSchema()} />
      <JsonLd
        id="functions-webpage-jsonld"
        data={webPageSchema({
          name: "PMSLogic Funktionen",
          description:
            "Alle PMSLogic Funktionen für Hotel PMS, Reservierungen, Belegungsplan, Housekeeping, Rechnung, Gästekommunikation, Integrationen und PMSAI.",
          path: "/funktionen",
          primaryImage: "/hero-images/funktionen-tablet-hotelsoftware.jpg"
        })}
      />
      <JsonLd
        id="functions-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Funktionen", path: "/funktionen" }
        ])}
      />
      <JsonLd
        id="functions-list-jsonld"
        data={itemListSchema({
          name: "PMSLogic Funktionsmodule",
          description:
            "Funktionsmodule für Hotel PMS, Reservierung, Housekeeping, Abrechnung, Gästekommunikation, Reporting, Integrationen und KI.",
          items: featureGroups.map((group) => ({
            name: group.title,
            path: `/funktionen#${group.title.toLowerCase()}`,
            description: group.description
          }))
        })}
      />

      <PageHero
        eyebrow="PMSLogic Funktionen"
        title="Alle PMS-Funktionen für den modernen Hotelbetrieb"
        text="PMSLogic verbindet Reservierungen, Belegungsplan, Gästeverwaltung, Frontdesk, Housekeeping, Rechnungen, Gästekommunikation, Auswertung, Integrationen und PMSAI in einer professionellen Hotelsoftware."
        secondaryHref="/funktionen#pmsai"
        secondaryLabel="PMSAI als Funktion ansehen"
      >
        <FunctionsHeroImage />
      </PageHero>

      <section className="section-tight">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Module</p>
              <h2>Von PMSCore bis PMSAI</h2>
              <p>
                Jedes Modul ist für einen klaren Teil des Hotelalltags gebaut.
                Zusammen entsteht ein Property Management System Hotel, das
                Teams, Daten und Aufgaben verbindet.
              </p>
            </div>
          </div>
          <div className="integration-grid">
            {featureGroups.map((group) => (
              <Link
                href={`#${group.title.toLowerCase()}`}
                className="integration-card"
                key={group.title}
              >
                <span aria-hidden="true" />
                <span>{group.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container feature-page-grid">
          {featureGroups.map((group, index) => (
            <FeatureGroupSection
              group={group}
              index={index}
              key={group.title}
            />
          ))}
        </div>
      </section>

      <CTASection
        title="Welche PMSLogic Funktionen passen zu Ihrem Hotel?"
        text="In der kostenlosen Demo zeigen wir die relevanten Module für Ihre Unterkunft, Ihre Zimmerstruktur, Ihre aktuellen Prozesse und Ihre gewünschte Systemlandschaft."
        secondaryHref="/integrationen"
        secondaryLabel="Schnittstellen prüfen"
      />

      <section className="section">
        <div className="container seo-panel">
          <p className="eyebrow">Kurze Erklärung</p>
          <h2>Hotel PMS mit Reservierungssystem, Housekeeping und Rechnung</h2>
          <p>
            Die Funktionen von PMSLogic decken zentrale Anforderungen moderner
            Hotelsoftware ab: Hotel Reservierungssystem, Belegungsplan,
            Gästeverwaltung, Hotelsoftware mit Housekeeping, Hotelsoftware mit
            Rechnung, Gästekommunikation, Revenue-Auswertung und typische
            Channel-Manager-Prozesse.
          </p>
          <p>
            Damit eignet sich PMSLogic als PMS Software Hotel für Betriebe, die
            ihre digitale Hotelverwaltung professionalisieren möchten, ohne den
            Überblick im Tagesgeschäft zu verlieren.
          </p>
        </div>
      </section>
    </>
  );
}
