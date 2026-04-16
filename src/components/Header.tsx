import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "../assets/vivekmind-logo.png";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="VivekMind Logo" className="h-9 w-auto" />
          <span className="text-xl font-bold tracking-tight text-foreground">VivekMind</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLinks />
          <Link
            to="/contact"
            className="ml-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Contact Us
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12h16M4 6h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-6 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            <NavLinks onClick={() => setMobileOpen(false)} />
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  const links = [
    { to: "/products" as const, label: "Products" },
    { to: "/about" as const, label: "About" },
    { to: "/support" as const, label: "Support" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={onClick}
          className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          activeProps={{ className: "rounded-lg px-4 py-2 text-sm font-semibold text-foreground bg-muted" }}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
