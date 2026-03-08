import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Phone, Mic, Volume2, Loader2, ArrowRight, Globe, Clock, AlertCircle, Languages } from "lucide-react";
import SmartphoneFrame from "./SmartphoneFrame";

interface Step {
  title: string;
  annotation: string;
  description: string;
  visualType: "dialin" | "menu" | "record" | "processing" | "response" | "loop";
}

const steps: Step[] = [
  {
    title: "Dial-in & Welcome",
    annotation: "User dials shortcode - no smartphone or internet needed",
    description: "User dials the service number (e.g., *123#) and presses the call button. The system answers with a welcome message presenting the main menu options.",
    visualType: "dialin",
  },
  {
    title: "Menu Navigation",
    annotation: "User presses 3 on the keypad to select the AI assistant",
    description: "The system confirms the selection: \"You have chosen the AI assistant. You can ask any question - about health, farming, market prices, or general knowledge.\"",
    visualType: "menu",
  },
  {
    title: "Record Question",
    annotation: "Voice recorded until keypress or 2 seconds of silence",
    description: "The user speaks their question (e.g., \"What is the price of maize today?\"). A beep indicates recording has started; another beep confirms recording stopped.",
    visualType: "record",
  },
  {
    title: "Processing",
    annotation: "~3 second wait - clearly communicated to the user",
    description: "The system says: \"Thank you. Please wait while I process your request.\" The AI model generates a response in approximately 3 seconds.",
    visualType: "processing",
  },
  {
    title: "Voice Response",
    annotation: "Text-to-speech plays the AI-generated answer",
    description: "The system plays the answer: \"The current average price of maize in your region is 120 kwacha per kilogram.\" Then asks if the user wants to continue.",
    visualType: "response",
  },
  {
    title: "Loop or Exit",
    annotation: "User loops back, returns to menu, or hangs up",
    description: "Press 1 to ask another question, press 0 to return to the main menu, or hang up to end the call. If input is unclear, the system prompts: \"I didn't catch that. Please try again.\"",
    visualType: "loop",
  },
];

const considerations = [
  { icon: Globe, title: "Accessibility", desc: "Works on any phone - no data plan or smartphone required." },
  { icon: Clock, title: "Latency", desc: "3-second processing wait is clearly communicated to manage expectations." },
  { icon: AlertCircle, title: "Error Handling", desc: "If recording is unclear, the system plays a helpful retry prompt." },
  { icon: Languages, title: "Language Support", desc: "Prompts delivered in multiple local languages based on user selection." },
];

const StepVisual = ({ type }: { type: Step["visualType"] }) => {
  switch (type) {
    case "dialin":
      return (
        <div className="flex flex-col items-center h-full">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <p className="text-sm font-bold text-foreground">Dial *123#</p>
          </div>
          <div className="w-full space-y-1.5 mt-auto bg-secondary/40 rounded-xl p-3">
            <p className="text-[11px] text-muted-foreground italic">"Welcome to [Service Name]."</p>
            <p className="text-[11px] text-foreground">Press 1 - Weather info</p>
            <p className="text-[11px] text-foreground">Press 2 - Agri advice</p>
            <p className="text-[11px] text-foreground font-semibold text-primary">Press 3 - AI Assistant</p>
            <p className="text-[11px] text-foreground">Press 9 - Repeat menu</p>
          </div>
        </div>
      );

    case "menu":
      return (
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-cols-3 gap-1.5 w-fit">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((key) => (
              <div
                key={key}
                className={`w-10 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${
                  key === "3"
                    ? "bg-primary text-primary-foreground ring-2 ring-primary/50 scale-110"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {key}
              </div>
            ))}
          </div>
          <div className="w-full bg-secondary/40 rounded-xl p-3 mt-1">
            <p className="text-[11px] text-muted-foreground italic">"You have chosen the AI assistant. Ask any question - health, farming, prices, or general knowledge."</p>
          </div>
        </div>
      );

    case "record":
      return (
        <div className="flex flex-col items-center gap-5">
          <p className="text-[11px] text-muted-foreground">Speak your question after the beep</p>
          <motion.div
            className="relative w-24 h-24 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center"
            animate={{ boxShadow: ["0 0 0 0px hsl(var(--primary) / 0.3)", "0 0 0 16px hsl(var(--primary) / 0)", "0 0 0 0px hsl(var(--primary) / 0.3)"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mic className="h-10 w-10 text-primary" />
          </motion.div>
          <p className="text-sm font-semibold text-foreground">Tap to speak</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            <span className="text-[11px] text-muted-foreground">Recording...</span>
          </div>
        </div>
      );

    case "processing":
      return (
        <div className="flex flex-col items-center gap-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="h-12 w-12 text-primary" />
          </motion.div>
          <p className="text-sm font-semibold text-foreground">Processing your request...</p>
          <div className="w-full bg-secondary/40 rounded-xl p-3">
            <p className="text-[11px] text-muted-foreground italic">"Thank you. Please wait while I process your request."</p>
          </div>
          <div className="flex gap-1 items-end h-4">
            {[0.3, 0.6, 1, 0.6, 0.3].map((h, i) => (
              <motion.div
                key={i}
                className="w-1.5 bg-primary/40 rounded-full"
                animate={{ height: [h * 8, h * 16, h * 8] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </div>
        </div>
      );

    case "response":
      return (
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
            <Volume2 className="h-7 w-7 text-primary" />
          </div>
          {/* Waveform */}
          <div className="flex gap-0.5 items-end h-8">
            {[0.4, 0.7, 1, 0.8, 0.5, 0.9, 0.6, 1, 0.7, 0.3, 0.8, 0.5].map((h, i) => (
              <motion.div
                key={i}
                className="w-1 bg-primary rounded-full"
                animate={{ height: [h * 12, h * 24, h * 12] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
          <div className="w-full bg-secondary/40 rounded-xl p-3 space-y-2">
            <p className="text-[11px] text-muted-foreground italic">"The current average price of maize in your region is 120 kwacha per kilogram."</p>
            <p className="text-[11px] text-foreground font-medium mt-2">Press 1 - Ask another question</p>
            <p className="text-[11px] text-foreground font-medium">Press 0 - Return to main menu</p>
          </div>
        </div>
      );

    case "loop":
      return (
        <div className="flex flex-col items-center gap-3">
          <div className="w-full space-y-2">
            {[
              { key: "1", label: "Ask another question", icon: Mic },
              { key: "0", label: "Return to main menu", icon: Phone },
            ].map((opt) => (
              <div key={opt.key} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/40">
                <span className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{opt.key}</span>
                <opt.icon className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-foreground font-medium">{opt.label}</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground ml-auto" />
              </div>
            ))}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-destructive/5 border border-destructive/20">
              <span className="w-7 h-7 rounded-lg bg-destructive/10 flex items-center justify-center text-xs font-bold text-destructive">✕</span>
              <span className="text-xs text-foreground font-medium">Hang up - Call ends</span>
            </div>
          </div>
          <div className="w-full bg-secondary/40 rounded-xl p-3 mt-2">
            <p className="text-[11px] text-muted-foreground italic">If unclear: "I didn't catch that. Please try again."</p>
          </div>
        </div>
      );
  }
};

const InteractiveWireframes = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const current = steps[activeScreen];

  return (
    <section className="py-16 md:py-20 bg-muted/30" id="wireframes">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Voice Interface Prototype</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            USSD <span className="gradient-text">Voice Assistant</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            An AI-powered voice assistant accessed by dialing a shortcode from any mobile phone - no smartphone or internet required.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Phone display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <SmartphoneFrame
                  screenTitle={current.title}
                  currentScreen={activeScreen}
                  totalScreens={steps.length}
                  onPrev={() => setActiveScreen(Math.max(0, activeScreen - 1))}
                  onNext={() => setActiveScreen(Math.min(steps.length - 1, activeScreen + 1))}
                  onDotClick={setActiveScreen}
                >
                  <StepVisual type={current.visualType} />
                </SmartphoneFrame>
              </motion.div>
            </AnimatePresence>

            {/* Annotation panel */}
            <div className="flex flex-col justify-center">
              <div className="space-y-3">
                {steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveScreen(i)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      i === activeScreen
                        ? "border-primary/30 bg-primary/5"
                        : "border-transparent hover:bg-secondary/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        i === activeScreen ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                      }`}>
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-medium text-sm text-foreground">{step.title}</p>
                        <p className="text-xs text-muted-foreground">{step.annotation}</p>
                        {i === activeScreen && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="text-xs text-muted-foreground mt-2 leading-relaxed"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Key Design Considerations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {considerations.map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-card border border-border/50">
                <c.icon className="h-5 w-5 text-primary mb-2" />
                <p className="text-sm font-semibold text-foreground mb-1">{c.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveWireframes;
