import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const DISCIPLINES = [
  {
    no: "01",
    title: "Brand",
    tone: "text-magenta",
    body: "Positioning, naming, verbal identity, category tension. I find the fight worth picking and build a language that wins it.",
    tags: ["Positioning", "Naming", "Narrative", "Architecture"],
  },
  {
    no: "02",
    title: "Design",
    tone: "text-acid",
    body: "Identity systems, type, motion and product surfaces. Built as tokens and rules so it survives contact with real teams.",
    tags: ["Identity", "Type", "Motion", "Design Systems"],
  },
  {
    no: "03",
    title: "Management",
    tone: "text-cyan",
    body: "Creative leadership, hiring, rituals and roadmaps. Studio operations that turn ambition into a shippable calendar.",
    tags: ["Creative Direction", "Hiring", "Design Ops", "Roadmaps"],
  },
];

export function Disciplines() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-66%"]);

  return (
    <section ref={ref} className="relative h-[320svh]">
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden">
        <div className="flex items-end justify-between px-5 pb-8 md:px-10">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-muted-foreground">
            001 — Disciplines
          </p>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-muted-foreground">
            drag not required →
          </p>
        </div>
        <motion.ul style={{ x }} className="flex w-max gap-5 px-5 md:gap-8 md:px-10">
          {DISCIPLINES.map((d) => (
            <li
              key={d.no}
              className="grain relative flex h-[62svh] w-[84vw] flex-col justify-between border border-border bg-ink p-6 md:w-[42vw] md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
                  {d.no}
                </span>
                <span className={`spin-slow font-mono text-2xl ${d.tone}`}>✳</span>
              </div>
              <div>
                <h3 className={`display text-[15vw] md:text-[7vw] ${d.tone}`}>{d.title}</h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {d.body}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 font-mono text-[0.62rem] uppercase tracking-[0.2em]">
                {d.tags.map((t) => (
                  <li key={t} className="border border-border px-3 py-1.5 text-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li className="flex h-[62svh] w-[70vw] items-center md:w-[30vw]">
            <p className="display riot-text text-[9vw] md:text-[4vw]">All three. Same brain.</p>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
