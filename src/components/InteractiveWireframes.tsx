import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Smartphone, Hash, MessageSquare, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";

interface WireframeFlow {
  id: string;
  title: string;
  icon: typeof Smartphone;
  screens: { title: string; annotation: string; elements: string[] }[];
}

const flows: WireframeFlow[] = [
  {
    id: "onboarding",
    title: "Mobile Onboarding",
    icon: Smartphone,
    screens: [
      { title: "Welcome", annotation: "Value prop + language selector", elements: ["Logo", "Welcome message", "Language: EN | FR | SW", "[Get Started →]"] },
      { title: "Phone Verification", annotation: "SMS OTP for low-barrier auth", elements: ["Enter phone number", "+250 ________", "[Send Code]", "Skip for now"] },
      { title: "Profile Setup", annotation: "Minimal fields, progressive", elements: ["What's your name?", "________", "Your region?", "[Dropdown selector]", "[Continue →]"] },
      { title: "Topic Selection", annotation: "Personalized content delivery", elements: ["What interests you?", "☐ Health  ☐ Agriculture", "☐ Finance  ☐ Education", "[Start exploring →]"] },
    ],
  },
  {
    id: "ussd",
    title: "USSD Navigation",
    icon: Hash,
    screens: [
      { title: "Main Menu", annotation: "Simple numbered menu", elements: ["Welcome to Viamo", "1. Ask a question", "2. Health info", "3. Agri advisory", "4. My account", "Reply with number"] },
      { title: "AI Query", annotation: "Free-text natural language input", elements: ["Ask anything:", "Type your question", "________", "", "0. Back to menu"] },
      { title: "AI Response", annotation: "Chunked response for USSD limits", elements: ["Answer:", "The best time to plant", "maize is early in the", "rainy season when...", "1. More  2. New question", "0. Menu"] },
      { title: "Feedback", annotation: "Simple satisfaction capture", elements: ["Was this helpful?", "1. Yes", "2. No", "3. Ask another", "", "0. Menu"] },
    ],
  },
  {
    id: "ai-assistant",
    title: "AI Assistant",
    icon: MessageSquare,
    screens: [
      { title: "Chat Home", annotation: "Contextual quick actions", elements: ["AI Assistant", "How can I help?", "[🌱 Crop advice]", "[💊 Health info]", "[📊 Market prices]", "Type a message..."] },
      { title: "Conversation", annotation: "Natural language interaction", elements: ["User: What crops grow", "best in clay soil?", "", "AI: For clay soil, consider", "rice, wheat, or beans...", "[Follow-up suggestions]"] },
      { title: "Rich Response", annotation: "Structured data in chat", elements: ["AI: Here's a summary:", "┌──────────────┐", "│ Crop: Rice    │", "│ Season: Mar-Jun│", "│ Yield: High   │", "└──────────────┘"] },
      { title: "Action Card", annotation: "Actionable next steps", elements: ["Based on your query:", "📋 Save this advice", "📤 Share via SMS", "📅 Set reminder", "🔄 Ask follow-up"] },
    ],
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    icon: BarChart3,
    screens: [
      { title: "Overview", annotation: "KPI summary at a glance", elements: ["Dashboard", "┌─────┐ ┌─────┐", "│2.1M │ │ 75% │", "│Users│ │Retn.│", "└─────┘ └─────┘", "[Chart: User Growth ↗]"] },
      { title: "Engagement", annotation: "Feature usage breakdown", elements: ["Feature Adoption", "Health    ████████ 68%", "Agri      ██████ 52%", "Finance   ████ 34%", "Education ███ 28%", "[View details →]"] },
      { title: "Cohort View", annotation: "Retention by user segment", elements: ["Cohort Analysis", "Week │ W1  W2  W3  W4", "Jan  │ 80% 65% 52% 48%", "Feb  │ 85% 70% 58% 51%", "Mar  │ 82% 68% 55% 50%", "[Export CSV]"] },
      { title: "Revenue", annotation: "Monetization metrics", elements: ["Revenue Metrics", "MRR: $42,500", "ARPU: $0.85", "LTV: $12.40", "CAC: $2.10", "[Revenue forecast →]"] },
    ],
  },
];

const InteractiveWireframes = () => {
  const [activeFlow, setActiveFlow] = useState(0);
  const [activeScreen, setActiveScreen] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const currentFlow = flows[activeFlow];

  return (
    <section className="py-24 md:py-32 bg-muted/30" id="wireframes">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Wireframes</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="gradient-text">Product Flows</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Walk through product logic step by step — low-fidelity, annotated wireframes.
          </p>

          {/* Flow tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {flows.map((flow, i) => (
              <button
                key={flow.id}
                onClick={() => { setActiveFlow(i); setActiveScreen(0); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all shrink-0 ${
                  i === activeFlow
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                <flow.icon className="h-4 w-4" />
                {flow.title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Wireframe display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeFlow}-${activeScreen}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                {/* Phone frame */}
                <div className="bg-muted/50 p-3 border-b border-border flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">{currentFlow.title}</span>
                </div>
                <div className="p-8 min-h-[320px] flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-foreground mb-6">
                    {currentFlow.screens[activeScreen].title}
                  </h4>
                  <div className="space-y-2.5 font-mono text-sm text-muted-foreground">
                    {currentFlow.screens[activeScreen].elements.map((el, i) => (
                      <div key={i} className={el === "" ? "h-2" : ""}>
                        {el}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Navigation */}
                <div className="border-t border-border p-4 flex items-center justify-between">
                  <button
                    onClick={() => setActiveScreen(Math.max(0, activeScreen - 1))}
                    disabled={activeScreen === 0}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" /> Back
                  </button>
                  <div className="flex gap-1.5">
                    {currentFlow.screens.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveScreen(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === activeScreen ? "bg-primary w-5" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveScreen(Math.min(currentFlow.screens.length - 1, activeScreen + 1))}
                    disabled={activeScreen === currentFlow.screens.length - 1}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Annotation panel */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                {currentFlow.screens.map((screen, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveScreen(i)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      i === activeScreen
                        ? "border-primary/30 bg-primary/5"
                        : "border-transparent hover:bg-secondary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        i === activeScreen ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                      }`}>
                        {i + 1}
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
      </div>
    </section>
  );
};

export default InteractiveWireframes;
