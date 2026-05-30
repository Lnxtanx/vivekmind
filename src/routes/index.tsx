import { createFileRoute, Link } from "@tanstack/react-router";
import { fetchBlogPosts, subscribeToNewsletter, type BlogPost } from "@/lib/api/blog";
import logo from "../assets/vivekmind-logo.png";
import { useState, useRef, useEffect, useCallback } from "react";

const PRODUCT_URLS = {
  schemaWeaver: "https://schemaweaver.vivekmind.com",
  sqlEditor: "https://sql-editor.schemaweaver.vivekmind.com",
  dataExplorer: "https://data-explorer.schemaweaver.vivekmind.com",
  swDocs: "https://docs.schemaweaver.vivekmind.com",
  fairyForge: "https://fairyforge.vivekmind.com",
  press: "https://press.vivekmind.com",
};

const products = [
  {
    index: "01",
    name: "Schema Weaver",
    category: "Database Tools",
    description:
      "PostgreSQL schema management platform. Design and version your database schema visually, push migrations safely with drift detection, and explore live data with AI.",
    href: PRODUCT_URLS.schemaWeaver,
    subLinks: [
      { label: "SQL Editor", href: PRODUCT_URLS.sqlEditor },
      { label: "Data Explorer", href: PRODUCT_URLS.dataExplorer },
      { label: "Docs", href: PRODUCT_URLS.swDocs },
    ],
  },
  {
    index: "02",
    name: "FairyForge",
    category: "Workflow Automation",
    description:
      "Workflow intelligence engine. Build and orchestrate AI-powered workflows that respond to events, process data, and integrate with any system — from simple triggers to complex multi-step pipelines.",
    href: PRODUCT_URLS.fairyForge,
  },
  {
    index: "03",
    name: "VivekMind Press",
    category: "Content Platform",
    description:
      "AI-assisted publishing platform. Create, manage, and distribute technical content at scale — documentation, newsletters, and long-form articles — with AI as a native part of the workflow.",
    href: PRODUCT_URLS.press,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VivekMind — AI Systems, Tools & Infrastructure" },
      {
        name: "description",
        content:
          "VivekMind designs and builds AI-powered products for developers and technical teams. Schema Weaver (PostgreSQL tools), FairyForge (workflow automation), and VivekMind Press (publishing platform).",
      },
      { property: "og:title", content: "VivekMind — AI Systems, Tools & Infrastructure" },
      {
        property: "og:description",
        content:
          "AI-powered products for developers and teams. Schema Weaver, FairyForge, and VivekMind Press — built by VivekMind.",
      },
      { property: "og:url", content: "https://vivekmind.com/" },
      { name: "twitter:title", content: "VivekMind — AI Systems, Tools & Infrastructure" },
      {
        name: "twitter:description",
        content:
          "Schema Weaver, FairyForge, VivekMind Press — AI-powered products for developers and technical teams.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vivekmind.com/" }],
  }),
  loader: async () => {
    const postsData = await fetchBlogPosts(1, 6);
    return { latestPosts: postsData.posts, pagination: postsData.pagination };
  },
  component: Index,
});

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function Index() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 md:pt-36 md:pb-28 lg:px-8">
          <div className="flex items-center gap-2.5 mb-8">
            <img src={logo} alt="VivekMind Logo" className="hidden md:block h-5 w-auto" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">VivekMind</p>
          </div>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.06] tracking-tight text-foreground md:text-6xl lg:text-[5.25rem]">
            AI systems, tools &amp; infrastructure.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            We design and build intelligent products for developers, data teams, and technical organisations — software that thinks alongside you.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Our Products
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              About us <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Products (editorial list) ─────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex items-baseline justify-between pb-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Products</h2>
            <Link to="/products" className="text-xs font-semibold text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="divide-y divide-border">
            {products.map((p) => (
              <ProductRow key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-14 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Our mission</p>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
                Software that thinks with you, not around you.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Every VivekMind product ships with AI as a first-class citizen — not bolted on as a feature. From database migrations to content publishing, we build tools that are intelligent by default.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                About VivekMind <ArrowRight />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-2">
              {[
                { value: "3", label: "Products shipped" },
                { value: "AI-first", label: "By design" },
                { value: "55+", label: "AI tools in Schema Weaver" },
                { value: "24/7", label: "Reliability" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold tracking-tight text-foreground">{s.value}</p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest from Blog ───────────────────────────────────────────── */}
      <LatestPostsSection />

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Build with VivekMind.</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Three products. One mission: intelligent software that moves with you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductRow({
  index,
  name,
  category,
  description,
  href,
  subLinks,
}: (typeof products)[number]) {
  return (
    <div className="py-10 md:py-14">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-start">
        {/* Index + Name + Category */}
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] text-muted-foreground/40 mb-2">{index}</p>
          <h3 className="text-2xl font-extrabold tracking-tight text-foreground">{name}</h3>
          <span className="mt-2.5 inline-block rounded-full bg-primary/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
            {category}
          </span>
        </div>

        {/* Description + Sub-links */}
        <div className="md:col-span-6">
          <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
          {subLinks && (
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {subLinks.map(({ label, href: subHref }) => (
                <a
                  key={label}
                  href={subHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Explore link */}
        <div className="md:col-span-2 md:flex md:justify-end md:pt-1">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
          >
            Explore
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function LatestPostsSection() {
  const { latestPosts } = Route.useLoaderData();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragMoved, setDragMoved] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!latestPosts || latestPosts.length === 0) {
    return null;
  }

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);

    // Calculate active index based on scroll position
    const cardWidth = el.scrollWidth / latestPosts.length;
    const idx = Math.round(el.scrollLeft / cardWidth);
    setActiveIndex(Math.min(idx, latestPosts.length - 1));
  }, [latestPosts.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-blog-card]")?.offsetWidth || 360;
    const gap = 24;
    el.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    setDragMoved(false);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) setDragMoved(true);
    el.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Prevent link clicks if we were dragging
  const handleCardClick = (e: React.MouseEvent) => {
    if (dragMoved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Header with navigation arrows */}
        <div className="flex items-center justify-between pb-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            From the Blog
          </h2>
          <div className="flex items-center gap-3">
            {/* Arrow buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollBy("left")}
                disabled={!canScrollLeft}
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-card disabled:hover:text-muted-foreground disabled:hover:border-border"
                aria-label="Previous posts"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollBy("right")}
                disabled={!canScrollRight}
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-card disabled:hover:text-muted-foreground disabled:hover:border-border"
                aria-label="Next posts"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="h-5 w-px bg-border" />
            <Link to="/blog" className="text-xs font-semibold text-primary hover:underline">
              View all →
            </Link>
          </div>
        </div>

        {/* Scrollable cards container */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`flex gap-6 overflow-x-auto scroll-smooth pb-4 -mb-4 select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Hide scrollbar with inline style for Webkit */}
          <style>{`
            .blog-scroll-container::-webkit-scrollbar { display: none; }
          `}</style>
          {latestPosts.map((post: BlogPost) => (
            <div
              key={post.id}
              data-blog-card
              className="min-w-[300px] max-w-[380px] flex-shrink-0 md:min-w-[340px] lg:min-w-[calc(33.333%-16px)]"
            >
              <article className="group h-full">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  onClick={handleCardClick}
                  draggable={false}
                >
                  {post.thumbnail_url && (
                    <div className="aspect-video overflow-hidden rounded-xl">
                      <img
                        src={post.thumbnail_url}
                        alt={post.title}
                        loading="lazy"
                        draggable={false}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="mt-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                        {post.category}
                      </span>
                      {post.published_at && (
                        <span className="text-xs text-muted-foreground">
                          {new Date(post.published_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              </article>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        {latestPosts.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {latestPosts.map((_: BlogPost, idx: number) => (
              <button
                key={idx}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const cardWidth = el.scrollWidth / latestPosts.length;
                  el.scrollTo({ left: cardWidth * idx, behavior: "smooth" });
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-muted-foreground/20 hover:bg-muted-foreground/40"
                }`}
                aria-label={`Go to post ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

