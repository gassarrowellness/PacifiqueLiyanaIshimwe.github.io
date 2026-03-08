import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Wallet, ShoppingBag, BarChart3, Scale, CreditCard, Share2 } from "lucide-react";

const concepts = [
  {
    icon: Wallet,
    title: "Embedded Savings & Credit Scoring",
    subtitle: "Fintech for gig workers",
    problem: "Gig workers and informal traders generate consistent income but lack formal financial records, locking them out of loans and savings products.",
    solution: "Transaction-based scoring using mobile money patterns and work frequency to generate creditworthiness profiles.",
    architecture: ["Transaction Aggregator", "Credit Scoring Engine", "Savings Wallet", "Lender API", "Worker Dashboard"],
  },
  {
    icon: ShoppingBag,
    title: "AI Inventory & Demand Forecasting",
    subtitle: "Predictive commerce for African sellers",
    problem: "Small e-commerce sellers either overstock and tie up capital, or understock and lose sales. No affordable forecasting tools exist for fragmented supply chains.",
    solution: "Purchase pattern analysis, seasonal trends, and supplier lead times to optimize stock and automate reorder workflows.",
    architecture: ["Sales Data Ingestion", "Demand Forecaster", "Supplier Connector", "Auto-Reorder Engine", "Seller Dashboard"],
  },
  {
    icon: BarChart3,
    title: "Social Media Revenue Optimization",
    subtitle: "Engagement to monetization for SMEs",
    problem: "African creators and SMEs invest in social content but struggle to convert engagement into revenue. No tools connect social analytics to sales.",
    solution: "Content performance analysis across channels generating actionable monetization strategies for creators and brands.",
    architecture: ["Multi-Platform Connector", "Engagement Analyzer", "Conversion Tracker", "Strategy Generator", "Revenue Dashboard"],
  },
  {
    icon: Scale,
    title: "Cross-Border Trade Compliance",
    subtitle: "AfCFTA navigation for SME traders",
    problem: "Cross-border SME traders face inconsistent regulations, complex paperwork, and unpredictable tariffs that increase costs and delays.",
    solution: "Intelligent compliance tool for real-time navigation of AfCFTA regulations, tariff schedules, and documentation.",
    architecture: ["Regulation Parser", "Tariff Calculator", "Document Generator", "Border Status API", "Trader Mobile App"],
  },
  {
    icon: CreditCard,
    title: "Subscription Commerce Platform",
    subtitle: "Recurring revenue for African retail",
    problem: "Consumers buy essentials reactively at premium prices. Retailers lack infrastructure for subscription models that improve affordability.",
    solution: "Mobile-money-integrated subscription purchasing for essential goods with predictive replenishment.",
    architecture: ["Subscription Builder", "Mobile Money Gateway", "Delivery Scheduler", "Consumption Predictor", "Retailer Portal"],
  },
  {
    icon: Share2,
    title: "Influencer-Commerce Bridge",
    subtitle: "Trackable sales through creators",
    problem: "Brands cannot measure influencer ROI. Influencers lack tools to monetize beyond sponsorships. No infrastructure connects engagement to commerce.",
    solution: "Commission-based product sales through social content with integrated payment processing and attribution.",
    architecture: ["Brand Marketplace", "Creator Storefront", "Attribution Engine", "Commission Tracker", "Payment Processor"],
  },
];

const InnovationLab = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const current = concepts[active];

  return (
    <section id="innovation" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Innovation Lab</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-12">
            Future <span className="gradient-text">Product Concepts</span>
          </h2>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {concepts.map((c, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all shrink-0 ${
                  i === active
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                <c.icon className="h-4 w-4" />
                <span className="hidden md:inline">{c.title.split(" ").slice(0, 2).join(" ")}</span>
              </button>
            ))}
          </div>

          {/* Active concept */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-6 md:p-10"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <current.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-display text-xl font-bold">{current.title}</h3>
                  <p className="text-xs text-muted-foreground">{current.subtitle}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                  <p className="text-label text-destructive mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{current.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-label text-primary mb-2">Solution</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{current.solution}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-label text-primary mb-3">Architecture</p>
                <div className="flex flex-wrap gap-2">
                  {current.architecture.map((a, i) => (
                    <div key={i} className="flex items-center gap-1">
                      <span className="px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-xs font-medium">
                        {a}
                      </span>
                      {i < current.architecture.length - 1 && (
                        <span className="text-muted-foreground/40">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationLab;
