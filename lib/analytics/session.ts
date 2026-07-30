const VISITOR_SESSION_KEY = "visitor_session_id";

function generateSessionId(): string {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 15)}`;
}

export function getVisitorSessionId(): string {
  if (typeof window === "undefined") {
    return "";
  }

  try {
    const existingSessionId =
      window.localStorage.getItem(
        VISITOR_SESSION_KEY,
      );

    if (existingSessionId) {
      return existingSessionId;
    }

    const newSessionId = generateSessionId();

    window.localStorage.setItem(
      VISITOR_SESSION_KEY,
      newSessionId,
    );

    return newSessionId;
  } catch (error) {
    console.error(
      "Unable to access visitor session:",
      error,
    );

    return "";
  }
}