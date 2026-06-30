import Link from "next/link";
import { LuCheck } from "react-icons/lu";
import { Eyebrow } from "@/components/ui";
import { architecture } from "@/lib/content";
import { FrameworksDeepDive } from "@/components/FrameworksDeepDive";
import { WhyViableGrid } from "@/components/WhyViableGrid";

export const metadata = {
  title: "Technical Architecture — ViramTech",
  description: "A layered approach to enterprise AI delivery.",
};

export default function Architecture() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-32">
      <Link
        href="/technology"
        className="mb-6 inline-block text-sm font-semibold text-indigo-500 hover:underline"
      >
        ← Technology
      </Link>
      <Eyebrow>Technology · AI Frameworks</Eyebrow>
      <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
        Frameworks that tie it all together.
      </h1>
      <p className="mt-5 max-w-xl text-lg opacity-70">
        The tooling layer — orchestration, model integration and fine-tuning —
        that turns raw models into production solutions that speak your business.
      </p>

      {/* AI Frameworks — half-page deep dives (heading handled by the page hero) */}
      <FrameworksDeepDive showHeading={false} />

      {/* How it all fits together — lead into the architecture */}
      <div className="mt-28 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          How it all fits together.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-70">
          From the frameworks that orchestrate your models to the layered stack
          that runs them in production — here&apos;s the architecture behind every
          ViramTech solution.
        </p>
      </div>

      {/* Technical architecture — layered stack */}
      <h2 className="mt-16 text-2xl font-extrabold tracking-tight sm:text-3xl">
        Technical architecture
      </h2>
      <p className="mt-3 text-lg opacity-70">
        A layered approach to enterprise AI delivery — every tier owned, secured
        and observable, from the apps your users touch to the clouds underneath.
      </p>
      <div className="relative mt-12">
        {/* connecting rail */}
        <div className="pointer-events-none absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-[#3F56A4]/60 via-[#33A5DB]/40 to-transparent" />
        <div className="space-y-5">
          {architecture.map((a, i) => (
            <div key={a.layer} id={a.slug} className="relative scroll-mt-28 pl-16">
              {/* number node */}
              <span className="absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--background)] text-sm font-bold text-indigo-500 shadow-md ring-1 ring-black/5 dark:text-indigo-400 dark:ring-white/10">
                0{i + 1}
              </span>

              <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 transition hover:border-indigo-500/30 sm:p-7 dark:border-white/10 dark:bg-white/[0.03]">
                <h3 className="text-lg font-bold tracking-tight text-indigo-600 dark:text-indigo-300">
                  {a.layer}
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed opacity-70">
                  {a.summary}
                </p>

                {/* components with notes — plain text, no inner containers */}
                <div className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {a.components.map((c) => (
                    <div key={c.name}>
                      <div className="text-sm font-bold tracking-tight">{c.name}</div>
                      <div className="mt-0.5 text-xs leading-snug opacity-60">{c.note}</div>
                    </div>
                  ))}
                </div>

                {/* why this layer works */}
                <div className="mt-5 flex items-start gap-2.5 border-t border-black/5 pt-4 dark:border-white/10">
                  <LuCheck size={16} className="mt-0.5 shrink-0 text-indigo-500" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">Why it works — </span>
                    <span className="opacity-70">{a.why}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why this architecture is viable */}
      <h2 className="mt-24 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
        Why this architecture is viable
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-lg opacity-70">
        Every layer has one job and a clean contract with the next — which is
        exactly what lets this hold up at enterprise scale.
      </p>
      <WhyViableGrid />

      {/* CTA */}
      <div className="mt-24 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 px-8 py-14 text-center text-white">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          See the architecture in action
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Discover how our stack can power your enterprise AI transformation —
          securely and efficiently.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-block rounded-full bg-white px-7 py-3 font-semibold text-indigo-600 transition hover:bg-white/90"
        >
          Book a consultation
        </Link>
      </div>
    </section>
  );
}
