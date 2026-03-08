import { Linkedin, Mail, ArrowUp } from "lucide-react";
import { CONTACT } from "@/data/contact";
import { openMailto } from "@/lib/openMailto";

const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-display font-semibold">P<span className="gradient-text">.</span>Ishimwe</p>
            <p className="text-sm text-muted-foreground mt-1">{CONTACT.tagline}</p>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => openMailto(CONTACT.mailtoLink)} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[hsl(var(--cta-action)/0.15)] transition-colors">
              <Mail className="h-4 w-4 text-muted-foreground" />
            </button>
            <a href={CONTACT.linkedIn} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Linkedin className="h-4 w-4 text-muted-foreground" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
              <ArrowUp className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {CONTACT.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
