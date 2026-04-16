import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — VivekMind" },
      { name: "description", content: "SchemaWeaver and FairyForge — developer tools for structured data and intelligent workflows." },
      { property: "og:title", content: "Products — VivekMind" },
      { property: "og:description", content: "SchemaWeaver and FairyForge — developer tools for structured data and intelligent workflows." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-sm text-primary">Products</p>
      <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Our products</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Tools and platforms designed to help developers design, manage, and scale data-driven systems.
      </p>

      <div className="mt-14 space-y-16">
        <ProductSection
          name="SchemaWeaver"
          focus="Structured data · Schemas · Backend systems"
          description="A system for designing and managing structured data with clarity and consistency. SchemaWeaver helps teams define schemas, validate data, and maintain consistency across complex backend systems."
          features={[
            "Schema design and validation",
            "Backend data management",
            "Consistency enforcement across systems",
            "Developer-friendly API",
          ]}
          email="schemaweaver@vivekmind.com"
        />
        <div className="border-t border-border" />
        <ProductSection
          name="FairyForge"
          focus="Workflows · Automation · Intelligent systems"
          description="A platform for building and orchestrating intelligent workflows. FairyForge enables developers to create automated pipelines that respond to events, process data, and integrate AI capabilities."
          features={[
            "Workflow orchestration",
            "Event-driven automation",
            "AI pipeline integration",
            "Scalable execution engine",
          ]}
          email="fairyforge@vivekmind.com"
        />
      </div>
    </div>
  );
}

function ProductSection({
  name,
  focus,
  description,
  features,
  email,
}: {
  name: string;
  focus: string;
  description: string;
  features: string[];
  email: string;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <h2 className="text-2xl font-bold text-foreground">{name}</h2>
        <p className="mt-1 font-mono text-xs text-primary">{focus}</p>
        <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
        <a
          href={`mailto:${email}`}
          className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
        >
          {email}
        </a>
      </div>
      <div>
        <ul className="space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12l5 5L20 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
