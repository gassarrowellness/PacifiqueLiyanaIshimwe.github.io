import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Floating accent orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/30 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            Pacifique
            <br />
            <span className="gradient-text">Ishimwe</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-4">
            Product Manager — AI, Platforms, Digital Services
          </p>

          <p className="text-base md:text-lg text-muted-foreground/70 max-w-xl mx-auto mb-12">
            I help teams ship, scale, and monetize digital products for emerging markets.
            From hypothesis to revenue — with measurable impact.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button size="lg" className="rounded-full gap-2" asChild>
              <a href="#portfolio">
                <FileText className="h-4 w-4" />
                View Portfolio
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full gap-2" asChild>
              <a href="https://www.linkedin.com/in/pacifique-ishimwe" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full gap-2" asChild>
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
          className="glass rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "$2.4M", label: "ARR Scaled" },
            { value: "2M+", label: "Users Served" },
            { value: "40%", label: "Activation Lift" },
            { value: "5+", label: "Markets Launched" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-display gradient-text">{m.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
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
          <a href="#about" className="text-muted-foreground/40 hover:text-muted-foreground transition-colors">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
