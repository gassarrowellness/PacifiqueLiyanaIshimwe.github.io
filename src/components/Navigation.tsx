import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CONTACT } from "@/data/contact";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const homeLinks = [
    { label: "About", href: "#about", isRoute: false },
    { label: "Work", href: "/work", isRoute: true },
    { label: "Process", href: "#design-walkthrough", isRoute: false },
    { label: "Timeline", href: "#timeline", isRoute: false },
    { label: "Contact", href: "#contact", isRoute: false },
  ];

  const workLinks = [
    { label: "Home", href: "/", isRoute: true },
    { label: "Case Studies", href: "#case-studies", isRoute: false },
    { label: "Strategy", href: "#strategy", isRoute: false },
    { label: "Experiments", href: "#experiments", isRoute: false },
  ];

  const sectionLinks = isHome ? homeLinks : workLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/60 backdrop-blur-xl border-b border-white/30 dark:border-white/10 shadow-sm" : "bg-background/30 backdrop-blur-md border-b border-white/20"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <a href="#" className={`text-display text-lg font-semibold shrink-0 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
          P<span className="gradient-text">.</span>Ishimwe
        </a>

        <div className="hidden md:flex items-center gap-2 md:gap-5 lg:gap-8 flex-wrap justify-center">
          {sectionLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[11px] md:text-sm font-medium transition-colors ${location.pathname === link.href ? (scrolled ? "text-primary hover:text-primary/80" : "text-white hover:text-white/80") : (scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white")}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] md:text-sm transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <Button size="sm" className="rounded-full hidden sm:inline-flex" asChild>
            <a href={CONTACT.resumePath} target="_blank">Resume</a>
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                {sectionLinks.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-base font-medium transition-colors ${location.pathname === link.href ? "text-primary hover:text-primary/80" : "text-foreground hover:text-primary"}`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-base text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <Button size="sm" className="rounded-full w-fit" asChild>
                  <a href={CONTACT.resumePath} target="_blank">Resume</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
