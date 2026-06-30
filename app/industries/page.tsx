import { Eyebrow } from "@/components/ui";
import { sectors } from "@/lib/content";

export const metadata = {
  title: "Industries — ViramTech",
  description:
    "Enterprise AI tuned for banking, retail, manufacturing, healthcare, logistics and insurance.",
};

export default function Industries() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-32">
      <Eyebrow>Industries</Eyebrow>
      <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
        AI tuned to your sector.
      </h1>
      <p className="mt-5 max-w-xl text-lg opacity-70">
        We bring deep domain knowledge to the verticals that run on data — and
        map the right AI to each one.
      </p>

      {/* Quick nav */}
      <div className="mt-8 flex flex-wrap gap-2">
        {sectors.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="rounded-full border border-black/10 px-4 py-1.5 text-sm font-semibold opacity-75 transition hover:border-indigo-500/40 hover:text-indigo-500 hover:opacity-100 dark:border-white/15"
          >
            {s.name}
          </a>
        ))}
      </div>

      {/* Per-sector sections */}
      <div className="mt-14 space-y-6">
        {sectors.map((s) => (
          <section
            key={s.slug}
            id={s.slug}
            className="scroll-mt-28 rounded-3xl border border-black/5 bg-black/[0.02] p-7 sm:p-9 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{s.icon}</span>
              <h2 className="text-2xl font-extrabold tracking-tight">
                {s.name}
              </h2>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed opacity-65">
              Where ViramTech puts production AI to work in {s.name}.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {s.points.map((pt, i) => (
                <div
                  key={pt}
                  className="rounded-2xl border border-black/5 bg-black/[0.02] p-5 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/15 text-xs font-bold text-indigo-500">
                    {i + 1}
                  </span>
                  <p className="mt-3 text-sm font-semibold">{pt}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
