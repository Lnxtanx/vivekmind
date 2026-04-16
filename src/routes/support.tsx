import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — VivekMind" },
      { name: "description", content: "Get help with VivekMind products. Find answers or contact our support team." },
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
      a: "VivekMind is an AI-first technology company that builds systems, infrastructure, and intelligent solutions for enterprises and developers worldwide.",
    },
    {
      q: "What is SchemaWeaver?",
      a: "SchemaWeaver is our structured data platform — it helps teams design, validate, and manage data schemas with enterprise-grade consistency.",
    },
    {
      q: "What is FairyForge?",
      a: "FairyForge is our workflow intelligence engine for building and orchestrating automated pipelines that process data and integrate AI capabilities at scale.",
    },
    {
      q: "How do I get support?",
      a: "Email us at support@vivekmind.com — our team typically responds within 24 hours.",
    },
    {
      q: "Do you offer enterprise solutions?",
      a: "Yes. We work with organizations of all sizes. Contact us to discuss custom solutions tailored to your needs.",
    },
  ];

  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Support</p>
        <h1 className="mt-4 text-4xl font-extrabold text-foreground md:text-5xl">How can we help?</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Find quick answers below or reach out to our team directly.
        </p>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary to-accent p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-primary-foreground">Need immediate help?</h2>
              <p className="mt-1 text-primary-foreground/80 text-sm">Our support team is ready to assist you.</p>
            </div>
            <a
              href="mailto:support@vivekmind.com"
              className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-background/90 transition-all whitespace-nowrap"
            >
              Email Support
            </a>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-extrabold text-foreground">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-border">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-7">
                <h3 className="text-base font-bold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
