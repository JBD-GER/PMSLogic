import Link from "next/link";
import { BlogImage } from "@/components/BlogImage";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import {
  blogPosts,
  breadcrumbSchema,
  createMetadata,
  itemListSchema,
  webPageSchema
} from "@/lib/content";

export const metadata = createMetadata({
  title: "PMSLogic Ratgeber | Hotelsoftware, Hotel PMS und digitale Hotelverwaltung",
  description:
    "Ratgeber zu Hotelsoftware, Hotel PMS, Cloud PMS, digitaler Hotelverwaltung, Auswahlkriterien und PMSLogic Demo-Vorbereitung.",
  path: "/ratgeber"
});

export default function RatgeberPage() {
  return (
    <>
      <JsonLd
        id="guide-webpage-jsonld"
        data={webPageSchema({
          name: "PMSLogic Ratgeber",
          description:
            "Ratgeber zu Hotelsoftware, Hotel PMS, Cloud PMS, digitaler Hotelverwaltung, Auswahlkriterien und PMSLogic Demo-Vorbereitung.",
          path: "/ratgeber",
          primaryImage: blogPosts[0].image
        })}
      />
      <JsonLd
        id="guide-breadcrumb-jsonld"
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Ratgeber", path: "/ratgeber" }
        ])}
      />
      <JsonLd
        id="guide-list-jsonld"
        data={itemListSchema({
          name: "PMSLogic Ratgeberartikel",
          description:
            "Ratgeberartikel zu Hotelsoftware, Hotel PMS, Reservierung, Channel Manager, Booking Engine und Housekeeping.",
          items: blogPosts.map((post) => ({
            name: post.title,
            path: `/ratgeber/${post.slug}`,
            description: post.excerpt
          }))
        })}
      />

      <PageHero
        eyebrow="Ratgeber"
        title="Wissen zu Hotelsoftware, Hotel PMS und digitaler Hotelverwaltung"
        text="Der PMSLogic Ratgeber erklärt zentrale Begriffe, Auswahlkriterien und praktische Fragen rund um moderne Hotelmanagement Software."
        secondaryHref="/demo"
        secondaryLabel="Demo anfragen"
      >
        <BlogImage post={blogPosts[0]} priority />
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Artikel</p>
              <h2>Ratgeber für Hoteliers und Unterkunftsbetriebe</h2>
              <p>
                Die Beiträge decken Grundlagen, Softwareauswahl,
                Reservierungssoftware, Channel Manager, Booking Engine und
                Housekeeping ab. Die Struktur ist vorbereitet, um weitere
                Fachbeiträge zu Rechnungen, Meldeschein, Revenue oder
                Automatisierung zu ergänzen.
              </p>
            </div>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link
                href={`/ratgeber/${post.slug}`}
                className="blog-card"
                key={post.slug}
              >
                <BlogImage post={post} />
                <div>
                  <span>
                    {new Intl.DateTimeFormat("de-DE", {
                      dateStyle: "medium"
                    }).format(new Date(post.date))}{" "}
                    · {post.readingTime}
                  </span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <strong>Artikel lesen</strong>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Lieber direkt anhand Ihres Hotels sprechen?"
        text="Der Ratgeber hilft bei der Orientierung. In der Demo zeigen wir PMSLogic konkret für Ihre Unterkunft, Zimmerstruktur und aktuellen Prozesse."
        secondaryHref="/leistungen"
        secondaryLabel="Leistungen ansehen"
      />
    </>
  );
}
