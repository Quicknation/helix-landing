import WaitlistForm from "@/components/WaitlistForm";

// Reusable feature card for the Solution section
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  // Manually updated env var — increment as signups come in
  const waitlistCount = parseInt(process.env.WAITLIST_COUNT || "0");

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0f", color: "#e5e7eb" }}>

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
        style={{ background: "rgba(10,10,15,0.9)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight" style={{ color: "#1a73e8" }}>
            HELIX
          </div>
          <a
            href="#waitlist"
            className="text-sm font-medium px-4 py-2 rounded-full transition-all hover:opacity-90"
            style={{ background: "#1a73e8", color: "white" }}
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #1a73e8, transparent)" }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-6 border"
            style={{
              borderColor: "#1a73e8",
              color: "#1a73e8",
              background: "rgba(26,115,232,0.1)",
            }}
          >
            Early Access &#8212; Limited Spots
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
            style={{ color: "white" }}
          >
            The AI platform that
            <br />
            <span style={{ color: "#1a73e8" }}>closes every gap.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto">
            Two worlds. One intelligence.
          </p>

          <p className="text-base text-gray-500 mb-10 max-w-xl mx-auto">
            HELIX was built to keep every promise that every other AI tool has broken.
            Context that never dies. Work that never disappears. Intelligence that actually works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "#1a73e8", color: "white" }}
            >
              Join the Waitlist &#8594;
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-medium border border-white/20 hover:border-white/40 transition-colors"
            >
              See What&apos;s Coming
            </a>
          </div>

          {waitlistCount > 0 && (
            <p className="mt-6 text-sm text-gray-500">{waitlistCount} people already waiting</p>
          )}
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Every AI tool has gaps.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We logged 53 of them. Each one is a broken promise. Each one is a HELIX standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                pain: "You lose context when sessions end",
                result: "Cold starts, repeated explanations, wasted time",
              },
              {
                pain: "Your input disappears on refresh or crash",
                result: "Gone forever — you start from zero",
              },
              {
                pain: "No platform works everywhere",
                result: "Mac-first, Windows-ignored, WSL broken",
              },
              {
                pain: "Agents don't talk to each other",
                result: "You manage the coordination manually",
              },
              {
                pain: "Nothing works offline",
                result: "Internet down = completely blocked",
              },
              {
                pain: "No voice interface worth using",
                result: "You type everything, every time",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-5 border border-red-500/20"
                style={{ background: "rgba(239,68,68,0.05)" }}
              >
                <p className="text-sm font-medium text-red-400 mb-1">
                  &#x2717; {item.pain}
                </p>
                <p className="text-xs text-gray-500">{item.result}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            We don&apos;t build features &#8212; we close gaps. Every gap logged is a promise HELIX will keep.
          </p>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section
        className="py-24 px-6 border-y border-white/5"
        style={{ background: "rgba(26,115,232,0.03)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              HELIX keeps every promise.
            </h2>
            <p className="text-gray-400 text-lg">Five things that should have always been true.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🧠",
                title: "Never lose context",
                desc: "HELIX remembers everything, always. Every session starts fully briefed. Zero cold starts, ever.",
              },
              {
                icon: "✏️",
                title: "Never lose input",
                desc: "HELIX saves drafts, drafts save you. Every keystroke is preserved. Abrupt closes never lose a word.",
              },
              {
                icon: "🔒",
                title: "Never lose work",
                desc: "HELIX recovers from every failure mode. Nothing disappears. Everything is always reachable.",
              },
              {
                icon: "🌐",
                title: "Works everywhere",
                desc: "No platform lock-in. No browser gatekeeping. Windows, Mac, Linux — all first-class citizens.",
              },
              {
                icon: "⚡",
                title: "Automatic by default",
                desc: "No manual steps for things that should just work. HELIX configures, adapts, and self-corrects.",
              },
              {
                icon: "🤖",
                title: "Agents that collaborate",
                desc: "HELIX agents know each other, divide tasks, resolve conflicts. Native multi-agent intelligence.",
              },
            ].map((item, i) => (
              <FeatureCard
                key={i}
                icon={item.icon}
                title={item.title}
                description={item.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES PREVIEW ── */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What&apos;s inside HELIX.
            </h2>
            <p className="text-gray-400 text-lg">Three layers. One unified intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* HELIX Flow — spans 2 cols */}
            <div
              className="col-span-1 md:col-span-2 rounded-2xl p-8 border border-blue-500/30"
              style={{ background: "rgba(26,115,232,0.08)" }}
            >
              <div className="text-xs font-semibold text-blue-400 tracking-widest mb-3">
                HELIX FLOW
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                60+ tools. 13 categories. One workspace.
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Every creative and professional tool you already use &#8212; DAWs, video editors,
                trading platforms, design tools, code editors &#8212; unified under one AI layer.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "OBS Studio",
                  "Figma",
                  "DaVinci Resolve",
                  "Ableton",
                  "ThinkorSwim",
                  "VS Code",
                  "+ more",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-1 rounded"
                    style={{ background: "rgba(26,115,232,0.2)", color: "#93bbf7" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* HELIX Sphere */}
            <div
              className="rounded-2xl p-8 border border-cyan-500/30"
              style={{ background: "rgba(0,212,255,0.05)" }}
            >
              <div className="text-xs font-semibold text-cyan-400 tracking-widest mb-3">
                HELIX SPHERE
              </div>
              <h3 className="text-xl font-bold text-white mb-3">6 device ecosystems.</h3>
              <p className="text-gray-400 text-sm mb-4">
                HELIX knows what devices you have and speaks to all of them.
              </p>
              <div className="space-y-1">
                {["Apple", "Google", "Sony", "Meta", "DJI", "Matter / IoT"].map((eco) => (
                  <div key={eco} className="text-xs text-gray-400 flex items-center gap-2">
                    <span style={{ color: "#00d4ff" }}>&#9670;</span> {eco}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OBS Demo teaser */}
          <div
            className="rounded-2xl p-8 border border-white/10"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div className="text-xs font-semibold text-gray-500 tracking-widest mb-3">
              LIVE INTEGRATION DEMO
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              OBS Studio &#8212; Scene switching with AI context.
            </h3>
            <p className="text-gray-400 text-sm">
              Switch scenes with a voice command. HELIX generates smart context on every scene
              change. Your stream, automated by your AI. This is prototype one. Dozens more
              integrations are coming.
            </p>
          </div>
        </div>
      </section>

      {/* ── WAITLIST FORM ── */}
      <section
        id="waitlist"
        className="py-24 px-6"
        style={{
          background: "rgba(26,115,232,0.05)",
          borderTop: "1px solid rgba(26,115,232,0.2)",
        }}
      >
        <div className="max-w-lg mx-auto text-center">
          <div className="text-xs font-semibold text-blue-400 tracking-widest mb-4">
            LIMITED EARLY ACCESS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Be first. Get everything.
          </h2>
          <p className="text-gray-400 mb-8">
            Early access members get lifetime pricing, direct input on features, and first access
            to every integration as it ships. 50 spots to unlock Phase 1.
          </p>
          <WaitlistForm initialCount={waitlistCount} />
        </div>
      </section>

      {/* ── EARLY ACCESS BENEFITS ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Early access means more than a head start.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔐",
                title: "Lifetime founding price",
                desc: "Lock in the lowest price HELIX will ever be. Early members never pay full price.",
              },
              {
                icon: "🗺️",
                title: "Direct roadmap input",
                desc: "Your feedback shapes what gets built next. Not a survey — direct conversation with the team.",
              },
              {
                icon: "⚡",
                title: "Every integration first",
                desc: "Each new HELIX Flow and HELIX Sphere integration ships to you before public release.",
              },
              {
                icon: "🛡️",
                title: "White-glove onboarding",
                desc: "HELIX onboards anyone in under 5 minutes. Early members get personal setup assistance.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl border border-white/10">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-lg mb-1" style={{ color: "#1a73e8" }}>
              HELIX
            </div>
            <div className="text-xs text-gray-600">by HubNations</div>
          </div>
          <div className="text-xs text-gray-600 text-center">
            &ldquo;Two worlds. One intelligence.&rdquo;
          </div>
          <div className="text-xs text-gray-600">
            &copy; 2026 HubNations. HELIX is coming.
          </div>
        </div>
      </footer>

    </div>
  );
}
