import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "4+", label: "Sectors" },
  { value: "2+", label: "Countries" },
  { value: "$250K+", label: "Revenue Driven" },
];

const partners = ["USAID", "UNICEF", "CIMMYT", "MTN", "ENGIE"];

const ImpactSnapshot = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-8">Quick Impact</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-display gradient-text">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-xs text-muted-foreground mb-4 text-center">Featured partnerships</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {partners.map((p) => (
                <span key={p} className="text-sm md:text-base font-semibold text-muted-foreground/60 tracking-wide">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSnapshot;
