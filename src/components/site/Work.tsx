import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const WORK = [
  {
    year: "2025",
    client: "SIREN LABS",
    role: "Brand system + creative direction",
    result: "Rebuilt a fintech that looked like a bank into one that looked like a threat. +38% recall.",
    bg: "bg-magenta",
    fg: "text-void",
  },
  {
    year: "2024",
    client: "HALO ATHLETIC",
    role: "Identity, packaging, launch film",
    result: "Category-breaking type system and a sold-out first drop in 11 hours.",
    bg: "bg-acid",
    fg: "text-void",
  },
  {
    year: "2023",
    client: "MONO STUDIO",
    role: "Design org build-out",
    result: "Hired 12, wrote the operating rituals, cut delivery time in half.",
    bg: "bg-cyan",
    fg: "text-void",
  },
  {
    year: "2022",
    client: "PLENUM",
    role: "Positioning + product surface",
    result: "One sentence of positioning that unlocked a Series B narrative.",
    bg: "bg-flame",
    fg: "text-void",
  },
];

function Card({ item, index, total }: { item: (typeof WORK)[number]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 ? 4 : -4, 0]);

  return (
    <div ref={ref} className="sticky top-0 flex h-svh items-center justify-center px-4 md:px-10">
      <motion.article
        style={{ scale, rotate, zIndex: index }}
        className={`grain relative flex h-[76svh] w-full max-w-6xl flex-col justify-between border border-void p-6 md:p-12 ${item.bg} ${item.fg}`}
      >
        <div className="flex items-start justify-between font-mono text-[0.68rem] uppercase tracking-[0.3em]">
          <span>{item.year}</span>
          <span>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <h3 className="display text-[13vw] leading-[0.82] md:text-[8vw]">{item.client}</h3>
        <div className="grid gap-4 border-t border-void/30 pt-5 md:grid-cols-2">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em]">{item.role}</p>
          <p className="max-w-md text-sm font-medium leading-relaxed">{item.result}</p>
        </div>
      </motion.article>
    </div>
  );
}

export function Work() {
  return (
    <section className="relative">
      <div className="flex items-end justify-between px-5 py-8 md:px-10">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-flame">
          003 — Selected Work
        </p>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-muted-foreground">
          stacked, not scrolled
        </p>
      </div>
      {WORK.map((item, i) => (
        <Card key={item.client} item={item} index={i} total={WORK.length} />
      ))}
    </section>
  );
}
