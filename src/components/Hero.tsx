import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-architecture.jpg";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-20 pt-28">
      {/* Light translucent grey background */}
      <div className="absolute inset-0 bg-muted/60 backdrop-blur-sm" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Pacifique
            <br />
            <span className="gradient-text">Ishimwe</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-3">
            Senior Product Manager | AI, Platforms, Digital Operations
          </p>

          <p className="text-sm md:text-base text-muted-foreground/70 max-w-xl mx-auto mb-8">
            Building and scaling digital products for emerging markets, from AI-powered 
            platforms to renewable energy solutions, with measurable impact.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button size="lg" className="rounded-full gap-2 shadow-lg shadow-primary/20" asChild>
              <a href="#product-work">
                <FileText className="h-4 w-4" />
                View Product Work
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full gap-2 border-white/15 text-white/80 hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-sm" asChild>
              <a href="https://www.linkedin.com/in/pacifique-ishimwe" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full gap-2 border-white/15 text-white/80 hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-sm" asChild>
              <a href="mailto:plishimwe@gmail.com">
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto bg-white/[0.04] backdrop-blur-xl border border-white/10"
        >
          {[
            { value: "2M+", label: "Users Served" },
            { value: "90K", label: "AI Queries (Pilot)" },
            { value: "75%+", label: "User Retention" },
            { value: "5K+", label: "Households Reached" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-display gradient-text">{m.value}</p>
              <p className="text-xs text-white/40 mt-1">{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <a href="#about" className="text-white/20 hover:text-white/50 transition-colors">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
