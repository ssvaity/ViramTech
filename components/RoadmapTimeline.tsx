"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { LuRocket, LuTrendingUp, LuTrophy, LuCheck } from "react-icons/lu";
import { roadmap } from "@/lib/content";

const icons = [LuRocket, LuTrendingUp, LuTrophy];

const statusStyles: Record<string, string> = {
  "In progress":
    "bg-indigo-600 text-white",
  "Up next":
    "border border-indigo-500/40 text-indigo-600 dark:text-indigo-300",
  Planned: "border border-black/10 opacity-60 dark:border-white/15",
};

export function RoadmapTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (spineRef.current) setHeight(spineRef.current.getBoundingClientRect().height);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 70%"],
  });
  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={containerRef} className="relative mt-14">
      <div ref={spineRef} className="relative">
        {roadmap.map((p, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div key={p.phase} className="relative flex gap-6 pb-12 pl-20 last:pb-0">
              {/* Node */}
              <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center">
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.1 }}
                  className="z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-500/20 bg-[var(--background)] text-indigo-500 shadow-sm ring-4 ring-[var(--background)] dark:text-indigo-400"
                >
                  <Icon size={26} />
                </motion.span>
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="flex-1 rounded-3xl border border-black/5 bg-black/[0.02] p-7 sm:p-8 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">
                    {p.phase} · {p.period}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${statusStyles[p.status] ?? ""}`}
                  >
                    {p.status}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-extrabold tracking-tight sm:text-2xl">
                  {p.title}
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 rounded-xl border border-black/5 bg-black/[0.015] px-4 py-3 text-sm dark:border-white/10 dark:bg-white/[0.02]"
                    >
                      <LuCheck size={16} className="mt-0.5 shrink-0 text-indigo-500" />
                      <span className="opacity-80">{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Spine beam */}
      <div
        style={{ height }}
        className="pointer-events-none absolute left-8 top-0 w-px bg-black/10 dark:bg-white/10"
      >
        <motion.div
          style={{ height: beamHeight, opacity: beamOpacity }}
          className="absolute inset-x-0 top-0 w-px rounded-full bg-gradient-to-b from-[#3F56A4] via-[#33A5DB] to-transparent"
        />
      </div>
    </div>
  );
}

export default RoadmapTimeline;
