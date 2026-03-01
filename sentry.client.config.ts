// Sentry browser-side initialization
// Runs in the user's browser — captures client errors, unhandled rejections, performance
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Capture 10% of sessions for performance tracing (free tier friendly)
  tracesSampleRate: 0.1,

  // Capture 100% of errors
  // (tracesSampleRate controls performance, not errors — errors are always captured)

  // Only run Sentry in production
  enabled: process.env.NODE_ENV === "production",

  // Tag every event with the environment
  environment: process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV,
});
