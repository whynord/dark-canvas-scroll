import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const WORDS = [
  "Brand Strategy",
  "Identity Systems",
  "Creative Direction",
  "Team Building",
  "Design Ops",
  "Narrative",
];

export function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-14%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2.5, 2.5]);

  const items = [...WORDS, ...WORDS];

  return (
    <div ref={ref} className="relative overflow-hidden border-y border-border py-4 riot-bg">
      <motion.div style={{ rotate }}>
        <motion.div style={{ x }} className="flex w-max items-center gap-8">
          <div className="marquee-track flex w-max items-center gap-8">
            {[...items, ...items].map((w, i) => (
              <span
                key={i}
                className="display whitespace-nowrap text-[7vw] text-void md:text-[3.6vw]"
              >
                {w}
                <span className="mx-8 align-middle text-[2vw]">✱</span>
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
