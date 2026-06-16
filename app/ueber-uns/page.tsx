import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { DashboardMockup } from "@/components/Mockups";
import { PageHero } from "@/components/PageHero";
import {
  breadcrumbSchema,
  createMetadata,
  organizationSchema,
  webPageSchema
} from "@/lib/content";

export const metadata = createMetadata({
  title: "Über PMSLogic | Spezialisiertes Softwareteam für Hotelprozesse",
  description:
    "PMSLogic wird für klare digitale Hotelprozesse entwickelt: moderne Cloud-Technologie, persönliche Einführung und Support auf Augenhöhe.",
  path: "/ueber-uns"
});

const values = [
  {
    title: "Gebaut für klare Abläufe",
    text: "PMSLogic priorisiert Übersicht, Verlässlichkeit und nachvollziehbare Prozesse im täglichen Hotelbetrieb."
  },
  {
    title: "Fokus auf Hotellerie",
    text: "Reservierung, Frontdesk, Housekeeping, Rechnungen, Gäste und Teams werden nicht isoliert, sondern als zusammenhängender Ablauf gedacht."
  },
  {
    title: "Moderne Cloud-Technologie",
    text: "Die Architektur ist auf schnelle Web-Erlebnisse, mobile Nutzung, Erweiterbarkeit und saubere Integrationen ausgelegt."
  },
  {
    title: "Persönliche Einführung",
    text: "Jedes Haus arbeitet anders. Deshalb beginnt PMSLogic mit Demo, Prozessverständnis und persönlicher Begleitung."
  }
];

export default function UeberUnsPage() {
  return (
    <>
      <JsonLd id="about-organization-jsonld" data={organizationSchema} />
      <JsonLd
        id="about-webpage-jsonld"
        data={webPageSchema({
          name: "Über PMSLogic",
          description:
            "PMSLogic wird für klare digitale Hotelprozesse entwickelt: moderne Cloud-Technologie, persönliche Einführung und Support auf Augenhöhe.",
          path: "/ueber-uns"
        })}
      />
      <JsonLd
        id="about-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Über uns", path: "/ueber-uns" }
        ])}
      />

      <PageHero
        eyebrow="Über PMSLogic"
        title="Spezialisierte Hotelsoftware für klare digitale Prozesse"
        text="PMSLogic wird von einem Softwareteam entwickelt, das Hotelprozesse verständlich, modern und teamfähig abbilden möchte - mit Cloud-Technologie, persönlicher Einführung und Support auf Augenhöhe."
        secondaryHref="/demo"
        secondaryLabel="Demo anfragen"
      >
        <DashboardMockup />
      </PageHero>

      <section className="section">
        <div className="container split-section">
          <div className="split-copy">
            <p className="eyebrow">Haltung</p>
            <h2>Hotelsoftware sollte Arbeit ordnen, nicht neue Komplexität erzeugen</h2>
            <p>
              PMSLogic entsteht aus der Überzeugung, dass gute Hotelsoftware
              operative Klarheit schaffen muss. Ein Hotel PMS sollte Teams
              helfen, Reservierungen, Gäste, Zimmer, Housekeeping, Rechnungen
              und Kommunikation zuverlässig zu verbinden.
            </p>
            <p>
              Deshalb setzt PMSLogic auf klare Oberflächen, verständliche
              Module, persönliche Einführung und eine Architektur, die für
              moderne Hotelprozesse, Integrationen und KI-Unterstützung
              vorbereitet ist.
            </p>
            <div className="hero-actions">
              <Link href="/funktionen" className="btn btn-primary">
                Funktionen ansehen
              </Link>
              <Link href="/funktionen#pmsai" className="btn btn-secondary">
                PMSAI als Funktion ansehen
              </Link>
            </div>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container seo-panel">
          <p className="eyebrow">Vertrauen</p>
          <h2>Professionell auftreten, ehrlich bleiben</h2>
          <p>
            PMSLogic verzichtet bewusst auf unbelegte Aussagen wie Marktführer,
            erfundene Kundenzahlen oder falsche Auszeichnungen. Vertrauen
            entsteht durch klare Kommunikation, nachvollziehbare Funktionen,
            saubere Technik und eine persönliche Demo, in der Anforderungen
            offen besprochen werden.
          </p>
          <p>
            Für Hotels, Pensionen, Boutique-Hotels, Aparthotels,
            Ferienunterkünfte und Hotelgruppen bedeutet das: eine moderne
            Hotelmanagement Software, die seriös wirkt, aber im Alltag
            verständlich bleibt.
          </p>
        </div>
      </section>

      <CTASection
        title="Lernen Sie PMSLogic in einer persönlichen Demo kennen"
        text="Wir zeigen Ihnen die Hotelsoftware live und sprechen über Ihre Unterkunft, Ihre aktuellen Prozesse und die nächsten sinnvollen Schritte."
        secondaryHref="/faq"
        secondaryLabel="FAQ lesen"
      />
    </>
  );
}
