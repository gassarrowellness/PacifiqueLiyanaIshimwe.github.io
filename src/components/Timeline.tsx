import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    period: "July 2025 - Present",
    role: "Founder & Operations Lead",
    company: "Gassarro",
    description: "Established and oversee end-to-end business operations, designing organizational structure, operational workflows, and performance management systems. Introduced KPIs, reporting dashboards, formal SOPs, and automation to reduce operational friction.",
    highlights: ["Operations design", "KPI dashboards", "Process automation"],
  },
  {
    period: "Apr 2025 – Jul 2025",
    role: "Senior Product Manager",
    company: "Opareta",
    description: "Led product management for a mobile app supporting analog mobile money agent networks with transaction tracking and operational digitization. Designed features for transaction recording, improved data capture accuracy, and built internal tools for field issue logging.",
    highlights: ["Mobile money agents", "Field ops digitization", "Multi-market rollout"],
  },
  {
    period: "March 2023 – February 2025",
    role: "Platform Manager",
    company: "Viamo",
    description: "Led a national digital engagement platform serving over 2 million users across health, agriculture, and civic education. Co-designed large-scale IVR programs with USAID, CIMMYT, UNICEF, and government partners. Piloted and launched the world's first offline Generative AI assistant.",
    highlights: ["2M+ users", "Gen-AI USSD launch", "90K AI queries"],
  },
  {
    period: "May 2022 – November 2022",
    role: "Product & Marketing Manager",
    company: "Brightlife by FINCA",
    description: "Spearheaded expansion of digital and commercial offerings, directing end-to-end launch of bundled clean cookstove and smartphone products for low-income households. Championed a youth agent program to strengthen last-mile distribution.",
    highlights: ["5K+ households", "$250K+ revenue", "70+ youth agents"],
  },
  {
    period: "Mar 2022 – May 2022",
    role: "Senior Product Analyst",
    company: "ENGIE Energy Access",
    description: "Conducted advanced product analytics and market research to inform strategic decisions for PayGo solar solutions across East African markets.",
    highlights: ["Product analytics", "Market strategy", "Data-driven decisions"],
  },
  {
    period: "October 2020 – March 2022",
    role: "Product & Strategy Specialist",
    company: "ENGIE Energy Access",
    description: "Led product innovation and market expansion for PayGo solar solutions. Launched bundled solar + satellite TV packages, piloted inverter-powered business systems, and tested solar irrigation for smallholder farmers.",
    highlights: ["PayGo solar", "CRM development", "SME solar initiatives"],
  },
];

const Timeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-20 bg-muted/30" id="timeline">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Journey</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-10">
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
