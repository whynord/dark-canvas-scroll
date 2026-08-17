import { type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { ScrollRail } from "@/components/site/ScrollRail";
import type { Post } from "@/content/posts";

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

function Markdown({ source }: { source: string }) {
  const lines = source.split("\n").map((l) => l.replace(/\s+$/, ""));
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  const isSpecial = (l: string) =>
    l.startsWith("## ") ||
    l.startsWith("# ") ||
    l.startsWith("> ") ||
    l.startsWith("---") ||
    l.startsWith("- ") ||
    /^\d+\.\s/.test(l);

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(<h2 key={key++}>{renderInline(line.slice(3))}</h2>);
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      blocks.push(<h2 key={key++}>{renderInline(line.slice(2))}</h2>);
      i++;
      continue;
    }
    if (line.startsWith("> ")) {
      blocks.push(<blockquote key={key++}>{renderInline(line.slice(2))}</blockquote>);
      i++;
      continue;
    }
    if (line.startsWith("---")) {
      blocks.push(<hr key={key++} />);
      i++;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <ul key={key++}>
          {items.map((it, idx) => (
            <li key={idx}>{renderInline(it)}</li>
          ))}
        </ul>,
      );
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push(
        <ol key={key++}>
          {items.map((it, idx) => (
            <li key={idx}>{renderInline(it)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    // paragraph — accumulate consecutive non-special lines
    const buf = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !isSpecial(lines[i])) {
      buf.push(lines[i]);
      i++;
    }
    blocks.push(<p key={key++}>{renderInline(buf.join(" "))}</p>);
  }

  return <>{blocks}</>;
}

export function BlogPostView({ post }: { post: Post }) {
  return (
    <main className="relative bg-background">
      <style>{`
        .blog-prose { max-width: 70ch; margin: 0 auto; font-size: 1.05rem; line-height: 1.75; color: color-mix(in oklab, var(--foreground) 88%, transparent); }
        .blog-prose p { margin: 1.5rem 0; }
        .blog-prose h2 { font-family: "Anton", sans-serif; text-transform: uppercase; letter-spacing: -0.01em; font-size: clamp(1.8rem, 4vw, 2.6rem); margin: 3rem 0 1rem; line-height: 0.9; }
        .blog-prose ul, .blog-prose ol { margin: 1.5rem 0; padding-left: 1.4rem; display: flex; flex-direction: column; gap: 0.6rem; }
        .blog-prose li { padding-left: 0.2rem; }
        .blog-prose ol { list-style: decimal; }
        .blog-prose ul { list-style: disc; }
        .blog-prose blockquote { border-left: 3px solid var(--acid); padding: 0.4rem 0 0.4rem 1.4rem; margin: 2rem 0; font-size: 1.35rem; line-height: 1.4; color: var(--foreground); }
        .blog-prose strong { color: var(--foreground); font-weight: 700; }
        .blog-prose hr { border: none; border-top: 1px solid color-mix(in oklab, var(--foreground) 12%, transparent); margin: 3rem 0; }
      `}</style>

      <ScrollRail />

      <article className="px-5 pb-16 pt-[12vh] md:px-10">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-magenta">
          <Link to="/blog" className="text-muted-foreground transition hover:text-foreground">
            ← Blog
          </Link>
          <span className="mx-2 text-muted-foreground">·</span>
          {post.date}
          <span className="mx-2 text-muted-foreground">·</span>
          {post.tag}
        </p>

        <h1 className="display mt-4 text-[12vw] leading-[0.86] md:text-[7vw]">
          <span className="riot-text">{post.title}</span>
        </h1>

        <p className="mt-4 max-w-2xl font-mono text-[0.78rem] uppercase tracking-[0.18em] text-muted-foreground">
          By Nord (Panpong Varavarn)
        </p>

        <div className="hairline mx-auto my-10 h-px max-w-[70ch]" />

        <div className="blog-prose">
          <Markdown source={post.body} />
        </div>
      </article>
    </main>
  );
}
