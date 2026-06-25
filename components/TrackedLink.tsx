"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";
import {
  type AnalyticsProperties,
  type SiteEventName,
  trackSiteEvent
} from "@/lib/analytics";

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | "href"> & {
    children: ReactNode;
    eventName: SiteEventName;
    eventProperties?: AnalyticsProperties;
  };

function getHrefLabel(href: LinkProps["href"]) {
  if (typeof href === "string") {
    return href;
  }

  return href.pathname || "unknown";
}

export function TrackedLink({
  children,
  eventName,
  eventProperties,
  href,
  onClick,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackSiteEvent(eventName, {
      target_href: getHrefLabel(href),
      ...eventProperties
    });
    onClick?.(event);
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
