import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { HotelImageGrid } from "@/components/HotelImages";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import {
  audiencePages,
  breadcrumbSchema,
  createMetadata,
  itemListSchema,
  softwareSchema,
  webPageSchema
} from "@/lib/content";

export const metadata = createMetadata({
  title: "PMSLogic Zielgruppen | Hotelanlagen, Pensionen, Boutique-Hotels und mehr",
  description:
    "PMSLogic für Hotelanlagen, Resorts, Pensionen, Boutique-Hotels, Aparthotels, Ferienunterkünfte und Hotelgruppen mit klaren PMS-Prozessen.",
  path: "/zielgruppen"
});

export default function ZielgruppenPage() {
  return (
    <>
      <JsonLd id="audiences-software-jsonld" data={softwareSchema()} />
      <JsonLd
        id="audiences-webpage-jsonld"
        data={webPageSchema({
          name: "PMSLogic Zielgruppen",
          description:
            "PMSLogic für Hotelanlagen, Resorts, Pensionen, Boutique-Hotels, Aparthotels, Ferienunterkünfte und Hotelgruppen mit klaren PMS-Prozessen.",
          path: "/zielgruppen",
          primaryImage: "/hotel-images/lobby-guests.jpg"
        })}
      />
      <JsonLd
        id="audiences-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Zielgruppen", path: "/zielgruppen" }
        ])}
      />
      <JsonLd
        id="audiences-list-jsonld"
        data={itemListSchema({
          name: "PMSLogic Zielgruppen",
          description:
            "Zielgruppenseiten für Hotelanlagen, Pensionen, Boutique-Hotels, Aparthotels, Ferienunterkünfte und Hotelgruppen.",
          items: audiencePages.map((page) => ({
            name: page.label,
            path: `/${page.slug}`,
            description: page.metaDescription
          }))
        })}
      />

      <PageHero
        eyebrow="Zielgruppen"
        title="Hotelsoftware für unterschiedliche Unterkunftsarten"
        text="PMSLogic richtet sich nicht an eine bestimmte Größe, sondern an klare Hotelprozesse: Reservierungen, Gäste, Zimmer, Teams, Zusatzbereiche, Abrechnung und Auswertung."
        secondaryHref="/leistungen"
        secondaryLabel="Leistungen ansehen"
      >
        <HotelImageGrid />
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Unterkunftskategorien</p>
              <h2>Für Betriebe mit unterschiedlichen Abläufen und Bereichen</h2>
              <p>
                Ob Resort, Pension, Boutique-Hotel, Aparthotel, Ferienobjekt
                oder Hotelgruppe: Entscheidend ist, welche Prozesse verbunden
                werden sollen.
              </p>
            </div>
          </div>
          <div className="target-grid">
            {audiencePages.map((page) => (
              <Link
                href={`/${page.slug}`}
                className="target-card"
                key={page.slug}
              >
                <div>
                  <h3>{page.title}</h3>
                  <p>{page.intro}</p>
                </div>
                <span>Mehr erfahren</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Welche Kategorie passt zu Ihrem Betrieb?"
        text="In der Demo ordnen wir Ihre Unterkunft nicht nach Größe ein, sondern nach Abläufen, Bereichen, Leistungen, Teams und Systemlandschaft."
        secondaryHref="/demo"
        secondaryLabel="Demo anfragen"
      />
    </>
  );
}
