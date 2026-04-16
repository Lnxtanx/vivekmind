import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../assets/vivekmind-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VivekMind — Pioneering AI Systems & Intelligent Infrastructure" },
      { name: "description", content: "VivekMind builds AI systems, models, and infrastructure that power the future of intelligent technology." },
      { property: "og:title", content: "VivekMind — Pioneering AI Systems & Intelligent Infrastructure" },
      { property: "og:description", content: "VivekMind builds AI systems, models, and infrastructure that power the future of intelligent technology." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <img src={logo} alt="" className="h-12 w-auto" />
          </div>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Building the future of{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              intelligent systems
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            We design and build AI systems, infrastructure, and models that solve complex problems at scale — empowering businesses and developers to create what's next.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
            >
              Explore Our Products
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do — Big numbers */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Do</p>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
              Powering the next wave of AI
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground text-lg">
              From foundational models to production-grade infrastructure, we build the technology stack that makes AI reliable, scalable, and accessible.
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {[
              { icon: "⚡", title: "AI Systems & Models", desc: "End-to-end AI systems and models designed for real-world performance, reliability, and scale." },
              { icon: "🏗️", title: "Infrastructure", desc: "Cloud-native infrastructure purpose-built for AI workloads — from training to deployment." },
              { icon: "🔄", title: "Intelligent Workflows", desc: "Automated pipelines and orchestration engines that transform how businesses operate." },
            ].map((item) => (
              <div key={item.title} className="bg-card p-10">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products showcase */}
      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Products</p>
          <h2 className="mt-4 text-3xl font-extrabold text-foreground md:text-4xl">Our flagship products</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <ProductShowcase
              name="SchemaWeaver"
              tagline="Structured Data Platform"
              description="Design, validate, and manage structured data at enterprise scale. SchemaWeaver brings clarity and consistency to the most complex data architectures."
              gradient="from-primary to-primary/60"
            />
            <ProductShowcase
              name="FairyForge"
              tagline="Workflow Intelligence Engine"
              description="Build, orchestrate, and scale intelligent workflows that respond to events, process data, and leverage AI capabilities in real time."
              gradient="from-accent to-accent/60"
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              See all products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Vision</p>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground md:text-4xl">
                Technology that thinks ahead
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                We believe AI should be more than a feature — it should be foundational. VivekMind is building the systems and infrastructure that make intelligent technology the default, not the exception.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                About VivekMind
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "2+", label: "Products" },
                { value: "AI", label: "First Approach" },
                { value: "∞", label: "Scalability" },
                { value: "24/7", label: "Reliability" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-surface p-7 text-center">
                  <p className="text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.value}</p>
                  <p className="mt-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Ready to build the future?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
            Discover how VivekMind's AI systems and infrastructure can accelerate your next breakthrough.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-background/90"
            >
              Get in Touch
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductShowcase({ name, tagline, description, gradient }: { name: string; tagline: string; description: string; gradient: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-10 transition-all hover:shadow-xl hover:shadow-primary/5">
      <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${gradient}`} />
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">{tagline}</p>
      <h3 className="mt-3 text-2xl font-bold text-foreground">{name}</h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
      <Link
        to="/products"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
      >
        Learn more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
