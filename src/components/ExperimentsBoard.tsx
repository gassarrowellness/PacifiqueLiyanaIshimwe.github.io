import { useState, useRef } from "react";
import { useScrollExpand } from "@/hooks/use-scroll-expand";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FlaskConical, ChevronDown } from "lucide-react";

const experiments = [
  {
    title: "Offline Gen-AI: USSD to Voice Platform",
    hypothesis: "AI delivered via USSD and voice (IVR) can provide personalized support at scale for users without internet access, creating a sustainable service model.",
    test: "Phase 1: Controlled USSD pilot in Zambia with rural communities, measuring engagement and query completion. Phase 2: Launched 'Ask Viamo Anything', the world's first offline Gen-AI assistant via voice, generating ~90,000 user queries.",
    result: "Near-zero drop-off on USSD. 2M+ users served via IVR, 75%+ retention rates, 50,000+ users with improved health access. Revenue model validated for sustainable growth.",
    learning: "USSD and voice are viable AI delivery channels in low-connectivity environments. Voice-first services achieve high engagement where literacy and connectivity are barriers. B2B partnerships create viable monetization.",
    status: "validated" as const,
  },
  {
    title: "Agent Network for Digital Services",
    hypothesis: "Field agents equipped with digital tools could accelerate adoption of digital services in underserved communities.",
    test: "Deployed agent network pilot across multiple districts, measuring digital service adoption rates and agent productivity.",
    result: "Significant increase in digital service adoption in pilot areas. Agents became trusted distribution channels for digital products.",
    learning: "Human-assisted distribution is critical for digital products in emerging markets. Trust and local presence drive adoption more than technology alone.",
    status: "validated" as const,
  },
  {
    title: "Pay-As-You-Go Solar Retention",
    hypothesis: "Targeted retention interventions and payment flexibility could reduce churn in pay-as-you-go solar customer base.",
    test: "Implemented churn prediction models and tested payment plan variations across customer segments.",
    result: "Reduced monthly churn by measurable percentage. Identified key predictors of customer disengagement.",
    learning: "Payment flexibility is as important as product quality in emerging market subscription models. Proactive intervention outperforms reactive retention.",
    status: "validated" as const,
  },
];

const statusColors = {
  validated: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  in_progress: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  planned: "bg-primary/10 text-primary border-primary/20",
};

const ExperimentsBoard = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const scrollCallbackRef = useScrollExpand(expanded, setExpanded);

  return (
    <section className="py-16 md:py-20 bg-background" id="experiments">
      <div className="max-w-6xl mx-auto px-6" ref={(el) => { (ref as any).current = el; scrollCallbackRef(el); }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Experiments</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            Experimentation <span className="gradient-text">Board</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            Real experiments run across products, each with a clear hypothesis, test, result, and learning.
          </p>

          <div className="grid gap-4">
            {experiments.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className={`w-full text-left glass rounded-2xl p-6 transition-all ${
                    expanded === i ? "ring-1 ring-primary/20" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <FlaskConical className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-display font-semibold text-foreground">{exp.title}</h3>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[exp.status]}`}>
                        {exp.status === "validated" ? "Validated" : exp.status === "in_progress" ? "In Progress" : "Planned"}
                      </span>
                      <motion.div animate={{ rotate: expanded === i ? 180 : 0 }}>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </motion.div>
                    </div>
                  </div>
                </button>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-2 gap-4 p-4 pt-2">
                        {[
                          { label: "Hypothesis", value: exp.hypothesis },
                          { label: "Test", value: exp.test },
                          { label: "Result", value: exp.result },
                          { label: "Learning", value: exp.learning },
                        ].map((item) => (
                          <div key={item.label} className="bg-secondary/50 rounded-xl p-5">
                            <p className="text-label text-primary mb-2">{item.label}</p>
                            <p className="text-sm text-foreground leading-relaxed">{item.value}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Print-only: all experiments expanded */}
          <div className="print-only mt-8 space-y-6">
            {experiments.map((exp, i) => (
              <div key={i} className="border border-border rounded-xl p-6 print-no-break">
                <div className="flex items-center gap-3 mb-4">
                  <FlaskConical className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-bold">{exp.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[exp.status]}`}>
                    {exp.status === "validated" ? "Validated" : exp.status === "in_progress" ? "In Progress" : "Planned"}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Hypothesis", value: exp.hypothesis },
                    { label: "Test", value: exp.test },
                    { label: "Result", value: exp.result },
                    { label: "Learning", value: exp.learning },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-lg bg-muted/50">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{item.label}</p>
                      <p className="text-sm leading-relaxed">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperimentsBoard;
