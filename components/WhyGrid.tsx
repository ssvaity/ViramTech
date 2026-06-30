"use client";

import { motion } from "motion/react";
import { LuZap, LuLandmark, LuLayers, LuTrendingUp, LuCheck, LuX } from "react-icons/lu";
import { whyUs } from "@/lib/content";

const meta = [
  { Icon: LuZap, metric: "Weeks, not months" },
  { Icon: LuLandmark, metric: "6 core sectors" },
  { Icon: LuLayers, metric: "Data → deployment" },
  { Icon: LuTrendingUp, metric: "Documented ROI" },
];

const compare = [
  { typical: "Months to first value", viram: "Weeks to first value" },
  { typical: "Generic, off-the-shelf models", viram: "Domain-tuned, AI-native" },
  { typical: "Handed off after the demo", viram: "Owned end-to-end, to production" },
  { typical: "ROI left unproven", viram: "ROI measured and documented" },
];

export function WhyGrid() {
  return (
    <>
      {/* Reason cards */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {whyUs.map((w, i) => {
          const { Icon, metric } = meta[i];
          return (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col rounded-2xl border border-black/5 bg-black/[0.02] p-7 transition hover:-translate-y-1 hover:border-indigo-500/30 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                  <Icon size={22} />
                </span>
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-indigo-500/50">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{w.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed opacity-70">{w.body}</p>
              <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                {metric}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Comparison */}
      <h2 className="mt-20 text-2xl font-extrabold tracking-tight sm:text-3xl">
        ViramTech vs. the typical approach
      </h2>
      <div className="mt-8 grid overflow-hidden rounded-3xl border border-black/5 sm:grid-cols-2 dark:border-white/10">
        <div className="border-b border-black/5 bg-black/[0.02] p-7 sm:border-b-0 sm:border-r dark:border-white/10 dark:bg-white/[0.02]">
          <h3 className="text-sm font-bold uppercase tracking-wide opacity-50">
            The typical AI project
          </h3>
          <ul className="mt-5 space-y-4">
            {compare.map((c) => (
              <li key={c.typical} className="flex items-start gap-3 text-sm opacity-60">
                <LuX size={18} className="mt-0.5 shrink-0 text-rose-400" />
                {c.typical}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-br from-indigo-500/[0.07] to-sky-500/[0.04] p-7">
          <h3 className="text-sm font-bold uppercase tracking-wide text-indigo-500">
            The ViramTech way
          </h3>
          <ul className="mt-5 space-y-4">
            {compare.map((c, i) => (
              <motion.li
                key={c.viram}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.1 }}
                className="flex items-start gap-3 text-sm font-medium"
              >
                <LuCheck size={18} className="mt-0.5 shrink-0 text-indigo-500" />
                {c.viram}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default WhyGrid;
