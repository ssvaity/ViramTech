"use client";

import { motion } from "motion/react";
import {
  LuShieldCheck,
  LuActivity,
  LuCloud,
  LuTrendingUp,
  LuLayers,
  LuBlocks,
} from "react-icons/lu";

const items = [
  {
    title: "Security & compliance",
    body: "Enterprise-grade protection baked into every layer.",
    Icon: LuShieldCheck,
  },
  {
    title: "Observability & monitoring",
    body: "Real-time insight into model performance and system health.",
    Icon: LuActivity,
  },
  {
    title: "Multi-cloud portability",
    body: "Deploy anywhere, with no vendor lock-in.",
    Icon: LuCloud,
  },
  {
    title: "Scales to real workloads",
    body: "Architected for production, not just proof-of-concept.",
    Icon: LuTrendingUp,
  },
  {
    title: "Separation of concerns",
    body: "Each tier has one job and a clean contract — change one without rewriting the rest.",
    Icon: LuLayers,
  },
  {
    title: "Built on proven standards",
    body: "Battle-tested open components, not bespoke glue — easy to staff, run and maintain.",
    Icon: LuBlocks,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};
const iconPop = {
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 18 },
  },
};

export function WhyViableGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map(({ title, body, Icon }) => (
        <motion.div key={title} variants={item}>
          <motion.span
            variants={iconPop}
            className="inline-flex text-indigo-500 dark:text-indigo-400"
          >
            <Icon size={30} />
          </motion.span>
          <h4 className="mt-4 text-base font-bold tracking-tight">{title}</h4>
          <p className="mt-2 max-w-xs text-sm leading-relaxed opacity-65">{body}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default WhyViableGrid;
