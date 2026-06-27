"use client";

import CardSwap, { Card } from "./CardSwap";
import { foundation } from "@/lib/content";

const accents = [
  "from-[#33A5DB] to-[#2A3E77]", // AI / ML Capabilities — Sky → Slate
  "from-[#3F56A4] to-[#14284E]", // Infrastructure — Royal → Navy
  "from-[#597CBD] to-[#2A3E77]", // AI Frameworks — Periwinkle → Slate
];

export function FoundationCardSwap() {
  return (
    <CardSwap
      width={400}
      height={420}
      cardDistance={55}
      verticalDistance={62}
      delay={3800}
      pauseOnHover
      skewAmount={5}
    >
      {foundation.map((f, i) => (
        <Card
          key={f.title}
          className={`overflow-hidden border border-white/15 bg-gradient-to-br ${accents[i % accents.length]} text-white shadow-2xl`}
        >
          <div className="flex h-full flex-col p-7">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/55">
              0{i + 1}
            </span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight">
              {f.title}
            </h3>
            <ul className="mt-6 space-y-3">
              {f.items.map((it) => (
                <li
                  key={it}
                  className="flex items-center gap-3 text-sm font-medium text-white/90"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </CardSwap>
  );
}

export default FoundationCardSwap;
