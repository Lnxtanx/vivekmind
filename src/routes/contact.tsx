import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VivekMind" },
      { name: "description", content: "Get in touch with VivekMind. Reach out for partnerships, product inquiries, or general questions." },
      { property: "og:title", content: "Contact — VivekMind" },
      { property: "og:description", content: "Get in touch with VivekMind for partnerships and inquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
        <h1 className="mt-4 text-4xl font-extrabold text-foreground md:text-5xl">Let's talk</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Whether you're exploring a partnership or have a question about our products — we'd love to hear from you.
        </p>

        <div className="mt-16 grid gap-16 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-border bg-card p-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </div>
                <p className="mt-5 text-xl font-bold text-foreground">Message sent</p>
                <p className="mt-2 text-muted-foreground">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={1000}
                    rows={6}
                    className="mt-2 block w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20 resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="md:col-span-2">
            <div className="rounded-2xl bg-surface p-8">
              <h2 className="text-lg font-bold text-foreground">Direct contacts</h2>
              <div className="mt-6 space-y-5">
                {[
                  { label: "General Support", email: "support@vivekmind.com" },
                  { label: "Founder", email: "vivek@vivekmind.com" },
                  { label: "SchemaWeaver", email: "schemaweaver@vivekmind.com" },
                  { label: "FairyForge", email: "fairyforge@vivekmind.com" },
                ].map((c) => (
                  <div key={c.email}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    <a href={`mailto:${c.email}`} className="mt-1 block text-sm font-medium text-primary hover:underline">{c.email}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
