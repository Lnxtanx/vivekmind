import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const contacts = [
  { label: "General Support", email: "support@vivekmind.com" },
  { label: "Founder", email: "vivek@vivekmind.com" },
  { label: "Schema Weaver", email: "schemaweaver@vivekmind.com" },
  { label: "FairyForge", email: "fairyforge@vivekmind.com" },
  { label: "VivekMind Press", email: "press@vivekmind.com" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VivekMind" },
      {
        name: "description",
        content:
          "Get in touch with VivekMind. Reach out for partnerships, product inquiries, or general questions about Schema Weaver, FairyForge, or VivekMind Press.",
      },
      { property: "og:title", content: "Contact — VivekMind" },
      { property: "og:description", content: "Get in touch with VivekMind for partnerships and product inquiries." },
      { property: "og:url", content: "https://vivekmind.com/contact" },
      { name: "twitter:title", content: "Contact — VivekMind" },
      { name: "twitter:description", content: "Get in touch with VivekMind for partnerships and product inquiries." },
    ],
    links: [{ rel: "canonical", href: "https://vivekmind.com/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
        <h1 className="mt-5 text-4xl font-extrabold text-foreground md:text-5xl">Let's talk.</h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
          Whether you're exploring a partnership, have a question about one of our products, or just want to say hello — we'd love to hear from you.
        </p>

        <div className="mt-16 grid gap-16 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-12">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <p className="text-xl font-bold text-foreground">Message sent.</p>
                <p className="text-muted-foreground">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      autoComplete="email"
                      className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                  >
                    <option value="">Select a topic</option>
                    <option value="schema-weaver">Schema Weaver</option>
                    <option value="fairyforge">FairyForge</option>
                    <option value="press">VivekMind Press</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={2000}
                    rows={6}
                    className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="md:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">Direct contacts</h2>
            <div className="mt-6 divide-y divide-border">
              {contacts.map((c) => (
                <div key={c.email} className="py-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">{c.label}</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="mt-1 block text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {c.email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
