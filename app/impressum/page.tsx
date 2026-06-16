import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbSchema,
  createMetadata,
  legalConfig,
  webPageSchema
} from "@/lib/content";

export const metadata = createMetadata({
  title: "Impressum | PMSLogic",
  description:
    "Impressum und Anbieterkennzeichnung von PMSLogic mit Kontaktangaben, Registerinformationen und rechtlichen Hinweisen.",
  path: "/impressum",
  keywords: []
});

export default function ImpressumPage() {
  return (
    <>
      <JsonLd
        id="imprint-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Impressum", path: "/impressum" }
        ])}
      />
      <JsonLd
        id="imprint-webpage-jsonld"
        data={webPageSchema({
          name: "Impressum",
          description:
            "Impressum und Anbieterkennzeichnung von PMSLogic mit Kontaktangaben, Registerinformationen und rechtlichen Hinweisen.",
          path: "/impressum"
        })}
      />
      <section className="page-hero">
        <div className="container legal-content">
          <p className="eyebrow">Rechtliches</p>
          <h1>Impressum</h1>
          <p className="legal-notice">
            Anbieterkennzeichnung und Kontaktangaben für PMSLogic.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-content">
          <h2>Angaben nach § 5 TMG</h2>
          <p>{legalConfig.company}</p>
          <p>{legalConfig.address}</p>
          <p>Vertretungsberechtigt: {legalConfig.representative}</p>
          <h2>Kontakt</h2>
          <p>Telefon: {legalConfig.phone}</p>
          <p>E-Mail: {legalConfig.email}</p>
          <h2>Register, Steuern und Aufsicht</h2>
          <p>
            Registergericht / HRB: {legalConfig.registerCourt}{" "}
            {legalConfig.registerNumber}
          </p>
          <p>Umsatzsteuer-ID: {legalConfig.vatId}</p>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr" rel="noreferrer">
              https://ec.europa.eu/consumers/odr
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          <h2>Haftungshinweise</h2>
          <p>
            Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen
            wir keine Gewähr.
          </p>
        </div>
      </section>
    </>
  );
}
