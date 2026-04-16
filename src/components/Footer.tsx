import { Link } from "@tanstack/react-router";
import logo from "../assets/vivekmind-logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="VivekMind" className="h-8 w-auto brightness-0 invert" />
              <span className="text-lg font-bold">VivekMind</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed opacity-60">
              Pioneering AI systems, infrastructure, and intelligent solutions that power the next generation of technology.
            </p>
          </div>

          {/* Navigation */}
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
