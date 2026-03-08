import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, RefreshCcw, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  { icon: Search, title: "Strategic Discovery", desc: "Define problems, align stakeholders, prioritize with data" },
  { icon: RefreshCcw, title: "Iterative Development", desc: "Agile delivery, user feedback loops, MVP validation" },
  { icon: BarChart3, title: "Impact Measurement", desc: "Data-driven decisions, monitoring & evaluation, growth" },
];

const ProductPhilosophy = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">How I Work</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-12">
            Strategic → Iterative → <span className="gradient-text">Impact</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-display font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-lg text-foreground italic leading-relaxed mb-6">
              "I build products that matter, from concept to scale, with measurable outcomes."
            </p>
            <a href="#design-walkthrough" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline">
              My Product Design Walkthrough <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPhilosophy;
