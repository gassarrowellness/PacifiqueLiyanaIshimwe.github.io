import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Search, Users, Map, Lightbulb, Layout, Smartphone, CheckCircle, ChevronRight } from "lucide-react";
import MiniDiagram, { DiagramType } from "./MiniDiagram";

interface DetailItem {
  label: string;
  context: string;
  illustration: DiagramType;
}

const steps = [
  {
    icon: Search,
    title: "Problem Definition",
    description: "Clearly define the problem and the value of solving it. Identify who is affected, the root causes, and the cost of inaction.",
    details: [
      { label: "Stakeholder interviews", context: "Structured conversations with key decision-makers and users to understand business constraints, success metrics, and organizational priorities that shape the problem space.", illustration: "interviews" as DiagramType },
      { label: "Problem severity mapping", context: "Categorizing and ranking problems by their frequency, impact on users, and cost to the business. This helps prioritize which problems deserve immediate attention versus long-term investment.", illustration: "matrix" as DiagramType },
      { label: "Value proposition canvas", context: "A visual tool that maps customer jobs, pains, and gains against your product's features, pain relievers, and gain creators to ensure product-market fit from the start.", illustration: "mapping" as DiagramType },
      { label: "User pain point analysis", context: "Systematically identifying friction points in the current user experience through support tickets, session recordings, and direct feedback to build an evidence-based case for change.", illustration: "signals" as DiagramType },
    ],
  },
  {
    icon: Users,
    title: "User Research",
    description: "Understand user behavior, motivations, and constraints through qualitative and quantitative research methods.",
    details: [
      { label: "Field interviews", context: "Conducting in-context interviews where users naturally interact with the product or service. Observing real environments reveals constraints and workarounds that lab settings miss.", illustration: "interviews" as DiagramType },
      { label: "Behavioral analysis", context: "Studying how users actually behave versus what they say they do. Includes analytics review, session recordings, and heatmaps to identify patterns and drop-off points.", illustration: "behavior" as DiagramType },
      { label: "Journey mapping", context: "Visualizing the end-to-end user experience across touchpoints, emotions, and channels. Reveals gaps between user expectations and reality at each stage of interaction.", illustration: "process" as DiagramType },
      { label: "Persona development", context: "Creating research-backed archetypes that represent distinct user segments with unique goals, behaviors, and constraints. These guide design decisions and help teams build empathy.", illustration: "persona" as DiagramType },
    ],
  },
  {
    icon: Map,
    title: "Opportunity Mapping",
    description: "Identify areas where the product can create value by mapping user needs to business goals and market gaps.",
    details: [
      { label: "Opportunity scoring", context: "Rating potential opportunities using frameworks like RICE (Reach, Impact, Confidence, Effort) to objectively compare and prioritize where to invest product resources.", illustration: "metrics" as DiagramType },
      { label: "Market gap analysis", context: "Comparing existing solutions in the market against unmet user needs to identify white spaces where your product can differentiate and capture value.", illustration: "comparison" as DiagramType },
      { label: "Value chain mapping", context: "Tracing how value flows from raw inputs to the end user, identifying where inefficiencies exist and where the product can insert itself to capture or create value.", illustration: "mapping" as DiagramType },
      { label: "Prioritization frameworks", context: "Applying structured methods like impact-effort matrices, MoSCoW, or weighted scoring to make transparent, defensible decisions about what to build first.", illustration: "matrix" as DiagramType },
    ],
  },
  {
    icon: Lightbulb,
    title: "Solution Ideation",
    description: "Generate potential product solutions through structured ideation, considering feasibility, viability, and desirability.",
    details: [
      { label: "Design sprints", context: "A time-boxed 5-day process for answering critical business questions through design, prototyping, and testing ideas with real users. Compresses months of work into one week.", illustration: "timeline" as DiagramType },
      { label: "How Might We sessions", context: "Reframing problems as opportunity statements to unlock creative thinking. HMW questions turn pain points into actionable design challenges that teams can ideate around.", illustration: "framework" as DiagramType },
      { label: "Concept sketching", context: "Rapidly visualizing multiple solution directions through rough sketches before committing to any single approach. Encourages divergent thinking and surfaces hidden assumptions.", illustration: "mvp" as DiagramType },
      { label: "Feasibility assessment", context: "Evaluating proposed solutions against technical constraints, resource availability, and timeline realities. Ensures the team pursues ideas that can actually be built and shipped.", illustration: "chart" as DiagramType },
    ],
  },
  {
    icon: Layout,
    title: "Wireframing",
    description: "Show product UI structures and flows. Create low-fidelity representations of the product experience.",
    details: [
      { label: "Information architecture", context: "Organizing and structuring content so users can find what they need intuitively. Includes site maps, taxonomy design, and content grouping exercises that form the product's structural backbone.", illustration: "mapping" as DiagramType },
      { label: "User flow diagrams", context: "Mapping the step-by-step paths users take to accomplish tasks within the product. Identifies decision points, error states, and opportunities to reduce friction in critical workflows.", illustration: "process" as DiagramType },
      { label: "Lo-fi wireframes", context: "Rough sketches of screen layouts focusing on content hierarchy and user flow rather than visual polish. Used to quickly iterate on structure before committing to high-fidelity designs.", illustration: "framework" as DiagramType },
      { label: "Interaction patterns", context: "Defining reusable UI behaviors like navigation models, form patterns, and feedback mechanisms. Consistent patterns reduce cognitive load and create a predictable, learnable interface.", illustration: "triggers" as DiagramType },
    ],
  },
  {
    icon: Smartphone,
    title: "Prototype Simulation",
    description: "Build clickable product interaction flows that simulate the real experience for testing and feedback.",
    details: [
      { label: "Interactive prototypes", context: "High-fidelity clickable mockups that simulate real product behavior. Allow stakeholders and users to experience the proposed solution before engineering investment begins.", illustration: "testing" as DiagramType },
      { label: "Click-through flows", context: "Connected screens that demonstrate complete user journeys from entry to completion. Used to validate that the navigation and task flow feel natural and efficient.", illustration: "behavior" as DiagramType },
      { label: "Micro-interaction design", context: "Designing subtle animations and feedback moments - button states, loading indicators, success confirmations - that make the product feel responsive and polished.", illustration: "hooks" as DiagramType },
      { label: "Device testing", context: "Validating prototypes across different screen sizes, operating systems, and input methods to ensure the experience works consistently for all target users.", illustration: "comparison" as DiagramType },
    ],
  },
  {
    icon: CheckCircle,
    title: "Validation & Testing",
    description: "User testing, feedback loops, and iteration. Validate assumptions and refine the product based on real data.",
    details: [
      { label: "Usability testing", context: "Observing real users attempting tasks with the product to identify confusion, errors, and friction. Think-aloud protocols reveal the reasoning behind user behavior.", illustration: "research" as DiagramType },
      { label: "A/B experiments", context: "Running controlled experiments where different user groups see different versions of a feature. Statistical analysis reveals which variation better achieves the target metric.", illustration: "chart" as DiagramType },
      { label: "Feedback synthesis", context: "Aggregating and analyzing qualitative and quantitative feedback into actionable themes. Pattern recognition across multiple data sources drives confident design decisions.", illustration: "signals" as DiagramType },
      { label: "Iteration cycles", context: "Systematically refining the product through repeated build-measure-learn loops. Each cycle incorporates validated learnings to progressively improve the solution.", illustration: "cycle" as DiagramType },
    ],
  },
];

const ProductDesignWalkthrough = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeDetail, setActiveDetail] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    setActiveDetail(null);
  }, [activeStep]);

  const currentDetails = steps[activeStep].details;
  const selectedDetail = currentDetails.find((d) => d.label === activeDetail);

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
            How I take products from idea to validated solution through a structured, repeatable framework.
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
                {currentDetails.map((detail, i) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setActiveDetail(activeDetail === detail.label ? null : detail.label)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium text-center cursor-pointer transition-all border ${
                      activeDetail === detail.label
                        ? "border-primary/30 bg-primary/5 text-foreground"
                        : "border-transparent bg-secondary/60 text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {detail.label}
                  </motion.div>
                ))}
              </div>

              {/* Expanded detail panel */}
              <AnimatePresence mode="wait">
                {selectedDetail && (
                  <motion.div
                    key={selectedDetail.label}
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-xl bg-secondary/40 border border-border/50 p-6 flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-foreground mb-2">{selectedDetail.label}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{selectedDetail.context}</p>
                      </div>
                      <div className="shrink-0 flex items-center justify-center p-4 rounded-xl bg-background/60 border border-border/30">
                        <MiniDiagram type={selectedDetail.illustration} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDesignWalkthrough;
