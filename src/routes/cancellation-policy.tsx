import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => ({
    meta: [
      { title: "Cancellation Policy — VivekMind" },
      {
        name: "description",
        content: "VivekMind cancellation policy — information on how to cancel your subscriptions and the effects of cancellation.",
      },
      { property: "og:title", content: "Cancellation Policy — VivekMind" },
      { property: "og:description", content: "VivekMind's official cancellation policy for all products and services." },
      { property: "og:url", content: "https://vivekmind.com/cancellation-policy" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://vivekmind.com/cancellation-policy" }],
  }),
  component: CancellationPolicyPage,
});

function CancellationPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Legal</p>
      <h1 className="mt-4 text-3xl font-extrabold text-foreground md:text-4xl">Cancellation Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <p className="mt-8 text-muted-foreground leading-relaxed">
        We understand that your needs may change. This policy explains how you can cancel your VivekMind subscriptions and what happens after you cancel.
      </p>

      <div className="mt-12 space-y-10">

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">1. How to Cancel</h2>
          <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              You can cancel your subscription at any time through your <strong className="text-foreground">Account Settings</strong> within the specific product (e.g., Schema Weaver, vivekmind cli). 
            </p>
            <p>
              Alternatively, you can request a cancellation by emailing us at <strong className="text-foreground">support@vivekmind.com</strong>.
            </p>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">2. Effective Date of Cancellation</h2>
          <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              If you cancel your subscription, the cancellation will take effect at the <strong className="text-foreground">end of your current billing cycle</strong>. 
            </p>
            <p>
              You will continue to have access to all premium features until the end of the paid period. No partial refunds will be provided for the remaining days in the cycle, except as outlined in our Refund Policy.
            </p>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">3. Effect of Cancellation</h2>
          <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Upon the effective date of cancellation:
            </p>
            <ul className="list-none space-y-2">
              {[
                "Your account will revert to the 'Free' or 'Starter' plan",
                "You may lose access to features or storage limits reserved for premium plans",
                "Any team collaboration features linked to your subscription will be disabled",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 text-primary shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">4. Contact Us</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            If you have any questions regarding your cancellation, please contact us at:
            <br />
            <strong className="text-foreground">support@vivekmind.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
