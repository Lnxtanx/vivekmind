import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../assets/vivekmind-logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PRODUCT_URLS = {
  swDocs: "https://docs.schemaweaver.vivekmind.com",
};

const faqs: { q: string; a: string }[] = [
  {
    q: "What is VivekMind?",
    a: "VivekMind is an AI-first technology company that builds intelligent products for developers, data teams, and technical organisations. Our products include Schema Weaver (PostgreSQL schema management), FairyForge (workflow automation), and VivekMind Press (AI-assisted publishing).",
  },
  {
    q: "What is Schema Weaver?",
    a: "Schema Weaver is a PostgreSQL schema management platform. It gives you a visual SQL Editor, an auto-generated ER diagram, a 20-layer schema compiler, a migration engine with drift detection, and an AI-powered Data Explorer — all in one workspace.",
  },
  {
    q: "What's the difference between the SQL Editor and Data Explorer?",
    a: "The SQL Editor is for schema design — write DDL, visualize your ER diagram, run migrations, and manage your schema files. The Data Explorer is for querying and analyzing live data — browse tables, run SQL, and use Resona AI to analyze your data in natural language.",
  },
  {
    q: "What is FairyForge?",
    a: "FairyForge is a workflow intelligence engine. It lets you build and orchestrate AI-powered workflows that react to events, process data, and integrate with any system — from simple automations to complex multi-step pipelines.",
  },
  {
    q: "What is VivekMind Press?",
    a: "VivekMind Press is an AI-assisted content and publishing platform. It's designed for teams that create documentation sites, newsletters, and long-form technical content — with AI woven into the writing and editorial workflow.",
  },
  {
    q: "Where can I find Schema Weaver documentation?",
    a: "Schema Weaver documentation is available at docs.schemaweaver.vivekmind.com. It covers the SQL Editor, Data Explorer, Resona AI, migration engine, team collaboration, and more.",
  },
  {
    q: "How do I get support?",
    a: "Email us at support@vivekmind.com — our team typically responds within 24 hours on business days. For Schema Weaver-specific questions you can also email schemaweaver@vivekmind.com.",
  },
  {
    q: "Do you offer enterprise or custom solutions?",
    a: "Yes. We work with organisations of all sizes. Contact us at vivek@vivekmind.com to discuss custom plans, on-premise deployments, or bespoke integrations.",
  },
];

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — VivekMind" },
      {
        name: "description",
        content:
          "Get help with Schema Weaver, FairyForge, and VivekMind Press. Find answers to common questions or contact our support team.",
      },
      { property: "og:title", content: "Support — VivekMind" },
      { property: "og:description", content: "Get help with VivekMind products — Schema Weaver, FairyForge, and VivekMind Press." },
      { property: "og:url", content: "https://vivekmind.com/support" },
      { name: "twitter:title", content: "Support — VivekMind" },
      { name: "twitter:description", content: "Get help with VivekMind products." },
    ],
    links: [{ rel: "canonical", href: "https://vivekmind.com/support" }],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-8">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="VivekMind" className="h-7 w-auto opacity-80" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Support</p>
        </div>
        <h1 className="mt-5 text-4xl font-extrabold text-foreground md:text-5xl">How can we help?</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
          Find quick answers below, browse the docs, or reach out to our team directly.
        </p>

        {/* Quick links */}
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={PRODUCT_URLS.swDocs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-all"
          >
            Schema Weaver Docs →
          </a>
          <a
            href="mailto:support@vivekmind.com"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-all"
          >
            Email Support →
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-all"
          >
            Contact Form →
          </Link>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="mt-2 w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline py-6 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still need help */}
        <div className="mt-16 border-t border-border pt-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-foreground">Still need help?</h2>
              <p className="mt-2 text-muted-foreground">
                Our support team responds within 24 hours on business days.
              </p>
            </div>
            <a
              href="mailto:support@vivekmind.com"
              className="shrink-0 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all"
            >
              Email support@vivekmind.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
