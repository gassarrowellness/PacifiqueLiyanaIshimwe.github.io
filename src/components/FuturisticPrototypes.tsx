import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Wallet, ShoppingBag, BarChart3, Scale, CreditCard, Share2, Play, X } from "lucide-react";
import SmartphoneFrame, { ElementRenderer } from "./SmartphoneFrame";

interface Screen {
  title: string;
  annotation: string;
  elements: string[];
}

const prototypes = [
  {
    icon: Wallet,
    title: "Embedded Savings & Credit Scoring for Gig Workers",
    subtitle: "Fintech infrastructure for the informal economy",
    description: "A fintech platform that embeds micro-savings and automated credit scoring into existing gig and trade platforms, using transaction history, mobile money patterns, and work frequency to generate creditworthiness profiles for workers without formal banking records.",
    userProblem: "Gig workers and informal traders generate consistent income but lack formal financial records. Banks cannot assess their creditworthiness, locking them out of loans, insurance, and savings products.",
    architecture: ["Transaction Aggregator", "Credit Scoring Engine", "Savings Wallet", "Lender API", "Worker Dashboard"],
    screens: [
      { title: "Welcome", annotation: "Onboarding with platform linking", elements: ["💰 GigCredit", "Welcome, worker!", "Link your gig accounts", "to unlock credit.", "[Get Started →]"] },
      { title: "Link Accounts", annotation: "Connect mobile money & gig platforms", elements: ["Connect Your Accounts", "☑ MTN MoMo linked", "☐ Bolt driver account", "☐ Jumia seller", "[Link account]", "Skip for now"] },
      { title: "Credit Score", annotation: "AI-generated creditworthiness", elements: ["Your Credit Score", "┌──────────────┐", "│   ★ 720      │", "│  Good Standing │", "└──────────────┘", "Based on 6mo activity"] },
      { title: "Loan Offers", annotation: "Matched lending products", elements: ["Available Offers", "┌ Micro Loan ────┐", "│ ZMW 15,000     │", "│ 2.5% / 30 days │", "│ [Apply Now]     │", "└────────────────┘"] },
    ] as Screen[],
  },
  {
    icon: ShoppingBag,
    title: "AI-Powered Inventory & Demand Forecasting for African E-Commerce",
    subtitle: "Predictive commerce for small online sellers",
    description: "An e-commerce operations tool that uses purchase pattern analysis, seasonal trends, and supplier lead times to help small and medium online sellers in African markets forecast demand, optimize stock levels, and automate reorder workflows.",
    userProblem: "Small e-commerce sellers in emerging markets either overstock and tie up capital, or understock and lose sales. They lack affordable forecasting tools built for fragmented, cash-heavy supply chains.",
    architecture: ["Sales Data Ingestion", "Demand Forecaster", "Supplier Connector", "Auto-Reorder Engine", "Seller Dashboard"],
    screens: [
      { title: "Dashboard", annotation: "Overview of stock health", elements: ["📦 StockSmart", "┌─────┐ ┌─────┐", "│ 142 │ │  8  │", "│Items│ │Alerts│", "└─────┘ └─────┘", "Stock Health: 85% ✓"] },
      { title: "Stock Alert", annotation: "Low stock warning with context", elements: ["⚠ Low Stock Alert", "Product: Blue T-Shirt M", "Current: 3 units", "Avg. weekly sales: 12", "Restock recommended", "[Auto-reorder →]"] },
      { title: "Demand Forecast", annotation: "AI-predicted demand curve", elements: ["Demand Forecast", "Next 30 days:", "Blue T-Shirt ████████ 48", "Red Hoodie  ██████ 36", "Cap         ████ 24", "Confidence: 87%"] },
      { title: "Auto-Reorder", annotation: "One-tap supplier reorder", elements: ["Auto-Reorder", "Supplier: TextileCo", "Items: 3 SKUs", "Total: $420", "ETA: 5 business days", "[Confirm Order →]"] },
    ] as Screen[],
  },
  {
    icon: BarChart3,
    title: "Social Media Revenue Optimization Engine",
    subtitle: "Turning engagement metrics into monetization strategy",
    description: "A platform that analyzes content performance, audience behavior, and conversion funnels across social channels to generate actionable monetization strategies for creators, brands, and SMEs in emerging markets.",
    userProblem: "African creators and SMEs invest heavily in social content but struggle to convert engagement into revenue. They lack tools that connect social analytics to actual sales performance and pricing decisions.",
    architecture: ["Multi-Platform Connector", "Engagement Analyzer", "Conversion Tracker", "Strategy Generator", "Revenue Dashboard"],
    screens: [
      { title: "Connect Channels", annotation: "Multi-platform account linking", elements: ["📊 RevEngine", "Connect your channels:", "☑ Instagram (12K)", "☑ TikTok (8.5K)", "☐ YouTube", "[+ Add channel]"] },
      { title: "Performance View", annotation: "Cross-platform engagement metrics", elements: ["This Week's Performance", "Reach:     45.2K ↑12%", "Engage:    3.8K  ↑8%", "Clicks:    890   ↑22%", "Revenue:   $340  ↑15%", "[View breakdown →]"] },
      { title: "Strategy Card", annotation: "AI-generated monetization advice", elements: ["💡 Strategy Insight", "Your Reels convert 3x", "better than static posts.", "", "Recommendation:", "Shift 60% content to", "short-form video."] },
      { title: "Revenue Report", annotation: "Attribution & earnings summary", elements: ["Revenue Report", "┌────────────────┐", "│ This Month     │", "│ $1,240 earned  │", "│ Top: IG Reels   │", "│ ROI: 340%      │", "└────────────────┘"] },
    ] as Screen[],
  },
  {
    icon: Scale,
    title: "Cross-Border Trade Compliance Engine",
    subtitle: "Automated regulatory navigation for African SME traders",
    description: "An intelligent compliance tool that helps small and medium traders navigate AfCFTA regulations, tariff schedules, and documentation requirements across multiple African borders in real time.",
    userProblem: "Cross-border SME traders face inconsistent regulations, complex paperwork, and unpredictable tariffs that increase costs and delays. Most cannot afford trade compliance consultants.",
    architecture: ["Regulation Parser", "Tariff Calculator", "Document Generator", "Border Status API", "Trader Mobile App"],
    screens: [
      { title: "Select Route", annotation: "Origin & destination selection", elements: ["🌍 TradePass", "Select Trade Route:", "From: [Rwanda 🇷🇼]", "To:   [Uganda 🇺🇬]", "Goods: [Textiles ▼]", "[Check Requirements →]"] },
      { title: "Tariff Check", annotation: "Real-time tariff calculation", elements: ["Tariff Summary", "Product: Cotton textiles", "HS Code: 5208.21", "Duty: 10% (AfCFTA)", "VAT: 18%", "Est. cost: $1,240"] },
      { title: "Document Generator", annotation: "Auto-filled export documents", elements: ["Required Documents", "☑ Certificate of Origin", "☑ Commercial Invoice", "☐ Phyto Certificate", "☐ Packing List", "[Generate All →]"] },
      { title: "Submission Status", annotation: "Track clearance progress", elements: ["Clearance Status", "Step 1: Docs ✅", "Step 2: Customs ✅", "Step 3: Inspection 🔄", "Step 4: Release ⏳", "ETA: 2 hours"] },
    ] as Screen[],
  },
  {
    icon: CreditCard,
    title: "Subscription Commerce Platform for African Retail",
    subtitle: "Recurring revenue models for physical goods sellers",
    description: "A platform enabling African retailers and FMCG distributors to offer subscription-based purchasing for essential goods, with mobile money integration, flexible delivery scheduling, and predictive replenishment based on household consumption patterns.",
    userProblem: "Consumers in emerging markets buy essentials reactively, often paying premium prices at local shops. Retailers lack infrastructure to offer subscription models that improve affordability and retention.",
    architecture: ["Subscription Builder", "Mobile Money Gateway", "Delivery Scheduler", "Consumption Predictor", "Retailer Portal"],
    screens: [
      { title: "Browse Plans", annotation: "Subscription product catalog", elements: ["🛒 SubShop", "Essential Bundles:", "┌ Weekly Basics ──┐", "│ Rice, Oil, Soap  │", "{ title: "Browse Plans", annotation: "Subscription product catalog", elements: ["🛒 SubShop", "Essential Bundles:", "┌ Weekly Basics ──┐", "│ Rice, Oil, Soap  │", "│ ZMW 850/week     │", "│ [Subscribe →]    │", "└─────────────────┘"] },", "│ [Subscribe →]    │", "└─────────────────┘"] },
      { title: "Customize Delivery", annotation: "Flexible scheduling options", elements: ["Delivery Schedule", "Frequency:", "○ Weekly  ● Bi-weekly", "○ Monthly", "Preferred day: [Sat ▼]", "Time: [Morning ▼]"] },
      { title: "Payment Setup", annotation: "Mobile money integration", elements: ["Payment Method", "☑ MTN MoMo Auto-pay", "Phone: +260 9XX XXX", "Amount: ZMW 1,700", "Cycle: Every 2 weeks", "[Activate Plan →]"] },
      { title: "Active Subscription", annotation: "Subscription management view", elements: ["My Subscription ✅", "Next delivery: Sat 15", "Items: 6 products", "Saved vs retail: 18%", "[Modify] [Pause]", "[Add items +]"] },
    ] as Screen[],
  },
  {
    icon: Share2,
    title: "Influencer-Commerce Bridge for Emerging Markets",
    subtitle: "Direct product sales through social content creators",
    description: "A platform connecting African brands with micro-influencers to enable trackable, commission-based product sales directly through social media content, with integrated payment processing and performance analytics.",
    userProblem: "Brands in emerging markets cannot measure influencer ROI. Influencers lack tools to monetize beyond sponsorships. No infrastructure connects social engagement to tracked commerce transactions.",
    architecture: ["Brand Marketplace", "Creator Storefront", "Attribution Engine", "Commission Tracker", "Payment Processor"],
    screens: [
      { title: "Brand Catalog", annotation: "Available brand partnerships", elements: ["🤝 CreatorBridge", "Available Campaigns:", "┌ FreshCo Juice ──┐", "│ 12% commission   │", "│ 30-day campaign  │", "│ [Apply →]        │", "└─────────────────┘"] },
      { title: "Creator Storefront", annotation: "Personalized product page", elements: ["Your Storefront", "linkto.me/amara_style", "Products: 8 active", "Visitors today: 145", "Conversion: 4.2%", "[Edit storefront →]"] },
      { title: "Sale Attribution", annotation: "Real-time sales tracking", elements: ["Live Sales Feed", "🟢 New sale! $24.00", "   via IG Story link", "🟢 New sale! $18.50", "   via TikTok bio", "Today: $142.50 (6 sales)"] },
      { title: "Payout Summary", annotation: "Earnings & payment dashboard", elements: ["Earnings", "This month: $680", "Pending: $142.50", "Paid out: $537.50", "Next payout: Fri", "[Request early payout]"] },
    ] as Screen[],
  },
];

const FuturisticPrototypes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [activeScreens, setActiveScreens] = useState<Record<number, number>>({});

  const toggleCard = (i: number) => {
    setExpandedCard(expandedCard === i ? null : i);
    if (expandedCard !== i) {
      setActiveScreens((prev) => ({ ...prev, [i]: 0 }));
    }
  };

  const setScreen = (cardIndex: number, screenIndex: number) => {
    setActiveScreens((prev) => ({ ...prev, [cardIndex]: screenIndex }));
  };

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
            {prototypes.map((proto, i) => {
              const isExpanded = expandedCard === i;
              const currentScreen = activeScreens[i] ?? 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`glass rounded-2xl p-6 md:p-8 group transition-all duration-300 ${isExpanded ? "md:col-span-2 shadow-lg" : "hover:shadow-lg"}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <proto.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-display font-semibold">{proto.title}</h3>
                      <p className="text-xs text-muted-foreground">{proto.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{proto.description}</p>

                  <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10 mb-6">
                    <p className="text-label text-destructive mb-2">User Problem</p>
                    <p className="text-sm text-muted-foreground">{proto.userProblem}</p>
                  </div>

                  <div className="mb-6">
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

                  {/* Explore Flow button */}
                  <button
                    onClick={() => toggleCard(i)}
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {isExpanded ? <X className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    {isExpanded ? "Close Flow" : "Explore Flow"}
                  </button>

                  {/* Inline wireframe viewer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-border items-center">
                          {/* Smartphone */}
                          <SmartphoneFrame
                            screenTitle={proto.screens[currentScreen].title}
                            currentScreen={currentScreen}
                            totalScreens={proto.screens.length}
                            onPrev={() => setScreen(i, Math.max(0, currentScreen - 1))}
                            onNext={() => setScreen(i, Math.min(proto.screens.length - 1, currentScreen + 1))}
                            onDotClick={(si) => setScreen(i, si)}
                          >
                            <div className="space-y-2">
                              {proto.screens[currentScreen].elements.map((el, ei) => (
                                <ElementRenderer key={ei} element={el} />
                              ))}
                            </div>
                          </SmartphoneFrame>

                          {/* Annotation panel */}
                          <div className="flex flex-col justify-center">
                            <div className="space-y-4">
                              {proto.screens.map((screen, si) => (
                                <button
                                  key={si}
                                  onClick={() => setScreen(i, si)}
                                  className={`w-full text-left p-3 rounded-xl border transition-all ${si === currentScreen ? "border-primary/30 bg-primary/5" : "border-transparent hover:bg-secondary/50"}`}
                                >
                                  <div className="flex items-center gap-3">
                                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${si === currentScreen ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                                      {si + 1}
                                    </span>
                                    <div>
                                      <p className="font-medium text-sm text-foreground">{screen.title}</p>
                                      <p className="text-xs text-muted-foreground">{screen.annotation}</p>
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FuturisticPrototypes;
