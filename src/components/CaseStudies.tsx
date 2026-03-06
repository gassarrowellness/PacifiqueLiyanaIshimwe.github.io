import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Target, Users, Lightbulb, Rocket, BarChart3, FlaskConical } from "lucide-react";

interface CaseStudy {
  title: string;
  tagline: string;
  tags: string[];
  problem: string;
  userInsights: string;
  hypothesis: string;
  strategy: string;
  experimentation: string;
  execution: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "National Digital Engagement Platform",
    tagline: "Viamo — Serving 2M+ users across health, agriculture & civic education",
    tags: ["AI", "IVR", "Scale", "Monetization"],
    problem: "Low-connectivity communities lacked access to reliable health, agriculture, and civic information. Existing digital channels couldn't reach last-mile users on basic phones.",
    userInsights: "Users needed voice-first, offline-capable solutions. Smartphone penetration was low, but mobile phone ownership was high. Content had to be in local languages.",
    hypothesis: "An AI-powered voice platform could deliver personalized information at scale, improving access and engagement while creating a sustainable revenue model.",
    strategy: "Co-designed large-scale IVR programs with USAID, UNICEF, CIMMYT, and government partners. Built a monetization model around B2B partnerships and subscription services.",
    experimentation: "Piloted the world's first offline Generative AI assistant ('Ask Viamo Anything'), generating ~90,000 user queries during initial phase to validate demand.",
    execution: "Led cross-functional teams to scale the platform nationally. Implemented revenue optimization strategies, improved retention flows, and launched AI-supported information access.",
    results: [
      "2M+ users served on the national platform",
      "90,000 AI queries in pilot phase",
      "75%+ user retention rates",
      "50,000+ users with improved health access",
      "Revenue model revised for sustainable growth",
    ],
  },
  {
    title: "GenAI USSD Agent",
    tagline: "World's first offline Gen-AI digital assistant on USSD",
    tags: ["GenAI", "USSD", "Offline", "Innovation"],
    problem: "Remote users without internet access had no way to get real-time, personalized guidance on agriculture, health, and community services through basic phones.",
    userInsights: "Users on feature phones needed text-based AI interactions without requiring data connectivity. Drop-off rates on existing USSD services were high due to poor UX.",
    hypothesis: "A generative AI agent delivered via USSD could provide interactive, personalized support with near-zero drop-off rates.",
    strategy: "Built an AI-powered USSD agent that could process natural language queries and deliver real-time guidance across agriculture, health, and community services.",
    experimentation: "Ran controlled pilot in Zambia with rural communities, measuring user engagement, query completion rates, and information accuracy.",
    execution: "Developed from inception to commercial launch. Integrated with existing USSD infrastructure. Trained AI models on local content and language patterns.",
    results: [
      "Near-zero user drop-off rates",
      "Improved access to actionable information",
      "Published as GSMA case study",
      "Presented at GDDF Panel as world first",
    ],
  },
  {
    title: "Agent Network Performance Platform",
    tagline: "Zambia & Uganda — Increasing agent efficiency & transaction accuracy",
    tags: ["Platform", "Operations", "Analytics"],
    problem: "Mobile money agent networks suffered from low visibility into agent performance, high transaction error rates, and fragmented issue tracking.",
    userInsights: "Field agents needed real-time dashboards. Operations teams needed centralized issue resolution. Both needed faster feedback loops.",
    hypothesis: "Integrated support dashboards with performance tracking would improve agent efficiency and reduce errors.",
    strategy: "Designed tools to increase agent visibility and transaction accuracy. Built integrated support dashboards centralizing field issue tracking and resolution.",
    experimentation: "Piloted in Zambia market first, then expanded to Uganda after validating improvements in agent performance metrics.",
    execution: "Led cross-functional implementation across two markets. Built reporting dashboards, trained field teams, and established feedback mechanisms.",
    results: [
      "25% improvement in agent efficiency",
      "15% reduction in transaction errors",
      "Centralized issue tracking across markets",
    ],
  },
  {
    title: "Renewable Energy Product Expansion",
    tagline: "Brightlife & ENGIE — Solar, cookstoves & digital products across Africa",
    tags: ["Hardware", "GTM", "Emerging Markets"],
    problem: "Low-income households in off-grid African communities lacked access to affordable energy solutions and clean cooking technology.",
    userInsights: "Customers wanted bundled solutions (energy + entertainment + connectivity). Distribution through youth agents could increase last-mile reach.",
    hypothesis: "Bundled product offerings with youth-agent distribution could accelerate adoption and generate sustainable revenue.",
    strategy: "Launched bundled clean cookstove and smartphone products. Created youth agent program for last-mile distribution. Negotiated partnerships with mobile operators and NGOs.",
    experimentation: "Piloted solar-powered TVs, clean cookstoves, solar water pumps, and inverter-powered business systems across multiple markets.",
    execution: "Led end-to-end product launches, CRM development, pricing strategy, and marketing infrastructure across Zambia and Uganda.",
    results: [
      "5,000+ households reached with 3 new products",
      "$250K+ revenue generated",
      "70+ youth agents mobilized",
      "40% increase in partner engagement",
      "40% boost in digital product engagement",
    ],
  },
  {
    title: "Digital Agriculture Support Tool",
    tagline: "Mobile-first advisory platform for smallholder farmers",
    tags: ["AgriTech", "Mobile", "User Research"],
    problem: "Smallholder farmers lacked timely access to weather alerts, market prices, and agronomic advice, leading to poor decision-making and lower yields.",
    userInsights: "Farmers preferred mobile-based alerts and tips. Feature adoption increased when content was iteratively improved based on behavior tracking.",
    hypothesis: "A mobile advisory tool with personalized, data-driven recommendations would increase farmer engagement and adoption of best practices.",
    strategy: "Provided weather alerts, market prices, and agronomic tips via mobile. Built feedback loops to iteratively improve features based on user behavior.",
    experimentation: "A/B tested different content formats, delivery timing, and personalization approaches to optimize engagement metrics.",
    execution: "Deployed across rural regions with continuous iteration based on user feedback and behavior tracking data.",
    results: [
      "40% increase in farmer engagement",
      "Improved adoption of recommended practices",
      "50,000+ active users across rural regions",
    ],
  },
];

const sectionIcons = [
  { icon: Target, label: "Problem" },
  { icon: Users, label: "User Insights" },
  { icon: Lightbulb, label: "Hypothesis" },
  { icon: Rocket, label: "Strategy" },
  { icon: FlaskConical, label: "Experimentation" },
  { icon: BarChart3, label: "Execution" },
];

const CaseStudies = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Portfolio</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            Product <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Real products I've shipped, scaled, and monetized — structured as interactive case studies showing the full product journey.
          </p>

          <div className="space-y-4">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 md:p-8 flex items-start md:items-center justify-between gap-4 text-left hover:bg-accent/30 transition-colors"
                >
                  <div>
                    <h3 className="text-display text-lg md:text-xl font-semibold mb-1">{cs.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{cs.tagline}</p>
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 border-t border-border">
                        {/* Product Journey */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                          {[
                            { label: "Problem", content: cs.problem, icon: sectionIcons[0].icon },
                            { label: "User Insights", content: cs.userInsights, icon: sectionIcons[1].icon },
                            { label: "Hypothesis", content: cs.hypothesis, icon: sectionIcons[2].icon },
                            { label: "Product Strategy", content: cs.strategy, icon: sectionIcons[3].icon },
                            { label: "Experimentation", content: cs.experimentation, icon: sectionIcons[4].icon },
                            { label: "Execution", content: cs.execution, icon: sectionIcons[5].icon },
                          ].map((section) => (
                            <div key={section.label} className="p-4 rounded-xl bg-muted/50">
                              <div className="flex items-center gap-2 mb-3">
                                <section.icon className="h-4 w-4 text-primary" />
                                <h4 className="text-label text-primary">{section.label}</h4>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                            </div>
                          ))}
                        </div>

                        {/* Results */}
                        <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/10">
                          <h4 className="text-label text-primary mb-4">Results & Impact</h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {cs.results.map((r, ri) => (
                              <div key={ri} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                <p className="text-sm text-foreground">{r}</p>
                              </div>
                            ))}
                          </div>
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

export default CaseStudies;
