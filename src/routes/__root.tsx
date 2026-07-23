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
      "name": "Vivekmind",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/vivekmind-logo.png`,
        "width": 200,
        "height": 60,
      },
      "description":
        "Vivekmind is a software company building AI tools, developer tools, and infrastructure products.",
      "email": "vivek@vivekmind.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "support@vivekmind.com",
        "contactType": "customer support",
      },
      "owns": [
        {
          "@type": "SoftwareApplication",
          "@id": `${SITE_URL}/#schema-weaver`,
          "name": "Schema Weaver",
          "url": "https://schemaweaver.vivekmind.com",
          "applicationCategory": "DeveloperApplication",
          "description": "AI-native PostgreSQL workspace for schema management, visual editing, and safe migrations.",
          "brand": { "@id": `${SITE_URL}/#organization` },
          "isPartOf": { "@id": `${SITE_URL}/#organization` },
          "offers": {
            "@type": "Offer",
            "url": "https://schemaweaver.vivekmind.com/pricing",
            "price": "0",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "SoftwareApplication",
          "@id": `${SITE_URL}/#vivekmind-cli`,
          "name": "Vivekmind CLI",
          "alternateName": "vivekmind",
          "url": "https://code.vivekmind.com/",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": ["macOS", "Linux", "Windows"],
          "description": "Open-source AI coding agent. Connect any model from any provider, including Claude, GPT, Gemini, all native AWS models from AWS Bedrock, and more.",
          "brand": { "@id": `${SITE_URL}/#organization` },
          "isPartOf": { "@id": `${SITE_URL}/#organization` },
        },
        {
          "@type": "WebApplication",
          "@id": `${SITE_URL}/#vivekmind-press`,
          "name": "Vivekmind Press",
          "url": "https://press.vivekmind.com",
          "applicationCategory": "BusinessApplication",
          "description": "AI-assisted publishing platform for writing, managing, and distributing technical content.",
          "brand": { "@id": `${SITE_URL}/#organization` },
          "isPartOf": { "@id": `${SITE_URL}/#organization` },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Vivekmind",
      "description":
        "Vivekmind is a software company building AI tools, developer tools, and infrastructure. Home of Schema Weaver, Vivekmind CLI, and Vivekmind Press.",
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${SITE_URL}/blog?q={search_term_string}`,
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
      { title: "Vivekmind — AI Tools & Developer Infrastructure" },
      {
        name: "description",
        content:
          "Vivekmind builds AI tools and developer infrastructure. Home of Schema Weaver for PostgreSQL, Vivekmind CLI for coding, and Vivekmind Press.",
      },
      { name: "author", content: "Vivekmind" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#0f172a" },
      { name: "msvalidate.01", content: "95BE2DE5A8DF2D7AAF00AEA9A8E300F8" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Vivekmind" },
      { property: "og:title", content: "Vivekmind — AI Tools & Developer Infrastructure" },
      {
        property: "og:description",
        content:
          "Vivekmind builds AI tools and developer infrastructure. Discover Schema Weaver, Vivekmind CLI, and Vivekmind Press for technical teams.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/vivekmind-logo.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@vivekmind" },
      { name: "twitter:title", content: "Vivekmind — AI Tools & Developer Infrastructure" },
      {
        name: "twitter:description",
        content:
          "Vivekmind builds AI tools and developer infrastructure. Discover Schema Weaver, Vivekmind CLI, and Vivekmind Press for technical teams.",
      },
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SR62FMN34N" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SR62FMN34N');
            `,
          }}
        />
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
