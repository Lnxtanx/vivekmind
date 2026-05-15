import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchBlogPost, fetchLatestPosts, type BlogPost } from "@/lib/api/blog";

const SITE_URL = "https://vivekmind.com";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ loaderData }: any) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{ title: "Post Not Found — VivekMind" }],
      };
    }

    const metaTitle = post.meta_title || post.title;
    const metaDescription = post.meta_description || post.excerpt || "";
    const ogImage = post.og_image_url || post.thumbnail_url || `${SITE_URL}/vivekmind-logo.png`;

    return {
      meta: [
        { title: `${metaTitle} — VivekMind Blog` },
        { name: "description", content: metaDescription },
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:image", content: ogImage },
        { property: "og:url", content: `${SITE_URL}/blog/${post.slug}` },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post.published_at || undefined },
        { property: "article:author", content: post.author_name },
        { property: "article:section", content: post.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: metaTitle },
        { name: "twitter:description", content: metaDescription },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/blog/${post.slug}` }],
    };
  },
  loader: async ({ params }) => {
    const [post, relatedPosts] = await Promise.all([
      fetchBlogPost(params.slug),
      fetchLatestPosts(3),
    ]);

    return { post, relatedPosts };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post, relatedPosts } = Route.useLoaderData();

  if (!post) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Post Not Found</h1>
          <p className="mt-4 text-muted-foreground">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  // Filter out current post from related
  const filteredRelated = relatedPosts.filter((p: BlogPost) => p.id !== post.id).slice(0, 2);

  return (
    <div>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt || post.meta_description,
            image: post.thumbnail_url || post.og_image_url,
            datePublished: post.published_at,
            dateModified: post.updated_at,
            author: {
              "@type": "Organization",
              name: post.author_name || "VivekMind",
            },
            publisher: {
              "@type": "Organization",
              name: "VivekMind",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/vivekmind-logo.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${SITE_URL}/blog/${post.slug}`,
            },
          }),
        }}
      />

      {/* Article Header */}
      <article>
        <header className="mx-auto max-w-4xl px-6 pt-20 pb-10 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="rounded-full bg-primary/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              {post.category}
            </span>
            {formattedDate && (
              <span className="text-sm text-muted-foreground">{formattedDate}</span>
            )}
          </div>

          <h1 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          )}

          <div className="mt-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-sm font-bold text-primary">
                {post.author_name?.charAt(0) || "V"}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{post.author_name}</p>
              <p className="text-xs text-muted-foreground">VivekMind</p>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        {post.thumbnail_url && (
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="aspect-video overflow-hidden rounded-2xl">
              <img
                src={post.thumbnail_url}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
          <div
            className="prose prose-neutral max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:underline-offset-4 prose-a:hover:underline prose-img:rounded-xl prose-code:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mx-auto max-w-3xl px-6 pb-10 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Share & Navigation */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-muted p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Share on Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-muted p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {filteredRelated.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {filteredRelated.map((relatedPost: BlogPost) => (
                <Link
                  key={relatedPost.id}
                  to="/blog/$slug"
                  params={{ slug: relatedPost.slug }}
                  className="group"
                >
                  <div className="flex gap-5">
                    {relatedPost.thumbnail_url && (
                      <div className="h-24 w-32 shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={relatedPost.thumbnail_url}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                        {relatedPost.category}
                      </span>
                      <h3 className="mt-1 text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      {relatedPost.published_at && (
                        <p className="mt-2 text-xs text-muted-foreground">
                          {new Date(relatedPost.published_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
