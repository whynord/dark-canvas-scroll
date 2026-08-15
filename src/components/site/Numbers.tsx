import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

const ROWS = [
  { k: "Brand systems shipped", v: "62" },
  { k: "Teams built & led", v: "07" },
  { k: "Countries worked in", v: "11" },
  { k: "Decks that changed a roadmap", v: "∞" },
];

function Row({
  row,
  index,
  progress,
}: {
  row: (typeof ROWS)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const start = index * 0.1;
  const x = useTransform(progress, [start, start + 0.5], ["-6vw", "0vw"]);
  const opacity = useTransform(progress, [start, start + 0.35], [0, 1]);

  return (
    <motion.li
      style={{ x, opacity }}
      className="flex items-center justify-between gap-6 border-b border-border px-5 py-6 last:border-0 md:px-10"
    >
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
        {row.k}
      </span>
      <span className="display riot-text text-[14vw] leading-none md:text-[6vw]">{row.v}</span>
    </motion.li>
  );
}

export function Numbers() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <section ref={ref} className="grain relative overflow-hidden border-y border-border">
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-x-0 -inset-y-1/3 riot-bg opacity-20 blur-[120px]"
      />
      <ul className="relative">
        {ROWS.map((r, i) => (
          <Row key={r.k} row={r} index={i} progress={scrollYProgress} />
        ))}
      </ul>
    </section>
  );
}
