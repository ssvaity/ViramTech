"use client";

import { StickyScroll } from "./StickyScroll";
import { gaps } from "@/lib/content";

export function GapStickyScroll() {
  const content = gaps.map((g, i) => ({
    title: g.title,
    description: (
      <>
        <p className="text-lg leading-relaxed">{g.body}</p>
        <ul className="mt-5 space-y-2.5">
          {g.points.map((pt) => (
            <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-400">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#33A5DB]" />
              {pt}
            </li>
          ))}
        </ul>
      </>
    ),
    content: (
      <div className="text-center">
        <span className="block bg-gradient-to-br from-[#33A5DB] to-[#3F56A4] bg-clip-text text-[9rem] font-black leading-none text-transparent">
          0{i + 1}
        </span>
        <p className="mt-2 text-2xl font-bold tracking-tight">{g.title}</p>
      </div>
    ),
  }));

  return <StickyScroll content={content} />;
}

export default GapStickyScroll;
