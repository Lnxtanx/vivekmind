import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../assets/vivekmind-logo.png";

const PRODUCT_URLS = {
  schemaWeaver: "https://schemaweaver.vivekmind.com",
  fairyForge: "https://fairyforge.vivekmind.com",
  press: "https://press.vivekmind.com",
};

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — VivekMind" },
      {
        name: "description",
        content:
          "VivekMind is an AI-first technology company building intelligent developer tools — Schema Weaver, FairyForge, and VivekMind Press. We ship software that thinks alongside you.",
      },
      { property: "og:title", content: "About — VivekMind" },
      {
        property: "og:description",
        content: "VivekMind builds AI-first developer tools: Schema Weaver, FairyForge, and VivekMind Press.",
      },
      { property: "og:url", content: "https://vivekmind.com/about" },
      { name: "twitter:title", content: "About — VivekMind" },
      { name: "twitter:description", content: "AI systems, tools, and infrastructure for developers and technical teams." },
    ],
    links: [{ rel: "canonical", href: "https://vivekmind.com/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-8">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="VivekMind Organization Logo" className="h-7 w-auto opacity-80" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">About</p>
        </div>
        <div className="mt-5 max-w-2xl">
          <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            We build what comes next.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            VivekMind is an AI-first technology company building developer tools, workflow infrastructure, and publishing platforms — all with intelligence built in from the ground up.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We believe the most powerful software doesn't just respond to instructions — it understands context, anticipates needs, and helps you move faster. That's what we build.
          </p>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Mission</p>
              <h2 className="mt-4 text-2xl font-extrabold text-foreground">Simplify intelligence.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Make AI systems and data infrastructure intuitive, reliable, and accessible — so developers and teams can focus on building what matters, not managing complexity.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Vision</p>
              <h2 className="mt-4 text-2xl font-extrabold text-foreground">Intelligence everywhere.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A world where intelligent tooling is the default, not the exception. Where every developer, data team, and content creator works with software that actively helps them do more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Focus Areas ──────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground pb-8">
            What we focus on
          </h2>
          <div className="grid gap-0 md:grid-cols-3">
            {[
              {
                title: "Developer Tools",
                desc: "SDKs, editors, and platforms that turn complex database and data engineering challenges into fast, elegant developer workflows. Fewer abstractions, more power.",
              },
              {
                title: "AI Infrastructure",
                desc: "Foundations for deploying and scaling AI capabilities in production — from embedding AI into migration engines to natural-language data analysis with agentic loops.",
              },
              {
                title: "Workflow Systems",
                desc: "Intelligent orchestration platforms that let teams automate, observe, and scale the processes that keep their businesses running — with AI as a first-class component.",
              },
            ].map((area) => (
              <div key={area.title} className="border-t border-border py-8 pr-8">
                <h3 className="text-base font-bold text-foreground">{area.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ─────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex items-baseline justify-between pb-8">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Our products</h2>
            <Link to="/products" className="text-xs font-semibold text-primary hover:underline">View all →</Link>
          </div>
          <div className="divide-y divide-border">
            {[
              {
                name: "Schema Weaver",
                category: "Database Tools",
                tagline: "PostgreSQL schema management platform",
                href: PRODUCT_URLS.schemaWeaver,
              },
              {
                name: "FairyForge",
                category: "Workflow Automation",
                tagline: "Workflow intelligence engine",
                href: PRODUCT_URLS.fairyForge,
              },
              {
                name: "VivekMind Press",
                category: "Content Platform",
                tagline: "AI-assisted publishing platform",
                href: PRODUCT_URLS.press,
              },
            ].map((p) => (
              <div key={p.name} className="py-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-base font-bold text-foreground">{p.name}</span>
                      <span className="rounded-full bg-primary/[0.08] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                        {p.category}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    Explore →
                  </a>
                </div>
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
              <h2 className="text-3xl font-extrabold text-foreground">Join our journey.</h2>
              <p className="mt-3 text-lg text-muted-foreground">
                We're always looking for ambitious partners and talented people who share our vision for intelligent software.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                Get in Touch
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
              >
                Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
