"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { VisionTopic } from "@/lib/content";

// A scroll-driven timeline where each node is a TOPIC (not a date).
// A gradient beam fills the spine as you scroll past each topic.
export function VisionTimeline({ items }: { items: VisionTopic[] }) {
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
  }, [items.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 25%", "end 65%"],
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={containerRef} className="relative mt-6">
      <div ref={spineRef} className="relative">
        {items.map((item, i) => (
          <TimelineRow key={item.topic} item={item} index={i} progress={scrollYProgress} count={items.length} />
        ))}
      </div>

      {/* Spine: a faint full-height rail with a gradient beam that grows on scroll */}
      <div
        style={{ height }}
        className="pointer-events-none absolute left-5 top-0 w-px bg-black/10 md:left-7 dark:bg-white/10"
      >
        <motion.div
          style={{ height: beamHeight, opacity: beamOpacity }}
          className="absolute inset-x-0 top-0 w-px rounded-full bg-gradient-to-b from-[#3F56A4] via-[#33A5DB] to-transparent"
        />
      </div>
    </div>
  );
}

function TimelineRow({
  item,
  index,
  progress,
  count,
}: {
  item: VisionTopic;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  count: number;
}) {
  // The node lights up once the beam reaches its position.
  const threshold = index / count;
  const dotColor = useTransform(progress, [threshold, threshold + 0.06], [
    "rgba(99,102,241,0.18)",
    "rgba(99,102,241,1)",
  ]);
  const dotScale = useTransform(progress, [threshold, threshold + 0.06], [1, 1.25]);

  return (
    <div className="relative flex gap-6 pb-14 pl-12 last:pb-0 md:gap-10 md:pl-20">
      {/* Node + sticky topic label */}
      <div className="absolute left-0 top-0 md:sticky md:top-32 md:self-start">
        <motion.span
          style={{ backgroundColor: dotColor, scale: dotScale }}
          className="absolute left-5 top-1 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full ring-4 ring-[var(--background)] md:left-7"
        />
        <div className="hidden md:block md:pl-16">
          <h3 className="max-w-[11rem] bg-gradient-to-br from-[#3F56A4] to-[#33A5DB] bg-clip-text text-2xl font-extrabold leading-tight tracking-tight text-transparent">
            {item.topic}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="md:ml-48">
        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500 md:hidden">
          {item.topic}
        </h3>
        <p className="mt-1 text-sm font-bold uppercase tracking-[0.15em] text-indigo-500/80 md:mt-0">
          {item.heading}
        </p>
        <p className="mt-3 max-w-xl text-lg leading-relaxed opacity-80">{item.body}</p>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {item.points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2.5 rounded-xl border border-black/5 bg-black/[0.02] px-4 py-3 text-sm dark:border-white/10 dark:bg-white/[0.03]"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
              <span className="opacity-80">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VisionTimeline;
