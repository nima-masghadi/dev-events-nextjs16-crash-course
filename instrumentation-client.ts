import posthog from "posthog-js";

// Initialize PostHog client for automatic pageview tracking and more
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: "/ingest",
  ui_host: "https://us.posthog.com",
  defaults: '2025-05-24',
  capture_exceptions: true, // Enables Error Tracking; set to false to disable
  debug: process.env.NODE_ENV === "development",
});
