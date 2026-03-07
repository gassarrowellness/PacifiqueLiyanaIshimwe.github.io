import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Target, Users, Sword, Megaphone, DollarSign, TrendingUp, Calendar } from "lucide-react";

const sections = [
  {
    icon: Target,
    title: "Business Clarity & Positioning",
    description: "Define the core problem, the target market, why the product exists, and why the solution matters. Establish clear positioning before going to market.",
    items: ["Core problem definition", "Target market identification", "Product existence rationale", "Solution value articulation"],
  },
  {
    icon: Users,
    title: "Audience Understanding",
    description: "Analyze the target audience deeply — who they are, what motivates them, what triggers buying decisions, and how they behave in the product ecosystem.",
    items: ["User persona mapping", "Motivation analysis", "Buying trigger identification", "Behavior pattern analysis"],
  },
  {
    icon: Sword,
    title: "Competitive Advantage Mapping",
    description: "Reverse-engineer competitors and identify strengths, weaknesses, and opportunities for differentiation in the market.",
    items: ["Competitor analysis", "Strength/weakness mapping", "Differentiation opportunities", "Market positioning gaps"],
  },
  {
    icon: Megaphone,
    title: "Strategic Positioning",
    description: "Define strategic angles including content themes, product messaging, and differentiation strategies that resonate with the target audience.",
    items: ["Content themes", "Product messaging", "Differentiation strategy", "Brand voice alignment"],
  },
  {
    icon: DollarSign,
    title: "Revenue-Aligned Systems",
    description: "Design a system connecting awareness, value, trust, and conversion. Show how product experiences guide users through the customer journey.",
    items: ["Awareness → Value → Trust → Conversion", "Customer journey design", "Revenue funnel optimization", "Value delivery mapping"],
  },
  {
    icon: TrendingUp,
    title: "Growth Engineering",
    description: "Design a growth system optimized for platform distribution including hook patterns, engagement triggers, retention structures, and content pacing.",
    items: ["Hook patterns", "Engagement triggers", "Retention structures", "Distribution optimization"],
  },
  {
    icon: Calendar,
    title: "Content & Launch Planning",
    description: "Structure a go-to-market plan with phased content, daily execution, and clear alignment to the customer journey stages.",
    items: ["Launch timeline", "Content calendar", "Journey stage mapping", "Conversion path design"],
  },
];

const GTMStrategy = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
            A structured framework for taking products to market — from positioning through conversion.
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
                  onClick={() => setExpanded(expanded === i ? null : i)}
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
                        <div className="flex flex-wrap gap-2">
                          {section.items.map((item) => (
                            <span key={item} className="px-3 py-1.5 bg-secondary rounded-lg text-sm text-foreground font-medium">
                              {item}
                            </span>
                          ))}
                        </div>
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
