import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

const TEXT =
  "Most work dies of politeness. I make brands that argue, systems that scale and teams that ship. Taste is a discipline, not a mood.";

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const color = useTransform(progress, range, ["oklch(0.68 0.02 285)", "oklch(0.97 0.01 90)"]);
  return (
    <motion.span style={{ opacity, color }} className="mr-[0.28em] inline-block">
      {word}
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "start 0.1"] });
  const words = TEXT.split(" ");

  return (
    <section ref={ref} className="grain relative px-5 py-[18vh] md:px-10">
      <p className="mb-10 font-mono text-[0.68rem] uppercase tracking-[0.32em] text-cyan">
        002 — Position
      </p>
      <p className="display max-w-5xl text-[8.5vw] leading-[0.95] md:text-[4.4vw]">
        {words.map((w, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return <Word key={i} word={w} progress={scrollYProgress} range={[start, end]} />;
        })}
      </p>
    </section>
  );
}
