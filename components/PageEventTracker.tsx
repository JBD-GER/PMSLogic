"use client";

import { useEffect } from "react";
import {
  type AnalyticsProperties,
  type SiteEventName,
  trackSiteEvent
} from "@/lib/analytics";

export function PageEventTracker({
  eventName,
  eventProperties
}: {
  eventName: SiteEventName;
  eventProperties?: AnalyticsProperties;
}) {
  useEffect(() => {
    trackSiteEvent(eventName, eventProperties);
  }, [eventName, eventProperties]);

  return null;
}
