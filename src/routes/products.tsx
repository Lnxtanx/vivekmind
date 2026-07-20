import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../assets/vivekmind-logo.png";

const PRODUCT_URLS = {
  schemaWeaver: "https://schemaweaver.vivekmind.com",
  sqlEditor: "https://sql-editor.schemaweaver.vivekmind.com",
  dataExplorer: "https://data-explorer.schemaweaver.vivekmind.com",
  swDocs: "https://docs.schemaweaver.vivekmind.com",
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
          "AI-native PostgreSQL workspace for schema management, visual editing, and safe migrations.",
        featureList: [
          "Visual SQL editor with auto-generated ER diagrams",
          "20-layer schema compiler with A–F quality grading",
          "Resona AI assistant with 55+ tools",
          "Migration engine with drift detection and rollback",
          "AI-powered Data Explorer with agentic workflows",
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
          "Vivekmind builds three AI-powered products: Schema Weaver (AI-native PostgreSQL workspace), Vivekmind CLI (AI coding agent), and Vivekmind Press (AI-assisted publishing platform).",
      },
      { property: "og:title", content: "Products — Schema Weaver, Vivekmind CLI & Vivekmind Press | Vivekmind" },
      {
        property: "og:description",
        content:
          "Three AI-powered products by Vivekmind: Schema Weaver for PostgreSQL teams, Vivekmind CLI for AI coding, and Vivekmind Press for content publishing.",
      },
      { property: "og:url", content: "https://vivekmind.com/products" },
      { name: "twitter:title", content: "Products — Vivekmind" },
      {
        name: "twitter:description",
        content: "Schema Weaver, Vivekmind CLI, Vivekmind Press — AI-powered products by Vivekmind.",
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
