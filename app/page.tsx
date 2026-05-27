const features = [
  {
    title: "AI Compatibility Matching",
    copy: "Match on founder-market fit, operating style, risk appetite, and communication patterns so trust starts before first call.",
  },
  {
    title: "Verified Profiles",
    copy: "Identity, work history, portfolio signals, and founder intent checks reduce ghosting and bad-faith introductions.",
  },
  {
    title: "Skill Assessments",
    copy: "Structured technical, go-to-market, product, and leadership snapshots replace vague bios with evidence founders can compare fast.",
  },
  {
    title: "Legal Templates",
    copy: "Founder-friendly NDAs, equity split prompts, and vesting checklists help promising teams handle hard conversations early.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create Profile",
    copy: "Share skills, values, location flexibility, working rhythm, and startup vision. Verification layers make trust explicit.",
  },
  {
    number: "02",
    title: "Get Matched",
    copy: "AI ranks complementary founders by compatibility, not keyword overlap, cutting weeks of searching into focused introductions.",
  },
  {
    number: "03",
    title: "Start Building",
    copy: "Use guided conversation prompts and legal starter templates to align on geography, equity, roles, and pace before momentum fades.",
  },
];

const stats = [
  ["$1.21B", "co-founder matching and startup networking market signal"],
  ["18.2%", "projected CAGR as founders move beyond local networks"],
  ["650K+", "founders already searching on existing platforms"],
];

function WaitlistForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={`flex w-full flex-col gap-3 sm:flex-row ${compact ? "max-w-xl" : "max-w-2xl"}`}>
      <label className="sr-only" htmlFor={compact ? "final-email" : "hero-email"}>
        Email address
      </label>
      <input
        id={compact ? "final-email" : "hero-email"}
        type="email"
        required
        placeholder="founder@startup.com"
        className="min-h-14 flex-1 rounded-full border border-ink/15 bg-white px-6 text-base text-slate-900 shadow-sm outline-none transition focus:border-signal focus:ring-4 focus:ring-signal/20"
      />
      <button className="min-h-14 rounded-full bg-signal px-8 font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-[#08dd63] focus:outline-none focus:ring-4 focus:ring-signal/30">
        Join the Waitlist
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-ink/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-xl font-black tracking-tight text-ink">
            CoFounder<span className="text-signal">Match</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-ink/80 md:flex">
            <a className="transition hover:text-signal" href="#how-it-works">
              How It Works
            </a>
            <a className="transition hover:text-signal" href="#features">
              Features
            </a>
            <a className="rounded-full bg-ink px-5 py-2.5 text-white transition hover:bg-signal hover:text-ink" href="#join">
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      <section id="top" className="noise relative isolate overflow-hidden bg-white">
        <div className="absolute left-1/2 top-12 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-signal/20 blur-3xl" />
        <div className="absolute right-0 top-28 -z-10 h-[30rem] w-[30rem] rounded-full bg-ink/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-32">
          <div className="reveal relative z-10">
            <div className="mb-7 inline-flex rounded-full border border-ink/15 bg-fog px-4 py-2 text-sm font-bold text-ink">
              AI-vetted founder chemistry, minus networking chaos
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-ink sm:text-7xl lg:text-8xl">
              Find Your Perfect Co-Founder, Powered by AI.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Our AI matches you with verified co-founders based on skills, personality, and vision. Stop searching. Start building.
            </p>
            <div className="mt-9">
              <WaitlistForm />
            </div>
          </div>

          <div className="reveal relative z-10 rounded-[2rem] border border-ink/10 bg-white p-5 shadow-deep [animation-delay:160ms]">
            <div className="rounded-[1.5rem] bg-ink p-6 text-white">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <div>
                  <p className="text-sm text-white/60">Compatibility score</p>
                  <p className="text-5xl font-black text-signal">94%</p>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">Verified</div>
              </div>
              <div className="space-y-5 py-6">
                {[
                  ["Vision alignment", "91%"],
                  ["Complementary skills", "97%"],
                  ["Working rhythm", "89%"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{label}</span>
                      <span className="text-signal">{value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-signal" style={{ width: value }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-white p-5 text-ink">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-signal">Next best intro</p>
                <p className="mt-2 text-2xl font-black">Product founder in Austin, open to remote-first build sprint.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-fog py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-black uppercase tracking-[0.26em] text-signal">Features</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-6xl">
              Designed for founder risk, not dating-app swipes.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="group rounded-[2rem] border border-ink/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-deep"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-lg font-black text-signal">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-black text-ink">{feature.title}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-600">{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-black uppercase tracking-[0.26em] text-signal">How It Works</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-6xl">
                From lonely search to aligned team.
              </h2>
            </div>
            <div className="space-y-5">
              {steps.map((step) => (
                <article key={step.number} className="grid gap-6 rounded-[2rem] border border-ink/10 bg-fog p-7 md:grid-cols-[7rem_1fr]">
                  <div className="text-5xl font-black text-signal">{step.number}</div>
                  <div>
                    <h3 className="text-2xl font-black text-ink">{step.title}</h3>
                    <p className="mt-3 text-lg leading-8 text-slate-600">{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="font-black uppercase tracking-[0.26em] text-signal">Market Proof</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Founder matching is moving from warm intros to intelligent infrastructure.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {stats.map(([value, label]) => (
              <div key={value} className="rounded-[2rem] border border-white/15 bg-white/10 p-8 backdrop-blur">
                <p className="text-5xl font-black text-signal">{value}</p>
                <p className="mt-4 text-lg leading-7 text-white/75">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="relative overflow-hidden bg-fog py-24">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-signal/20 blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="font-black uppercase tracking-[0.26em] text-signal">Join Waitlist</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-6xl">
            Meet co-founders who match how you build.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Be first to access verified matches, compatibility reports, skill assessments, and legal starter kits built for serious founders.
          </p>
          <div className="mt-9 flex justify-center">
            <WaitlistForm compact />
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-black text-ink">CoFounder<span className="text-signal">Match</span></p>
          <p>AI-powered matching for verified, high-trust founding teams.</p>
          <p>© 2026 CoFounderMatch. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
