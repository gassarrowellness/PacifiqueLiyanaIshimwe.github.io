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
    tags: ["AI", "IVR", "Scale", "Partnerships"],
    problem: "Low-connectivity communities lacked access to reliable health, agriculture, and civic information. Existing digital channels couldn't reach last-mile users on basic phones.",
    userInsights: "Users needed voice-first, offline-capable solutions. Smartphone penetration was low, but mobile phone ownership was high. Content had to be in local languages.",
    hypothesis: "An AI-powered voice platform could deliver personalized information at scale, improving access and engagement while creating a sustainable revenue model.",
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
    title: "MoMo API Platform & Digital Services",
    tagline: "MTN — B2B mobile money platform and partner ecosystem",
    tags: ["Platform", "API", "B2B", "Telecom"],
    problem: "Third-party developers and businesses struggled to integrate with mobile money services, limiting the growth of the digital services ecosystem.",
    userInsights: "Partners needed reliable API access, clear documentation, and streamlined onboarding to build services on top of mobile money infrastructure.",
    hypothesis: "A well-managed API platform with streamlined partner onboarding would drive B2B revenue growth and expand the digital services ecosystem.",
    strategy: "Managed the MoMo API platform and digital services ecosystem. Drove third-party integrations and B2B revenue growth across mobile money services.",
    experimentation: "Iterated on partner integration flows and onboarding processes to reduce friction and improve developer experience.",
    execution: "Led cross-functional teams to deliver API platform improvements, partner ecosystem expansion, and B2B revenue initiatives.",
    results: [
      "Grew the third-party integration ecosystem",
      "Drove B2B revenue growth across mobile money services",
      "Improved partner onboarding and integration processes",
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
      "3 new products reached 5,000+ households",
      "$250K+ revenue generated",
      "70+ youth agents mobilized",
      "40% increase in partner engagement",
      "40% boost in digital product engagement",
      "Reduced indoor air pollution for adopting households",
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
    <section id="product-work" className="py-24 md:py-32 bg-muted/30">
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
            Real products I've built, scaled, and managed, structured as interactive case studies showing the full product journey.
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
