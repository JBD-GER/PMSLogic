import { DemoForm } from "@/components/DemoForm";
import { JsonLd } from "@/components/JsonLd";
import { DemoRequestCard } from "@/components/Mockups";
import { breadcrumbSchema, createMetadata, softwareSchema, webPageSchema } from "@/lib/content";

export const metadata = createMetadata({
  title: "Hotelsoftware Demo anfragen | PMSLogic kostenlos live erleben",
  description:
    "Fragen Sie eine kostenlose PMSLogic Demo an. Erleben Sie Hotelsoftware für Reservierungen, Housekeeping, Rechnungen, Integrationen und PMSAI live mit unserem Team.",
  path: "/demo"
});

export default function DemoPage() {
  return (
    <>
      <JsonLd id="demo-software-jsonld" data={softwareSchema()} />
      <JsonLd
        id="demo-webpage-jsonld"
        data={webPageSchema({
          name: "PMSLogic Demo anfragen",
          description:
            "Kostenlose PMSLogic Demo für Hotelsoftware, Hotel PMS, Reservierungen, Housekeeping, Rechnungen, Integrationen und PMSAI anfragen.",
          path: "/demo"
        })}
      />
      <JsonLd
        id="demo-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Demo", path: "/demo" }
        ])}
      />

      <section className="page-hero">
        <div className="container demo-layout">
          <div>
            <p className="eyebrow">Kostenlose Demo</p>
            <h1>Hotelsoftware kostenlos testen: PMSLogic live erleben</h1>
            <p className="lead">
              Fordern Sie eine persönliche Demo an. Wir zeigen Ihnen, wie
              PMSLogic Reservierungen, Gäste, Zimmer, Team, Abrechnung,
              Integrationen und PMSAI in einer modernen Hotelsoftware verbindet.
            </p>
            <ul className="check-list">
              <li>Individuelle Demo passend zu Unterkunftsart, Bereichen und Abläufen</li>
              <li>Fokus auf Ihre aktuellen Abläufe und vorhandene Software</li>
              <li>Keine Preise, kein Sofortkauf, keine aggressive Verkaufslogik</li>
              <li>Persönliche Rückmeldung durch unser Team</li>
            </ul>
            <div className="section-tight">
              <DemoRequestCard />
            </div>
          </div>
          <DemoForm />
        </div>
      </section>
    </>
  );
}
