import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 0]);
  const letter = useTransform(scrollYProgress, [0, 1], ["0.3em", "-0.02em"]);

  return (
    <section ref={ref} id="contact" className="grain relative min-h-svh px-5 pb-10 pt-[16vh] md:px-10">
      <p className="mb-12 font-mono text-[0.68rem] uppercase tracking-[0.32em] text-acid">
        004 — Open for trouble
      </p>

      <motion.h2
        style={{ scale, rotate, letterSpacing: letter }}
        className="display origin-left text-[16vw] riot-text md:text-[11vw]"
      >
        Let's make
        <br />
        something
        <br />
        unreasonable
      </motion.h2>

      <div className="mt-16 grid gap-10 border-t border-border pt-8 md:grid-cols-3">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
            Direct
          </p>
          <a
            href="mailto:hello@nordvaravarn.com"
            className="mt-2 block text-lg text-foreground underline decoration-magenta decoration-2 underline-offset-8 transition-colors hover:text-magenta"
          >
            hello@nordvaravarn.com
          </a>
        </div>
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
            Elsewhere
          </p>
          <ul className="mt-2 space-y-1 text-lg">
            {["Instagram", "LinkedIn", "Are.na"].map((s) => (
              <li key={s}>
                <a href="#" className="transition-colors hover:text-acid">
                  {s} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
            Availability
          </p>
          <p className="mt-2 text-lg text-cyan">Q4 2026 — two engagements</p>
        </div>
      </div>

      <footer className="mt-20 flex flex-col gap-2 border-t border-border pt-6 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground md:flex-row md:justify-between">
        <span>© 2026 Nord Varavarn</span>
        <span>Designed loudly. Managed quietly.</span>
      </footer>
    </section>
  );
}
