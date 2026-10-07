import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../assets/vivekmind-logo.png";

const SITE_URL = "https://vivekmind.com";

const PRODUCT_URLS = {
  schemaWeaver: "https://schemaweaver.dev",
  sqlEditor: "https://sql-editor.schemaweaver.dev",
  dataExplorer: "https://data-explorer.schemaweaver.dev",
  swDocs: "https://docs.schemaweaver.dev",
  codingCLI: "https://code.vivekmind.com/",
  press: "https://press.vivekmind.com",
};

const allProductsStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Vivekmind Products",
  description: "AI-powered products by Vivekmind — Schema Weaver, Vivekmind CLI, and Vivekmind Press.",
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
          "The first voice-native analytics workspace for PostgreSQL. Browse live data in a high-performance grid, ask Resona AI in plain English, or talk to your database by voice.",
        featureList: [
          "Voice queries — ask your database questions out loud",
          "High-performance data grid with filters, sorting, and column stats",
          "Resona AI agentic analysis in plain English",
          "Export to CSV, Excel, JSON, SQL, or Google Sheets",
          "Visual SQL editor with auto-generated ER diagrams",
          "20-layer schema compiler with A–F quality grading",
          "Migration engine with drift detection and rollback",
          "Team collaboration with role-based access",
        ],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@type": "Organization", name: "Vivekmind", url: "https://vivekmind.com" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "SoftwareApplication",
        name: "Vivekmind CLI",
        url: PRODUCT_URLS.codingCLI,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "macOS, Linux, Windows",
        description:
          "Open-source AI coding agent. Connect any model from any provider, including Claude, GPT, Gemini, all native AWS models from AWS Bedrock, and more.",
        featureList: [
          "Connect any model from any provider",
          "Support for Claude, GPT, Gemini",
          "Native AWS Bedrock models integration",
          "Cross-platform: macOS, Linux, Windows",
          "Open source AI coding agent",
          "Install via npm: npm i -g vivekmind",
        ],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@type": "Organization", name: "Vivekmind", url: "https://vivekmind.com" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "WebApplication",
        name: "Vivekmind Press",
        url: PRODUCT_URLS.press,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        description:
          "AI-assisted publishing platform for writing, managing, and distributing technical content.",
        featureList: [
          "AI writing assistant for technical content",
          "Documentation site publishing with custom domains",
          "Newsletter creation and distribution engine",
          "Content analytics and reader engagement",
          "Team collaboration with editorial workflows",
          "Multi-format export: web, PDF, Markdown, API",
        ],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@type": "Organization", name: "Vivekmind", url: "https://vivekmind.com" },
      },
    },
  ],
};

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Schema Weaver, Vivekmind CLI & Vivekmind Press | Vivekmind" },
      {
        name: "description",
        content:
          "Discover AI-powered products by Vivekmind: Schema Weaver for PostgreSQL teams, Vivekmind CLI for AI coding, and Vivekmind Press for publishing.",
      },
      { property: "og:title", content: "Products — Schema Weaver, Vivekmind CLI & Vivekmind Press | Vivekmind" },
      {
        property: "og:description",
        content:
          "Discover AI-powered products by Vivekmind: Schema Weaver for PostgreSQL teams, Vivekmind CLI for AI coding, and Vivekmind Press for publishing.",
      },
      { property: "og:url", content: "https://vivekmind.com/products" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: `${SITE_URL}/vivekmind-logo.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Products — Vivekmind" },
      {
        name: "twitter:description",
        content:
          "Discover AI-powered products by Vivekmind: Schema Weaver for PostgreSQL teams, Vivekmind CLI for AI coding, and Vivekmind Press for publishing.",
      },
      { name: "twitter:image", content: `${SITE_URL}/vivekmind-logo.png` },
      { name: "twitter:image:width", content: "1200" },
      { name: "twitter:image:height", content: "630" },
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
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Vivekmind</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Analytics Workspace</p>
              <div className="mt-3 flex items-center gap-3">
                <img src={logo} alt="" className="h-8 w-auto opacity-90" />
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Schema Weaver</h2>
              </div>
              <p className="mt-1 text-sm text-muted-foreground font-mono">schemaweaver.dev</p>
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
            The first voice-native analytics workspace for PostgreSQL. Browse live data in a high-performance grid, ask Resona AI in plain English, or talk to your database by voice — with a visual SQL editor, interactive ER diagrams, and safe migrations alongside. Built specifically for database teams and backend developers.
          </p>

          {/* Sub-product links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "Data Explorer", href: PRODUCT_URLS.dataExplorer, sub: "data-explorer.schemaweaver.dev" },
              { label: "SQL Editor", href: PRODUCT_URLS.sqlEditor, sub: "sql-editor.schemaweaver.dev" },
              { label: "Documentation", href: PRODUCT_URLS.swDocs, sub: "docs.schemaweaver.dev" },
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
                title: "Voice Queries",
                desc: "Start a voice session and ask your database questions out loud. Speak naturally and get answers in plain English — no query syntax required.",
              },
              {
                title: "Resona AI",
                desc: "Ask Resona AI to write queries, analyze columns, and build reports from your data. Agentic analysis loops return tables, charts, and stats.",
              },
              {
                title: "High-Performance Grid",
                desc: "Browse any table with typed filters, server-side sorting, and column statistics — null rates, distinct counts, and value distributions.",
              },
              {
                title: "Dashboards & Exports",
                desc: "Generate a dashboard of KPI cards, trends, and cohorts from your whole database, then export the view or an entire schema to CSV, Excel, JSON, SQL, or Google Sheets.",
              },
              {
                title: "Visual SQL Editor",
                desc: "Write PostgreSQL DDL across multi-file projects with syntax highlighting, auto-complete, and an interactive ER diagram that updates as you type.",
              },
              {
                title: "Schema Compiler & Migrations",
                desc: "20-layer static analysis grades your schema A–F. Pull live schema, diff changes, and push with advisory locks, drift detection, and one-click rollback.",
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

      {/* ── Coding CLI (vivekmind) ─────────────────────────────────────── */}
      <section className="border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">AI Coding Agent</p>
              <div className="mt-3 flex items-center gap-3">
                <img src={logo} alt="" className="h-8 w-auto opacity-90" />
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Coding CLI</h2>
              </div>
              <p className="mt-1 text-sm text-muted-foreground font-mono">code.vivekmind.com</p>
            </div>
            <a
              href={PRODUCT_URLS.codingCLI}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all"
            >
              Open Coding CLI <ExternalIcon />
            </a>
          </div>

          {/* Description */}
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            The open source AI coding agent. Connect any model from any provider, including Claude, GPT, Gemini, all native AWS models from AWS Bedrock, and more.
          </p>

          {/* Platform badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["macOS", "Linux", "Windows"].map((platform) => (
              <span
                key={platform}
                className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {platform}
              </span>
            ))}
          </div>

          {/* Install command */}
          <div className="mt-6">
            <code className="inline-flex items-center gap-2 rounded-lg bg-muted px-4 py-2.5 text-sm font-mono text-muted-foreground">
              npm i -g vivekmind
            </code>
          </div>

          {/* Features */}
          <div className="mt-14 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Any Model, Any Provider",
                desc: "Connect to Claude, GPT, Gemini, and all native AWS Bedrock models. Choose the best AI for your workflow.",
              },
              {
                title: "Cross-Platform",
                desc: "Native support for macOS, Linux, and Windows. Install once, code anywhere.",
              },
              {
                title: "Open Source",
                desc: "Fully open source AI coding agent. Transparent, extensible, and community-driven.",
              },
              {
                title: "Model Flexibility",
                desc: "Switch between providers seamlessly. Use the right model for each task without vendor lock-in.",
              },
              {
                title: "AWS Bedrock Native",
                desc: "First-class support for all AWS Bedrock models with native integration and optimized performance.",
              },
              {
                title: "Easy Installation",
                desc: "One command install via npm. Get started coding with AI in seconds.",
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

      {/* ── Vivekmind Press ───────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          {/* Header row */}
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Content Platform</p>
              <div className="mt-3 flex items-center gap-3">
                <img src={logo} alt="" className="h-8 w-auto opacity-90" />
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Vivekmind Press</h2>
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
                Get in touch to learn how Vivekmind's products can help your team build, automate, and publish faster.
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
                About Vivekmind
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
