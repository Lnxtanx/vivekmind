import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchBlogPosts, fetchBlogCategories, type BlogPost } from "@/lib/api/blog";
import { BlogSubscribe } from "@/components/BlogSubscribe";
import { z } from "zod";

const SITE_URL = "https://vivekmind.com";

const blogSearchSchema = z.object({
  page: z.string().optional(),
  category: z.string().optional(),
});

export const Route = createFileRoute("/blog/")({
  validateSearch: (search) => blogSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Blog — VivekMind" },
      {
        name: "description",
        content:
          "Explore articles and technical insights on AI systems, PostgreSQL database management, developer tooling, and software engineering by VivekMind.",
      },
      { property: "og:title", content: "Blog — VivekMind" },
      {
        property: "og:description",
        content:
          "Explore articles and technical insights on AI systems, PostgreSQL database management, developer tooling, and software engineering by VivekMind.",
      },
      { property: "og:url", content: "https://vivekmind.com/blog" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: `${SITE_URL}/vivekmind-logo.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Blog — VivekMind" },
      {
        name: "twitter:description",
        content:
          "Explore articles and technical insights on AI systems, PostgreSQL database management, developer tooling, and software engineering by VivekMind.",
      },
      { name: "twitter:image", content: `${SITE_URL}/vivekmind-logo.png` },
      { name: "twitter:image:width", content: "1200" },
      { name: "twitter:image:height", content: "630" },
    ],
    links: [{ rel: "canonical", href: "https://vivekmind.com/blog" }],
  }),
  loader: async (ctx: any) => {
    const s = ctx.search || {};
    const page = s.page ? parseInt(s.page) : 1;
    const category = s.category;
    
    const [postsData, categories] = await Promise.all([
      fetchBlogPosts(page, 9, category),
      fetchBlogCategories(),
    ]);

    return {
      posts: postsData.posts,
      pagination: postsData.pagination,
      categories,
    };
  },
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const { posts, pagination, categories } = Route.useLoaderData();
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  
  const s = search as any;
  const currentPage = s.page ? parseInt(s.page as string) : 1;
  const currentCategory = s.category as string | undefined;

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">Blog</p>
        <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
          Thoughts, updates & insights.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Articles about AI systems, developer tools, and building intelligent software — from the VivekMind team.
        </p>
      </section>

      {/* Subscribe Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <BlogSubscribe />
        </div>
      </section>

      {/* Categories Filter */}
      {categories.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => navigate({ to: "/blog" })}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  !currentCategory
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                All
              </button>
              {categories.map((cat: { name: string; count: number }) => (
                <button
                  key={cat.name}
                  onClick={() => navigate({ to: "/blog", search: { category: cat.name } })}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                    currentCategory === cat.name
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)} ({cat.count})
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No posts found.</p>
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post: BlogPost) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-2">
              {currentPage > 1 && (
                <Link
                  to="/blog"
                  search={{ page: String(currentPage - 1), category: currentCategory }}
                  className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  Previous
                </Link>
              )}
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {pagination.totalPages}
              </span>
              {currentPage < pagination.totalPages && (
                <Link
                  to="/blog"
                  search={{ page: String(currentPage + 1), category: currentCategory }}
                  className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  Next
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  const formattedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <article className="group">
      <Link to="/blog/$slug" params={{ slug: post.slug }}>
        {post.thumbnail_url && (
          <div className="aspect-video overflow-hidden rounded-xl">
            <img
              src={post.thumbnail_url}
              alt={post.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        <div className="mt-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="rounded-full bg-primary/[0.08] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              {post.category}
            </span>
            {formattedDate && (
              <span className="text-xs text-muted-foreground">{formattedDate}</span>
            )}
          </div>
          <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
              {post.excerpt}
            </p>
          )}
          <p className="mt-3 text-xs text-muted-foreground">
            By {post.author_name}
          </p>
        </div>
      </Link>
    </article>
  );
}
