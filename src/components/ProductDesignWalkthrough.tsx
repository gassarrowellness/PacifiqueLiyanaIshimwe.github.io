import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Search, Users, Map, Lightbulb, Layout, Smartphone, CheckCircle, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Problem Definition",
    description: "Clearly define the problem and the value of solving it. Identify who is affected, the root causes, and the cost of inaction.",
    details: ["Stakeholder interviews", "Problem severity mapping", "Value proposition canvas", "User pain point analysis"],
  },
  {
    icon: Users,
    title: "User Research",
    description: "Understand user behavior, motivations, and constraints through qualitative and quantitative research methods.",
    details: ["Field interviews", "Behavioral analysis", "Journey mapping", "Persona development"],
  },
  {
    icon: Map,
    title: "Opportunity Mapping",
    description: "Identify areas where the product can create value by mapping user needs to business goals and market gaps.",
    details: ["Opportunity scoring", "Market gap analysis", "Value chain mapping", "Prioritization frameworks"],
  },
  {
    icon: Lightbulb,
    title: "Solution Ideation",
    description: "Generate potential product solutions through structured ideation, considering feasibility, viability, and desirability.",
    details: ["Design sprints", "How Might We sessions", "Concept sketching", "Feasibility assessment"],
  },
  {
    icon: Layout,
    title: "Wireframing",
    description: "Show product UI structures and flows. Create low-fidelity representations of the product experience.",
    details: ["Information architecture", "User flow diagrams", "Lo-fi wireframes", "Interaction patterns"],
  },
  {
    icon: Smartphone,
    title: "Prototype Simulation",
    description: "Build clickable product interaction flows that simulate the real experience for testing and feedback.",
    details: ["Interactive prototypes", "Click-through flows", "Micro-interaction design", "Device testing"],
  },
  {
    icon: CheckCircle,
    title: "Validation & Testing",
    description: "User testing, feedback loops, and iteration. Validate assumptions and refine the product based on real data.",
    details: ["Usability testing", "A/B experiments", "Feedback synthesis", "Iteration cycles"],
  },
];

const ProductDesignWalkthrough = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" id="design-walkthrough">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Process</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            Product Design <span className="gradient-text">Walkthrough</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            How I take products from idea to validated solution — a structured, repeatable framework.
          </p>

          {/* Horizontal stepper */}
          <div className="hidden md:flex items-center gap-1 mb-12 overflow-x-auto pb-4">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className="flex items-center gap-2 group shrink-0"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    i === activeStep
                      ? "bg-primary text-primary-foreground shadow-md"
                      : i < activeStep
                      ? "bg-primary/15 text-primary"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  <step.icon className="h-5 w-5" />
                </div>
                <span
                  className={`text-xs font-medium transition-colors ${
                    i === activeStep ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step.title}
                </span>
                {i < steps.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-border mx-1" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile step selector */}
          <div className="flex md:hidden gap-2 mb-8 overflow-x-auto pb-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                  i === activeStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                <step.icon className="h-5 w-5" />
              </button>
            ))}
          </div>

          {/* Active step detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8 md:p-10"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon className="h-7 w-7 text-primary" />;
                  })()}
                </div>
                <div>
                  <p className="text-label text-primary mb-1">Step {activeStep + 1} of {steps.length}</p>
                  <h3 className="text-display text-2xl font-bold">{steps[activeStep].title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {steps[activeStep].description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {steps[activeStep].details.map((detail, i) => (
                  <motion.div
                    key={detail}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-secondary/60 rounded-xl px-4 py-3 text-sm text-foreground font-medium text-center"
                  >
                    {detail}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDesignWalkthrough;
