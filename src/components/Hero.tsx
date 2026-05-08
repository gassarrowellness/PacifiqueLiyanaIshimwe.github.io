import { motion } from "framer-motion";
import { ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/contact";
import { Link } from "react-router-dom";
import portrait from "@/assets/pacifique-portrait.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 bg-background">
      {/* Soft aurora background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-[-10%] left-[5%] w-[600px] h-[500px] bg-emerald-200/30 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-10%] right-[5%] w-[600px] h-[500px] bg-emerald-100/40 rounded-full blur-[140px]" />
      <div className="absolute inset-0 grid-bg opacity-[0.15]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-button text-xs font-medium text-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="uppercase tracking-wider">Available for new opportunities</span>
            </div>

            <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              <span className="text-foreground">Pacifique Liyana</span>
              <br />
              <span className="text-emerald-600 italic">Ishimwe</span>
            </h1>

            <div className="border-l-4 border-emerald-600 pl-4 py-1 mb-5 max-w-md mx-auto md:mx-0">
              <p className="text-lg md:text-xl font-semibold text-foreground leading-snug">
                {CONTACT.title}
              </p>
            </div>

            <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto md:mx-0 mb-8 leading-relaxed">
              Building and scaling digital products for emerging markets,
              from AI-powered platforms to renewable energy solutions,
              with measurable impact.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <Button size="lg" className="rounded-full gap-2 shadow-lg shadow-foreground/10" asChild>
                <Link to="/work">
                  <ArrowRight className="h-4 w-4" />
                  View Product Work
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full gap-2 glass-button" asChild>
                <a href={CONTACT.linkedIn} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right column - portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Decorative emerald accent */}
              <div className="absolute -right-3 top-12 bottom-12 w-px bg-emerald-600/40 hidden md:block" />
              <div className="absolute -right-3 top-12 w-3 h-3 rounded-full border border-emerald-600/60 hidden md:block" />
              <div className="absolute -right-3 bottom-12 w-3 h-3 rounded-full border border-emerald-600/60 hidden md:block" />

              <div className="relative rounded-3xl overflow-hidden glass shadow-2xl shadow-foreground/10 aspect-[4/5]">
                <img
                  src={portrait}
                  alt="Pacifique Liyana Ishimwe, Senior Product Manager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 md:mt-16 rounded-2xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto glass"
        >
          {[
            { value: "2M+", label: "Users Served", desc: "High-growth impact across diverse digital ecosystems." },
            { value: "6+ yrs", label: "Experience", desc: "Strategic leadership in AI and product scaling." },
            { value: "10+", label: "Products", desc: "End-to-end delivery of complex digital solutions." },
          ].map((m) => (
            <div key={m.label} className="text-left">
              <p className="text-3xl md:text-4xl font-bold text-display text-foreground mb-1">{m.value}</p>
              <p className="text-label text-foreground mb-2">{m.label}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
