import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VivekMind — AI Systems & Tools for Structured Data" },
      { name: "description", content: "Build, manage, and scale intelligent workflows with developer-focused infrastructure." },
      { property: "og:title", content: "VivekMind — AI Systems & Tools for Structured Data" },
      { property: "og:description", content: "Build, manage, and scale intelligent workflows with developer-focused infrastructure." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-mono text-sm text-primary">vivekmind.com</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          AI Systems & Tools for Structured Data
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Build, manage, and scale intelligent workflows with developer-focused infrastructure.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore Products
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Products */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-sm text-primary">Products</p>
          <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">What we've built</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <ProductCard
              name="SchemaWeaver"
              tagline="Structured data, schemas, backend systems"
              description="A system for designing and managing structured data with clarity and consistency."
            />
            <ProductCard
              name="FairyForge"
              tagline="Workflows, automation, intelligent systems"
              description="A platform for building and orchestrating intelligent workflows."
            />
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-sm text-primary">Capabilities</p>
        <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">What we build</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <CapabilityCard
            title="Developer Tools"
            description="SDKs, CLIs, and APIs that make complex backend logic approachable."
          />
          <CapabilityCard
            title="AI Systems"
            description="Structured AI pipelines that enforce schema validation and reliable outputs."
          />
          <CapabilityCard
            title="Infrastructure"
            description="Scalable backend infrastructure for data-driven applications."
          />
        </div>
      </section>

      {/* About snippet */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="font-mono text-sm text-primary">About</p>
            <h2 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">Built for developers</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              VivekMind builds AI systems and infrastructure for structured data. Our mission is to
              simplify how developers work with data and AI systems — enabling scalable, reliable,
              and structured intelligent systems.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Learn more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ name, tagline, description }: { name: string; tagline: string; description: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <p className="mt-1 font-mono text-xs text-primary">{tagline}</p>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function CapabilityCard({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
