import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  // No extra config needed — Sentry handles the rest via withSentryConfig
};

export default withSentryConfig(nextConfig, {
  // Your Sentry organization slug (set after creating org at sentry.io)
  org: process.env.SENTRY_ORG,

  // Your Sentry project slug (the name you gave it in Sentry)
  project: process.env.SENTRY_PROJECT,

  // Auth token for uploading source maps — kept in .env.local, never committed
  authToken: process.env.SENTRY_AUTH_TOKEN,

  // Silences Sentry CLI output during builds
  silent: !process.env.CI,

  // Source map configuration — uploads to Sentry and removes from production bundle
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },

  // Disable the Sentry SDK telemetry that phones home during build
  telemetry: false,
});
