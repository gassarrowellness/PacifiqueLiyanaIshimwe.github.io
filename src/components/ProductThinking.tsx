import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, FlaskConical, Globe, Layers, Scale } from "lucide-react";

const principles = [
  {
    icon: Lightbulb,
    title: "Hypothesis-Driven Development",
    description: "Every feature starts with a clear hypothesis. I define what we're testing, what success looks like, and how we'll measure it before committing resources.",
  },
  {
    icon: FlaskConical,
    title: "Experimentation Before Scale",
    description: "Run small, fast experiments to validate assumptions. Pilots and MVPs reduce risk and build evidence for scaling decisions. Data over opinions.",
  },
  {
    icon: Globe,
    title: "Designing for Emerging Markets",
    description: "Products for emerging markets require deep empathy: offline-first design, local language support, and solutions that work on the devices and networks people actually have.",
  },
  {
    icon: Layers,
    title: "Building Scalable Platforms",
    description: "Great products become platforms. I think in terms of ecosystems: APIs, partnerships, and extensibility that multiply impact beyond a single use case.",
  },
  {
    icon: Scale,
    title: "Balancing Business & User Needs",
    description: "Sustainable products serve both users and the business. I optimize for user value while building towards revenue, retention, and long-term growth.",
  },
];

const ProductThinking = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Philosophy</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-10">
            Product <span className="gradient-text">Thinking</span>
          </h2>

          <div className="space-y-6">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6 md:p-8 flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-display text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductThinking;
