import type { ReactNode } from "react";
import Link from "next/link";

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
            <Link href="/demo" className="btn btn-primary">
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref ? (
              <Link href={secondaryHref} className="btn btn-secondary">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
        {children ? <div className="page-hero-media">{children}</div> : null}
      </div>
    </section>
  );
}
