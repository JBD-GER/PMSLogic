import { DemoForm } from "@/components/DemoForm";
import { JsonLd } from "@/components/JsonLd";
import { DemoRequestCard } from "@/components/Mockups";
import {
  breadcrumbSchema,
  createMetadata,
  organizationSchema,
  webPageSchema
} from "@/lib/content";

export const metadata = createMetadata({
  title: "Kontakt und Anfrage | PMSLogic Hotelsoftware Demo",
  description:
    "Kontaktieren Sie PMSLogic für eine Hotelsoftware Demo, Fragen zu Hotel PMS, Cloud PMS, Integrationen, Housekeeping, Rechnungen und PMSAI.",
  path: "/kontakt"
});

export default function KontaktPage() {
  return (
    <>
      <JsonLd id="contact-organization-jsonld" data={organizationSchema} />
      <JsonLd
        id="contact-webpage-jsonld"
        data={webPageSchema({
          name: "Kontakt zu PMSLogic",
          description:
            "Kontakt und Anfrage für PMSLogic Hotelsoftware Demo, Hotel PMS, Cloud PMS, Integrationen, Housekeeping, Rechnungen und PMSAI.",
          path: "/kontakt"
        })}
      />
      <JsonLd
        id="contact-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Kontakt", path: "/kontakt" }
        ])}
      />

      <section className="page-hero">
        <div className="container demo-layout">
          <div>
            <p className="eyebrow">Kontakt & Anfrage</p>
            <h1>Kontakt zu PMSLogic aufnehmen</h1>
            <p className="lead">
              Sie möchten PMSLogic live sehen, eine Frage zur Hotelsoftware
              stellen oder prüfen, ob PMSLogic zu Ihrem Betrieb passt? Senden
              Sie uns Ihre Anfrage, wir melden uns persönlich zurück.
            </p>
            <ul className="check-list">
              <li>Persönliche Rückmeldung statt anonymer Kaufstrecke</li>
              <li>Fragen zu Hotel PMS, Housekeeping, Rechnungen und PMSAI</li>
              <li>Einordnung von Unterkunftskategorie, Bereichen und aktuellem System</li>
              <li>Auf Wunsch Vorbereitung einer vollständigen Demo</li>
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
