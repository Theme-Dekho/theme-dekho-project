import { getVisitorSessionId } from "./session";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "http://localhost:8000";

export type EventMetadataValue =
  | string
  | number
  | boolean
  | null
  | string[];

export type EventMetadata = Record<
  string,
  EventMetadataValue
>;

interface TrackEventInput {
  eventName: string;
  pageUrl?: string;
  elementName?: string;
  metadata?: EventMetadata;
}

export async function trackEvent({
  eventName,
  pageUrl,
  elementName,
  metadata = {},
}: TrackEventInput): Promise<void> {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const sessionId = getVisitorSessionId();

    if (!sessionId) {
      return;
    }

    const response = await fetch(
      `${API_BASE_URL}/api/analytics/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        keepalive: true,
        body: JSON.stringify({
          session_id: sessionId,
          event_name: eventName,
          page_url:
            pageUrl ??
            `${window.location.pathname}${window.location.search}`,
          element_name: elementName,
          metadata,
        }),
      },
    );

    if (!response.ok) {
      console.error(
        "Analytics request failed:",
        response.status,
      );
    }
  } catch (error) {
    console.error("Analytics event failed:", error);
  }
}