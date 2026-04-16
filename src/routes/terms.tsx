import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — VivekMind" },
      { name: "description", content: "VivekMind terms of service — rules and guidelines for using our products and services." },
      { property: "og:title", content: "Terms of Service — VivekMind" },
      { property: "og:description", content: "Rules and guidelines for using VivekMind products and services." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-sm text-primary">Legal</p>
      <h1 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <div className="mt-10 space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-foreground">Acceptance of terms</h2>
          <p className="mt-2">
            By accessing or using VivekMind services, you agree to be bound by these Terms of
            Service. If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Responsible use</h2>
          <p className="mt-2">
            Users agree to use VivekMind services responsibly and in accordance with applicable laws.
            Any misuse or abuse of our systems is strictly prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Service availability</h2>
          <p className="mt-2">
            VivekMind strives to provide reliable services but does not guarantee uninterrupted
            access. Services may be temporarily unavailable for maintenance or updates.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Limitation of liability</h2>
          <p className="mt-2">
            VivekMind shall not be liable for any indirect, incidental, or consequential damages
            arising from the use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-foreground">Modifications</h2>
          <p className="mt-2">
            VivekMind retains the right to modify services and these terms at any time. Continued
            use of services after modifications constitutes acceptance of the updated terms.
          </p>
        </section>
      </div>
    </div>
  );
}
