import { useState, useRef } from "react";
import { useScrollExpand } from "@/hooks/use-scroll-expand";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Lightbulb, FlaskConical, Rocket, RefreshCcw, TrendingUp, ChevronDown } from "lucide-react";
import MiniDiagram, { type DiagramType } from "./MiniDiagram";

interface ActionItem {
  label: string;
  detail: string;
  visual: DiagramType;
}

const stages = [
  {
    icon: Lightbulb,
    title: "Idea",
    color: "bg-primary/10 text-primary",
    description: "Identify opportunities through user research, market analysis, and stakeholder input. Define the problem worth solving and the hypothesis behind the solution.",
    actions: [
      { label: "Problem framing", detail: "Define the core user problem through structured frameworks like Jobs-to-be-Done and problem trees. Map root causes and identify the highest-leverage intervention point.", visual: "framework" as DiagramType },
      { label: "User need validation", detail: "Conduct discovery interviews and contextual inquiries to validate whether the problem is real, frequent, and painful enough to warrant a solution.", visual: "research" as DiagramType },
      { label: "Market sizing", detail: "Estimate TAM, SAM, and SOM using top-down and bottom-up approaches. Identify market segments with the strongest product-market fit potential.", visual: "chart" as DiagramType },
      { label: "Hypothesis formation", detail: "Craft falsifiable hypotheses linking user behavior to business outcomes. Define clear success criteria and the minimum evidence needed to proceed.", visual: "framework" as DiagramType },
    ],
  },
  {
    icon: FlaskConical,
    title: "Validation",
    color: "bg-primary/15 text-primary",
    description: "Test assumptions quickly with low-cost experiments. Gather qualitative and quantitative signals before committing resources.",
    actions: [
      { label: "User interviews", detail: "Structured conversations with target users to uncover unmet needs, workflows, and emotional drivers. Use open-ended questions to avoid confirmation bias.", visual: "interviews" as DiagramType },
      { label: "Prototype testing", detail: "Build low-fidelity prototypes (wireframes, clickable mocks) and test them with real users. Measure task completion, confusion points, and desirability signals.", visual: "testing" as DiagramType },
      { label: "Smoke tests", detail: "Create landing pages, fake doors, or concierge MVPs to measure real demand before building. Track sign-ups, clicks, and willingness to pay.", visual: "funnel" as DiagramType },
      { label: "Signal analysis", detail: "Aggregate qualitative and quantitative signals from experiments. Weight evidence by reliability and look for converging patterns across data sources.", visual: "signals" as DiagramType },
    ],
  },
  {
    icon: Rocket,
    title: "Pilot",
    color: "bg-primary/20 text-primary",
    description: "Launch a controlled pilot to validate the solution in real conditions. Measure key metrics and gather operational learnings.",
    actions: [
      { label: "MVP launch", detail: "Ship the minimum viable product with core value proposition intact. Focus on the single most important user flow and instrument it for analytics.", visual: "mvp" as DiagramType },
      { label: "Pilot market selection", detail: "Choose a beachhead market that's representative but manageable. Consider factors like accessibility, feedback loops, and regulatory constraints.", visual: "mapping" as DiagramType },
      { label: "Success criteria", detail: "Define quantitative thresholds (activation rate, retention, NPS) and qualitative benchmarks that determine whether to scale, pivot, or kill the initiative.", visual: "metrics" as DiagramType },
      { label: "Operational testing", detail: "Validate that the product works in real operational conditions: support workflows, edge cases, payment flows, and infrastructure reliability.", visual: "process" as DiagramType },
    ],
  },
  {
    icon: RefreshCcw,
    title: "Iteration",
    color: "bg-primary/25 text-primary",
    description: "Analyze pilot data and iterate on the product. Refine based on user feedback, performance data, and business model validation.",
    actions: [
      { label: "Data analysis", detail: "Deep-dive into usage analytics, cohort analysis, and funnel metrics. Identify where users drop off, what drives retention, and which features correlate with activation.", visual: "chart" as DiagramType },
      { label: "Feature refinement", detail: "Prioritize improvements using impact/effort matrices. Cut low-value features ruthlessly and double down on what drives the core metric.", visual: "matrix" as DiagramType },
      { label: "UX optimization", detail: "Run A/B tests and usability studies to continuously improve the user experience. Reduce friction in key flows and improve time-to-value.", visual: "optimization" as DiagramType },
      { label: "Business model tuning", detail: "Validate pricing, packaging, and monetization strategies through experiments. Test willingness to pay, optimal price points, and value metric alignment.", visual: "comparison" as DiagramType },
    ],
  },
  {
    icon: TrendingUp,
    title: "Scale",
    color: "bg-primary/30 text-primary",
    description: "Expand the proven product to new markets and segments. Build for reliability, automation, and sustainable growth.",
    actions: [
      { label: "Market expansion", detail: "Enter new geographic markets or customer segments systematically. Adapt the product for local context while maintaining core value proposition integrity.", visual: "expansion" as DiagramType },
      { label: "Platform scaling", detail: "Evolve the product into a platform with APIs, integrations, and ecosystem partnerships. Enable third-party value creation to multiply impact.", visual: "process" as DiagramType },
      { label: "Growth loops", detail: "Design self-reinforcing growth mechanisms: viral loops, content flywheels, network effects. Each user should naturally bring in more users or more value.", visual: "cycle" as DiagramType },
      { label: "Operational efficiency", detail: "Automate manual processes, optimize unit economics, and build scalable infrastructure. Reduce marginal cost of serving each additional customer.", visual: "optimization" as DiagramType },
    ],
  },
];

const ProductStrategy = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const scrollCallbackRef = useScrollExpand(activeStage, setActiveStage);

  const handleActionClick = (label: string) => {
    setActiveAction(activeAction === label ? null : label);
  };

  return (
    <section className="py-16 md:py-20 bg-background" id="strategy">
      <div className="max-w-6xl mx-auto px-6" ref={(el) => { (ref as any).current = el; (scrollRef as any).current = el; }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Strategy</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            Product <span className="gradient-text">Lifecycle Strategy</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            How products move from concept to scale through a structured approach to reducing risk and maximizing impact.
          </p>

          {/* Lifecycle visualization */}
          <div className="flex flex-col md:flex-row gap-3 mb-8">
            {stages.map((stage, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveStage(activeStage === i ? null : i);
                  setActiveAction(null);
                }}
                className={`group flex-1 p-5 rounded-2xl border transition-all text-left cursor-pointer ${
                  activeStage === i
                    ? "border-primary/30 bg-primary/5 shadow-md"
                    : "border-border bg-card hover:border-primary/20 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl ${stage.color} flex items-center justify-center mb-3`}>
                  <stage.icon className="h-5 w-5" />
                </div>
                <h3 className="text-display font-semibold text-foreground">{stage.title}</h3>
                <p className="text-xs text-primary/60 group-hover:text-primary mt-2 transition-colors flex items-center gap-1">
                  {activeStage === i ? "Collapse" : "Explore"}
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeStage === i ? "rotate-180" : ""}`} />
                </p>
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {stages[activeStage].actions.map((action) => (
                      <button
                        key={action.label}
                        onClick={() => handleActionClick(action.label)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                          activeAction === action.label
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>

                  {/* Action detail card */}
                  <AnimatePresence>
                    {activeAction && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -10, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        {stages[activeStage].actions
                          .filter((a) => a.label === activeAction)
                          .map((action) => (
                            <div key={action.label} className="mt-2 p-6 rounded-xl border border-primary/10 bg-card/50 flex flex-col md:flex-row gap-6 items-start">
                              <div className="flex-1 min-w-0">
                                <h4 className="text-display font-semibold text-foreground mb-2">{action.label}</h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">{action.detail}</p>
                              </div>
                              <div className="shrink-0 p-4 rounded-xl bg-muted/50 flex items-center justify-center">
                                <MiniDiagram type={action.visual} />
                              </div>
                            </div>
                          ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Print-only: all stages and actions expanded */}
          <div className="print-only mt-8 space-y-6">
            {stages.map((stage, si) => (
              <div key={si} className="border border-border rounded-xl p-6 print-no-break">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg ${stage.color} flex items-center justify-center`}>
                    <stage.icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold">{stage.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{stage.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {stage.actions.map((action) => (
                    <div key={action.label} className="p-3 rounded-lg bg-muted/50">
                      <h4 className="text-sm font-semibold mb-1">{action.label}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{action.detail}</p>
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

export default ProductStrategy;
