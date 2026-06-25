"use client";

import { track } from "@vercel/analytics";

export type AnalyticsProperties = Record<
  string,
  string | number | boolean | null | undefined
>;

export type SiteEventName =
  | "Demo CTA Clicked"
  | "Demo Form Viewed"
  | "Demo Form Started"
  | "Demo Form Validation Blocked"
  | "Demo Legal Consent Changed"
  | "Demo Form Submit Attempted"
  | "Demo Form Submit Succeeded"
  | "Demo Form Submit Failed"
  | "Demo Thank You Viewed"
  | "Email Link Clicked"
  | "Secondary CTA Clicked";

function getPageContext(): AnalyticsProperties {
  if (typeof window === "undefined") {
    return {};
  }

  return {
    page_path: window.location.pathname,
    browser_language: navigator.language || "unknown"
  };
}

export function trackSiteEvent(
  name: SiteEventName,
  properties: AnalyticsProperties = {},
  options?: Parameters<typeof track>[2]
) {
  track(name, {
    ...getPageContext(),
    ...properties
  }, options);
}
