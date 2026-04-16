import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../assets/vivekmind-logo.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — VivekMind" },
      { name: "description", content: "VivekMind is pioneering AI systems, infrastructure, and intelligent solutions that shape the future of technology." },
      { property: "og:title", content: "About — VivekMind" },
      { property: "og:description", content: "Pioneering AI systems and infrastructure that shape the future of technology." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
            <h1 className="mt-4 text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl">
              We build what's next
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              VivekMind is an AI-first technology company building systems, infrastructure, and intelligent solutions that define how the world interacts with data and intelligence.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={logo} alt="VivekMind" className="h-40 w-auto md:h-52" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-2xl bg-card p-10 border border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Mission</p>
              <h2 className="mt-4 text-2xl font-extrabold text-foreground">Simplify intelligence</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Make AI systems and data infrastructure intuitive, reliable, and accessible — so developers and businesses can focus on building what matters.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-10 border border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Vision</p>
              <h2 className="mt-4 text-2xl font-extrabold text-foreground">Intelligence everywhere</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A world where scalable, structured intelligent systems are the foundation of every industry — from healthcare to finance to creative tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Focus On</p>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground md:text-4xl">Three pillars of innovation</h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "🛠️",
                title: "Developer Tools",
                desc: "SDKs, APIs, and platforms that turn complex AI and data challenges into elegant developer experiences.",
              },
              {
                icon: "🧠",
                title: "AI Infrastructure",
                desc: "Foundational systems for training, deploying, and scaling AI models with enterprise-grade reliability.",
              },
              {
                icon: "⚙️",
                title: "Workflow Systems",
                desc: "Intelligent orchestration platforms that automate, optimize, and scale business operations.",
              },
            ].map((area) => (
              <div key={area.title} className="rounded-2xl border border-border bg-card p-9 text-center">
                <span className="text-4xl">{area.icon}</span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{area.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">Join our journey</h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
            We're always looking for talented people and ambitious partners who share our vision.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-background/90"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
