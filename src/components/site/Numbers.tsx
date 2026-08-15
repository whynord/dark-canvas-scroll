import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ROWS = [
  { k: "Brand systems shipped", v: "62" },
  { k: "Teams built & led", v: "07" },
  { k: "Countries worked in", v: "11" },
  { k: "Decks that changed a roadmap", v: "∞" },
];

export function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <section ref={ref} className="grain relative overflow-hidden border-y border-border">
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-x-0 -inset-y-1/3 opacity-25 riot-bg blur-[120px]"
      />
      <ul className="relative">
        {ROWS.map((r, i) => {
          const start = i * 0.12;
          const x = useTransform(scrollYProgress, [start, start + 0.5], ["-6vw", "0vw"]);
          const opacity = useTransform(scrollYProgress, [start, start + 0.4], [0, 1]);
          return (
            <motion.li
              key={r.k}
              style={{ x, opacity }}
              className="group flex items-center justify-between gap-6 border-b border-border px-5 py-6 last:border-0 md:px-10"
            >
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
                {r.k}
              </span>
              <span className="display text-[14vw] leading-none transition-colors group-hover:riot-text md:text-[6vw]">
                {r.v}
              </span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
