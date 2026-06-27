import Link from "next/link";
import { Eyebrow, Check } from "@/components/ui";
import { products } from "@/lib/content";

export const metadata = {
  title: "Products — ViramTech",
  description: "Seven production-ready enterprise AI products from ViramTech.",
};

export default function Products() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-32">
      <Eyebrow>Products</Eyebrow>
      <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
        Production-ready enterprise AI.
      </h1>
      <p className="mt-5 max-w-xl text-lg opacity-70">
        Seven pre-built products, each deployable in weeks and tuned to real
        business outcomes.
      </p>

      <div className="mt-14 space-y-6">
        {products.map((p, i) => (
          <article
            key={p.slug}
            id={p.slug}
            className="scroll-mt-28 rounded-3xl border border-black/5 bg-black/[0.02] p-7 sm:p-9 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{p.icon}</span>
                  <span className="text-sm font-bold text-indigo-500/70">
                    0{i + 1}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-extrabold tracking-tight">
                  {p.name}
                </h2>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-indigo-500">
                  {p.kicker}
                </p>
                <p className="mt-4 text-base leading-relaxed opacity-80">
                  {p.summary}
                </p>
                <p className="mt-5 text-sm leading-relaxed opacity-60">
                  <span className="font-semibold opacity-90">Use cases: </span>
                  {p.useCases}
                </p>
              </div>
              <ul className="space-y-3 md:border-l md:border-black/10 md:pl-8 md:dark:border-white/10">
                {p.features.map((f) => (
                  <Check key={f}>{f}</Check>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 px-8 py-12 text-center text-white">
        <h2 className="text-2xl font-extrabold">Not sure where to start?</h2>
        <p className="mx-auto mt-3 max-w-md text-white/80">
          We&apos;ll help you pick the highest-ROI product for your business.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-semibold text-indigo-600 transition hover:bg-white/90"
        >
          Talk to us
        </Link>
      </div>
    </section>
  );
}
