import React from "react";
import { Link, useLocation } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-3xl tracking-wider">
              DMCO<span className="text-primary">I</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-muted-foreground"}`}>Home</Link>
            <Link href="/services" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/services" ? "text-primary" : "text-muted-foreground"}`}>Services</Link>
            <Link href="/work" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/work" ? "text-primary" : "text-muted-foreground"}`}>Work</Link>
            <Link href="/pricing" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/pricing" ? "text-primary" : "text-muted-foreground"}`}>Pricing</Link>
            <Link href="/about" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/about" ? "text-primary" : "text-muted-foreground"}`}>About</Link>
            <Link href="/contact" className={`text-sm font-medium transition-colors hover:text-primary ${location === "/contact" ? "text-primary" : "text-muted-foreground"}`}>Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/pricing" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 hover:scale-105 transform duration-200">
              Start $49 Trial
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border bg-surface py-12 md:py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-sm">
            <Link href="/" className="font-display text-4xl tracking-wider inline-block">
              DMCO<span className="text-primary">I</span>
            </Link>
            <p className="text-muted-foreground font-display text-xl tracking-wide">WE SCALE ATTENTION.</p>
            <p className="text-muted-foreground text-sm">
              DMCOI helps businesses generate more leads, dominate attention and grow faster.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold">Company</h3>
              <Link href="/services" className="text-muted-foreground hover:text-primary text-sm transition-colors">Services</Link>
              <Link href="/work" className="text-muted-foreground hover:text-primary text-sm transition-colors">Work</Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About</Link>
              <Link href="/team" className="text-muted-foreground hover:text-primary text-sm transition-colors">Team</Link>
              <Link href="/careers" className="text-muted-foreground hover:text-primary text-sm transition-colors">Careers</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="font-bold">Connect</h3>
              <Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</Link>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/dmcoi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} DMCOI. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}