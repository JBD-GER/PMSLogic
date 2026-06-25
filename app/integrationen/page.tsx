import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { DashboardMockup } from "@/components/Mockups";
import { PageHero } from "@/components/PageHero";
import { TrackedLink } from "@/components/TrackedLink";
import {
  breadcrumbSchema,
  createMetadata,
  integrations,
  softwareSchema,
  webPageSchema
} from "@/lib/content";

export const metadata = createMetadata({
  title: "PMSLogic Integrationen | Hotelsoftware mit Channel Manager und API",
  description:
    "PMSLogic ist für typische Hotel-Schnittstellen vorbereitet: Channel Manager, Booking.com, Airbnb, Expedia, Google Hotel Ads, Zahlungen, Buchhaltung, Kassensysteme, Smart Locks und API.",
  path: "/integrationen"
});

const integrationGroups = [
  {
    title: "Online-Vertrieb",
    text: "Mögliche oder typische Anbindungen rund um Channel Manager, Booking.com, Airbnb, Expedia, Google Hotel Ads und Direktbuchungen."
  },
  {
    title: "Zahlung & Verwaltung",
    text: "Schnittstellen zu Zahlungsanbietern, Buchhaltung, Kassensystemen, Rechnungsprozessen und administrativen Workflows."
  },
  {
    title: "Betrieb & Zugang",
    text: "Typische Verbindungen zu Türsystemen, Smart Locks, E-Mail, Kalendern und operativen Aufgaben im Haus."
  },
  {
    title: "API & Automatisierung",
    text: "Eine API-orientierte Struktur unterstützt individuelle Prozesse, Datenflüsse und Automatisierungen."
  }
];

export default function IntegrationenPage() {
  return (
    <>
      <JsonLd id="integrations-software-jsonld" data={softwareSchema()} />
      <JsonLd
        id="integrations-webpage-jsonld"
        data={webPageSchema({
          name: "PMSLogic Integrationen",
          description:
            "Hotelsoftware mit Integrationen für Channel Manager, Booking.com, Airbnb, Expedia, Google Hotel Ads, Zahlungsanbieter, Buchhaltung, Smart Locks und API.",
          path: "/integrationen"
        })}
      />
      <JsonLd
        id="integrations-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Integrationen", path: "/integrationen" }
        ])}
      />

      <PageHero
        eyebrow="PMSConnect"
        title="Hotelsoftware mit Integrationen für moderne Systemlandschaften"
        text="PMSLogic ist darauf ausgelegt, typische Hotel-Schnittstellen rund um Vertrieb, Zahlungen, Buchhaltung, Türen, E-Mail, Kalender und API-Prozesse sauber zu planen."
        secondaryHref="/funktionen"
        secondaryLabel="PMSConnect ansehen"
      >
        <DashboardMockup />
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Typische Anbindungen</p>
              <h2>Von Channel Manager bis Smart Locks</h2>
              <p>
                Konkrete Anbieter werden in der Demo transparent geprüft. Die
                folgenden Beispiele zeigen typische Integrationsbereiche für
                Hotelsoftware und Hotel PMS Systeme.
              </p>
            </div>
            <TrackedLink
              href="/demo"
              className="btn btn-primary"
              eventName="Demo CTA Clicked"
              eventProperties={{
                placement: "integrations_section_head",
                cta_label: "Schnittstellen in Demo prüfen"
              }}
            >
              Schnittstellen in Demo prüfen
            </TrackedLink>
          </div>
          <div className="integration-grid">
            {integrations.map((item) => (
              <div className="integration-card" key={item}>
                <span aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Schnittstellenstrategie</p>
              <h2>Vertrauenswürdig planen statt pauschal versprechen</h2>
              <p>
                PMSLogic formuliert Integrationen bewusst als mögliche oder
                typische Anbindungen, bis Anforderungen, Datenflüsse und
                technische Verfügbarkeit konkret geprüft wurden.
              </p>
            </div>
          </div>
          <div className="value-grid">
            {integrationGroups.map((group) => (
              <article className="value-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Welche Integrationen braucht Ihr Hotel PMS?"
        text="Beschreiben Sie in der Demo-Anfrage Ihre aktuelle Software, Buchungskanäle und gewünschten Schnittstellen. Wir melden uns persönlich zurück."
        secondaryHref="/demo"
        secondaryLabel="Demo anfragen"
      />

      <section className="section">
        <div className="container seo-panel">
          <p className="eyebrow">Kurze Erklärung</p>
          <h2>Hotelsoftware mit Channel Manager, API und typischen Schnittstellen</h2>
          <p>
            Wer Hotelsoftware mit Channel Manager, API, Zahlungsanbietern,
            Buchhaltung, Kassensystemen oder Türsystemen sucht, benötigt mehr
            als eine isolierte Zimmerverwaltung. PMSLogic ist als Cloud PMS
            Hotel darauf vorbereitet, operative Prozesse und Schnittstellen
            gemeinsam zu betrachten.
          </p>
          <p>
            In der Demo prüfen wir, welche möglichen Integrationen für Ihren
            Betrieb sinnvoll sind und wie PMSLogic in Ihre bestehende
            Systemlandschaft eingebunden werden kann.
          </p>
        </div>
      </section>
    </>
  );
}
