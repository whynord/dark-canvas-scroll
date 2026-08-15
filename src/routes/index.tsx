import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Disciplines } from "@/components/site/Disciplines";
import { Manifesto } from "@/components/site/Manifesto";
import { Work } from "@/components/site/Work";
import { Numbers } from "@/components/site/Numbers";
import { Contact } from "@/components/site/Contact";
import { ScrollRail } from "@/components/site/ScrollRail";

const title = "Nord Varavarn — Brand, Design & Creative Management";
const description =
  "Portfolio of Nord Varavarn: brand strategy, identity systems and creative leadership for companies that refuse to blend in.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background">
      <ScrollRail />
      <Hero />
      <Marquee />
      <Disciplines />
      <Manifesto />
      <Work />
      <Numbers />
      <Contact />
    </main>
  );
}
