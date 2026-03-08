import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Smartphone, Hash, MessageSquare, BarChart3 } from "lucide-react";
import SmartphoneFrame, { ElementRenderer } from "./SmartphoneFrame";
import UssdPhoneFrame from "./UssdPhoneFrame";

interface WireframeFlow {
  id: string;
  title: string;
  icon: typeof Smartphone;
  type: "smartphone" | "ussd";
  screens: { title: string; annotation: string; elements: string[] }[];
}

const flows: WireframeFlow[] = [
  {
    id: "onboarding",
    title: "Mobile Onboarding",
    icon: Smartphone,
    type: "smartphone",
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
    type: "ussd",
    screens: [
      { title: "Main Menu", annotation: "Simple numbered menu", elements: ["Welcome to Viamo", "1. Ask a question", "2. Health info", "3. Agri advisory", "4. My account", "Reply with number"] },
      { title: "AI Query", annotation: "Free-text natural language input", elements: ["Ask anything:", "Type your question", "________", "", "0. Back to menu"] },
      { title: "AI Response", annotation: "Chunked response for USSD limits", elements: ["Answer:", "The best time to plant", "maize is early in the", "rainy season when...", "1. More  2. New question", "0. Menu"] },
      { title: "Feedback", annotation: "Simple satisfaction capture", elements: ["Was this helpful?", "1. Yes", "2. No", "3. Ask another", "", "0. Menu"] },
    ],
  },
  {
    id: "ai-assistant",
    title: "USSD Voice Assistant",
    icon: MessageSquare,
    type: "ussd",
    screens: [
      { title: "Dial-in & Welcome", annotation: "User dials shortcode *123# — no smartphone or internet needed", elements: ["📞 Dial *123#", "", "\"Welcome to [Service].", "For weather, press 1.", "For agri advice, press 2.", "For AI assistant, press 3.", "To repeat, press 9.\""] },
      { title: "Menu Navigation", annotation: "User presses 3 → AI assistant selected", elements: ["You pressed: 3", "", "\"You have chosen the AI", "assistant. Ask any question", "— health, farming, prices,", "or general knowledge.\"", "", "🔔 [Beep] Speak now..."] },
      { title: "Record Question", annotation: "Voice recorded until keypress or 2s silence", elements: ["🎙 Recording...", "", "User speaks:", "\"What is the price of", "maize today?\"", "", "🔔 [Beep] Recording saved.", "Processing your request..."] },
      { title: "Processing", annotation: "~3 sec wait — clearly communicated to user", elements: ["\"Thank you. Please wait", "while I process your", "request.\"", "", "⏳ Processing... (3 sec)", "", "♪ [Hold music / silence]"] },
      { title: "Voice Response", annotation: "TTS plays AI-generated answer", elements: ["🔊 AI Response:", "", "\"The current average price", "of maize in your region", "is 120 kwacha per kg.\"", "", "Press 1: Ask another", "Press 0: Main menu"] },
      { title: "Loop or Exit", annotation: "User loops back, returns to menu, or hangs up", elements: ["1 → Record new question", "0 → Return to main menu", "Hang up → Call ends", "", "If unclear:", "\"I didn't catch that.", "Please try again.\""] },
    ],
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    icon: BarChart3,
    type: "smartphone",
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

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Phone display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeFlow}-${activeScreen}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                {currentFlow.type === "ussd" ? (
                  <UssdPhoneFrame
                    screenTitle={currentFlow.screens[activeScreen].title}
                    currentScreen={activeScreen}
                    totalScreens={currentFlow.screens.length}
                    onPrev={() => setActiveScreen(Math.max(0, activeScreen - 1))}
                    onNext={() => setActiveScreen(Math.min(currentFlow.screens.length - 1, activeScreen + 1))}
                    onDotClick={setActiveScreen}
                  >
                    <div className="space-y-1">
                      {currentFlow.screens[activeScreen].elements.map((el, i) => (
                        <div key={i}>{el || "\u00A0"}</div>
                      ))}
                    </div>
                  </UssdPhoneFrame>
                ) : (
                  <SmartphoneFrame
                    screenTitle={currentFlow.screens[activeScreen].title}
                    currentScreen={activeScreen}
                    totalScreens={currentFlow.screens.length}
                    onPrev={() => setActiveScreen(Math.max(0, activeScreen - 1))}
                    onNext={() => setActiveScreen(Math.min(currentFlow.screens.length - 1, activeScreen + 1))}
                    onDotClick={setActiveScreen}
                  >
                    <div className="space-y-2">
                      {currentFlow.screens[activeScreen].elements.map((el, i) => (
                        <ElementRenderer key={i} element={el} />
                      ))}
                    </div>
                  </SmartphoneFrame>
                )}
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
