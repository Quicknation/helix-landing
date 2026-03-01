"use client";
// Required by Sentry for Next.js App Router — catches root layout errors
// Without this file, root-level crashes won't be reported to Sentry
import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body
        style={{
          background: "#0a0a0f",
          color: "#e5e7eb",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h2 style={{ color: "white", marginBottom: "1rem" }}>Something went wrong.</h2>
        <p style={{ color: "#6b7280", marginBottom: "2rem", fontSize: "0.875rem" }}>
          Our team has been notified. Please try again.
        </p>
        <button
          onClick={reset}
          style={{
            background: "#1a73e8",
            color: "white",
            border: "none",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
