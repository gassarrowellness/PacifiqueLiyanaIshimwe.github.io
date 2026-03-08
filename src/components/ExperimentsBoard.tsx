import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FlaskConical, ChevronDown } from "lucide-react";

const experiments = [
  {
    title: "Offline Gen-AI via USSD",
    hypothesis: "A generative AI agent delivered via USSD could provide interactive, personalized support with near-zero drop-off rates for users without internet access.",
    test: "Controlled pilot in Zambia with rural communities, measuring user engagement, query completion rates, and information accuracy on USSD infrastructure.",
    result: "Near-zero user drop-off rates. Users could access real-time, personalized guidance on agriculture and health through basic phones.",
    learning: "USSD is a viable delivery channel for AI-powered services in low-connectivity environments. Natural language processing can work within USSD character constraints.",
    status: "validated" as const,
  },
  {
    title: "AI-Powered IVR Platform",
    hypothesis: "An AI-powered voice platform could deliver personalized information at scale, improving access and engagement while creating a sustainable revenue model.",
    test: "Piloted 'Ask Viamo Anything' - the world's first offline Generative AI assistant - generating ~90,000 user queries during initial phase to validate demand.",
    result: "2M+ users served, 75%+ retention rates, 50,000+ users with improved health access. Revenue model validated for sustainable growth.",
    learning: "Voice-first AI services can achieve high engagement in markets where literacy and connectivity are barriers. B2B partnerships create viable monetization.",
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
    title: "MoMo API Integration Platform",
    hypothesis: "A self-serve API platform could accelerate third-party integrations and unlock new revenue streams for mobile money services.",
    test: "Launched developer portal and onboarding flow, tracking API adoption rates, time-to-first-transaction, and developer satisfaction.",
    result: "Accelerated third-party integrations, unlocked new B2B revenue streams, and created a scalable platform ecosystem.",
    learning: "Developer experience is a product. Reducing friction in API onboarding directly correlates with ecosystem growth and revenue.",
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

  return (
    <section className="py-24 md:py-32 bg-background" id="experiments">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Experiments</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            Experimentation <span className="gradient-text">Board</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
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
        </motion.div>
      </div>
    </section>
  );
};

export default ExperimentsBoard;
