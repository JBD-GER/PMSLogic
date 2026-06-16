import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogImage } from "@/components/BlogImage";
import { CTASection } from "@/components/CTASection";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import {
  articleSchema,
  blogPosts,
  breadcrumbSchema,
  createMetadata,
  faqSchema,
  servicePages
} from "@/lib/content";

type BlogParams = {
  params: Promise<{
    slug: string;
  }>;
};

function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

const relatedServiceByPost: Record<string, string> = {
  "was-ist-ein-hotel-pms": "hotel-pms",
  "hotelsoftware-auswaehlen": "hotel-pms",
  "reservierungssoftware-hotel-belegungsplan": "reservierungsmanagement",
  "channel-manager-booking-engine-hotel": "channel-manager-integrationen",
  "housekeeping-software-hotel-zimmerstatus": "housekeeping-software",
  "meldeschein-software-hotel": "rechnungen-zahlungen",
  "revenue-management-hotel-pms": "reporting-revenue",
  "hotel-automatisierung-ki-pms": "ki-automatisierung",
  "gaesteverwaltung-hotel-pms": "gaestekommunikation-upselling",
  "rechnungssoftware-hotel": "rechnungen-zahlungen",
  "cloud-pms-hotel": "hotel-pms",
  "property-management-system-hotel": "hotel-pms",
  "hotelverwaltungssoftware": "hotel-pms",
  "belegungsplan-software-hotel": "reservierungsmanagement",
  "hotel-management-software": "reporting-revenue",
  "pms-software-hotel": "hotel-pms",
  "hotelsoftware-ferienwohnungen": "hotel-pms",
  "hotelsoftware-kleine-hotels": "hotel-pms",
  "hotelsoftware-pensionen": "hotel-pms",
  "software-fuer-hotels": "hotel-pms",
  "hotelsoftware-demo": "hotel-pms",
  "hotelsoftware-kostenlos-testen": "hotel-pms",
  "hotel-pms-deutschland": "hotel-pms",
  "hotel-verwaltungssoftware": "hotel-pms",
  "digitale-hotelverwaltung": "hotel-pms",
  "hotelsoftware-mit-ki": "ki-automatisierung",
  "ki-hotelsoftware": "ki-automatisierung",
  "hotelsoftware-mit-channel-manager": "channel-manager-integrationen",
  "hotelsoftware-mit-rechnung": "rechnungen-zahlungen",
  "meldeschein-software-checkliste": "rechnungen-zahlungen",
  "gaesteverwaltung-hotel-checkliste": "gaestekommunikation-upselling",
  "revenue-management-hotel-checkliste": "reporting-revenue",
  "housekeeping-software-checkliste": "housekeeping-software",
  "cloud-pms-checkliste": "hotel-pms",
  "channel-manager-checkliste": "channel-manager-integrationen",
  "booking-engine-checkliste": "channel-manager-integrationen",
  "pms-einfuehrung-hotel": "hotel-pms",
  "hotelsoftware-datenuebernahme": "hotel-pms",
  "hotelsoftware-vergleich": "hotel-pms",
  "pms-kosten-hotel": "hotel-pms",
  "cloud-pms-sicherheit": "hotel-pms"
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: BlogParams): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return createMetadata({
      title: "PMSLogic Ratgeber",
      description: "Ratgeber zu Hotelsoftware und Hotel PMS.",
      path: "/ratgeber"
    });
  }

  return createMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/ratgeber/${post.slug}`,
    image: post.image,
    type: "article"
  });
}

export default async function BlogPostPage({ params }: BlogParams) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((item) => item.slug !== post.slug);
  const relatedService = servicePages.find(
    (service) => service.slug === relatedServiceByPost[post.slug]
  );

  return (
    <>
      <JsonLd id={`${post.slug}-article-jsonld`} data={articleSchema(post)} />
      <JsonLd id={`${post.slug}-faq-jsonld`} data={faqSchema(post.faq)} />
      <JsonLd
        id={`${post.slug}-breadcrumb-jsonld`}
        data={breadcrumbSchema([
          { name: "Startseite", path: "/" },
          { name: "Ratgeber", path: "/ratgeber" },
          { name: post.title, path: `/ratgeber/${post.slug}` }
        ])}
      />

      <article>
        <section className="page-hero">
          <div className="container page-hero-grid">
            <div>
              <p className="eyebrow">PMSLogic Ratgeber</p>
              <h1>{post.title}</h1>
              <p className="lead">{post.intro}</p>
              <p className="article-meta">
                {new Intl.DateTimeFormat("de-DE", {
                  dateStyle: "long"
                }).format(new Date(post.date))}{" "}
                · {post.readingTime}
              </p>
            </div>
            <div className="article-hero-image">
              <BlogImage post={post} priority />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container article-layout">
            <aside className="article-toc" aria-label="Inhaltsverzeichnis">
              <span>In diesem Artikel</span>
              {post.sections.map((section) => (
                <a
                  href={`#${section.title
                    .toLowerCase()
                    .replaceAll(" ", "-")
                    .replaceAll("ä", "ae")
                    .replaceAll("ö", "oe")
                    .replaceAll("ü", "ue")}`}
                  key={section.title}
                >
                  {section.title}
                </a>
              ))}
            </aside>
            <div className="article-content">
              {post.sections.map((section) => {
                const id = section.title
                  .toLowerCase()
                  .replaceAll(" ", "-")
                  .replaceAll("ä", "ae")
                  .replaceAll("ö", "oe")
                  .replaceAll("ü", "ue");

                return (
                  <section id={id} key={section.title}>
                    <h2>{section.title}</h2>
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                );
              })}
              <section>
                <h2>Häufige Fragen</h2>
                <FaqList items={post.faq} />
              </section>
              {relatedService ? (
                <section className="article-next-step">
                  <h2>Passende PMSLogic Leistung</h2>
                  <p>{relatedService.promise}</p>
                  <Link href={`/leistungen/${relatedService.slug}`}>
                    {relatedService.label} ansehen
                  </Link>
                </section>
              ) : null}
            </div>
          </div>
        </section>
      </article>

      {related.length > 0 ? (
        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Weiterlesen</p>
                <h2>Weitere PMSLogic Ratgeber</h2>
              </div>
            </div>
            <div className="blog-grid">
              {related.map((item) => (
                <Link
                  href={`/ratgeber/${item.slug}`}
                  className="blog-card"
                  key={item.slug}
                >
                  <BlogImage post={item} />
                  <div>
                    <span>{item.readingTime}</span>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <strong>Artikel lesen</strong>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        title="Hotelsoftware nicht nur lesen, sondern live sehen"
        text="Starten Sie eine kostenlose PMSLogic Demo und prüfen Sie, wie die beschriebenen Abläufe in Ihrem Betrieb aussehen könnten."
        secondaryHref="/leistungen"
        secondaryLabel="Leistungen ansehen"
      />
    </>
  );
}
