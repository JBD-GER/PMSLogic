import { TrackedLink } from "./TrackedLink";

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
          <TrackedLink
            href="/demo"
            className="btn btn-primary"
            eventName="Demo CTA Clicked"
            eventProperties={{
              placement: "cta_section_primary",
              section_title: title,
              cta_label: "Kostenlose Demo anfragen"
            }}
          >
            Kostenlose Demo anfragen
          </TrackedLink>
          <TrackedLink
            href={secondaryHref}
            className="btn btn-secondary"
            eventName={
              secondaryHref === "/demo" ? "Demo CTA Clicked" : "Secondary CTA Clicked"
            }
            eventProperties={{
              placement: "cta_section_secondary",
              section_title: title,
              cta_label: secondaryLabel
            }}
          >
            {secondaryLabel}
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
