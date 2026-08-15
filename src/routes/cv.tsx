import { createFileRoute } from "@tanstack/react-router";

import { CvHero } from "@/components/cv/CvHero";
import { CvTimeline } from "@/components/cv/CvTimeline";
import { CvEducation, CvSkills } from "@/components/cv/CvSkills";
import { CvContact } from "@/components/cv/CvContact";
import { ScrollRail } from "@/components/site/ScrollRail";

const title = "CV — Panpong (Nord) Varavarn, Brand Communications Leader";
const description =
  "Online CV of Panpong 'Nord' Varavarn: brand communications leadership at Tune Protect, Amadeus and Kiatnakin Phatra Bank, education, skills and contact.";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CvPage,
});

function CvPage() {
  return (
    <main className="relative bg-background">
      <ScrollRail />
      <CvHero />
      <CvTimeline />
      <CvEducation />
      <CvSkills />
      <CvContact />
    </main>
  );
}
