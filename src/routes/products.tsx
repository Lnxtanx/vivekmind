import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — VivekMind" },
      { name: "description", content: "Explore SchemaWeaver and FairyForge — enterprise-grade AI products for structured data and intelligent workflows." },
      { property: "og:title", content: "Products — VivekMind" },
      { property: "og:description", content: "Enterprise-grade AI products for structured data and intelligent workflows." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Products</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl">
          Products that define industries
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Our products are built for teams that need reliability, precision, and intelligence at scale.
        </p>
      </section>

      {/* SchemaWeaver */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                Structured Data Platform
              </div>
              <h2 className="mt-5 text-3xl font-extrabold text-foreground md:text-4xl">SchemaWeaver</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
                A comprehensive system for designing and managing structured data with clarity and consistency. SchemaWeaver helps teams define schemas, validate data, and maintain consistency across complex backend systems.
              </p>
              <a
                href="mailto:schemaweaver@vivekmind.com"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                schemaweaver@vivekmind.com
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Schema Design", desc: "Visual and programmatic schema creation with validation" },
                { title: "Data Management", desc: "Centralized backend data consistency at enterprise scale" },
                { title: "System Sync", desc: "Enforce consistency across distributed systems" },
                { title: "Developer API", desc: "Intuitive APIs that integrate into any workflow" },
              ].map((f) => (
                <div key={f.title} className="rounded-xl bg-surface p-6">
                  <h3 className="text-sm font-bold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FairyForge */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Orchestration", desc: "Build complex multi-step workflows with ease" },
                { title: "Event-Driven", desc: "React to real-time events across your entire stack" },
                { title: "AI Pipelines", desc: "Integrate AI capabilities into every workflow step" },
                { title: "Scale Engine", desc: "Process millions of events with consistent performance" },
              ].map((f) => (
                <div key={f.title} className="rounded-xl bg-card p-6">
                  <h3 className="text-sm font-bold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
                Workflow Intelligence Engine
              </div>
              <h2 className="mt-5 text-3xl font-extrabold text-foreground md:text-4xl">FairyForge</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
                A platform for building and orchestrating intelligent workflows. FairyForge enables developers to create automated pipelines that respond to events, process data, and integrate AI capabilities at any scale.
              </p>
              <a
                href="mailto:fairyforge@vivekmind.com"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                fairyforge@vivekmind.com
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-2xl font-extrabold text-foreground md:text-3xl">Want to learn more?</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Get in touch to explore how our products can transform your technology stack.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
