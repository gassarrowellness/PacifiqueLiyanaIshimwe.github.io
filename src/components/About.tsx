import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

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
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-8">
            Building Products That <span className="gradient-text">Matter</span>
          </h2>

          {/* Testimonials Carousel */}
          <div className="mb-12">
            <Carousel opts={{ loop: true, align: "start" }} className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {testimonials.map((t, i) => (
                  <CarouselItem key={i}>
                    <div className="glass rounded-xl p-6 md:p-8">
                      <Quote className="h-6 w-6 text-primary/40 mb-3" />
                      <p className="text-muted-foreground leading-relaxed mb-5 italic">
                        "{t.quote}"
                      </p>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div>
                          <p className="font-medium text-foreground text-sm">{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.title}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-[10px]">Verified</Badge>
                          <span className="text-xs text-muted-foreground">{t.date}</span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12" />
              <CarouselNext className="hidden sm:flex -right-4 md:-right-12" />
            </Carousel>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">Hi, my name is Pacifique. I am a product manager who has led and built digital platforms, some of which served millions of users. I piloted and launched the world's first offline Generative AI assistant and co-designed programs with partners and government agencies.  I enjoy building products, digital platforms, running pilots, validate hypotheses, and scaling solutions that deliver measurable impact. I am very passionate about emerging markets in the global south. In my free time, I love to paint, practice yoga, and work out in the gym.




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