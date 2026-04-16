import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — VivekMind" },
      { name: "description", content: "Get in touch with VivekMind. Reach out for questions, partnerships, or support." },
      { property: "og:title", content: "Contact — VivekMind" },
      { property: "og:description", content: "Get in touch with VivekMind." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-sm text-primary">Contact</p>
      <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Get in touch</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Have a question or want to work with us? Send us a message or reach out directly.
      </p>

      <div className="mt-14 grid gap-14 md:grid-cols-2">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <p className="text-lg font-semibold text-foreground">Message sent</p>
              <p className="mt-2 text-sm text-muted-foreground">We'll get back to you soon.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={1000}
                  rows={5}
                  className="mt-1.5 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send message
              </button>
            </form>
          )}
        </div>

        {/* Emails */}
        <div>
          <h2 className="text-lg font-semibold text-foreground">Direct contacts</h2>
          <div className="mt-4 space-y-3">
            {[
              { label: "General support", email: "support@vivekmind.com" },
              { label: "Vivek", email: "vivek@vivekmind.com" },
              { label: "SchemaWeaver", email: "schemaweaver@vivekmind.com" },
              { label: "FairyForge", email: "fairyforge@vivekmind.com" },
            ].map((c) => (
              <div key={c.email}>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <a href={`mailto:${c.email}`} className="text-sm text-primary hover:underline">{c.email}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
