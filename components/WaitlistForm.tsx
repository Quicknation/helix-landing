"use client";

import { useState } from "react";

export default function WaitlistForm({ initialCount }: { initialCount: number }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(initialCount);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !name) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        setCount((c) => c + 1);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl p-8 border border-blue-500/40 text-center"
        style={{ background: "rgba(26,115,232,0.1)" }}
      >
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="text-xl font-bold text-white mb-2">You&apos;re on the list.</h3>
        <p className="text-gray-400 text-sm">{message}</p>
        {count > 0 && (
          <p className="text-xs text-gray-600 mt-3">{count} people waiting with you.</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-xl border text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
        style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
      />
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-xl border text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
        style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
      />

      {status === "error" && (
        <p className="text-sm text-red-400">{message}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: "#1a73e8" }}
      >
        {status === "loading" ? "Joining..." : "Join the Waitlist \u2192"}
      </button>

      <p className="text-xs text-gray-600">No spam. Just HELIX news. Unsubscribe anytime.</p>
    </form>
  );
}
