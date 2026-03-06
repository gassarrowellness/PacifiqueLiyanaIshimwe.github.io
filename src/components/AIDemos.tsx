import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Bot, User, Mic, MicOff, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const chatResponses: Record<string, string> = {
  "weather": "🌤️ Today's forecast for your region: Partly cloudy, 28°C. Rain expected Thursday — consider delaying planting by 2 days for optimal soil moisture.",
  "price": "🌽 Current maize prices: Lusaka market K450/50kg bag (+5% from last week). Best time to sell: within 10 days based on seasonal trends.",
  "plant": "🌱 Recommended: Plant maize variety SC513 for your soil type. Optimal planting window opens in 12 days. Apply 200kg/ha compound D fertilizer at planting.",
  "health": "🏥 Nearest health clinic: Chawama Health Centre (2.3km). Services: Maternal health, vaccinations, malaria testing. Hours: Mon-Sat 7AM-5PM.",
  "loan": "💰 You qualify for a micro-loan up to K5,000 based on your transaction history. Interest rate: 2.5%/month. Repayment: 6 months. Apply via *123#.",
};

const AIAssistantDemo = () => {
  const [messages, setMessages] = useState([
    { role: "bot" as const, text: "Hello! I'm your AI assistant. Ask me about weather, crop prices, planting advice, health services, or loans. Try typing 'weather', 'price', or 'plant'." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user" as const, text: userMsg }]);
    setInput("");

    setTimeout(() => {
      const key = Object.keys(chatResponses).find((k) => userMsg.toLowerCase().includes(k));
      const response = key
        ? chatResponses[key]
        : "I can help with weather forecasts, crop prices, planting advice, health services, and loan information. Try asking about one of these topics!";
      setMessages((prev) => [...prev, { role: "bot" as const, text: response }]);
    }, 800);
  };

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="p-4 border-b border-border flex items-center gap-2">
        <Bot className="h-5 w-5 text-primary" />
        <span className="font-medium text-sm">AI Advisory Assistant</span>
        <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500" />
      </div>
      <div className="h-72 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : ""}`}>
            {msg.role === "bot" && <Bot className="h-4 w-4 text-primary mt-1 shrink-0" />}
            <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}>
              {msg.text}
            </div>
            {msg.role === "user" && <User className="h-4 w-4 text-muted-foreground mt-1 shrink-0" />}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-border flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask about weather, prices, health..."
          className="rounded-full text-sm"
        />
        <Button size="icon" className="rounded-full shrink-0" onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const VoiceUIDemo = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");

  const handleToggle = () => {
    if (!isListening) {
      setIsListening(true);
      setTranscript("");
      setResponse("");
      setTimeout(() => setTranscript("What is the weather today?"), 1500);
      setTimeout(() => {
        setIsListening(false);
        setResponse("Today will be partly cloudy with temperatures around 28 degrees. Light rain is expected in the evening.");
      }, 3000);
    }
  };

  return (
    <div className="glass rounded-2xl p-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Mic className="h-5 w-5 text-primary" />
        <span className="font-medium text-sm">Voice Interaction Prototype</span>
      </div>

      <button
        onClick={handleToggle}
        className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
          isListening ? "bg-destructive/10 border-2 border-destructive animate-pulse" : "bg-primary/10 border-2 border-primary hover:bg-primary/20"
        }`}
      >
        {isListening ? <MicOff className="h-8 w-8 text-destructive" /> : <Mic className="h-8 w-8 text-primary" />}
      </button>

      <p className="text-xs text-muted-foreground mb-4">{isListening ? "Listening..." : "Tap to speak"}</p>

      {transcript && (
        <div className="p-3 rounded-xl bg-muted text-sm text-foreground mb-3">
          <span className="text-xs text-muted-foreground block mb-1">You said:</span>
          {transcript}
        </div>
      )}
      {response && (
        <div className="p-3 rounded-xl bg-primary/5 text-sm text-foreground border border-primary/10">
          <span className="text-xs text-primary block mb-1">AI Response:</span>
          {response}
        </div>
      )}
    </div>
  );
};

const RecommendationDemo = () => {
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);
  const crops = [
    { name: "Maize", score: 92, tip: "Ideal for your soil. Plant SC513 variety. Expected yield: 6-8 tons/ha." },
    { name: "Soybeans", score: 78, tip: "Good alternative. Requires inoculant treatment. Expected yield: 2-3 tons/ha." },
    { name: "Groundnuts", score: 65, tip: "Moderate fit. Consider intercropping with maize for better returns." },
  ];

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Star className="h-5 w-5 text-primary" />
        <span className="font-medium text-sm">Smart Recommendation Engine</span>
      </div>
      <p className="text-xs text-muted-foreground mb-4">Based on your location, soil type, and market conditions:</p>
      <div className="space-y-3">
        {crops.map((crop) => (
          <button
            key={crop.name}
            onClick={() => setSelectedCrop(crop.name === selectedCrop ? null : crop.name)}
            className="w-full text-left p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-sm">{crop.name}</span>
              <span className={`text-sm font-bold ${crop.score > 80 ? "text-emerald-600" : crop.score > 70 ? "text-amber-600" : "text-muted-foreground"}`}>
                {crop.score}% match
              </span>
            </div>
            <div className="w-full bg-border rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full transition-all duration-500 ${crop.score > 80 ? "bg-emerald-500" : crop.score > 70 ? "bg-amber-500" : "bg-muted-foreground"}`}
                style={{ width: `${crop.score}%` }}
              />
            </div>
            {selectedCrop === crop.name && (
              <p className="text-xs text-muted-foreground mt-3">{crop.tip}</p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const AIDemos = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai-demos" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Interactive Demos</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            AI Product <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Interactive simulations demonstrating how AI-powered products work in practice.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AIAssistantDemo />
            </div>
            <VoiceUIDemo />
            <div className="md:col-span-2 lg:col-span-1">
              <RecommendationDemo />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIDemos;
