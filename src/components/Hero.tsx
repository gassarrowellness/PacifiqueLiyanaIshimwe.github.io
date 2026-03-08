import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/contact";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-20 pt-24 bg-slate-400">
      {/* Aurora-style copper + slate background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-600 via-slate-200 to-slate-400" />
      {/* Aurora orbs */}
      <div className="absolute top-[-10%] left-[10%] w-[700px] h-[500px] bg-gradient-to-br from-emerald-100/40 via-slate-100/30 to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-[5%] right-[5%] w-[600px] h-[450px] bg-gradient-to-bl from-slate-100/50 via-green-100/20 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-[-5%] left-[30%] w-[500px] h-[400px] bg-gradient-to-tr from-emerald-100/40 via-slate-500/30 to-transparent rounded-full blur-[110px]" />
      <div className="absolute top-[20%] right-[30%] w-[400px] h-[300px] bg-gradient-to-b from-slate-100/50 via-green-100/20 to-transparent rounded-full blur-[80px]" />
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial-[circle] from-green-50/30 via-white/15 to-transparent rounded-full blur-[60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-400/30 bg-white/20 text-sm text-slate-900 mb-6">
            <span className="w-2 h-2 rounded-full bg-slate-700 animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Pacifique Liyana</span>
            <br />
            <span className="text-emerald-600">Ishimwe</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto mb-3">
            {CONTACT.title}
          </p>

          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mb-8">
            Building and scaling digital products for emerging markets, from AI-powered 
            platforms to renewable energy solutions, with measurable impact.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Button size="default" className="rounded-full gap-2 shadow-lg shadow-primary/20" asChild>
              <Link to="/work">
                <FileText className="h-4 w-4" />
                View Product Work
              </Link>
            </Button>
            <Button size="default" className="rounded-full gap-2 shadow-lg shadow-primary/20" asChild>
              <a href={CONTACT.linkedIn} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="default" className="rounded-full gap-2 shadow-lg bg-[hsl(var(--cta-action))] text-white hover:bg-[hsl(var(--cta-action)/0.85)] shadow-[hsl(var(--cta-action)/0.3)]" asChild>
              <a href={CONTACT.mailtoLink} target="_top">
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
          className="rounded-2xl p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto bg-white/30 backdrop-blur-xl border border-slate-200/50 shadow-sm">
          
          {[
          { value: "2M+", label: "Users Served" },
          { value: "6+ yrs", label: "Experience" },
          { value: "10+", label: "Products" }].
          map((m) =>
          <div key={m.label} className="text-center">
              <p className="text-xl md:text-2xl font-bold text-display gradient-text">{m.value}</p>
              <p className="text-xs text-slate-600 mt-1">{m.label}</p>
            </div>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-8">
          
          <a href="#about" className="text-slate-400 hover:text-slate-600 transition-colors">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>);

};

export default Hero;