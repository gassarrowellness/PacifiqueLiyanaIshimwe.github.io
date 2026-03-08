import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Target, Users, Sword, Megaphone, DollarSign, TrendingUp, Calendar } from "lucide-react";
import MiniDiagram, { type DiagramType } from "./MiniDiagram";

interface SectionItem {
  label: string;
  detail: string;
  visual: DiagramType;
}

const sections = [
  {
    icon: Target,
    title: "Business Clarity & Positioning",
    description: "Define the core problem, the target market, why the product exists, and why the solution matters. Establish clear positioning before going to market.",
    items: [
      { label: "Core problem definition", detail: "Articulate the specific, urgent problem your product solves. Frame it in the customer's language and quantify the pain - lost time, money, or opportunity.", visual: "framework" as DiagramType },
      { label: "Target market identification", detail: "Define your ideal customer profile using firmographics, psychographics, and behavioral data. Narrow to a beachhead segment you can dominate before expanding.", visual: "mapping" as DiagramType },
      { label: "Product existence rationale", detail: "Answer 'why now?' and 'why us?' with conviction. Connect market timing, team expertise, and technological shifts into a compelling founding thesis.", visual: "comparison" as DiagramType },
      { label: "Solution value articulation", detail: "Craft a value proposition that connects the problem to your unique solution. Make the benefit tangible, measurable, and differentiated from alternatives.", visual: "framework" as DiagramType },
    ],
  },
  {
    icon: Users,
    title: "Audience Understanding",
    description: "Analyze the target audience deeply: who they are, what motivates them, what triggers buying decisions, and how they behave in the product ecosystem.",
    items: [
      { label: "User persona mapping", detail: "Build detailed, research-backed personas that go beyond demographics. Include goals, frustrations, decision-making patterns, and the tools they currently use.", visual: "persona" as DiagramType },
      { label: "Motivation analysis", detail: "Understand the emotional and rational drivers behind purchase decisions. Map intrinsic motivations (status, fear, aspiration) to messaging strategies.", visual: "matrix" as DiagramType },
      { label: "Buying trigger identification", detail: "Identify the specific events, frustrations, or moments that push prospects from passive awareness to active evaluation. Design your marketing around these triggers.", visual: "triggers" as DiagramType },
      { label: "Behavior pattern analysis", detail: "Study how users discover, evaluate, and adopt products in your category. Map the typical journey from first touch to loyal customer.", visual: "behavior" as DiagramType },
    ],
  },
  {
    icon: Sword,
    title: "Competitive Advantage Mapping",
    description: "Reverse-engineer competitors and identify strengths, weaknesses, and opportunities for differentiation in the market.",
    items: [
      { label: "Competitor analysis", detail: "Systematically analyze direct and indirect competitors across product features, pricing, positioning, distribution, and customer satisfaction.", visual: "comparison" as DiagramType },
      { label: "Strength/weakness mapping", detail: "Create competitive matrices that reveal where competitors over-invest and under-deliver. Find the gaps where your product can win decisively.", visual: "matrix" as DiagramType },
      { label: "Differentiation opportunities", detail: "Identify dimensions of competition where you can be meaningfully different — not just better. True differentiation creates categories, not just features.", visual: "chart" as DiagramType },
      { label: "Market positioning gaps", detail: "Map the competitive landscape to find unoccupied positions. Look for underserved segments, unmet needs, and pricing gaps you can own.", visual: "mapping" as DiagramType },
    ],
  },
  {
    icon: Megaphone,
    title: "Strategic Positioning",
    description: "Define strategic angles including content themes, product messaging, and differentiation strategies that resonate with the target audience.",
    items: [
      { label: "Content themes", detail: "Develop 3-5 content pillars that establish thought leadership and naturally lead prospects toward your product. Each theme should address a key pain point.", visual: "content" as DiagramType },
      { label: "Product messaging", detail: "Create a messaging hierarchy: tagline → elevator pitch → full narrative. Test messaging with real prospects to ensure it resonates and differentiates.", visual: "framework" as DiagramType },
      { label: "Differentiation strategy", detail: "Choose your primary axis of differentiation (price, quality, speed, simplicity, specialization) and align every touchpoint to reinforce that position.", visual: "comparison" as DiagramType },
      { label: "Brand voice alignment", detail: "Define a consistent brand voice that reflects your positioning. Every piece of content — from tweets to documentation — should feel unmistakably yours.", visual: "process" as DiagramType },
    ],
  },
  {
    icon: DollarSign,
    title: "Revenue-Aligned Systems",
    description: "Design a system connecting awareness, value, trust, and conversion. Show how product experiences guide users through the customer journey.",
    items: [
      { label: "Awareness → Value → Trust → Conversion", detail: "Design a progressive engagement system where each stage naturally leads to the next. Awareness builds curiosity, value creates interest, trust removes objections, and conversion captures intent.", visual: "funnel" as DiagramType },
      { label: "Customer journey design", detail: "Map every touchpoint from first impression to renewal. Identify moments of truth where experience quality determines whether customers advance or churn.", visual: "behavior" as DiagramType },
      { label: "Revenue funnel optimization", detail: "Instrument the full funnel with analytics. Identify conversion bottlenecks, test improvements systematically, and build a predictable revenue engine.", visual: "optimization" as DiagramType },
      { label: "Value delivery mapping", detail: "Ensure the product delivers on the promise made in marketing. Map value delivery milestones and design onboarding to reach 'aha moments' fast.", visual: "mapping" as DiagramType },
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth Engineering",
    description: "Design a growth system optimized for platform distribution including hook patterns, engagement triggers, retention structures, and content pacing.",
    items: [
      { label: "Hook patterns", detail: "Design attention-grabbing hooks that stop the scroll and compel engagement. Structure hooks around curiosity gaps, contrarian takes, and outcome previews.", visual: "hooks" as DiagramType },
      { label: "Engagement triggers", detail: "Build notification systems, email sequences, and in-product prompts that re-engage users at optimal moments. Trigger engagement when users are most receptive.", visual: "triggers" as DiagramType },
      { label: "Retention structures", detail: "Design habit loops, progress systems, and social features that increase switching costs and make the product stickier over time.", visual: "retention" as DiagramType },
      { label: "Distribution optimization", detail: "Optimize for each distribution channel's algorithm and user behavior. Design content and product features that are inherently shareable and discoverable.", visual: "distribution" as DiagramType },
    ],
  },
  {
    icon: Calendar,
    title: "Content & Launch Planning",
    description: "Structure a go-to-market plan with phased content, daily execution, and clear alignment to the customer journey stages.",
    items: [
      { label: "Launch timeline", detail: "Build a phased launch plan: pre-launch (build anticipation), launch (maximize impact), and post-launch (sustain momentum). Assign owners and deadlines to every task.", visual: "timeline" as DiagramType },
      { label: "Content calendar", detail: "Plan content across channels with specific topics, formats, and publish dates. Batch production for efficiency while maintaining a consistent cadence.", visual: "timeline" as DiagramType },
      { label: "Journey stage mapping", detail: "Align every piece of content and every campaign to a specific stage in the customer journey. Ensure no stage is neglected and transitions are smooth.", visual: "funnel" as DiagramType },
      { label: "Conversion path design", detail: "Design clear paths from content consumption to product trial to purchase. Remove friction, add social proof, and create urgency at each decision point.", visual: "process" as DiagramType },
    ],
  },
];

const GTMStrategy = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleItemClick = (label: string) => {
    setActiveItem(activeItem === label ? null : label);
  };

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Go-To-Market</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            GTM <span className="gradient-text">Strategy Framework</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            A structured framework for taking products to market, from positioning through conversion.
          </p>

          <div className="space-y-3">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <button
                  onClick={() => {
                    setExpanded(expanded === i ? null : i);
                    setActiveItem(null);
                  }}
                  className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all ${
                    expanded === i
                      ? "border-primary/30 bg-card shadow-md"
                      : "border-border bg-card hover:border-primary/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-display font-semibold text-foreground">{section.title}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === i ? 45 : 0 }}
                      className="text-muted-foreground text-xl font-light shrink-0"
                    >
                      +
                    </motion.div>
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
                      <div className="p-6 pt-2">
                        <p className="text-muted-foreground leading-relaxed mb-5 max-w-2xl">
                          {section.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {section.items.map((item) => (
                            <button
                              key={item.label}
                              onClick={() => handleItemClick(item.label)}
                              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                                activeItem === item.label
                                  ? "bg-primary text-primary-foreground shadow-sm"
                                  : "bg-secondary text-foreground hover:bg-secondary/80"
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>

                        {/* Item detail card */}
                        <AnimatePresence>
                          {activeItem && section.items.some((it) => it.label === activeItem) && (
                            <motion.div
                              initial={{ opacity: 0, y: -10, height: 0 }}
                              animate={{ opacity: 1, y: 0, height: "auto" }}
                              exit={{ opacity: 0, y: -10, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              {section.items
                                .filter((it) => it.label === activeItem)
                                .map((item) => (
                                  <div key={item.label} className="mt-2 p-6 rounded-xl border border-primary/10 bg-card/50 flex flex-col md:flex-row gap-6 items-start">
                                    <div className="flex-1 min-w-0">
                                      <h4 className="text-display font-semibold text-foreground mb-2">{item.label}</h4>
                                      <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                                    </div>
                                    <div className="shrink-0 p-4 rounded-xl bg-muted/50 flex items-center justify-center">
                                      <MiniDiagram type={item.visual} />
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GTMStrategy;
