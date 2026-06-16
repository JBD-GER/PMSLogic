import Link from "next/link";

export function CTASection({
  eyebrow = "Kostenlose Demo",
  title = "PMSLogic live im Hotelalltag sehen",
  text = "Erleben Sie, wie Reservierungen, Frontdesk, Housekeeping, Rechnungen, Integrationen und PMSAI in einer modernen Hotelsoftware zusammenspielen.",
  secondaryHref = "/funktionen",
  secondaryLabel = "Funktionen ansehen"
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section">
      <div className="container cta-band">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <Link href="/demo" className="btn btn-primary">
            Kostenlose Demo anfragen
          </Link>
          <Link href={secondaryHref} className="btn btn-secondary">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
