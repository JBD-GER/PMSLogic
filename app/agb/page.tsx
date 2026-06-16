import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  createMetadata,
  legalConfig,
  siteConfig,
  webPageSchema
} from "@/lib/content";

export const metadata = createMetadata({
  title: "AGB | PMSLogic",
  description:
    "Allgemeine Geschäftsbedingungen und Hinweise zur unverbindlichen PMSLogic Demo-Anfrage, Website-Nutzung und Leistungsinformationen.",
  path: "/agb",
  keywords: []
});

export default function AgbPage() {
  return (
    <>
      <JsonLd
        id="terms-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "AGB", path: "/agb" }
        ])}
      />
      <JsonLd
        id="terms-webpage-jsonld"
        data={webPageSchema({
          name: "Allgemeine Geschäftsbedingungen",
          description:
            "Allgemeine Geschäftsbedingungen und Hinweise zur unverbindlichen PMSLogic Demo-Anfrage, Website-Nutzung und Leistungsinformationen.",
          path: "/agb"
        })}
      />
      <section className="page-hero">
        <div className="container legal-content">
          <p className="eyebrow">Rechtliches</p>
          <h1>Allgemeine Geschäftsbedingungen</h1>
          <p className="legal-notice">
            Allgemeine Hinweise zur Nutzung der Website und zur Anfrage einer
            PMSLogic Demo.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-content">
          <h2>Geltungsbereich</h2>
          <p>
            Diese Bedingungen gelten für die Nutzung der Website von{" "}
            {siteConfig.name} und für die unverbindliche Anfrage einer
            persönlichen Demo. Anbieter ist {legalConfig.company},{" "}
            {legalConfig.address}.
          </p>
          <h2>Demo-Anfrage</h2>
          <p>
            Die Demo-Anfrage dient der persönlichen Kontaktaufnahme und stellt
            keinen automatischen Kaufprozess dar. Es entstehen durch das
            Absenden der Anfrage keine Zahlungspflichten.
          </p>
          <h2>Leistungen und Verfügbarkeit</h2>
          <p>
            Informationen auf dieser Website beschreiben PMSLogic allgemein.
            Konkrete Leistungsumfänge, Verfügbarkeit, Einführung, Support,
            Schnittstellen und Nutzungsbedingungen werden individuell
            vereinbart.
          </p>
          <h2>Haftung und Schlussbestimmungen</h2>
          <p>
            Die Inhalte der Website werden sorgfältig gepflegt. Eine Gewähr für
            dauerhafte Verfügbarkeit, Vollständigkeit oder Fehlerfreiheit kann
            nicht übernommen werden. Es gilt deutsches Recht, soweit gesetzlich
            zulässig.
          </p>
        </div>
      </section>
    </>
  );
}
