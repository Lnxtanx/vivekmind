import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../assets/vivekmind-logo.png";

const PRODUCT_URLS = {
  schemaWeaver: "https://schemaweaver.vivekmind.com",
  sqlEditor: "https://sql-editor.schemaweaver.vivekmind.com",
  dataExplorer: "https://data-explorer.schemaweaver.vivekmind.com",
  swDocs: "https://docs.schemaweaver.vivekmind.com",
  fairyForge: "https://fairyforge.vivekmind.com",
  press: "https://press.vivekmind.com",
};

const allProductsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "VivekMind Products",
  description: "AI-powered products by VivekMind — Schema Weaver, FairyForge, and VivekMind Press.",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "SoftwareApplication",
        name: "Schema Weaver",
        url: PRODUCT_URLS.schemaWeaver,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web Browser",
        description:
          "PostgreSQL schema management platform with visual SQL Editor, auto-generated ER diagrams, 20-layer schema compiler, migration engine with drift detection, and AI-powered Data Explorer.",
        featureList: [
          "Visual SQL editor with auto-generated ER diagrams",
          "20-layer schema compiler with A–F quality grading",
          "Resona AI assistant with 55+ tools",
          "Migration engine with drift detection and rollback",
          "AI-powered Data Explorer with agentic workflows",
          "Team collaboration with role-based access",
        ],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@type": "Organization", name: "VivekMind", url: "https://vivekmind.com" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "FairyForge",
        url: PRODUCT_URLS.fairyForge,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        description:
          "Workflow intelligence engine for building and orchestrating AI-powered automations that respond to events, process data, and scale on demand.",
        featureList: [
          "Visual workflow builder",
          "Event triggers: webhooks, schedules, DB events",
          "AI pipeline steps with LLM integration",
          "Branching and conditional routing",
          "High-volume scale engine with retry logic",
          "Pre-built connectors for APIs and services",
        ],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@type": "Organization", name: "VivekMind", url: "https://vivekmind.com" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "WebApplication",
        name: "VivekMind Press",
        url: PRODUCT_URLS.press,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        description:
          "AI-assisted content and publishing platform for writing, managing, and distributing technical content — documentation sites, newsletters, and long-form articles.",
        featureList: [
          "AI writing assistant for technical content",
          "Documentation site publishing with custom domains",
          "Newsletter creation and distribution engine",
          "Content analytics and reader engagement",
          "Team collaboration with editorial workflows",
          "Multi-format export: web, PDF, Markdown, API",
        ],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@type": "Organization", name: "VivekMind", url: "https://vivekmind.com" },
      },
    },
  ],
};

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Schema Weaver, FairyForge & VivekMind Press | VivekMind" },
      {
        name: "description",
        content:
          "VivekMind builds three AI-powered products: Schema Weaver (PostgreSQL schema management), FairyForge (workflow automation engine), and VivekMind Press (AI-assisted publishing platform).",
      },
      { property: "og:title", content: "Products — Schema Weaver, FairyForge & VivekMind Press | VivekMind" },
      {
        property: "og:description",
        content:
          "Three AI-powered products by VivekMind: Schema Weaver for PostgreSQL teams, FairyForge for workflow automation, and VivekMind Press for content publishing.",
      },
      { property: "og:url", content: "https://vivekmind.com/products" },
      { name: "twitter:title", content: "Products — VivekMind" },
      {
        name: "twitter:description",
        content: "Schema Weaver, FairyForge, VivekMind Press — AI-powered products by VivekMind.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vivekmind.com/products" }],
  }),
  component: ProductsPage,
});

function ExternalIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function ProductsPage() {
  return (
    <div>
      {/* Page-level JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allProductsStructuredData) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">VivekMind</p>
        <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
          Products
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Three products built on one principle: AI as a first-class citizen. Each one solves a different problem, but all share the same commitment to intelligent, reliable software.
        </p>
      </section>

      {/* ── Schema Weaver ─────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Database Tools</p>
              <div className="mt-3 flex items-center gap-3">
                <img src={logo} alt="" className="h-8 w-auto opacity-90" />
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Schema Weaver</h2>
              </div>
              <p className="mt-1 text-sm text-muted-foreground font-mono">schemaweaver.vivekmind.com</p>
            </div>
            <a
              href={PRODUCT_URLS.schemaWeaver}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all"
            >
              Open Schema Weaver <ExternalIcon />
            </a>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            A PostgreSQL schema management platform — write your schema, visualize it as an ER diagram, migrate safely to production, and explore your live data with AI. Built specifically for database teams and backend developers.
          </p>

          {/* Sub-product links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "SQL Editor", href: PRODUCT_URLS.sqlEditor, sub: "sql-editor.schemaweaver.vivekmind.com" },
              { label: "Data Explorer", href: PRODUCT_URLS.dataExplorer, sub: "data-explorer.schemaweaver.vivekmind.com" },
              { label: "Documentation", href: PRODUCT_URLS.swDocs, sub: "docs.schemaweaver.vivekmind.com" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-all group"
              >
                {item.label}
                <span className="text-muted-foreground/40 font-mono text-[10px] hidden sm:inline">
                  {item.sub}
                </span>
                <ExternalIcon />
              </a>
            ))}
          </div>

          {/* Features */}
          <div className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Visual SQL Editor",
                desc: "Write PostgreSQL DDL across multi-file projects with syntax highlighting, auto-complete, and live schema analysis.",
              },
              {
                title: "Auto ER Diagram",
                desc: "Your entity-relationship diagram updates in real time as you type. Drag, zoom, and explore every table relationship.",
              },
              {
                title: "Schema Compiler",
                desc: "20-layer static analysis gives your schema an A–F grade with detailed issues: missing indexes, RLS gaps, unsafe casts, naming problems, and more.",
              },
              {
                title: "Migration Engine",
                desc: "Pull live schema, diff changes, and push with advisory locks, drift detection, and one-click rollback to any prior snapshot.",
              },
              {
                title: "Resona AI",
                desc: "55+ AI tools purpose-built for schema work — generate tables, write migrations, explain policies, review your entire schema in plain English.",
              },
              {
                title: "Data Explorer",
                desc: "Browse tables, run SQL, and ask natural-language questions. Resona AI runs agentic analysis loops and returns tables, charts, and stats.",
              },
            ].map((f) => (
              <div key={f.title} className="border-t border-border py-6 pr-8">
                <h3 className="text-sm font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FairyForge ────────────────────────────────────────────────── */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Workflow Automation</p>
              <div className="mt-3 flex items-center gap-3">
                <img src={logo} alt="" className="h-8 w-auto opacity-90" />
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">FairyForge</h2>
              </div>
              <p className="mt-1 text-sm text-muted-foreground font-mono">fairyforge.vivekmind.com</p>
            </div>
            <a
              href={PRODUCT_URLS.fairyForge}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-6 py-2.5 text-sm font-semibold text-accent hover:bg-accent/20 transition-all"
            >
              Open FairyForge <ExternalIcon />
            </a>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            A workflow intelligence engine for building and orchestrating AI-powered automations. React to events, process data, and integrate AI capabilities at any scale — from simple triggers to complex multi-step pipelines.
          </p>

          {/* Features */}
          <div className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Visual Workflow Builder",
                desc: "Design multi-step workflows with a drag-and-drop canvas. Connect triggers, actions, and AI steps visually.",
              },
              {
                title: "Event Triggers",
                desc: "React to webhooks, scheduled crons, database events, API calls, and custom signals from any system.",
              },
              {
                title: "AI Pipeline Steps",
                desc: "Embed LLM calls, classification, summarisation, and AI decision-making directly into any workflow step.",
              },
              {
                title: "Branching & Conditionals",
                desc: "Route workflow paths based on data values, HTTP status codes, AI decisions, or custom logic.",
              },
              {
                title: "Scale Engine",
                desc: "Process high volumes with built-in concurrency, retry logic, dead-letter queues, and observability.",
              },
              {
                title: "Integrations",
                desc: "Pre-built connectors for APIs, databases, messaging queues, and SaaS tools. Anything else via HTTP.",
              },
            ].map((f) => (
              <div key={f.title} className="border-t border-border py-6 pr-8">
                <h3 className="text-sm font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VivekMind Press ───────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Content Platform</p>
              <div className="mt-3 flex items-center gap-3">
                <img src={logo} alt="" className="h-8 w-auto opacity-90" />
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">VivekMind Press</h2>
              </div>
              <p className="mt-1 text-sm text-muted-foreground font-mono">press.vivekmind.com</p>
            </div>
            <a
              href={PRODUCT_URLS.press}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all"
            >
              Open Press <ExternalIcon />
            </a>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            An AI-assisted publishing platform for technical teams. Create documentation sites, run newsletters, and publish long-form content — with AI as a native part of the writing and editorial workflow.
          </p>

          {/* Features */}
          <div className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI Writing Assistant",
                desc: "Generate, refine, and restructure technical content with AI as a co-author. Grounded in your docs and product context.",
              },
              {
                title: "Documentation Sites",
                desc: "Publish structured docs with custom domains, MDX support, sidebar navigation, and search. Production-ready out of the box.",
              },
              {
                title: "Newsletter Engine",
                desc: "Create and send AI-crafted newsletters to your subscriber list. Built-in templates, scheduling, and delivery analytics.",
              },
              {
                title: "Content Analytics",
                desc: "Understand what your readers engage with. Page views, read time, scroll depth, and link clicks — all in one dashboard.",
              },
              {
                title: "Editorial Workflows",
                desc: "Write, review, and publish together with role-based workflows. Draft → Review → Publish with full version history.",
              },
              {
                title: "Multi-format Export",
                desc: "Publish to the web, export as PDF, Markdown, or JSON. Headless API mode for integrating content anywhere.",
              },
            ].map((f) => (
              <div key={f.title} className="border-t border-border py-6 pr-8">
                <h3 className="text-sm font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-lg">
              <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">Want to learn more?</h2>
              <p className="mt-3 text-muted-foreground">
                Get in touch to learn how VivekMind's products can help your team build, automate, and publish faster.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-all"
              >
                About VivekMind
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
