import Link from "next/link";
import { Eyebrow, Card } from "@/components/ui";
import { TechMarquee } from "@/components/TechMarquee";
import { ContainerScroll } from "@/components/ContainerScroll";
import { HeroPreview } from "@/components/HeroPreview";
import { gaps, vision, foundation } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-36 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent_70%)]" />
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] opacity-70 dark:border-white/15">
          Enterprise AI, delivered
        </p>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
          Transforming enterprise operations with{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
            intelligent AI
          </span>
          .
        </h1>
        <p className="mt-6 max-w-2xl text-lg opacity-70">
          ViramTech builds AI-native solutions that turn data into decisions,
          automate the work that slows teams down, and deliver measurable ROI —
          across banking, retail, manufacturing, healthcare and more.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-full bg-indigo-600 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500">
            Book a consultation
          </Link>
          <Link href="/products" className="rounded-full border border-black/15 px-7 py-3 font-semibold transition hover:border-black/40 dark:border-white/20 dark:hover:border-white/40">
            Explore products
          </Link>
        </div>
      </section>

      {/* Tech stack marquee */}
      <TechMarquee />

      {/* Scroll-reveal product preview */}
      <ContainerScroll
        titleComponent={
          <>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500">
              The ViramTech console
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Watch your operations <br />
              <span className="bg-gradient-to-r from-[#3F56A4] to-[#33A5DB] bg-clip-text text-transparent">
                run themselves.
              </span>
            </h2>
          </>
        }
      >
        <HeroPreview />
      </ContainerScroll>

      {/* The Enterprise AI Gap */}
      <Section>
        <Eyebrow>The enterprise AI gap</Eyebrow>
        <H2>Most AI never makes it into production.</H2>
        <Lead>
          Ambitious teams stall on the same four problems. We built ViramTech to
          close them.
        </Lead>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gaps.map((g) => (
            <Card key={g.title}>
              <h3 className="text-base font-bold">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-70">{g.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Our Vision */}
      <Section muted>
        <Eyebrow>Our vision</Eyebrow>
        <H2>AI that&apos;s built for the enterprise.</H2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {vision.map((v, i) => (
            <Card key={v.title}>
              <div className="text-sm font-bold text-indigo-500">
                0{i + 1}
              </div>
              <h3 className="mt-3 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-70">{v.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technology Foundation */}
      <Section>
        <Eyebrow>Technology foundation</Eyebrow>
        <H2>A full AI stack, owned end to end.</H2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {foundation.map((f) => (
            <Card key={f.title}>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <ul className="mt-4 space-y-2 text-sm opacity-75">
                {f.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    {it}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/technology" className="text-sm font-semibold text-indigo-500 hover:underline">
            See the technical architecture →
          </Link>
        </div>
      </Section>
    </>
  );
}

/* — small layout helpers used only on this page — */
function Section({
  children,
  muted = false,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section className={muted ? "bg-black/[0.015] dark:bg-white/[0.015]" : ""}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">{children}</div>
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
      {children}
    </h2>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 max-w-xl text-lg opacity-70">{children}</p>;
}
