import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — VivekMind" },
      {
        name: "description",
        content: "VivekMind Terms of Service — rules and guidelines for using Schema Weaver, FairyForge, VivekMind Press, and all VivekMind products.",
      },
      { property: "og:title", content: "Terms of Service — VivekMind" },
      { property: "og:description", content: "Rules and guidelines for using VivekMind products and services." },
      { property: "og:url", content: "https://vivekmind.com/terms" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://vivekmind.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Legal</p>
      <h1 className="mt-4 text-3xl font-extrabold text-foreground md:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

      <p className="mt-8 text-muted-foreground leading-relaxed">
        These Terms of Service ("Terms") govern your access to and use of VivekMind products and services, including Schema Weaver, FairyForge, VivekMind Press, and the vivekmind.com website ("Services"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.
      </p>

      <div className="mt-12 space-y-10">

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">1. Eligibility</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            You must be at least 13 years old to use our Services. By using the Services, you represent that you are at least 13 years old and have the legal capacity to agree to these Terms. If you are using the Services on behalf of an organisation, you represent that you have authority to bind that organisation.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">2. Accounts</h2>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>You are responsible for maintaining the security of your account credentials. You must not share your account with others or allow unauthorised access to your account.</p>
            <p>You must notify us immediately at <a href="mailto:support@vivekmind.com" className="text-primary hover:underline">support@vivekmind.com</a> if you suspect unauthorised access to your account.</p>
            <p>We reserve the right to suspend or terminate accounts that violate these Terms or are engaged in abusive, fraudulent, or illegal behaviour.</p>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">3. Acceptable use</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed mb-3">You agree not to use the Services to:</p>
          <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            {[
              "Violate any applicable law, regulation, or third-party rights",
              "Transmit malware, viruses, or any code designed to harm systems",
              "Attempt to gain unauthorised access to any system, service, or account",
              "Conduct denial-of-service attacks or otherwise disrupt the availability of the Services",
              "Scrape, crawl, or extract data from the Services in an automated manner without permission",
              "Reverse-engineer, decompile, or disassemble any portion of the Services",
              "Use the Services for purposes that violate third-party database owner rights or terms",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 text-primary shrink-0">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">4. Your data and content</h2>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>You retain ownership of all data, schemas, workflows, and content you create or upload to the Services. By using the Services, you grant VivekMind a limited licence to process your data solely to provide the Services to you.</p>
            <p>You are responsible for ensuring you have the right to use any data, schemas, or database connections you connect to the Services. You must not connect databases or share data you do not have permission to access.</p>
          </div>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">5. Service availability</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            VivekMind strives to provide reliable, high-availability services but does not guarantee uninterrupted access. The Services may be temporarily unavailable due to maintenance, updates, or factors outside our control (including third-party infrastructure outages). We will endeavour to communicate planned downtime in advance.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">6. Intellectual property</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            All VivekMind products, technology, trademarks, logos, and Service content are the intellectual property of VivekMind. Nothing in these Terms grants you a right to use VivekMind trademarks, logos, or brand assets without our express written permission.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">7. Disclaimers</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. VIVEKMIND DOES NOT WARRANT THAT THE SERVICES WILL BE ERROR-FREE OR THAT DEFECTS WILL BE CORRECTED.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">8. Limitation of liability</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, VIVEKMIND SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOSS OF DATA, PROFITS, OR BUSINESS — ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">9. Modifications to the Services and Terms</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            We may modify the Services, add or remove features, or change pricing at any time. We may also update these Terms. When we make material changes, we will update the "Last updated" date and notify users by email where appropriate. Continued use of the Services after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">10. Governing law</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            These Terms are governed by applicable law. Any disputes arising under these Terms will be resolved through good-faith negotiation in the first instance. If unresolved, disputes shall be subject to binding arbitration.
          </p>
        </section>

        <section className="border-t border-border pt-8">
          <h2 className="text-base font-bold text-foreground">11. Contact</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            For questions about these Terms, contact us at{" "}
            <a href="mailto:support@vivekmind.com" className="text-primary hover:underline font-medium">
              support@vivekmind.com
            </a>.
            {" "}You can also review our{" "}
            <Link to="/privacy" className="text-primary hover:underline font-medium">
              Privacy Policy
            </Link>.
          </p>
        </section>

      </div>
    </div>
  );
}
