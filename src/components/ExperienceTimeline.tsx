import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const roles = [
  {
    period: "2025 – Now",
    role: "Founder & Ops Lead",
    company: "Gassarro",
    impact: "Operations design, KPIs, automation",
  },
  {
    period: "2023 – 2025",
    role: "Platform Manager",
    company: "Viamo",
    impact: "2M+ users, GenAI pilot, 90K AI queries",
  },
  {
    period: "2022",
    role: "Product & Marketing Manager",
    company: "Brightlife by FINCA",
    impact: "5K+ households, $250K+ revenue, 70+ agents",
  },
  {
    period: "2020 – 2022",
    role: "Product & Marketing Manager",
    company: "ENGIE Energy Access",
    impact: "PayGo solar, CRM development, SME solar pilots",
  },
  {
    period: "2018 – 2019",
    role: "Business Analyst",
    company: "Brightlife / FINCA International",
    impact: "Data analytics, financial services, market research",
  },
];

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Experience</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-12">
            Career <span className="gradient-text">Timeline</span>
          </h2>

          <div className="space-y-6">
            {roles.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <div className="shrink-0 w-24 md:w-28">
                  <span className="text-xs font-medium text-primary">{r.period}</span>
                </div>
                <div className="relative pl-6 border-l-2 border-border pb-2">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                  <h3 className="text-display font-semibold text-foreground">{r.role}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{r.company}</p>
                  <p className="text-sm text-muted-foreground/70">→ {r.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="sm" className="rounded-full gap-2" asChild>
              <a href="/Pacifique_Liyana_Ishimwe_Resume.pdf" target="_blank">
                View Full Resume <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
