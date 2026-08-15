import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import triptych from "@/assets/nord-triptych.png.asset.json";

const CORE = [
  "Marketing",
  "Digital Marketing",
  "Brand Development",
  "Brand Design",
  "Brand Management",
  "Corporate Communications",
  "Strategic Internal Communications",
  "Public Relations",
  "Marketing Communications",
  "Project Management",
  "Presentation Design",
  "Public Speaking",
  "Event Management",
];

const TECH = [
  "Application Development",
  "Website Development",
  "UI/UX in Application",
  "Web Design",
  "Graphic Design",
  "Video Post-production",
  "Project Management",
  "People Management",
];

const EDU = [
  { year: "2006", degree: "MSc in Management in IT", school: "KMITL, Bangkok" },
  { year: "2001", degree: "MSc in Computer Studies", school: "University of Essex, Colchester" },
  {
    year: "1999",
    degree: "BA in Political Science (International Relations)",
    school: "Chulalongkorn University, Bangkok",
  },
];

export function CvEducation() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="grain relative border-y border-border">
      <div className="grid md:grid-cols-2">
        <div className="relative h-[60svh] overflow-hidden md:h-auto">
          <motion.img
            src={triptych.url}
            alt="Three black and white portraits of Nord Varavarn with light streaks"
            style={{ y: imgY }}
            className="absolute inset-0 h-[124%] w-full object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-void/35 mix-blend-multiply" />
        </div>
        <div className="px-5 py-[10vh] md:px-10">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-cyan">
            002 — Education
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Not exactly the teacher's ideal student, but a relentless learner. Not streamlined — it
            shaped the way I see and process the world.
          </p>
          <ul className="mt-10">
            {EDU.map((e) => (
              <li key={e.year} className="border-t border-border py-6">
                <span className="display text-3xl riot-text md:text-4xl">{e.year}</span>
                <h3 className="mt-3 text-lg font-medium text-foreground">{e.degree}</h3>
                <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
                  {e.school}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function CvSkills() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const left = useTransform(scrollYProgress, [0, 1], ["-4vw", "3vw"]);
  const right = useTransform(scrollYProgress, [0, 1], ["4vw", "-3vw"]);

  return (
    <section ref={ref} className="relative overflow-hidden px-5 py-[12vh] md:px-10">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-acid">
        003 — Skills & Competencies
      </p>

      <motion.ul style={{ x: left }} className="mt-10 flex flex-wrap gap-2">
        {CORE.map((s) => (
          <li
            key={s}
            className="border border-border px-4 py-2 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-magenta hover:text-magenta"
          >
            {s}
          </li>
        ))}
      </motion.ul>

      <motion.ul style={{ x: right }} className="mt-4 flex flex-wrap gap-2">
        {TECH.map((s) => (
          <li
            key={s}
            className="border border-border bg-ink px-4 py-2 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-foreground transition-colors hover:border-cyan hover:text-cyan"
          >
            {s}
          </li>
        ))}
      </motion.ul>

      <div className="mt-16 grid gap-8 border-t border-border pt-8 md:grid-cols-2">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
            Thai
          </p>
          <p className="display mt-2 text-4xl riot-text md:text-6xl">Native</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Professional in both spoken and written language.
          </p>
        </div>
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
            English
          </p>
          <p className="display mt-2 text-4xl riot-text md:text-6xl">Proficient</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Proficient in both spoken and written language.
          </p>
        </div>
      </div>
    </section>
  );
}
