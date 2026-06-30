import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/content";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product — ViramTech" };
  return {
    title: `${product.name} — ViramTech`,
    description: product.summary,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = products.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const product = products[index];

  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-32">
      <Link
        href="/"
        className="mb-6 inline-block text-sm font-semibold text-indigo-500 hover:underline"
      >
        ← Home
      </Link>

      {/* Hero */}
      {product.image ? (
        <div className="relative mt-8 overflow-hidden rounded-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover sm:h-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-7 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
              {product.kicker}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              {product.name}
            </h1>
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <span className="text-5xl">{product.icon}</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-indigo-500">
            {product.kicker}
          </p>
        </div>
      )}

      <p className="mt-8 max-w-2xl text-lg leading-relaxed opacity-80">
        {product.summary}
      </p>

      {/* Impact — charts */}
      {product.metrics && (
        <div className="mt-12 grid gap-10 rounded-3xl border border-black/5 bg-black/[0.02] p-8 sm:p-10 md:grid-cols-2 dark:border-white/10 dark:bg-white/[0.03]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              Proven impact
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed opacity-70">
              The outcomes teams see when {product.name} goes to production.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-10 gap-y-5">
              {product.metrics.map((m) => (
                <div key={m.label}>
                  <div className="bg-gradient-to-r from-[#3F56A4] to-[#33A5DB] bg-clip-text text-4xl font-extrabold text-transparent">
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs opacity-60">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bar chart */}
          <div className="flex flex-col justify-center gap-5">
            {product.metrics.map((m) => (
              <div key={m.label}>
                <div className="flex items-center justify-between text-sm">
                  <span className="opacity-70">{m.label}</span>
                  <span className="font-bold">{m.value}</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#3F56A4] to-[#33A5DB]"
                    style={{ width: `${m.bar}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Key features */}
      <h2 className="mt-16 text-2xl font-extrabold tracking-tight sm:text-3xl">
        Key features
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {product.features.map((f) => (
          <div
            key={f}
            className="rounded-2xl border border-black/5 bg-black/[0.02] p-5 transition hover:border-indigo-500/30 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-500">
              ✓
            </span>
            <p className="mt-3 text-sm font-semibold leading-snug">{f}</p>
          </div>
        ))}
      </div>

      {/* Use cases */}
      {product.useCaseList && (
        <>
          <h2 className="mt-16 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Use cases
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {product.useCaseList.map((u, i) => (
              <div
                key={u.title}
                className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 transition hover:border-indigo-500/30 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="text-sm font-bold text-indigo-500/70">
                  0{i + 1}
                </div>
                <h3 className="mt-2 text-lg font-bold tracking-tight">
                  {u.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed opacity-70">
                  {u.body}
                </p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Industry-specific solutions */}
      {product.industries && (
        <>
          <h2 className="mt-16 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Industry-specific solutions
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {product.industries.map((ind) => (
              <div
                key={ind.name}
                className="flex gap-4 rounded-2xl border border-black/5 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <span className="text-2xl">{ind.icon}</span>
                <div>
                  <h3 className="font-bold tracking-tight">{ind.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed opacity-70">
                    {ind.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* CTA */}
      <div className="mt-16 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 px-8 py-12 text-center text-white">
        <h2 className="text-2xl font-extrabold">Put {product.name} to work.</h2>
        <p className="mx-auto mt-3 max-w-md text-white/80">
          Tell us your goals and we&apos;ll ship a pilot in weeks.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-semibold text-indigo-600 transition hover:bg-white/90"
        >
          Talk to us
        </Link>
      </div>

      {/* More products */}
      <div className="mt-16">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] opacity-50">
          More products
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {products
            .filter((p) => p.slug !== slug)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-black/[0.02] px-4 py-3 transition hover:border-indigo-500/30 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <span className="text-xl">{p.icon}</span>
                <span className="text-sm font-bold group-hover:text-indigo-500">
                  {p.name}
                </span>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
