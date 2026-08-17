import { Link } from "@tanstack/react-router";

import { ScrollRail } from "@/components/site/ScrollRail";
import { posts, type Accent } from "@/content/posts";

const accentMap: Record<Accent, string> = {
  default: "bg-background text-foreground",
  acid: "bg-acid text-void",
  magenta: "bg-magenta text-void",
  cyan: "bg-cyan text-void",
  flame: "bg-flame text-void",
};

export function BlogIndex() {
  return (
    <main className="relative bg-background">
      <ScrollRail />

      <header className="grain relative px-5 pb-10 pt-[14vh] md:px-10">
        <div className="hairline mb-12 h-px" />
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-magenta">
          004 — Field Notes
        </p>
        <h1 className="display mt-3 text-[18vw] leading-[0.82] md:text-[12vw]">
          <span className="riot-text">Blog</span>
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Thoughts on brand, craft and the noise of machine-made everything. Written by a human,
          edited by a human.
        </p>
      </header>

      <div className="hairline mx-5 h-px md:mx-10" />

      <section className="grid auto-rows-min gap-5 px-5 py-12 md:grid-cols-2 md:px-10 md:py-16">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className={`grain group relative flex min-h-[44svh] flex-col justify-between gap-6 border border-foreground/10 p-6 transition duration-300 hover:-translate-y-1 hover:border-acid ${accentMap[p.accent]}`}
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.22em]">
                <span>{p.date}</span>
                <span className="rounded-full border border-current px-2 py-1">{p.tag}</span>
              </div>
              <h2 className="mt-5 text-3xl font-bold leading-[1.02] md:text-4xl">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed opacity-80">{p.excerpt}</p>
            </div>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] opacity-80 transition group-hover:opacity-100">
              Read →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
