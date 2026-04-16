import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left */}
          <div>
            <p className="text-base font-semibold text-foreground">VivekMind</p>
            <p className="mt-2 text-sm text-muted-foreground">
              AI systems for structured data and intelligent workflows
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-foreground">Navigation</p>
            <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground">Products</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
            <Link to="/support" className="text-sm text-muted-foreground hover:text-foreground">Support</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-foreground">Legal</p>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="mailto:support@vivekmind.com" className="hover:text-foreground">support@vivekmind.com</a>
            <a href="mailto:vivek@vivekmind.com" className="hover:text-foreground">vivek@vivekmind.com</a>
          </div>
          <p>© 2026 VivekMind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
