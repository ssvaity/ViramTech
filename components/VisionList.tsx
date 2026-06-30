"use client";

import { motion } from "motion/react";
import { vision } from "@/lib/content";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  // once: false → re-animates each time the section scrolls into view.
  viewport: { once: false, margin: "-120px" },
};

export function VisionList() {
  return (
    <div className="mt-6">
      {vision.map((v, i) => {
        const isRight = i % 2 === 1; // 1st & 3rd left, 2nd right
        return (
          <section
            key={v.title}
            className="flex min-h-[42vh] flex-col justify-center py-6"
          >
            <div
              className={`max-w-2xl ${isRight ? "ml-auto text-right" : "mr-auto text-left"}`}
            >
              <motion.span
                {...reveal}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="block bg-gradient-to-r from-[#3F56A4] to-[#33A5DB] bg-clip-text text-7xl font-black leading-none text-transparent sm:text-8xl"
              >
                0{i + 1}
              </motion.span>
              <motion.h3
                {...reveal}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="mt-8 text-4xl font-extrabold tracking-tight sm:text-6xl"
              >
                {v.title}
              </motion.h3>
              <motion.p
                {...reveal}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className={`mt-6 text-lg leading-relaxed opacity-70 sm:text-2xl ${
                  isRight ? "ml-auto" : "mr-auto"
                } max-w-xl`}
              >
                {v.body}
              </motion.p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default VisionList;
