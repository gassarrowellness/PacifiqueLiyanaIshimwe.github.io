import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const capabilities = [
  "Product Strategy",
  "User Research",
  "Experimentation",
  "Go-to-Market",
  "Platform/API Mgmt",
  "Data Analytics",
];

const tools = ["Linear", "Jira", "Figma", "PostHog", "SQL", "Tableau", "Notion", "Looker Studio"];

const Capabilities = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Capabilities</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-12">
            Skills & <span className="gradient-text">Tools</span>
          </h2>

          <div className="flex flex-wrap gap-3 mb-10">
            {capabilities.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.06, duration: 0.3 }}
                className="px-5 py-2.5 rounded-xl glass text-sm font-medium text-foreground"
              >
                {c}
              </motion.span>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mb-4">Core tools</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
