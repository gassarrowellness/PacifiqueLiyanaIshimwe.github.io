import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { useScrollExpand } from "@/hooks/use-scroll-expand";
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
    tagline: "Serving 2M+ users across health, agriculture & civic education",
    tags: ["AI", "IVR", "Scale", "Partnerships"],
    problem: "Low-connectivity communities lacked access to reliable health, agriculture, and civic information. Existing digital channels couldn't reach last-mile users on basic phones.",
    userInsights: "Users needed voice-first, offline-capable solutions. Smartphone penetration was low, but mobile phone ownership was high. Content had to be in local languages.",
    hypothesis: "A voice platform could deliver relevant and sometimes lifesaving information at scale, improving access and engagement while creating a sustainable revenue model.",
    strategy: "Co-designed large-scale IVR programs with USAID, UNICEF, CIMMYT, and government partners. Built a monetization model around B2B partnerships and subscription services.",
    experimentation: "Piloted the world's first offline Generative AI assistant ('Ask Viamo Anything'), generating nearly 90,000 user queries during its initial phase to validate demand for AI-supported information access.",
    execution: "Led cross-functional teams to scale the platform nationally in Zambia. Restructured engagement and revenue systems to improve sustainability and scalability.",
    results: [
      "2M+ users served on the national platform",
      "~90,000 AI queries during initial pilot phase",
      "75%+ user retention rates on health programming",
      "50,000+ users with improved access to essential health services",
      "Revenue model revised for sustainable growth",
    ],
  },
  {
    title: "GenAI USSD Agent",
    tagline: "World's first offline Gen-AI digital assistant on USSD",
    tags: ["GenAI", "USSD", "Offline", "Innovation"],
    problem: "Remote users without internet access had no way to get real-time, personalized guidance on agriculture, health, and community services through basic phones.",
    userInsights: "Users on feature phones needed text-based AI interactions without requiring data connectivity. Drop-off rates on existing USSD services were high due to poor UX.",
    hypothesis: "A generative AI agent delivered via USSD could provide interactive, personalized support, demonstrating demand for AI access in low-connectivity settings.",
    strategy: "Built an AI-powered USSD agent that could process natural language queries and deliver real-time guidance across agriculture, health, and community services.",
    experimentation: "Ran controlled pilot in Zambia with rural communities, implementing the product from inception to commercial launch.",
    execution: "Developed from inception to commercial launch. Integrated with existing USSD infrastructure. Trained AI models on local content and language patterns.",
    results: [
      "Demonstrated demand for AI-supported information in low-connectivity settings",
      "Published as GSMA case study in partnership with GSMA",
      "Presented at GDDF Panel as world first",
      "Successfully transitioned from pilot to commercial launch",
    ],
  },
  {
    title: "Mobile Money Agent Support Platform",
    tagline: "Migrating agent workflows from WhatsApp to a dedicated platform",
    tags: ["Mobile Money", "Agent Tools", "Migration", "Platform"],
    problem: "Mobile money agents relied on WhatsApp for operational communication, creating fragmented workflows, poor visibility, and inconsistent support across the agent network.",
    userInsights: "Agents needed a centralized tool for communication and task management. WhatsApp lacked structure for tracking, escalation, and operational reporting.",
    hypothesis: "A dedicated agent platform replacing WhatsApp would reduce communication friction, improve operational tracking, and increase agent efficiency across the network.",
    strategy: "Designed product requirements, user stories, and a feature roadmap focused on agent efficiency and operational visibility. Coordinated migration from WhatsApp to the new platform.",
    experimentation: "Ran phased migration with agent cohorts, gathering feedback on adoption barriers and iterating on UX to reduce friction during the transition.",
    execution: "Coordinated engineering, QA, and operations teams to ensure smooth migration and adoption. Led end-to-end product delivery from requirements through launch.",
    results: [
      "Reduced agent communication friction",
      "Improved operational tracking and visibility",
      "Increased adoption of the new agent tool across the network",
      "Successfully migrated workflows from WhatsApp to dedicated platform",
    ],
  },
  {
    title: "Cookstove & Smartphone Bundles",
    tagline: "Clean cooking meets connectivity for 5,000+ households in Uganda",
    tags: ["Clean Cooking", "Bundled Product", "Last-Mile", "Uganda"],
    problem: "Low-income households in Uganda cooked on charcoal and open fires, causing health and environmental harm, while lacking affordable access to digital connectivity.",
    userInsights: "Households saw value in getting a smartphone alongside a cookstove. Clean cooking alone wasn't a strong enough purchase motivator, but bundling it with connectivity was.",
    hypothesis: "Bundling clean cookstoves with smartphones and selling through a youth agent network would make both products more attractive and reach households traditional retail couldn't.",
    strategy: "Designed a bundled product line pairing clean cookstoves with smartphones. Built a youth agent distribution program to reach last-mile communities across Uganda.",
    experimentation: "Tested different bundle configurations and agent incentive models across regions to optimize adoption rates and agent retention.",
    execution: "Mobilized 70+ youth agents, aligned engineering, sales, and external partners, and managed end-to-end go-to-market execution.",
    results: [
      "3 bundled products reached 5,000+ households",
      "$250K+ revenue generated",
      "70+ youth agents mobilized",
      "40% increase in partner engagement",
      "40% boost in digital product engagement",
    ],
  },
  {
    title: "PayGo Solar + Satellite TV Bundles",
    tagline: "Affordable solar-powered entertainment for off-grid Zambia",
    tags: ["Solar", "PayGo", "Bundled Product", "Zambia"],
    problem: "Off-grid households in Zambia wanted entertainment and information access but couldn't afford upfront costs for solar systems or satellite TV separately.",
    userInsights: "Customers valued entertainment as much as lighting. A solar panel alone wasn't compelling enough, but pairing it with satellite TV created strong demand.",
    hypothesis: "A PayGo solar + satellite TV bundle with flexible payments would drive adoption by solving two needs (energy and entertainment) in a single affordable package.",
    strategy: "Launched a bundled solar home system with integrated satellite TV, sold on a PayGo financing model to make it affordable for off-grid households.",
    experimentation: "Piloted the solar + TV bundle across Zambian markets to validate demand, pricing sensitivity, and payment completion rates.",
    execution: "Led product launch end-to-end including pricing strategy, CRM workflow migration, and UX training library for the Zambian team.",
    results: [
      "Expanded product reach across Zambia's off-grid market",
      "Achieved 100% adoption of new CRM and training tools",
      "Reduced operational costs through budget tracking",
      "Validated demand for bundled solar + entertainment products",
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

const CaseStudyContent = ({ cs }: { cs: CaseStudy }) => (
  <div className="px-6 md:px-8 pb-8 border-t border-border">
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
);

const CaseStudies = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="product-work" className="py-16 md:py-20 bg-muted/30">
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
          <p className="text-muted-foreground max-w-2xl mb-10">
            Real products I've built, scaled, and/or managed, structured as interactive case studies showing the full product journey.
          </p>

          <div className="space-y-4">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl overflow-hidden case-study-card"
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

                {/* Interactive expanded content */}
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden print-hidden"
                    >
                      <CaseStudyContent cs={cs} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Print-only: always visible */}
                <div className="hidden case-study-content">
                  <CaseStudyContent cs={cs} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
