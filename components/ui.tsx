import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-500">
      {children}
    </p>
  );
}

export function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-[11px] font-bold text-indigo-500">
        ✓
      </span>
      <span className="text-sm leading-relaxed opacity-80">{children}</span>
    </li>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-black/5 bg-black/[0.02] p-6 transition hover:border-indigo-500/30 dark:border-white/10 dark:bg-white/[0.03] ${className}`}
    >
      {children}
    </div>
  );
}
