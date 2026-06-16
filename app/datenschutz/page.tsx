import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  createMetadata,
  legalConfig,
  siteConfig,
  webPageSchema
} from "@/lib/content";

export const metadata = createMetadata({
  title: "Datenschutz | PMSLogic",
  description:
    "Datenschutzerklärung von PMSLogic für Website, Demo-Anfrage, Kontaktaufnahme, Cookies, lokale Speicherung und E-Mail-Kommunikation.",
  path: "/datenschutz",
  keywords: []
});

export default function DatenschutzPage() {
  return (
    <>
      <JsonLd
        id="privacy-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Datenschutz", path: "/datenschutz" }
        ])}
      />
      <JsonLd
        id="privacy-webpage-jsonld"
        data={webPageSchema({
          name: "Datenschutz",
          description:
            "Datenschutzerklärung von PMSLogic für Website, Demo-Anfrage, Kontaktaufnahme, Cookies, lokale Speicherung und E-Mail-Kommunikation.",
          path: "/datenschutz"
        })}
      />
      <section className="page-hero">
        <div className="container legal-content">
          <p className="eyebrow">Rechtliches</p>
          <h1>Datenschutz</h1>
          <p className="legal-notice">
            Informationen zur Verarbeitung personenbezogener Daten beim Besuch
            dieser Website und bei der Demo-Anfrage.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-content">
          <h2>Verantwortliche Stelle</h2>
          <p>
            {legalConfig.company}, {legalConfig.address}, vertreten durch{" "}
            {legalConfig.representative}. Kontakt: {legalConfig.email}.
          </p>
          <h2>Verarbeitete Daten</h2>
          <p>
            Beim Besuch der Website werden technisch erforderliche Daten wie
            IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten,
            Browser-Informationen und Server-Logdaten verarbeitet, um die
            Website sicher und zuverlässig bereitzustellen.
          </p>
          <h2>Demo-Anfrage</h2>
          <p>
            Bei einer Demo-Anfrage können Angaben wie Vorname, Nachname,
            optionaler Firmenname, E-Mail-Adresse und Telefonnummer verarbeitet
            werden, um die Anfrage persönlich zu beantworten. Die Übermittlung
            der Anfrage und die E-Mail-Kommunikation erfolgen über Resend.
          </p>
          <h2>Cookies und lokale Speicherung</h2>
          <p>
            Der Cookie-Hinweis speichert Ihre Auswahl lokal im Browser, damit
            der Hinweis nicht bei jedem Besuch erneut angezeigt wird. Darüber
            hinaus setzt PMSLogic keine bewusst eingebundenen Marketing-Cookies.
          </p>
          <h2>Rechtsgrundlagen und Speicherdauer</h2>
          <p>
            Die Verarbeitung erfolgt je nach Vorgang auf Grundlage von Art. 6
            Abs. 1 lit. b DSGVO zur Bearbeitung vorvertraglicher Anfragen,
            Art. 6 Abs. 1 lit. f DSGVO zur technischen Bereitstellung und
            Sicherheit der Website sowie Art. 6 Abs. 1 lit. a DSGVO, soweit
            eine Einwilligung erteilt wurde. Daten werden nur so lange
            gespeichert, wie es für den jeweiligen Zweck erforderlich ist oder
            gesetzliche Pflichten bestehen.
          </p>
          <h2>Betroffenenrechte</h2>
          <p>
            Sie haben im Rahmen der gesetzlichen Voraussetzungen Rechte auf
            Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch. Außerdem können Sie sich bei
            einer zuständigen Datenschutzaufsichtsbehörde beschweren.
          </p>
          <h2>Kontakt zum Datenschutz</h2>
          <p>
            Für Datenschutzanfragen erreichen Sie {siteConfig.name} unter{" "}
            {legalConfig.email}.
          </p>
        </div>
      </section>
    </>
  );
}
