import { createFileRoute } from "@tanstack/react-router";

import { BlogIndex } from "@/components/blog/BlogIndex";

const title = "Blog — Nord Varavarn";
const description =
  "Field notes on brand, craft and the noise of machine-made everything. Written by a human, edited by a human.";

export const Route = createFileRoute("/blog/")({
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
  component: BlogIndex,
});
