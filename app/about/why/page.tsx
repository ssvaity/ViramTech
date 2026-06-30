import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { WhyGrid } from "@/components/WhyGrid";
import { NextPage } from "@/components/NextPage";

export const metadata = {
  title: "Why ViramTech — ViramTech",
  description: "Speed to value, industry expertise, full-stack control, proven ROI.",
};

export default function Why() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-32">
      <Link href="/" className="mb-6 inline-block text-sm font-semibold text-indigo-500 hover:underline">
        ← Home
      </Link>
      <Eyebrow>About · Why ViramTech</Eyebrow>
      <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
        Why teams choose{" "}
        <span className="font-serif font-normal italic text-indigo-500">us</span>.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed opacity-70">
        We pair deep domain knowledge with AI-native engineering and end-to-end
        ownership — so AI actually reaches production and pays off.
      </p>

      <WhyGrid />

      <div className="mt-16 flex flex-wrap items-center gap-4 rounded-3xl border border-black/5 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.03]">
        <p className="flex-1 text-base font-semibold">
          Ready to put AI to work?
        </p>
        <Link
          href="/contact"
          className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
        >
          Talk to us
        </Link>
      </div>
      <NextPage current="/about/why" />
    </section>
  );
}
