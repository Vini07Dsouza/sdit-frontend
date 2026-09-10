import { useEffect, useState, useRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/siteContent";
import { NavLink } from "./NavLink";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hash = useRouterState({ select: (s) => s.location.hash });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Update background blur and shadow when scrolling
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu whenever the route or section hash changes
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside, { passive: true });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Robust active check for pages, subpages, and homepage anchor sections
  const isActive = (href: string) => {
    if (!mounted) return false;
    // Campus dedicated page and subpages (/campus, /campus/library, /campus/laboratories, etc.)
    if (href === "/campus") {
      return pathname === "/campus" || pathname.startsWith("/campus/");
    }

    // Admissions dedicated page and subpages (/admissions, /admissions/overview, etc.)
    if (href === "/admissions") {
      return pathname === "/admissions" || pathname.startsWith("/admissions/");
    }

    // Training & Placements dedicated page and subpages (/placements, /placements/training, etc.)
    if (href === "/placements") {
      return pathname === "/placements" || pathname.startsWith("/placements/");
    }

    // Departments section or route
    if (href === "/#departments") {
      if (pathname.startsWith("/departments")) return true;
      return pathname === "/" && (hash === "departments" || hash === "#departments");
    }

    // Home page anchor sections (About, Academics, Contact)
    if (href.startsWith("/#")) {
      const targetHash = href.slice(2);
      return pathname === "/" && (hash === targetHash || hash === `#${targetHash}`);
    }

    if (href === "/") {
      return pathname === "/" && !hash;
    }

    return pathname === href;
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-border bg-background/95 shadow-soft backdrop-blur-md"
          : "border-b border-border/40 bg-background/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-18 lg:px-8">
        {/* Brand identity: SD logo badge + SDIT Mangaluru, Karnataka */}
        <Link
          to="/"
          className="flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="SDIT Home — Shree Devi Institute of Technology, Mangaluru"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-xl bg-gradient-navy text-sm font-bold tracking-tight text-navy-foreground shadow-xs shrink-0"
          >
            SD
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-foreground">SDIT</span>
            <span className="block text-[11px] font-medium text-muted-foreground">
              Mangaluru, Karnataka
            </span>
          </span>
        </Link>

        {/* Desktop navigation bar */}
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <NavLink
                key={item.label}
                href={item.href}
                active={active}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-secondary font-semibold text-secondary-foreground shadow-2xs"
                    : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile / Tablet 3-line hamburger menu toggle button */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="grid size-10 place-items-center rounded-xl border border-border bg-card text-foreground shadow-xs transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer with smooth height and opacity transitions */}
      <div
        id="mobile-nav"
        className={`overflow-hidden transition-all duration-250 ease-in-out md:hidden ${
          open ? "max-h-96 border-t border-border opacity-100" : "max-h-0 border-t-0 opacity-0"
        } bg-background/98 backdrop-blur-md`}
      >
        <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ul className="grid gap-1.5">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.label}>
                  <NavLink
                    href={item.href}
                    active={active}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-secondary font-semibold text-secondary-foreground"
                        : "text-foreground hover:bg-secondary/70"
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
