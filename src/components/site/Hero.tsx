import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "34%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const skew = useTransform(scrollYProgress, [0, 1], [0, -7]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={ref} className="grain relative h-[130svh]">
      <div className="sticky top-0 flex h-svh flex-col justify-between overflow-hidden">
        <motion.div
          style={{ y: blobY }}
          aria-hidden
          className="pointer-events-none absolute -left-40 top-1/4 h-[70vh] w-[70vh] rounded-full riot-bg opacity-40 blur-[110px]"
        />
        <motion.div
          style={{ y: blobY, opacity: 0.35 }}
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-0 h-[52vh] w-[52vh] rounded-full bg-cyan blur-[130px]"
        />

        <div className="hairline pointer-events-none absolute inset-0 opacity-60" aria-hidden />

        <motion.header
          style={{ opacity: fade }}
          className="relative z-10 flex items-baseline justify-between px-5 pt-6 font-mono text-[0.68rem] uppercase tracking-[0.32em] text-muted-foreground md:px-10"
        >
          <span className="text-foreground">N.V — 26</span>
          <span className="hidden md:block">Brand · Design · Management</span>
          <Link to="/cv" className="text-acid transition-colors hover:text-magenta">
            CV / Resumé ↗
          </Link>

        </motion.header>

        <motion.div style={{ y, scale, skewY: skew, opacity: fade }} className="relative z-10 px-5 md:px-10">
          <p className="mb-6 max-w-xs font-mono text-xs leading-relaxed uppercase tracking-[0.2em] text-acid">
            ↳ scroll if you dare
          </p>
          <h1 className="display text-[19vw] md:text-[15.5vw]">
            <span className="block riot-text">Nord</span>
            <span className="block outline-text">Vara</span>
            <span className="-mt-[1.5vw] block riot-text">varn</span>
          </h1>
        </motion.div>

        <motion.div
          style={{ opacity: fade }}
          className="relative z-10 flex flex-col gap-4 border-t border-border px-5 py-5 md:flex-row md:items-end md:justify-between md:px-10"
        >
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            I build brands with teeth. Strategy, identity systems and the operational spine that
            keeps them alive after the launch deck closes.
          </p>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-magenta">
            14 yrs · 60+ launches · 3 disciplines
          </p>
        </motion.div>
      </div>
    </section>
  );
}
