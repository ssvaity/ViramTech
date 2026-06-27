"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { products, sectors, foundation } from "@/lib/content";

const links = [
  { href: "/products", label: "Products", menu: "products" as const },
  { href: "/industries", label: "Industries", menu: "industries" as const },
  { href: "/technology", label: "Technology", menu: "technology" as const },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About", menu: "about" as const },
];

type MenuKey = "products" | "industries" | "technology" | "about";

const aboutItems = [
  { label: "Vision & Mission", href: "/about#vision" },
  { label: "The Opportunity", href: "/about#opportunity" },
  { label: "Why ViramTech", href: "/about#why" },
  { label: "Our Roadmap", href: "/about#roadmap" },
  { label: "Contact Us", href: "/contact" },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Wordmark() {
  return (
    <span className="flex items-center gap-2">
      <Image
        src="/logo.svg"
        alt="ViramTech logo"
        width={31}
        height={26}
        priority
        className="h-[26px] w-auto"
      />
      <span className="flex items-baseline gap-1.5">
        <span className="bg-gradient-to-r from-[#00B4E4] via-[#3B56A6] to-[#112649] bg-clip-text text-xl font-extrabold uppercase leading-none tracking-tight text-transparent dark:from-[#33A5DB] dark:via-[#597CBD] dark:to-[#597CBD]">
          Viram
        </span>
        <span className="bg-gradient-to-r from-[#00B4E4] via-[#3B56A6] to-[#112649] bg-clip-text text-[0.7rem] font-bold uppercase leading-none tracking-[0.25em] text-transparent dark:from-[#33A5DB] dark:via-[#597CBD] dark:to-[#597CBD]">
          Tech
        </span>
      </span>
    </span>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Aceternity-style resizing: shrink the bar once the page is scrolled.
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  const openMenu = (m: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenu(m);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMenu(null), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const themeButton = (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
    >
      {mounted && resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  const panelBase =
    "absolute left-1/2 top-[calc(100%+0.6rem)] z-40 hidden -translate-x-1/2 origin-top rounded-3xl border border-black/5 bg-white/95 shadow-2xl backdrop-blur-lg transition duration-200 lg:block dark:border-white/10 dark:bg-neutral-950/95";

  return (
    <motion.header
      initial={false}
      animate={{
        maxWidth: scrolled ? "64rem" : "80rem",
        top: scrolled ? "1rem" : "0.75rem",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className="fixed inset-x-0 z-50 mx-auto w-[calc(100%-2rem)]"
    >
      <motion.nav
        initial={false}
        animate={{
          borderRadius: "9999px",
          paddingTop: scrolled ? "0.5rem" : "0.75rem",
          paddingBottom: scrolled ? "0.5rem" : "0.75rem",
          paddingLeft: scrolled ? "1.25rem" : "1.75rem",
          paddingRight: scrolled ? "1.25rem" : "1.75rem",
          boxShadow: scrolled
            ? "0 12px 32px rgba(0,0,0,0.12)"
            : "0 6px 20px rgba(0,0,0,0.08)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className="relative flex items-center gap-8 rounded-full border border-black/5 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/70"
      >
        {/* Left: brand */}
        <div className="flex flex-1 items-center">
          <Link href="/" aria-label="ViramTech — Home" className="flex items-center">
            <Wordmark />
          </Link>
        </div>

        {/* Center: links */}
        <ul className="hidden items-center gap-1 text-sm font-semibold lg:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            const base = `rounded-full px-4 py-2 transition duration-200 ${
              active
                ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                : "opacity-80 hover:bg-black/5 hover:opacity-100 dark:hover:bg-white/5"
            }`;
            if (link.menu) {
              return (
                <li key={link.href} onMouseEnter={() => openMenu(link.menu!)} onMouseLeave={scheduleClose}>
                  <Link href={link.href} className={`flex items-center gap-1 ${base}`}>
                    {link.label}
                    <Chevron open={menu === link.menu} />
                  </Link>
                </li>
              );
            }
            return (
              <li key={link.href}>
                <Link href={link.href} className={base}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: controls */}
        <div className="flex flex-1 items-center justify-end gap-1.5">
          <div className="hidden lg:block">{themeButton}</div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-lg transition-colors hover:bg-black/5 lg:hidden dark:hover:bg-white/5"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </motion.nav>

      {/* Products mega-dropdown */}
      <div
        onMouseEnter={() => openMenu("products")}
        onMouseLeave={scheduleClose}
        className={`${panelBase} w-[min(94vw,800px)] ${
          menu === "products"
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="p-2.5">
          <div className="rounded-2xl border border-black/5 bg-black/[0.03] p-6 dark:border-white/5 dark:bg-white/[0.04]">
            <div className="grid grid-cols-3 gap-x-6 gap-y-5">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products#${p.slug}`}
                  onClick={() => setMenu(null)}
                  className="group -mx-3 rounded-2xl px-3 py-2 transition hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-1.5 text-[13px] font-medium opacity-50">
                    <span className="text-sm">{p.icon}</span>
                    {p.name}
                  </span>
                  <span className="mt-1 block text-sm font-medium leading-snug opacity-90 transition-colors group-hover:text-indigo-500 dark:group-hover:text-indigo-400">
                    {p.kicker}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm opacity-60">
              New:{" "}
              <span className="font-medium opacity-90">
                Agentic AI Platform now live
              </span>
            </span>
            <Link
              href="/products"
              onClick={() => setMenu(null)}
              className="text-sm font-semibold text-indigo-500 transition-colors hover:text-indigo-400 hover:underline dark:text-indigo-400"
            >
              View all products →
            </Link>
          </div>
        </div>
      </div>

      {/* Industries mega-dropdown */}
      <div
        onMouseEnter={() => openMenu("industries")}
        onMouseLeave={scheduleClose}
        className={`${panelBase} w-[min(94vw,800px)] ${
          menu === "industries"
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="p-2.5">
          <div className="rounded-2xl border border-black/5 bg-black/[0.03] p-6 dark:border-white/5 dark:bg-white/[0.04]">
            <div className="grid grid-cols-3 gap-x-6 gap-y-5">
              {sectors.map((s) => (
                <Link
                  key={s.name}
                  href="/industries"
                  onClick={() => setMenu(null)}
                  className="group -mx-3 rounded-2xl px-3 py-2 transition hover:bg-black/5 dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-1.5 text-[13px] font-medium opacity-50">
                    <span className="text-sm">{s.icon}</span>
                    {s.name}
                  </span>
                  <span className="mt-1 block text-sm font-medium leading-snug opacity-90 transition-colors group-hover:text-indigo-500 dark:group-hover:text-indigo-400">
                    {s.points.join(" · ")}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm opacity-60">
              Built for the sectors that run on data
            </span>
            <Link
              href="/industries"
              onClick={() => setMenu(null)}
              className="text-sm font-semibold text-indigo-500 transition-colors hover:text-indigo-400 hover:underline dark:text-indigo-400"
            >
              Explore industries →
            </Link>
          </div>
        </div>
      </div>

      {/* Technology mega-dropdown */}
      <div
        onMouseEnter={() => openMenu("technology")}
        onMouseLeave={scheduleClose}
        className={`${panelBase} w-[min(94vw,720px)] ${
          menu === "technology"
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="p-2.5">
          <div className="rounded-2xl border border-black/5 bg-black/[0.03] p-6 dark:border-white/5 dark:bg-white/[0.04]">
            <div className="grid grid-cols-3 gap-x-6 gap-y-2">
              {foundation.map((f) => (
                <div key={f.title}>
                  <h4 className="mb-2.5 text-[13px] font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                    {f.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {f.items.map((it) => (
                      <li key={it}>
                        <Link
                          href="/technology"
                          onClick={() => setMenu(null)}
                          className="block text-sm font-medium leading-snug opacity-80 transition-colors hover:text-indigo-500 hover:opacity-100 dark:hover:text-indigo-400"
                        >
                          {it}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm opacity-60">A full AI stack, owned end to end</span>
            <Link
              href="/technology"
              onClick={() => setMenu(null)}
              className="text-sm font-semibold text-indigo-500 transition-colors hover:text-indigo-400 hover:underline dark:text-indigo-400"
            >
              See the architecture →
            </Link>
          </div>
        </div>
      </div>

      {/* About mega-dropdown */}
      <div
        onMouseEnter={() => openMenu("about")}
        onMouseLeave={scheduleClose}
        className={`${panelBase} w-[min(90vw,560px)] p-7 ${
          menu === "about"
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight">
              About{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                ViramTech
              </span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed opacity-65">
              An AI-native studio building enterprise solutions that deliver
              measurable ROI.
            </p>
          </div>
          <ul className="space-y-0.5">
            {aboutItems.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  onClick={() => setMenu(null)}
                  className="block rounded-xl px-3 py-2.5 text-base font-bold tracking-tight transition hover:bg-black/5 hover:text-indigo-500 dark:hover:bg-white/5"
                >
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-40 flex flex-col rounded-3xl border border-black/5 bg-white/95 p-4 shadow-2xl backdrop-blur-lg lg:hidden dark:border-white/10 dark:bg-neutral-950/95">
          <ul className="flex flex-col gap-1 text-base font-bold tracking-tight">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 transition ${
                      active
                        ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"
                        : "hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t border-black/10 pt-3 dark:border-white/10">
            <span className="text-xs font-bold uppercase tracking-wider opacity-50">
              Theme
            </span>
            {themeButton}
          </div>
        </div>
      )}
    </motion.header>
  );
}
