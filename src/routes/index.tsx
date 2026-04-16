import { createFileRoute, Link } from "@tanstack/react-router";

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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-8">VivekMind</p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.06] tracking-tight text-foreground md:text-6xl lg:text-[5.25rem]">
            AI systems,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              tools &amp; infrastructure.
            </span>
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
