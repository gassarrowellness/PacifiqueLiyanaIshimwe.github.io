import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/contact";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-20 pt-24 bg-slate-400">
      {/* Aurora-style silver metallic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-600 via-gray-200 to-slate-400" />
      {/* Aurora orbs */}
      <div className="absolute top-[-10%] left-[10%] w-[700px] h-[500px] bg-gradient-to-br from-white/40 via-slate-100/30 to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-[5%] right-[5%] w-[600px] h-[450px] bg-gradient-to-bl from-slate-100/50 via-white/20 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-[-5%] left-[30%] w-[500px] h-[400px] bg-gradient-to-tr from-white/40 via-gray-500/30 to-transparent rounded-full blur-[110px]" />
      <div className="absolute top-[20%] right-[30%] w-[400px] h-[300px] bg-gradient-to-b from-slate-100/50 via-white/20 to-transparent rounded-full blur-[80px]" />
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial-[circle] from-white/30 via-white/15 to-transparent rounded-full blur-[60px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-400/30 bg-white/20 text-sm text-gray-900 mb-6">
            <span className="w-2 h-2 rounded-full bg-gray-700 animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Pacifique
            <br />
            <span className="gradient-text">Ishimwe</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto mb-3">
            {CONTACT.title}
          </p>

          <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto mb-8">
            Building and scaling digital products for emerging markets, from AI-powered 
            platforms to renewable energy solutions, with measurable impact.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Button size="default" className="rounded-full gap-2 shadow-lg shadow-primary/20" asChild>
              <a href="#product-work">
                <FileText className="h-4 w-4" />
                View Product Work
              </a>
            </Button>
            <Button size="default" className="rounded-full gap-2 shadow-lg shadow-primary/20" asChild>
              <a href={CONTACT.linkedIn} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="default" className="rounded-full gap-2 shadow-lg shadow-primary/20" asChild>
              <a href={CONTACT.mailtoLink} target="_blank" rel="noopener noreferrer">
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
          className="rounded-2xl p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 shadow-sm"
        >
          {[
            { value: "2M+", label: "Users Served" },
            { value: "90K", label: "AI Queries (Pilot)" },
            { value: "75%+", label: "User Retention" },
            { value: "5K+", label: "Households Reached" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-xl md:text-2xl font-bold text-display gradient-text">{m.value}</p>
              <p className="text-xs text-gray-400 mt-1">{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-8"
        >
          <a href="#about" className="text-white/30 hover:text-white/60 transition-colors">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
