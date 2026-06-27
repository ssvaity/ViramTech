import { Eyebrow } from "@/components/ui";
import { foundation, architecture } from "@/lib/content";
import { FoundationCardSwap } from "@/components/FoundationCardSwap";

export const metadata = {
  title: "Technology — ViramTech",
  description: "The ViramTech AI stack and technical architecture.",
};

export default function Technology() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-32">
      <Eyebrow>Technology</Eyebrow>
      <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
        An AI stack built to scale.
      </h1>
      <p className="mt-5 max-w-xl text-lg opacity-70">
        From models to multi-cloud infrastructure, we own every layer — so your
        solution is secure, observable and production-grade.
      </p>

      {/* Foundation — interactive card swap */}
      <div className="mt-20 grid items-center gap-x-10 gap-y-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Technology foundation
          </h2>
          <p className="mt-4 max-w-md text-lg opacity-70">
            Three pillars underpin every solution we ship — the models, the
            infrastructure that runs them, and the frameworks that tie it all
            together.
          </p>
          <ul className="mt-7 space-y-3">
            {foundation.map((f) => (
              <li
                key={f.title}
                className="flex items-center gap-3 text-sm font-semibold"
              >
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                {f.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[440px] sm:h-[520px]">
          <FoundationCardSwap />
        </div>
      </div>

      {/* Architecture */}
      <h2 className="mt-20 text-2xl font-extrabold tracking-tight">
        Technical architecture
      </h2>
      <p className="mt-3 max-w-xl opacity-70">
        Five layers, from the interfaces your users touch down to the
        infrastructure that runs it all.
      </p>
      <div className="mt-8 space-y-3">
        {architecture.map((a, i) => (
          <div
            key={a.layer}
            className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-black/[0.02] p-6 sm:flex-row sm:items-center sm:gap-6 dark:border-white/10 dark:bg-white/[0.03]"
            style={{ opacity: 1 - i * 0.04 }}
          >
            <div className="flex items-center gap-3 sm:w-56 sm:shrink-0">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/15 text-xs font-bold text-indigo-500">
                {i + 1}
              </span>
              <span className="font-bold">{a.layer}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {a.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium opacity-75 dark:border-white/15"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
