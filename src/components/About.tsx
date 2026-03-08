import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">About</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-12">
            Building Products That <span className="gradient-text">Matter</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a product manager with experience managing products and initiatives across remote 
                teams. I've led a national digital engagement platform serving over 2 million users, 
                piloted and launched the world's first offline Generative AI assistant, and co-designed 
                large-scale programs with USAID, UNICEF, CIMMYT, and government partners.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My work spans AI, telecom, fintech, and renewable energy — building digital platforms, 
                running pilots, validating hypotheses, and scaling solutions that deliver measurable 
                impact. I bring a proven track record in stakeholder management, budget oversight, 
                and translating strategy into operational execution.
              </p>
            </div>

            <div className="space-y-8">
              <div className="glass rounded-xl p-6">
                <h3 className="text-label text-primary mb-4">How I Work</h3>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Strategic Discovery", desc: "Define problems, stakeholder alignment, cross-functional prioritization" },
                    { step: "02", title: "Iterative Development", desc: "Agile delivery, user feedback loops, MVP validation and experimentation" },
                    { step: "03", title: "Measurable Impact", desc: "Data-driven decisions, monitoring & evaluation, sustainable growth" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <span className="text-primary font-mono text-sm font-bold mt-1">{item.step}</span>
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Experience", value: "7+ yrs" },
                  { label: "Sectors", value: "4+" },
                  { label: "Countries", value: "2+" },
                ].map((s) => (
                  <div key={s.label} className="glass rounded-xl p-4 text-center">
                    <p className="text-xl font-bold text-display gradient-text">{s.value}</p>
                    <p className="text-[11px] text-muted-foreground mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
