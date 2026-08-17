import { createFileRoute, Link } from "@tanstack/react-router";

import { BlogPostView } from "@/components/blog/BlogPost";
import { getPost } from "@/content/posts";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPost(params.slug);
    const title = post ? `${post.title} — Nord Varavarn` : "Not found — Nord Varavarn";
    const description = post?.excerpt ?? "The requested article could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
        <h1 className="display text-6xl text-foreground">404</h1>
        <p className="text-sm text-muted-foreground">That article doesn't exist.</p>
        <Link
          to="/blog"
          className="rounded-md border border-input bg-background px-4 py-2 text-sm text-foreground transition hover:bg-accent"
        >
          ← Back to Blog
        </Link>
      </main>
    );
  }

  return <BlogPostView post={post} />;
}
