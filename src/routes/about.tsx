import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — VivekMind" },
      { name: "description", content: "VivekMind builds AI systems and infrastructure for structured data. Learn about our mission and focus areas." },
      { property: "og:title", content: "About — VivekMind" },
      { property: "og:description", content: "VivekMind builds AI systems and infrastructure for structured data." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-sm text-primary">About</p>
      <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">About VivekMind</h1>
      <div className="mt-8 max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
        <p>
          VivekMind is an AI systems company that builds tools, infrastructure, and intelligent
          workflows for structured data. We focus on helping developers design, manage, and scale
          data-driven systems with clarity and control.
        </p>
        <p>
          Our products simplify complex backend logic, enforce structured thinking, and enable
          reliable AI-powered applications.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Mission</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Simplify how developers work with data and AI systems.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">Vision</h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Enable scalable, reliable, and structured intelligent systems.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-lg font-semibold text-foreground">Focus areas</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { title: "Developer Tools", description: "SDKs, APIs, and CLIs that make backend complexity approachable." },
            { title: "AI Infrastructure", description: "Reliable pipelines and systems for structured AI applications." },
            { title: "Workflow Systems", description: "Orchestration platforms for event-driven automation." },
          ].map((area) => (
            <div key={area.title} className="rounded-lg border border-border bg-card p-5">
              <h3 className="text-sm font-semibold text-foreground">{area.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
