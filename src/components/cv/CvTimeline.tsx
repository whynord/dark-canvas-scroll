import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const ROLES = [
  {
    year: "2024",
    title: "Strategic Brand & Marketing Consultant",
    org: "Tune Protect Thailand",
    tone: "text-magenta",
    body: "Consulting across all stakeholders: brand engagement (internal & external), brand communications and brand governance, plus direction for PR, customer and crisis communications.",
  },
  {
    year: "2021",
    title: "Global Brand & Creative Manager",
    org: "Amadeus IT Group SA",
    tone: "text-acid",
    body: "Built comprehensive brand strategies that resonated with target audiences and drove loyalty; led digital campaign design and execution across social, email and web.",
  },
  {
    year: "2018",
    title: "Director of Corporate Brand & Communications",
    org: "Kiatnakin Phatra Bank",
    tone: "text-cyan",
    body: "Developed and fostered the Group brand's strength with Corporate Communications, Marketing Communications and business units across owned digital and traditional channels.",
  },
  {
    year: "2010",
    title: "Asia Pacific Regional Brand & Creative Manager",
    org: "Amadeus Asia",
    tone: "text-flame",
    body: "Drove regional brand awareness and engagement from the APAC office, working with global and regional stakeholders on campaigns aligned to strategic objectives.",
  },
];

function RoleRow({ role, index }: { role: (typeof ROLES)[number]; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 ? "6vw" : "-6vw", "0vw"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const skew = useTransform(scrollYProgress, [0, 1], [index % 2 ? 4 : -4, 0]);

  return (
    <motion.li
      ref={ref}
      style={{ x, opacity, skewY: skew }}
      className="grid gap-4 border-b border-border py-10 md:grid-cols-[16ch_1fr] md:py-14"
    >
      <span className={`display text-[13vw] leading-none md:text-[4.4vw] ${role.tone}`}>
        {role.year}
      </span>
      <div>
        <h3 className="text-xl font-medium tracking-tight text-foreground md:text-3xl">
          {role.title}
        </h3>
        <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
          {role.org}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{role.body}</p>
      </div>
    </motion.li>
  );
}

export function CvTimeline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="grain relative overflow-hidden px-5 py-[12vh] md:px-10">
      <motion.div
        aria-hidden
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-40 top-1/4 h-[60vh] w-[60vh] rounded-full riot-bg opacity-20 blur-[130px]"
      />
      <div className="relative flex items-end justify-between pb-8">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-magenta">
          001 — Career Portfolio
        </p>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-muted-foreground">
          newest first
        </p>
      </div>
      <p className="relative max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Renowned companies, agencies and startups — and now freelance, still pushing creative
        boundaries and shipping work that moves the business.
      </p>
      <ul className="relative mt-10">
        {ROLES.map((r, i) => (
          <RoleRow key={r.year} role={r} index={i} />
        ))}
      </ul>
    </section>
  );
}
