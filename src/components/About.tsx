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
          transition={{ duration: 0.7 }}>
          
          <p className="text-label text-primary mb-4">About</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-12">
            Building Products That <span className="gradient-text">Matter</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">Hi, my name is Pacifique. I am a product manager who has led digital platforms reaching millions of users. I piloted and launched the world's first offline Generative AI assistant and co-designed programs with partners and government agencies.  I enjoy building digital platforms, running pilots, validate hypotheses, and scaling solutions that deliver measurable impact. I am very passionate about emerging markets in the global south. In my free time, I love to paint, practice yoga, and work out in the gym.




              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">



              </p>
            </div>

            <div className="space-y-8">
              <div className="glass rounded-xl p-6">
                <h3 className="text-label text-primary mb-4">How I Work</h3>
                <div className="space-y-4">
                  {[
                  { step: "01", title: "Strategic Discovery", desc: "Define problems, leverage AI-powered insights for clear prioritization" },
                  { step: "02", title: "Iterative Development", desc: "Regular milestone reviews, collaborative feedback loops aligned to user needs" },
                  { step: "03", title: "Measurable Impact", desc: "Transparent communication, data-driven outcomes that drive growth" }].
                  map((item) =>
                  <div key={item.step} className="flex gap-4">
                      <span className="text-primary font-mono text-sm font-bold mt-1">{item.step}</span>
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                { label: "Experience", value: "6+ yrs" },
                { label: "Markets", value: "2+" },
                { label: "Products", value: "10+" }].
                map((s) =>
                <div key={s.label} className="glass rounded-xl p-4 text-center">
                    <p className="text-xl font-bold text-display gradient-text">{s.value}</p>
                    <p className="text-[11px] text-muted-foreground mt-1">{s.label}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default About;