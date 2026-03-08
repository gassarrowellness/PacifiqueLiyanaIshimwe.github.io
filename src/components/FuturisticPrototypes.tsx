import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Shield, Landmark, HeartPulse } from "lucide-react";

const prototypes = [
  {
    icon: Shield,
    title: "Decentralized Identity for Informal Workers",
    subtitle: "Portable digital identity for the unbanked workforce",
    description: "A self-sovereign identity platform enabling informal sector workers to build verifiable work histories, credit profiles, and skill credentials — portable across employers, platforms, and borders.",
    userProblem: "Billions of informal workers lack verifiable employment records or credit histories, locking them out of financial services, insurance, and formal employment opportunities.",
    architecture: ["DID Registry", "Credential Issuer", "Verification API", "Mobile Wallet", "Partner Portal"],
  },
  {
    icon: HeartPulse,
    title: "Predictive Community Health Network",
    subtitle: "AI-driven early warning for disease outbreaks",
    description: "A network of community health workers equipped with AI-powered triage tools that aggregate symptom data to predict disease outbreaks before they escalate, enabling preemptive public health responses.",
    userProblem: "Rural health systems are reactive — outbreaks are detected too late for effective intervention. Community health workers lack tools to report and analyze patterns in real time.",
    architecture: ["CHW Mobile App", "Symptom Aggregator", "Prediction Engine", "Alert System", "Health Ministry Dashboard"],
  },
  {
    icon: Landmark,
    title: "Municipal Revenue Intelligence Platform",
    subtitle: "Smart revenue collection for local governments",
    description: "A platform that uses satellite imagery, mobile money transaction data, and property registries to identify revenue leakage, optimize tax collection, and improve service delivery in African municipalities.",
    userProblem: "Local governments in emerging markets collect less than 30% of potential revenue due to outdated registries, informal economies, and lack of enforcement tools.",
    architecture: ["Satellite Analysis", "Transaction Mapping", "Revenue Model", "Collection Engine", "Citizen Portal"],
  },
  {
    icon: Cpu,
    title: "AI-Powered Skills Marketplace for Africa",
    subtitle: "Matching informal skills with formal demand",
    description: "A two-sided marketplace that uses AI to assess, verify, and match informal sector skills (artisans, technicians, care workers) with formal employers, gig platforms, and training providers.",
    userProblem: "Africa's youth bulge creates massive supply of skilled workers, but fragmented markets, lack of credentials, and information asymmetry prevent efficient matching with demand.",
    architecture: ["Skills Assessment AI", "Matching Engine", "Credential Layer", "Employer API", "Training Recommender"],
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
            Forward-thinking product ideas I haven't built yet — exploring new problem spaces beyond my current work in AI, telecom, and energy.
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
