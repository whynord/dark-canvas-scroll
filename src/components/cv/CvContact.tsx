import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import cvPdf from "@/assets/nord-cv.pdf.asset.json";
import suit from "@/assets/nord-suit.png.asset.json";

export function CvContact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [6, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["14%", "-6%"]);

  return (
    <section ref={ref} className="grain relative min-h-svh px-5 pb-10 pt-[14vh] md:px-10">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-flame">
        004 — Get in touch
      </p>

      <motion.h2
        style={{ scale, rotate }}
        className="display mt-8 origin-left text-[15vw] riot-text md:text-[10vw]"
      >
        Thank
        <br />
        you!
      </motion.h2>

      <div className="mt-14 grid gap-10 border-t border-border pt-8 md:grid-cols-[1fr_1fr_0.8fr]">
        <div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            For getting to the bottom of the page — happy to provide further references or answer
            any inquiries. I'm even available for idling chat :P
          </p>
          <p className="mt-4 display text-3xl riot-text">All the best, Nord</p>
        </div>

        <ul className="space-y-3 text-lg">
          <li>
            <a
              href="tel:+66896936191"
              className="underline decoration-magenta decoration-2 underline-offset-8 transition-colors hover:text-magenta"
            >
              +66 (0) 8 9693 6191
            </a>
          </li>
          <li>
            <a
              href="mailto:panpong@gmail.com"
              className="underline decoration-acid decoration-2 underline-offset-8 transition-colors hover:text-acid"
            >
              panpong@gmail.com
            </a>
          </li>
          <li>
            <a
              href="mailto:panpong@outlook.com"
              className="underline decoration-cyan decoration-2 underline-offset-8 transition-colors hover:text-cyan"
            >
              panpong@outlook.com
            </a>
          </li>
          <li className="font-mono text-sm uppercase tracking-[0.22em] text-muted-foreground">
            @whynord on social media
          </li>
          <li>
            <a
              href="https://whynord.net"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-flame"
            >
              whynord.net ↗
            </a>
          </li>
        </ul>

        <div className="relative overflow-hidden border border-border">
          <motion.img
            src={suit.url}
            alt="Panpong Varavarn in a grey suit standing by a window"
            style={{ y: imgY }}
            className="h-[118%] w-full object-cover object-top opacity-90"
          />
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href={cvPdf.url}
          target="_blank"
          rel="noreferrer"
          className="border border-acid px-6 py-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-acid transition-colors hover:bg-acid hover:text-void"
        >
          Download CV (PDF)
        </a>
        <Link
          to="/"
          className="border border-border px-6 py-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-foreground transition-colors hover:border-magenta hover:text-magenta"
        >
          ← Back to portfolio
        </Link>
      </div>

      <footer className="mt-20 flex flex-col gap-2 border-t border-border pt-6 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground md:flex-row md:justify-between">
        <span>© 2026 Panpong Varavarn</span>
        <span>Curriculum Vitae 2026</span>
      </footer>
    </section>
  );
}
