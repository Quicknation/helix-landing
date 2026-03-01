// Sentry server-side initialization (Node.js runtime)
// Captures API route errors, server component errors, and server-side exceptions
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // 10% of server transactions traced (free tier friendly)
  tracesSampleRate: 0.1,

  enabled: process.env.NODE_ENV === "production",

  environment: process.env.VERCEL_ENV || process.env.NODE_ENV,
});
