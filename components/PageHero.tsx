import type { ReactNode } from "react";
import { TrackedLink } from "./TrackedLink";

export function PageHero({
  eyebrow,
  title,
  text,
  children,
  primaryLabel = "Kostenlose Demo anfragen",
  secondaryLabel,
  secondaryHref
}: {
  eyebrow: string;
  title: string;
  text: string;
  children?: ReactNode;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{text}</p>
          <div className="hero-actions">
            <TrackedLink
              href="/demo"
              className="btn btn-primary"
              eventName="Demo CTA Clicked"
              eventProperties={{
                placement: "page_hero_primary",
                page_title: title,
                cta_label: primaryLabel
              }}
            >
              {primaryLabel}
            </TrackedLink>
            {secondaryLabel && secondaryHref ? (
              <TrackedLink
                href={secondaryHref}
                className="btn btn-secondary"
                eventName={
                  secondaryHref === "/demo"
                    ? "Demo CTA Clicked"
                    : "Secondary CTA Clicked"
                }
                eventProperties={{
                  placement: "page_hero_secondary",
                  page_title: title,
                  cta_label: secondaryLabel
                }}
              >
                {secondaryLabel}
              </TrackedLink>
            ) : null}
          </div>
        </div>
        {children ? <div className="page-hero-media">{children}</div> : null}
      </div>
    </section>
  );
}
