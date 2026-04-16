import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — VivekMind" },
      {
        name: "description",
        content: "VivekMind privacy policy — how we collect, use, protect, and manage your data across Schema Weaver, FairyForge, and VivekMind Press.",
      },
      { property: "og:title", content: "Privacy Policy — VivekMind" },
      { property: "og:description", content: "How VivekMind collects, uses, and protects your data across all its products." },
      { property: "og:url", content: "https://vivekmind.com/privacy" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "https://vivekmind.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Legal</p>
      <h1 className="mt-4 text-3xl font-extrabold text-foreground md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <p className="mt-8 text-muted-foreground leading-relaxed">
        VivekMind ("we", "our", or "us") operates the vivekmind.com website and the following products: Schema Weaver, FairyForge, and VivekMind Press. This Privacy Policy explains what information we collect, how we use it, and the choices you have.
      </p>

      <div className="mt-12 space-y-10">

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">1. Information we collect</h2>
          <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Account information.</strong> When you sign up for any VivekMind product, we collect your name, email address, and a password hash. We never store plaintext passwords.
            </p>
            <p>
              <strong className="text-foreground">Usage data.</strong> We collect information about how you use our products — pages visited, features used, and actions taken — to improve product quality and user experience.
            </p>
            <p>
              <strong className="text-foreground">Database connection metadata.</strong> For Schema Weaver, we store connection credentials (encrypted at rest with AES-256) and schema snapshots. We do not access or log the contents of your database except to perform operations you explicitly request.
            </p>
            <p>
              <strong className="text-foreground">Contact form submissions.</strong> When you contact us via our website, we collect the name, email address, and message you provide.
            </p>
            <p>
              <strong className="text-foreground">Technical data.</strong> Browser type, IP address, device type, and crash/error reports, collected automatically for security and reliability purposes.
            </p>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">2. How we use your information</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed list-none">
            {[
              "Provide, maintain, and improve our products and services",
              "Respond to your support requests and communications",
              "Send product updates, release notes, and service announcements (you can opt out at any time)",
              "Monitor for security threats, abuse, and unauthorized access",
              "Comply with legal obligations",
              "Understand aggregate usage patterns to prioritise product development",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 text-primary shrink-0">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            We do not sell, rent, or trade your personal data to third parties.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">3. AI features and data processing</h2>
          <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Schema Weaver's Resona AI assistant processes your schema and query data to generate suggestions and responses. Queries and schema content sent to the AI are processed by our infrastructure and, where applicable, by third-party AI providers (Anthropic, OpenAI) under their own data processing agreements.
            </p>
            <p>
              Raw row data from your database is never stored by our AI systems — it is processed in memory only for the duration of your session and is not used for model training.
            </p>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">4. Cookies and tracking</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            We use essential cookies required for authentication, session management, and CSRF protection. We may also use analytics cookies to understand aggregate usage patterns. You can manage cookie preferences through your browser settings. Disabling essential cookies will affect product functionality.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">5. Data retention</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where we are required by law to retain it for longer. Schema snapshots and migration history associated with your account are deleted along with your account.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">6. Data security</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            We implement industry-standard security measures including TLS encryption in transit, AES-256 encryption at rest for sensitive data (database credentials, connection strings), and role-based access controls. We conduct periodic security reviews and promptly address reported vulnerabilities.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">7. Third-party services</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Our products integrate with third-party services including Supabase (database hosting), Cloudflare (CDN and edge infrastructure), Anthropic and OpenAI (AI capabilities). Each service processes data under its own privacy policy. We select third-party providers with appropriate data protection standards.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">8. Your rights</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            You have the right to access, correct, export, or delete your personal data at any time. To exercise these rights or if you have a question about your data, contact us at{" "}
            <a href="mailto:support@vivekmind.com" className="text-primary hover:underline font-medium">
              support@vivekmind.com
            </a>
            . We will respond within 30 days.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">9. Changes to this policy</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date above and, for material changes, notify users by email. Continued use of our services after a policy update constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">10. Contact</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            For privacy-related questions, data requests, or concerns, contact us at{" "}
            <a href="mailto:support@vivekmind.com" className="text-primary hover:underline font-medium">
              support@vivekmind.com
            </a>
            {" "}or write to: VivekMind, support@vivekmind.com.
          </p>
        </section>

      </div>
    </div>
  );
}
