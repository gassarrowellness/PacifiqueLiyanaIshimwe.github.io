import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Globe, Sprout, BarChart3, Wifi, Phone, Zap, Users } from "lucide-react";

const prototypes = [
  {
    icon: Cpu,
    title: "AI-Powered USSD Assistant",
    subtitle: "Last-mile AI for feature phone users",
    description: "A generative AI assistant that operates entirely offline via USSD, providing personalized health, agriculture, and civic guidance to users without internet access.",
    userProblem: "2.7B people globally lack internet access but own mobile phones. They're excluded from AI-powered services that could transform their daily decisions.",
    architecture: ["USSD Gateway", "NLP Engine", "Local LLM", "Content CMS", "Analytics Layer"],
  },
  {
    icon: Phone,
    title: "Voice-Based AI Service Platform",
    subtitle: "Conversational AI for low-connectivity environments",
    description: "An IVR-integrated AI platform that delivers voice-based advisory services in local languages, designed for environments where data connectivity is intermittent or unavailable.",
    userProblem: "Literacy barriers and low connectivity prevent millions from accessing critical information. Voice is the most natural interface for these communities.",
    architecture: ["IVR System", "Speech-to-Text", "AI Agent", "Text-to-Speech", "Feedback Loop"],
  },
  {
    icon: Sprout,
    title: "Digital Agriculture Advisory",
    subtitle: "Precision farming for smallholder farmers",
    description: "A mobile-first platform combining weather data, market intelligence, and AI-driven agronomic recommendations to optimize crop yields and market timing.",
    userProblem: "Smallholder farmers make critical planting and selling decisions without access to weather forecasts, market prices, or expert agronomic advice.",
    architecture: ["Weather API", "Market Data", "AI Advisory", "SMS/USSD Delivery", "Farmer Dashboard"],
  },
  {
    icon: BarChart3,
    title: "Telecom Data Intelligence Platform",
    subtitle: "Turning network data into product insights",
    description: "A data platform that transforms telecom usage patterns into actionable product and market intelligence for financial inclusion and digital service innovation.",
    userProblem: "Telecoms sit on massive user behavior data but lack tools to translate it into product opportunities for underserved segments.",
    architecture: ["Data Lake", "ETL Pipeline", "ML Models", "Insight Engine", "Product API"],
  },
];

const FuturisticPrototypes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="prototypes" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Innovation Lab</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            Future <span className="gradient-text">Product Concepts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Forward-thinking product ideas demonstrating vision for scalable, inclusive technology platforms.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {prototypes.map((proto, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6 md:p-8 group hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <proto.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-display font-semibold">{proto.title}</h3>
                    <p className="text-xs text-muted-foreground">{proto.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{proto.description}</p>

                {/* User Problem */}
                <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10 mb-6">
                  <p className="text-label text-destructive mb-2">User Problem</p>
                  <p className="text-sm text-muted-foreground">{proto.userProblem}</p>
                </div>

                {/* Architecture */}
                <div>
                  <p className="text-label text-primary mb-3">Product Architecture</p>
                  <div className="flex flex-wrap gap-2">
                    {proto.architecture.map((layer, li) => (
                      <div key={li} className="flex items-center gap-1">
                        <span className="px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-xs font-medium">
                          {layer}
                        </span>
                        {li < proto.architecture.length - 1 && (
                          <span className="text-muted-foreground/40">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturisticPrototypes;
