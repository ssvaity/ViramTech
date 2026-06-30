import Link from "next/link";
import { LuTelescope, LuTarget } from "react-icons/lu";
import { Eyebrow } from "@/components/ui";
import { visionMission, visionTimeline } from "@/lib/content";
import { VisionTimeline } from "@/components/VisionTimeline";
import { NextPage } from "@/components/NextPage";

export const metadata = {
  title: "Our Vision — ViramTech",
  description: "AI-native, enterprise-ready, results-driven by design.",
};

export default function Vision() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-32">
      <Link href="/" className="mb-6 inline-block text-sm font-semibold text-indigo-500 hover:underline">
        ← Home
      </Link>
      <Eyebrow>About · Our vision</Eyebrow>
      <h1 className="mt-3 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
        AI that&apos;s built{" "}
        <span className="font-serif font-normal italic text-indigo-500">for</span>{" "}
        the enterprise.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed opacity-70">
        The name <em>Viram</em> means a pause — a deliberate moment to think
        before building. ViramTech pairs that discipline with AI-native
        engineering to ship solutions that are secure, scalable, and measured by
        ROI, not hype.
      </p>

      {/* Vision & Mission statements */}
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/5 bg-black/[0.02] p-8 dark:border-white/10 dark:bg-white/[0.03]">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
            <LuTelescope size={24} />
          </span>
          <h2 className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-indigo-500">
            Our vision
          </h2>
          <p className="mt-3 text-xl font-semibold leading-snug tracking-tight">
            {visionMission.vision}
          </p>
        </div>
        <div className="rounded-3xl border border-black/5 bg-black/[0.02] p-8 dark:border-white/10 dark:bg-white/[0.03]">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
            <LuTarget size={24} />
          </span>
          <h2 className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-indigo-500">
            Our mission
          </h2>
          <p className="mt-3 text-xl font-semibold leading-snug tracking-tight">
            {visionMission.mission}
          </p>
        </div>
      </div>

      {/* Topic timeline — from problem to principle */}
      <h2 className="mt-24 text-2xl font-extrabold tracking-tight sm:text-3xl">
        From the gap to our principles
      </h2>
      <p className="mt-3 max-w-xl text-lg opacity-70">
        The journey from the problem we saw to the principles that guide
        everything we build.
      </p>
      <VisionTimeline items={visionTimeline} />

      <CtaRow />
      <NextPage current="/about/vision" />
    </section>
  );
}

function CtaRow() {
  return (
    <div className="mt-20 flex flex-wrap items-center gap-4 rounded-3xl border border-black/5 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.03]">
      <p className="flex-1 text-base font-semibold">
        Want to see how this works for your business?
      </p>
      <Link
        href="/contact"
        className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
      >
        Book a consultation
      </Link>
    </div>
  );
}
