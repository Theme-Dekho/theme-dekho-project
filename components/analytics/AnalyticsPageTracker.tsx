"use client";

import { useEffect } from "react";
import {
  usePathname,
  useSearchParams,
} from "next/navigation";

import { trackEvent } from "@/lib/analytics/trackEvent";

export default function AnalyticsPageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();

    const pageUrl = query
      ? `${pathname}?${query}`
      : pathname;

    void trackEvent({
      eventName: "page_view",
      pageUrl,
    });
  }, [pathname, searchParams]);

  return null;
}