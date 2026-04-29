import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy — VivekMind" },
      {
        name: "description",
        content: "VivekMind refund policy — details on eligibility, processing, and timelines for refunds.",
      },
      { property: "og:title", content: "Refund Policy — VivekMind" },
      { property: "og:description", content: "VivekMind's official refund policy for subscriptions and services." },
      { property: "og:url", content: "https://vivekmind.com/refund-policy" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://vivekmind.com/refund-policy" }],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Legal</p>
      <h1 className="mt-4 text-3xl font-extrabold text-foreground md:text-4xl">Refund Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <p className="mt-8 text-muted-foreground leading-relaxed">
        At VivekMind, we want you to be completely satisfied with our products. 
        If you are not satisfied with your purchase, we are here to help.
      </p>

      <div className="mt-12 space-y-10">

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">1. Eligibility for Refunds</h2>
          <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              You are eligible for a full refund if you request it within <strong className="text-foreground">7 days</strong> of your initial purchase 
              or the start of a new subscription period.
            </p>
            <p>
              To be eligible for a refund, you must provide proof of purchase and a brief explanation of why the service did not meet your expectations.
            </p>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">2. Processing Refunds</h2>
          <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Once we receive your refund request, we will inspect it and notify you of the status of your refund. 
              If your request is approved, we will initiate a refund to your original method of payment (e.g., credit card, UPI).
            </p>
            <p>
              The time it takes for the credit to appear in your account depends on your card issuer's or bank's policies, 
              typically ranging from 5 to 10 business days.
            </p>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">3. Exclusions</h2>
          <div className="mt-4 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Refunds are not available for:
            </p>
            <ul className="list-none space-y-2">
              {[
                "Subscription renewals where the user failed to cancel before the billing date",
                "Accounts that have been terminated due to a violation of our Terms of Service",
                "Usage-based charges that have already been consumed (e.g., extra AI tokens)",
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
            If you have any questions on how to request a refund, please contact us at:
            <br />
            <strong className="text-foreground">vivekvenom138@gmail.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
