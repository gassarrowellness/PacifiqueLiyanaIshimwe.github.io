import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Bot, User, Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Target, Activity } from "lucide-react";

const chatResponses: Record<string, string> = {
  weather: "🌤️ Today's forecast: Partly cloudy, 28°C. Rain expected Thursday. Consider delaying planting by 2 days for optimal soil moisture.",
  price: "🌽 Current maize prices: Lusaka market K450/50kg bag (+5% from last week). Best time to sell: within 10 days based on seasonal trends.",
  plant: "🌱 Recommended: Plant maize variety SC513 for your soil type. Optimal planting window opens in 12 days.",
  health: "🏥 Nearest clinic: Chawama Health Centre (2.3km). Services: Maternal health, vaccinations, malaria testing.",
};

const userGrowthData = [
  { month: "Jan", users: 120000 }, { month: "Mar", users: 450000 },
  { month: "May", users: 920000 }, { month: "Jul", users: 1350000 },
  { month: "Sep", users: 1750000 }, { month: "Nov", users: 2050000 },
];

const retentionData = [
  { cohort: "D1", rate: 85 }, { cohort: "D7", rate: 72 },
  { cohort: "D14", rate: 65 }, { cohort: "D30", rate: 58 },
  { cohort: "D60", rate: 48 }, { cohort: "D90", rate: 42 },
];

const kpis = [
  { label: "Monthly Active Users", value: "2.1M", change: "+12%", icon: Users },
  { label: "Retention Rate", value: "75%+", change: "+15%", icon: Target },
  { label: "AI Queries (Pilot)", value: "90K", change: "New", icon: TrendingUp },
  { label: "Health Program Reach", value: "50K+", change: "+22%", icon: Activity },
];

const LiveDemos = () => {
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Hello! I'm your AI assistant. Try typing 'weather', 'price', 'plant', or 'health'." },
  ]);
  const [input, setInput] = useState("");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      const key = Object.keys(chatResponses).find((k) => userMsg.toLowerCase().includes(k));
      const response = key ? chatResponses[key] : "I can help with weather, crop prices, planting advice, and health services. Try one of those topics!";
      setMessages((prev) => [...prev, { role: "bot", text: response }]);
    }, 800);
  };

  return (
    <section id="demos" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-label text-primary mb-4">Live Demos & Metrics</p>
          <h2 className="text-display text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="gradient-text">Previews</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Try the AI advisory interface and view product dashboards with illustrative data.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* AI Chat Demo */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-border flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">AI Advisory Assistant</span>
                <span className="ml-auto w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="h-64 overflow-y-auto p-4 space-y-3">
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

            {/* Dashboard Preview */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {kpis.map((kpi, i) => (
                  <div key={i} className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <kpi.icon className="h-3.5 w-3.5 text-primary" />
                      <span className="text-[10px] font-medium text-primary">{kpi.change}</span>
                    </div>
                    <p className="text-xl font-bold text-display">{kpi.value}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{kpi.label}</p>
                  </div>
                ))}
              </div>

              <div className="glass rounded-xl p-4">
                <p className="text-xs font-medium mb-1">User Growth</p>
                <p className="text-[10px] text-muted-foreground mb-3">Illustrative trajectory</p>
                <ResponsiveContainer width="100%" height={120}>
                  <AreaChart data={userGrowthData}>
                    <defs>
                      <linearGradient id="colorU" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(220, 70%, 50%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(220, 70%, 50%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 45%)" />
                    <YAxis tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 45%)" tickFormatter={(v) => `${(v / 1000000).toFixed(1)}M`} />
                    <Area type="monotone" dataKey="users" stroke="hsl(220, 70%, 50%)" fill="url(#colorU)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="glass rounded-xl p-4">
                <p className="text-xs font-medium mb-1">Retention Curve</p>
                <p className="text-[10px] text-muted-foreground mb-3">Cohort retention (illustrative)</p>
                <ResponsiveContainer width="100%" height={100}>
                  <LineChart data={retentionData}>
                    <XAxis dataKey="cohort" tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 45%)" />
                    <YAxis tick={{ fontSize: 10 }} stroke="hsl(220, 10%, 45%)" unit="%" />
                    <Line type="monotone" dataKey="rate" stroke="hsl(220, 70%, 50%)" strokeWidth={2} dot={{ r: 3, fill: "hsl(220, 70%, 50%)" }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveDemos;
