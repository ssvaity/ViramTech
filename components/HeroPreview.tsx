const nav = ["Chats", "Data sources", "Dashboards", "Agents", "Settings"];

const regions = [
  { label: "APAC", value: 92, amount: "$4.2M" },
  { label: "EMEA", value: 74, amount: "$3.4M" },
  { label: "Americas", value: 100, amount: "$4.6M" },
  { label: "LATAM", value: 48, amount: "$2.2M" },
];

export function HeroPreview() {
  return (
    <div className="flex h-full w-full overflow-hidden bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Sidebar */}
      <aside className="hidden w-52 shrink-0 flex-col border-r border-black/5 bg-black/[0.02] p-4 md:flex dark:border-white/10 dark:bg-white/[0.03]">
        <div className="flex items-center gap-2 px-1">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-[#33A5DB] to-[#14284E]" />
          <span className="text-sm font-bold">DataForge</span>
        </div>
        <nav className="mt-6 space-y-1 text-sm">
          {nav.map((n, i) => (
            <div
              key={n}
              className={`rounded-lg px-3 py-2 font-medium ${
                i === 0
                  ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                  : "opacity-60"
              }`}
            >
              {n}
            </div>
          ))}
        </nav>
        <div className="mt-auto rounded-xl border border-black/5 bg-black/[0.02] p-3 dark:border-white/10 dark:bg-white/[0.04]">
          <p className="text-[11px] font-semibold opacity-70">3 sources synced</p>
          <p className="mt-0.5 text-[10px] opacity-40">Snowflake · HubSpot · S3</p>
        </div>
      </aside>

      {/* Conversation */}
      <div className="flex flex-1 flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-black/5 px-5 py-3.5 md:px-7 dark:border-white/10">
          <div>
            <h3 className="text-sm font-extrabold tracking-tight md:text-lg">
              Revenue assistant
            </h3>
            <p className="text-[10px] opacity-50 md:text-xs">
              Querying live data
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-500 md:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-hidden p-5 md:space-y-5 md:p-7">
          {/* User question */}
          <div className="flex justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-to-r from-[#3F56A4] to-[#33A5DB] px-4 py-2.5 text-xs font-medium text-white md:text-sm">
              Show me revenue by region this quarter
            </div>
          </div>

          {/* AI answer */}
          <div className="flex gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#33A5DB] to-[#14284E] text-[10px] font-bold text-white">
              AI
            </div>
            <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-black/5 bg-black/[0.02] p-4 md:p-5 dark:border-white/10 dark:bg-white/[0.04]">
              <p className="text-xs leading-relaxed opacity-80 md:text-sm">
                Q2 revenue reached{" "}
                <span className="font-bold opacity-100">$14.4M</span> — Americas
                leads, with APAC up{" "}
                <span className="font-bold text-emerald-500">28%</span> QoQ.
              </p>

              {/* Inline chart card */}
              <div className="mt-4 rounded-xl border border-black/5 bg-white p-4 dark:border-white/10 dark:bg-neutral-900">
                <div className="flex items-end justify-between gap-2 md:gap-4">
                  {regions.map((r) => (
                    <div
                      key={r.label}
                      className="flex flex-1 flex-col items-center gap-2"
                    >
                      <span className="text-[9px] font-bold opacity-60 md:text-[11px]">
                        {r.amount}
                      </span>
                      <div className="flex h-20 w-full items-end md:h-32">
                        <div
                          style={{ height: `${r.value}%` }}
                          className="w-full rounded-t bg-gradient-to-t from-[#14284E] to-[#33A5DB]"
                        />
                      </div>
                      <span className="text-[9px] font-medium opacity-50 md:text-[11px]">
                        {r.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="border-t border-black/5 p-3 md:p-4 dark:border-white/10">
          <div className="flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-4 py-2.5 dark:border-white/15 dark:bg-white/[0.04]">
            <span className="flex-1 text-xs opacity-40 md:text-sm">
              Ask anything about your data…
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-[#3F56A4] to-[#33A5DB] text-xs text-white">
              ↑
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPreview;
