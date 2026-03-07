import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    period: "2022 – Present",
    role: "Senior Product Manager",
    company: "Viamo",
    description: "Leading AI-powered digital engagement platform serving 2M+ users. Launched world's first offline Gen-AI USSD assistant. Scaled national IVR programs with USAID, UNICEF, and government partners.",
    highlights: ["$2.4M ARR", "2M+ users", "Gen-AI USSD launch"],
  },
  {
    period: "2021 – 2022",
    role: "Product Manager",
    company: "MTN",
    description: "Managed MoMo API platform and digital services ecosystem. Drove third-party integrations and B2B revenue growth across mobile money services.",
    highlights: ["API platform", "B2B revenue", "Partner ecosystem"],
  },
  {
    period: "2019 – 2021",
    role: "Product Manager",
    company: "Brightlife / ENGIE Energy Access",
    description: "Built product strategy for pay-as-you-go solar energy services. Reduced churn, improved activation, and scaled distribution through agent networks.",
    highlights: ["40% activation lift", "Churn reduction", "Agent network"],
  },
  {
    period: "2018 – 2019",
    role: "Business Analyst",
    company: "Brightlife / FINCA International",
    description: "Data analysis and product insights for digital financial services targeting underserved communities in East Africa.",
    highlights: ["Data analytics", "Financial services", "Market research"],
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-muted/30" id="timeline">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Journey</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-16">
            Career <span className="gradient-text">Timeline</span>
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 w-[10px] h-[10px] rounded-full bg-primary border-2 border-background z-10 mt-7" />

                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-xs font-medium text-primary">{m.period}</span>
                    <h3 className="text-display text-lg font-bold mt-1">{m.role}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-2">{m.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{m.description}</p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {m.highlights.map((h) => (
                        <span key={h} className="px-3 py-1 bg-secondary rounded-lg text-xs font-medium text-foreground">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
