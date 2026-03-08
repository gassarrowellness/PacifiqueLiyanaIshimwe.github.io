import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featured = [
  {
    label: "Most Impressive",
    title: "National Digital Engagement Platform",
    company: "Viamo",
    tagline: "2M+ users across health, agriculture & civic education",
    highlights: [
      "Led platform serving 2M+ users nationally",
      "Co-designed programs with USAID, UNICEF, CIMMYT",
      "Piloted world's first offline GenAI assistant",
    ],
  },
  {
    label: "Innovation Highlight",
    title: "GenAI USSD Agent",
    company: "Viamo",
    tagline: "World's first offline Gen-AI digital assistant on USSD",
    highlights: [
      "~90K pilot queries in initial phase",
      "First-of-its-kind innovation on basic phones",
      "Published as GSMA case study",
    ],
  },
  {
    label: "Business Impact",
    title: "Renewable Energy Product Expansion",
    company: "Brightlife & ENGIE",
    tagline: "Solar, cookstoves & digital products across Africa",
    highlights: [
      "3 new products reached 5,000+ households",
      "$250K+ revenue generated",
      "70+ youth agents mobilized for last-mile distribution",
    ],
  },
];

const FeaturedWork = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Featured Work</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-16">
            Top <span className="gradient-text">Case Studies</span>
          </h2>

          <div className="space-y-6">
            {featured.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass rounded-2xl p-6 md:p-8"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {item.label}
                </span>
                <h3 className="text-display text-xl md:text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  {item.company} | {item.tagline}
                </p>
                <ul className="space-y-2 mb-6">
                  {item.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <a href="#product-work" className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline">
                  View Case Study <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" className="rounded-full gap-2" asChild>
              <a href="#product-work">
                View All Projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
