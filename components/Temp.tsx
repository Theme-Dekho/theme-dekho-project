// "use client";

// import { useEffect } from "react";
// import { getVisitorSessionId } from "@/lib/analytics/session";

// export default function SessionTest() {
//   useEffect(() => {
//     console.log(
//       "Visitor session:",
//       getVisitorSessionId(),
//     );
//   }, []);

//   return null;
// }

"use client";

import { trackEvent } from "@/lib/analytics/trackEvent";

export default function AnalyticsTestButton() {
  const handleTest = () => {
    void trackEvent({
      eventName: "button_clicked",
      elementName: "analytics-test-button",
      metadata: {
        source: "homepage",
        test: true,
      },
    });
  };

  return (
    <button type="button" onClick={handleTest}>
      Test Analytics
    </button>
  );
}