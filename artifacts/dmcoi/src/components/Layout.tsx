import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { FloatingCTA } from "./FloatingCTA";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header
        className={`sticky top-0 z-50 w-full border-b border-border transition-all duration-300 ${
          scrolled
            ? "bg-background/98 backdrop-blur shadow-[0_2px_30px_rgba(0,0,0,0.5)]"
            : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-10">
            <span className="font-display text-3xl tracking-wider">
              DMCO<span className="text-primary">I</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-primary transition-all duration-300 ${
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-all focus-visible:outline-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-5 py-2 hover:scale-105 transform duration-200 shadow-[0_0_20px_rgba(0,102,255,0.3)]"
            >
              Start $49 Trial
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md border border-border bg-card text-foreground hover:bg-accent transition-colors z-10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-background border-l border-border flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="font-display text-2xl">DMCO<span className="text-primary">I</span></span>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-1 flex-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-3xl py-3 border-b border-border/40 transition-colors ${
                  location === link.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-border flex flex-col gap-3">
            <Link
              href="/pricing"
              className="w-full text-center py-4 rounded-md bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              Start $49 Trial
            </Link>
            <a
              href="https://calendar.app.google/N9bU7euuWj3RUn5y9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-md border border-border font-bold text-sm hover:border-primary/50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Book Strategy Call
            </a>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {children}
      </main>

      <FloatingCTA />

      <footer className="border-t border-border bg-card py-12 md:py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-sm">
            <Link href="/" className="font-display text-4xl tracking-wider inline-block">
              DMCO<span className="text-primary">I</span>
            </Link>
            <p className="text-muted-foreground font-display text-xl tracking-wide">WE SCALE ATTENTION.</p>
            <p className="text-muted-foreground text-sm">
              DMCOI helps businesses generate more leads, dominate attention and grow faster.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.instagram.com/dmcoi.agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/dmcoi/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-sm uppercase tracking-widest text-primary">Company</h3>
              <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Services</Link>
              <Link href="/work" className="text-muted-foreground hover:text-primary text-sm transition-colors">Work</Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About</Link>
              <Link href="/team" className="text-muted-foreground hover:text-primary text-sm transition-colors">Team</Link>
              <Link href="/careers" className="text-muted-foreground hover:text-primary text-sm transition-colors">Careers</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-sm uppercase tracking-widest text-primary">Connect</h3>
              <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link>
              <a href="https://www.linkedin.com/company/dmcoi/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/dmcoi.agency/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors">Instagram</a>
              <a href="https://calendar.app.google/N9bU7euuWj3RUn5y9" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors">Book a Call</a>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DMCOI. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
