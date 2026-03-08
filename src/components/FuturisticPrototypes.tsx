import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wallet, ShoppingBag, BarChart3, Scale, CreditCard, Share2 } from "lucide-react";

const prototypes = [
  {
    icon: Wallet,
    title: "Embedded Savings & Credit Scoring for Gig Workers",
    subtitle: "Fintech infrastructure for the informal economy",
    description: "A fintech platform that embeds micro-savings and automated credit scoring into existing gig and trade platforms, using transaction history, mobile money patterns, and work frequency to generate creditworthiness profiles for workers without formal banking records.",
    userProblem: "Gig workers and informal traders generate consistent income but lack formal financial records. Banks cannot assess their creditworthiness, locking them out of loans, insurance, and savings products.",
    architecture: ["Transaction Aggregator", "Credit Scoring Engine", "Savings Wallet", "Lender API", "Worker Dashboard"],
  },
  {
    icon: ShoppingBag,
    title: "AI-Powered Inventory & Demand Forecasting for African E-Commerce",
    subtitle: "Predictive commerce for small online sellers",
    description: "An e-commerce operations tool that uses purchase pattern analysis, seasonal trends, and supplier lead times to help small and medium online sellers in African markets forecast demand, optimize stock levels, and automate reorder workflows.",
    userProblem: "Small e-commerce sellers in emerging markets either overstock and tie up capital, or understock and lose sales. They lack affordable forecasting tools built for fragmented, cash-heavy supply chains.",
    architecture: ["Sales Data Ingestion", "Demand Forecaster", "Supplier Connector", "Auto-Reorder Engine", "Seller Dashboard"],
  },
  {
    icon: BarChart3,
    title: "Social Media Revenue Optimization Engine",
    subtitle: "Turning engagement metrics into monetization strategy",
    description: "A platform that analyzes content performance, audience behavior, and conversion funnels across social channels to generate actionable monetization strategies for creators, brands, and SMEs in emerging markets.",
    userProblem: "African creators and SMEs invest heavily in social content but struggle to convert engagement into revenue. They lack tools that connect social analytics to actual sales performance and pricing decisions.",
    architecture: ["Multi-Platform Connector", "Engagement Analyzer", "Conversion Tracker", "Strategy Generator", "Revenue Dashboard"],
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
    icon: CreditCard,
    title: "Subscription Commerce Platform for African Retail",
    subtitle: "Recurring revenue models for physical goods sellers",
    description: "A platform enabling African retailers and FMCG distributors to offer subscription-based purchasing for essential goods, with mobile money integration, flexible delivery scheduling, and predictive replenishment based on household consumption patterns.",
    userProblem: "Consumers in emerging markets buy essentials reactively, often paying premium prices at local shops. Retailers lack infrastructure to offer subscription models that improve affordability and retention.",
    architecture: ["Subscription Builder", "Mobile Money Gateway", "Delivery Scheduler", "Consumption Predictor", "Retailer Portal"],
  },
  {
    icon: Share2,
    title: "Influencer-Commerce Bridge for Emerging Markets",
    subtitle: "Direct product sales through social content creators",
    description: "A platform connecting African brands with micro-influencers to enable trackable, commission-based product sales directly through social media content, with integrated payment processing and performance analytics.",
    userProblem: "Brands in emerging markets cannot measure influencer ROI. Influencers lack tools to monetize beyond sponsorships. No infrastructure connects social engagement to tracked commerce transactions.",
    architecture: ["Brand Marketplace", "Creator Storefront", "Attribution Engine", "Commission Tracker", "Payment Processor"],
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
            Forward-thinking product ideas exploring new problem spaces in fintech, e-commerce, social media optimization, and cross-border trade.
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
