import { Eyebrow, Card } from "@/components/ui";
import { vision, whyUs, marketStats, roadmap } from "@/lib/content";

export const metadata = {
  title: "About — ViramTech",
  description: "ViramTech's vision, edge, and roadmap for enterprise AI.",
};

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-32">
      <Eyebrow>About</Eyebrow>
      <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
        We build AI that earns its place in the enterprise.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed opacity-80">
        The name <em>Viram</em> means a pause — a deliberate moment to think
        before building. ViramTech pairs that discipline with AI-native
        engineering to ship solutions that are secure, scalable, and measured by
        ROI, not hype.
      </p>

      {/* Vision */}
      <h2 id="vision" className="mt-16 scroll-mt-28 text-2xl font-extrabold tracking-tight">
        Our vision
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {vision.map((v, i) => (
          <Card key={v.title}>
            <div className="text-sm font-bold text-indigo-500">0{i + 1}</div>
            <h3 className="mt-3 text-lg font-bold">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed opacity-70">{v.body}</p>
          </Card>
        ))}
      </div>

      {/* Market opportunity */}
      <h2 id="opportunity" className="mt-20 scroll-mt-28 text-2xl font-extrabold tracking-tight">
        The opportunity
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {marketStats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-black/5 bg-black/[0.02] p-7 text-center dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-4xl font-extrabold text-transparent">
              {s.value}
            </div>
            <div className="mt-2 text-sm opacity-60">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Why us */}
      <h2 id="why" className="mt-20 scroll-mt-28 text-2xl font-extrabold tracking-tight">
        Why ViramTech wins
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {whyUs.map((w) => (
          <Card key={w.title}>
            <h3 className="text-base font-bold">{w.title}</h3>
            <p className="mt-2 text-sm leading-relaxed opacity-70">{w.body}</p>
          </Card>
        ))}
      </div>

      {/* Roadmap */}
      <h2 id="roadmap" className="mt-20 scroll-mt-28 text-2xl font-extrabold tracking-tight">
        Our roadmap
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {roadmap.map((r) => (
          <div
            key={r.phase}
            className="rounded-3xl border border-black/5 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-indigo-500">
                {r.phase}
              </span>
              <span className="text-xs opacity-50">{r.period}</span>
            </div>
            <h3 className="mt-3 text-lg font-bold">{r.title}</h3>
            <ul className="mt-4 space-y-2 text-sm opacity-75">
              {r.items.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
