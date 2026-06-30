"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

// The Our Work page is a full-bleed parallax showcase — no footer there.
const HIDE_FOOTER_ON = ["/work"];

export function SiteFooter() {
  const pathname = usePathname();
  if (HIDE_FOOTER_ON.includes(pathname)) return null;
  return <Footer />;
}

export default SiteFooter;
