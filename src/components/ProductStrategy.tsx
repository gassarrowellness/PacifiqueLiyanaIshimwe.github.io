import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Lightbulb, FlaskConical, Rocket, RefreshCcw, TrendingUp } from "lucide-react";

const stages = [
  {
    icon: Lightbulb,
    title: "Idea",
    color: "bg-primary/10 text-primary",
    description: "Identify opportunities through user research, market analysis, and stakeholder input. Define the problem worth solving and the hypothesis behind the solution.",
    actions: ["Problem framing", "User need validation", "Market sizing", "Hypothesis formation"],
  },
  {
    icon: FlaskConical,
    title: "Validation",
    color: "bg-primary/15 text-primary",
    description: "Test assumptions quickly with low-cost experiments. Gather qualitative and quantitative signals before committing resources.",
    actions: ["User interviews", "Prototype testing", "Smoke tests", "Signal analysis"],
  },
  {
    icon: Rocket,
    title: "Pilot",
    color: "bg-primary/20 text-primary",
    description: "Launch a controlled pilot to validate the solution in real conditions. Measure key metrics and gather operational learnings.",
    actions: ["MVP launch", "Pilot market selection", "Success criteria", "Operational testing"],
  },
  {
    icon: RefreshCcw,
    title: "Iteration",
    color: "bg-primary/25 text-primary",
    description: "Analyze pilot data and iterate on the product. Refine based on user feedback, performance data, and business model validation.",
    actions: ["Data analysis", "Feature refinement", "UX optimization", "Business model tuning"],
  },
  {
    icon: TrendingUp,
    title: "Scale",
    color: "bg-primary/30 text-primary",
    description: "Expand the proven product to new markets and segments. Build for reliability, automation, and sustainable growth.",
    actions: ["Market expansion", "Platform scaling", "Growth loops", "Operational efficiency"],
  },
];

const ProductStrategy = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" id="strategy">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Strategy</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            Product <span className="gradient-text">Lifecycle Strategy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            How products move from concept to scale — a structured approach to reducing risk and maximizing impact.
          </p>

          {/* Lifecycle visualization */}
          <div className="flex flex-col md:flex-row gap-3 mb-8">
            {stages.map((stage, i) => (
              <button
                key={i}
                onClick={() => setActiveStage(activeStage === i ? null : i)}
                className={`flex-1 p-5 rounded-2xl border transition-all text-left ${
                  activeStage === i
                    ? "border-primary/30 bg-primary/5 shadow-md"
                    : "border-border bg-card hover:border-primary/20"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl ${stage.color} flex items-center justify-center mb-3`}>
                  <stage.icon className="h-5 w-5" />
                </div>
                <h3 className="text-display font-semibold text-foreground">{stage.title}</h3>
                <div className="flex items-center gap-1 mt-2">
                  {i < stages.length - 1 && (
                    <div className="hidden md:block text-xs text-muted-foreground">→</div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Expanded detail */}
          <AnimatePresence>
            {activeStage !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="glass rounded-2xl p-8">
                  <h3 className="text-display text-xl font-bold mb-3">{stages[activeStage].title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    {stages[activeStage].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stages[activeStage].actions.map((action) => (
                      <span key={action} className="px-4 py-2 bg-secondary rounded-xl text-sm font-medium text-foreground">
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductStrategy;
