import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — VivekMind" },
      { name: "description", content: "Get help with VivekMind products. Find answers to common questions or contact support." },
      { property: "og:title", content: "Support — VivekMind" },
      { property: "og:description", content: "Get help with VivekMind products." },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  const faqs = [
    {
      q: "What is VivekMind?",
      a: "VivekMind is an AI systems company that builds tools, infrastructure, and intelligent workflows for structured data.",
    },
    {
      q: "What is SchemaWeaver?",
      a: "SchemaWeaver is a system for designing and managing structured data with clarity and consistency.",
    },
    {
      q: "What is FairyForge?",
      a: "FairyForge is a platform for building and orchestrating intelligent workflows and automated pipelines.",
    },
    {
      q: "How do I get support?",
      a: "Send an email to support@vivekmind.com and we'll respond as quickly as possible.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-sm text-primary">Support</p>
      <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">How can we help?</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Need assistance? Check the FAQ below or reach out directly.
      </p>

      <div className="mt-10 rounded-lg border border-border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          For direct support, email us at{" "}
          <a href="mailto:support@vivekmind.com" className="font-medium text-primary hover:underline">
            support@vivekmind.com
          </a>
        </p>
      </div>

      <div className="mt-14">
        <h2 className="text-xl font-semibold text-foreground">Frequently asked questions</h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-sm font-semibold text-foreground">{faq.q}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
