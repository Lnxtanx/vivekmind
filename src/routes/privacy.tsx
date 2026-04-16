import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — VivekMind" },
      { name: "description", content: "VivekMind privacy policy — how we collect, use, and protect your data." },
      { property: "og:title", content: "Privacy Policy — VivekMind" },
      { property: "og:description", content: "How VivekMind collects, uses, and protects your data." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-sm text-primary">Legal</p>
      <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <div className="mt-10 space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-foreground">What data we collect</h2>
          <p className="mt-2">
            We collect basic user data including name, email address, and contact information provided
            through our website and services. We may also collect usage data to improve our products.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">How data is used</h2>
          <p className="mt-2">
            Your data is used to communicate with you, provide and improve our services, and ensure
            a better user experience. We do not sell your personal data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Cookies</h2>
          <p className="mt-2">
            We may use cookies and similar technologies to enhance your experience and gather
            analytics data. You can manage cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Data protection</h2>
          <p className="mt-2">
            We implement appropriate technical and organizational measures to protect your personal
            data against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            For privacy-related inquiries, contact us at{" "}
            <a href="mailto:support@vivekmind.com" className="text-primary hover:underline">
              support@vivekmind.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
