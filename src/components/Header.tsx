import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          VivekMind
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLinks />
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-accent md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 12h16M4 6h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <NavLinks onClick={() => setMobileOpen(false)} />
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
    { to: "/contact" as const, label: "Contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={onClick}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          activeProps={{ className: "text-sm text-foreground font-medium" }}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
