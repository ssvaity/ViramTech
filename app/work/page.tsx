import Link from "next/link";
import { HeroParallax, type Project } from "@/components/HeroParallax";

export const metadata = {
  title: "Our Work — ViramTech",
  description:
    "Selected ViramTech projects — production AI and websites we have shipped.",
};

// ──────────────────────────────────────────────────────────────────────────
// Add your 3 projects here.
//   link    → the live URL of your project / website (opens in a new tab)
//   image   → optional screenshot. Drop a file in /public/work/ and set e.g.
//             image: "/work/project-one.png". If omitted, a branded card shows.
//   subtitle→ short tag shown on hover (e.g. the client or category)
// ──────────────────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    title: "Project One",
    subtitle: "Replace with client / category",
    link: "https://example.com",
    // image: "/work/project-one.png",
    gradient: "from-[#3F56A4] to-[#14284E]",
  },
  {
    title: "Project Two",
    subtitle: "Replace with client / category",
    link: "https://example.com",
    // image: "/work/project-two.png",
    gradient: "from-[#33A5DB] to-[#2A3E77]",
  },
  {
    title: "Project Three",
    subtitle: "Replace with client / category",
    link: "https://example.com",
    // image: "/work/project-three.png",
    gradient: "from-[#597CBD] to-[#2A3E77]",
  },
];

export default function Work() {
  return (
    <>
      <HeroParallax projects={projects} />

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Have a problem worth solving?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Tell us the number you want to move. We&apos;ll find the highest-ROI
            place to start and ship a pilot in weeks.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-indigo-600 transition hover:bg-white/90"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
