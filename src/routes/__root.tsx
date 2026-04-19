import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import appCss from "../styles.css?url";

const SITE_URL = "https://vivekmind.com";

const globalStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "VivekMind",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/vivekmind-logo.png`,
        "width": 200,
        "height": 60,
      },
      "description":
        "VivekMind designs and builds AI-powered products for developers, data teams, and technical organisations — from database management (Schema Weaver) and workflow orchestration (FairyForge) to content publishing (VivekMind Press).",
      "email": "vivek@vivekmind.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "support@vivekmind.com",
        "contactType": "customer support",
      },
      "owns": [
        {
          "@type": "SoftwareApplication",
          "name": "Schema Weaver",
          "url": "https://schemaweaver.vivekmind.com",
          "applicationCategory": "DeveloperApplication",
          "description": "PostgreSQL schema management platform with visual SQL Editor, auto-generated ER diagrams, migration engine with drift detection, and AI-powered Data Explorer.",
        },
        {
          "@type": "SoftwareApplication",
          "name": "FairyForge",
          "url": "https://fairyforge.vivekmind.com",
          "applicationCategory": "BusinessApplication",
          "description": "Workflow intelligence engine for building and orchestrating AI-powered automations that react to events, process data, and scale on demand.",
        },
        {
          "@type": "WebApplication",
          "name": "VivekMind Press",
          "url": "https://press.vivekmind.com",
          "applicationCategory": "BusinessApplication",
          "description": "AI-assisted publishing platform for writing, managing, and distributing technical content — documentation sites, newsletters, and long-form articles.",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "VivekMind",
      "description":
        "VivekMind designs and builds AI-powered products: Schema Weaver (PostgreSQL tools), FairyForge (workflow automation), and VivekMind Press (content publishing).",
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${SITE_URL}/products?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VivekMind — AI Systems, Tools & Infrastructure" },
      {
        name: "description",
        content:
          "VivekMind designs and builds AI-powered products for developers and technical teams — Schema Weaver (PostgreSQL schema management), FairyForge (workflow automation engine), and VivekMind Press (AI publishing platform).",
      },
      { name: "author", content: "VivekMind" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#0f172a" },
      { name: "msvalidate.01", content: "95BE2DE5A8DF2D7AAF00AEA9A8E300F8" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "VivekMind" },
      { property: "og:image", content: `${SITE_URL}/vivekmind-logo.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@vivekmind" },
      { name: "twitter:image", content: `${SITE_URL}/vivekmind-logo.png` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalStructuredData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
