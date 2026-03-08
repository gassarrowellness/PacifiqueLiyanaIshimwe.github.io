import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Process", href: "#product-work" },
  { label: "Portfolio", href: "#prototypes" },
  { label: "Strategy", href: "#strategy" },
  { label: "Experiments", href: "#experiments" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <a href="#" className={`text-display text-lg font-semibold shrink-0 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
          P<span className="gradient-text">.</span>Ishimwe
        </a>

        <div className="flex items-center gap-2 md:gap-5 lg:gap-8 flex-wrap justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[11px] md:text-sm transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <Button size="sm" className="rounded-full hidden sm:inline-flex" asChild>
            <a href="/Pacifique_Liyana_Ishimwe_Resume.pdf" target="_blank">Resume</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
