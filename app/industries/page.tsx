import { Eyebrow } from "@/components/ui";
import { sectors } from "@/lib/content";

export const metadata = {
  title: "Industries — ViramTech",
  description: "Enterprise AI built for banking, retail, manufacturing, healthcare, logistics and insurance.",
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

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {sectors.map((s) => (
          <div
            key={s.name}
            className="rounded-3xl border border-black/5 bg-black/[0.02] p-7 transition hover:border-indigo-500/30 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{s.icon}</span>
              <h2 className="text-xl font-bold tracking-tight">{s.name}</h2>
            </div>
            <ul className="mt-5 space-y-2.5">
              {s.points.map((pt, i) => (
                <li key={pt} className="flex items-center gap-3 text-sm opacity-80">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-xs font-bold text-indigo-500">
                    {i + 1}
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
