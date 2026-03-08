import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Vote, Scale, Radio } from "lucide-react";

const prototypes = [
  {
    icon: Truck,
    title: "Climate-Adaptive Supply Chain for Cooperatives",
    subtitle: "Weather-responsive logistics for smallholder farmer groups",
    description: "A platform that integrates real-time weather data, crop yield forecasts, and transport availability to dynamically optimize harvest collection routes and cold chain logistics for agricultural cooperatives.",
    userProblem: "Smallholder cooperatives lose up to 40% of perishable produce post-harvest due to unpredictable weather, poor road conditions, and lack of real-time coordination between farmers, aggregators, and buyers.",
    architecture: ["Weather Integration", "Route Optimizer", "Cooperative Dashboard", "Buyer Marketplace", "Cold Chain Tracker"],
  },
  {
    icon: Vote,
    title: "Civic Participation Platform for Urban Youth",
    subtitle: "Structured civic engagement beyond social media",
    description: "A platform that enables young urban residents to propose, debate, and vote on local policy priorities, then tracks government responses and implementation progress with transparent accountability metrics.",
    userProblem: "Urban youth across Africa feel disconnected from local governance. Existing feedback channels are bureaucratic and unresponsive, leading to disengagement and mistrust in public institutions.",
    architecture: ["Proposal Engine", "Deliberation Forum", "Voting Module", "Government API", "Accountability Tracker"],
  },
  {
    icon: Scale,
    title: "Cross-Border Trade Compliance Engine",
    subtitle: "Automated regulatory navigation for African SME traders",
    description: "An intelligent compliance tool that helps small and medium traders navigate AfCFTA regulations, tariff schedules, and documentation requirements across multiple African borders in real time.",
    userProblem: "Cross-border SME traders face inconsistent regulations, complex paperwork, and unpredictable tariffs that increase costs and delays. Most cannot afford trade compliance consultants.",
    architecture: ["Regulation Parser", "Tariff Calculator", "Document Generator", "Border Status API", "Trader Mobile App"],
  },
  {
    icon: Radio,
    title: "Disaster Response Coordination Network",
    subtitle: "Real-time resource matching during humanitarian crises",
    description: "A coordination platform that connects disaster response organizations, local volunteers, and affected communities to match needs with available resources during floods, droughts, and displacement events.",
    userProblem: "During humanitarian crises in emerging markets, response coordination is fragmented. Overlapping efforts waste resources while some communities receive no aid due to information gaps.",
    architecture: ["Needs Assessment Tool", "Resource Registry", "Matching Algorithm", "Field Agent App", "Donor Dashboard"],
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
            Forward-thinking product ideas exploring new problem spaces in logistics, civic tech, trade, and humanitarian response.
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
