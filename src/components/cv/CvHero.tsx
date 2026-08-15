import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import motionPortrait from "@/assets/nord-motion.png.asset.json";

export function CvHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="grain relative h-[135svh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.img
          src={motionPortrait.url}
          alt="Panpong 'Nord' Varavarn walking, motion-blurred studio portrait"
          style={{ y: imgY, scale: imgScale }}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70 grayscale"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/20"
        />
        <div className="hairline pointer-events-none absolute inset-0 opacity-40" aria-hidden />

        <motion.div
          style={{ y: nameY, opacity: fade }}
          className="relative z-10 flex h-full flex-col justify-between px-5 py-6 md:px-10"
        >
          <div className="flex items-baseline justify-between font-mono text-[0.68rem] uppercase tracking-[0.32em] text-muted-foreground">
            <span className="text-foreground">Curriculum Vitae — 2026</span>
            <span className="hidden md:block">Brand · Communications · Creative</span>
            <span>Bangkok, TH</span>
          </div>

          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-acid">
              ↳ 25 years of picking the right fight
            </p>
            <h1 className="display text-[14vw] md:text-[9.5vw]">
              <span className="block riot-text">Panpong</span>
              <span className="block outline-text">Varavarn</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Brand communications leader. Strategic storytelling, crisis communication and
              bilingual (EN–TH) localisation with clarity, creativity and cultural nuance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
