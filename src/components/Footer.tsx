import { Link } from "@tanstack/react-router";
import logo from "../assets/vivekmind-logo.png";

const PRODUCT_URLS = {
  schemaWeaver: "https://schemaweaver.vivekmind.com",
  sqlEditor: "https://sql-editor.schemaweaver.vivekmind.com",
  dataExplorer: "https://data-explorer.schemaweaver.vivekmind.com",
  swDocs: "https://docs.schemaweaver.vivekmind.com",
  fairyForge: "https://fairyforge.vivekmind.com",
  press: "https://press.vivekmind.com",
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-6">

          {/* Brand — spans 2 cols */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="VivekMind" className="h-8 w-auto brightness-0 invert" />
              <span className="text-lg font-bold">VivekMind</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-60">
              AI systems, tools, and infrastructure for developers and technical teams.
            </p>
          </div>

          {/* Schema Weaver */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-40">Schema Weaver</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={PRODUCT_URLS.schemaWeaver}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity"
              >
                Overview
              </a>
              <a
                href={PRODUCT_URLS.sqlEditor}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                SQL Editor
              </a>
              <a
                href={PRODUCT_URLS.dataExplorer}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                Data Explorer
              </a>
              <a
                href={PRODUCT_URLS.swDocs}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                Docs
              </a>
            </div>
          </div>

          {/* Other Products */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-40">More Products</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href={PRODUCT_URLS.fairyForge}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity"
              >
                FairyForge
              </a>
              <a
                href={PRODUCT_URLS.press}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity"
              >
                VivekMind Press
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-40">Company</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link to="/products" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Products</Link>
              <Link to="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">About</Link>
              <Link to="/support" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Support</Link>
              <Link to="/contact" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-40">Legal</p>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link to="/privacy" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link to="/terms" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Terms of Service</Link>
            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-background/10 pt-8 text-xs opacity-50 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href="mailto:support@vivekmind.com" className="hover:opacity-80">support@vivekmind.com</a>
            <a href="mailto:vivek@vivekmind.com" className="hover:opacity-80">vivek@vivekmind.com</a>
          </div>
          <p>© 2026 VivekMind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
