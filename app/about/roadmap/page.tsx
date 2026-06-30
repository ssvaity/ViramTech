import Link from "next/link";
import { Eyebrow } from "@/components/ui";
import { RoadmapTimeline } from "@/components/RoadmapTimeline";
import { NextPage } from "@/components/NextPage";

export const metadata = {
  title: "Our Roadmap — ViramTech",
  description: "From enterprise pilots to scale to market leadership.",
};

export default function Roadmap() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-32">
      <Link href="/" className="mb-6 inline-block text-sm font-semibold text-indigo-500 hover:underline">
        ← Home
      </Link>
      <Eyebrow>About · Our roadmap</Eyebrow>
      <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
        Pilots{" "}
        <span className="font-serif font-normal italic text-indigo-500">to</span>{" "}
        market leadership.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed opacity-70">
        A deliberate path from proven pilots to a full product suite and beyond.
      </p>

      <RoadmapTimeline />

      <div className="mt-16 flex flex-wrap items-center gap-4 rounded-3xl border border-black/5 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.03]">
        <p className="flex-1 text-base font-semibold">
          Want to be one of our flagship pilots?
        </p>
        <Link
          href="/contact"
          className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
        >
          Book a consultation
        </Link>
      </div>
      <NextPage current="/about/roadmap" />
    </section>
  );
}
