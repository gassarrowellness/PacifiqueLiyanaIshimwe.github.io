import { ArrowRight, ArrowDown, CheckCircle2, Circle, BarChart3, GitBranch, Layers, Users, Zap, Target, TrendingUp, Search, MessageSquare, FileText, Settings, Repeat, Globe, Filter } from "lucide-react";

export type DiagramType = 
  | "framework" | "funnel" | "matrix" | "process" 
  | "chart" | "cycle" | "mapping" | "comparison"
  | "research" | "testing" | "signals" | "interviews"
  | "mvp" | "metrics" | "optimization" | "expansion"
  | "persona" | "triggers" | "behavior" | "content"
  | "hooks" | "retention" | "distribution" | "timeline";

interface MiniDiagramProps {
  type: DiagramType;
}

const MiniDiagram = ({ type }: MiniDiagramProps) => {
  switch (type) {
    case "framework":
      return (
        <div className="flex items-center gap-2">
          {["Problem", "Hypothesis", "Test"].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <div className="px-3 py-2 rounded-lg bg-primary/10 text-xs font-medium text-primary">{step}</div>
              {i < 2 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
            </div>
          ))}
        </div>
      );

    case "funnel":
      return (
        <div className="flex flex-col items-center gap-1 w-full max-w-[180px]">
          {[{ w: "w-full", label: "Awareness" }, { w: "w-4/5", label: "Interest" }, { w: "w-3/5", label: "Decision" }, { w: "w-2/5", label: "Action" }].map((s) => (
            <div key={s.label} className={`${s.w} h-6 rounded bg-primary/15 flex items-center justify-center text-[10px] font-medium text-primary`}>
              {s.label}
            </div>
          ))}
        </div>
      );

    case "matrix":
      return (
        <div className="grid grid-cols-2 gap-1 w-[160px]">
          {["High Impact\nLow Effort", "High Impact\nHigh Effort", "Low Impact\nLow Effort", "Low Impact\nHigh Effort"].map((q) => (
            <div key={q} className="h-14 rounded-lg bg-primary/10 flex items-center justify-center p-1">
              <span className="text-[9px] text-center text-primary font-medium whitespace-pre-line leading-tight">{q}</span>
            </div>
          ))}
        </div>
      );

    case "process":
      return (
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="flex items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary">{n}</div>
              {n < 4 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
            </div>
          ))}
        </div>
      );

    case "chart":
      return (
        <div className="flex items-end gap-1.5 h-16">
          {[40, 55, 35, 70, 60, 85, 75].map((h, i) => (
            <div key={i} className="w-4 rounded-t bg-primary/20 transition-all" style={{ height: `${h}%` }} />
          ))}
        </div>
      );

    case "cycle":
      return (
        <div className="relative w-[140px] h-[100px]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-primary/10 text-[10px] font-medium text-primary">Plan</div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-primary/10 text-[10px] font-medium text-primary">Do</div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-primary/10 text-[10px] font-medium text-primary">Check</div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-primary/10 text-[10px] font-medium text-primary">Act</div>
          <Repeat className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 text-primary/30" />
        </div>
      );

    case "mapping":
      return (
        <div className="flex flex-col gap-1.5 w-full max-w-[200px]">
          {[{ from: "Need", to: "Feature" }, { from: "Pain", to: "Solution" }, { from: "Goal", to: "Metric" }].map((m) => (
            <div key={m.from} className="flex items-center gap-2">
              <div className="px-2 py-1 rounded bg-primary/10 text-[10px] font-medium text-primary flex-1 text-center">{m.from}</div>
              <ArrowRight className="h-3 w-3 text-muted-foreground shrink-0" />
              <div className="px-2 py-1 rounded bg-primary/15 text-[10px] font-medium text-primary flex-1 text-center">{m.to}</div>
            </div>
          ))}
        </div>
      );

    case "comparison":
      return (
        <div className="flex gap-3">
          {[{ label: "Before", items: ["Slow", "Manual"] }, { label: "After", items: ["Fast", "Auto"] }].map((col) => (
            <div key={col.label} className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-primary">{col.label}</span>
              {col.items.map((item) => (
                <div key={item} className="px-2 py-1 rounded bg-primary/10 text-[10px] text-primary">{item}</div>
              ))}
            </div>
          ))}
        </div>
      );

    case "research":
      return (
        <div className="flex items-center gap-3">
          <Search className="h-5 w-5 text-primary/60" />
          <div className="flex flex-col gap-1">
            {["Qualitative", "Quantitative", "Behavioral"].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <Circle className="h-2 w-2 fill-primary/40 text-primary/40" />
                <span className="text-[10px] text-primary font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "testing":
      return (
        <div className="flex items-center gap-2">
          {["Build", "Test", "Learn"].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  {i === 0 ? <Settings className="h-4 w-4 text-primary" /> : i === 1 ? <Zap className="h-4 w-4 text-primary" /> : <CheckCircle2 className="h-4 w-4 text-primary" />}
                </div>
                <span className="text-[9px] text-primary font-medium">{s}</span>
              </div>
              {i < 2 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
            </div>
          ))}
        </div>
      );

    case "signals":
      return (
        <div className="flex items-end gap-1 h-14">
          {[20, 45, 30, 65, 50, 80].map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className={`w-5 rounded-t ${h > 50 ? 'bg-primary/30' : 'bg-primary/10'}`} style={{ height: `${h}%` }} />
              <div className={`w-1.5 h-1.5 rounded-full ${h > 50 ? 'bg-primary' : 'bg-primary/30'}`} />
            </div>
          ))}
        </div>
      );

    case "interviews":
      return (
        <div className="flex flex-col gap-1.5">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <Users className="h-3.5 w-3.5 text-primary/50" />
              <div className="h-2 rounded-full bg-primary/15 flex-1" style={{ width: `${50 + n * 15}%` }} />
              <MessageSquare className="h-3 w-3 text-primary/30" />
            </div>
          ))}
        </div>
      );

    case "mvp":
      return (
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-1">
            {["Core", "Nice", "Later"].map((p, i) => (
              <div key={p} className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-sm ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-primary/40' : 'bg-primary/15'}`} />
                <span className="text-[10px] text-primary font-medium">{p}</span>
                <div className={`h-1.5 rounded-full ${i === 0 ? 'bg-primary/30 w-16' : i === 1 ? 'bg-primary/15 w-10' : 'bg-primary/10 w-6'}`} />
              </div>
            ))}
          </div>
        </div>
      );

    case "metrics":
      return (
        <div className="grid grid-cols-2 gap-1.5">
          {[{ label: "NPS", val: "72" }, { label: "DAU", val: "1.2k" }, { label: "Ret.", val: "84%" }, { label: "Conv.", val: "12%" }].map((m) => (
            <div key={m.label} className="px-2 py-1.5 rounded-lg bg-primary/10 text-center">
              <div className="text-[10px] text-primary/60">{m.label}</div>
              <div className="text-sm font-bold text-primary">{m.val}</div>
            </div>
          ))}
        </div>
      );

    case "optimization":
      return (
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex items-center gap-1">
              <div className="h-2 rounded-full bg-primary/20 w-3/4" />
              <span className="text-[9px] text-primary/50">v1</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 rounded-full bg-primary/30 w-4/5" />
              <span className="text-[9px] text-primary/50">v2</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 rounded-full bg-primary/50 w-[95%]" />
              <span className="text-[9px] text-primary/50">v3</span>
            </div>
          </div>
          <TrendingUp className="h-4 w-4 text-primary/50" />
        </div>
      );

    case "expansion":
      return (
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-primary/40" />
          <div className="flex flex-col gap-1">
            {["Market A", "Market B", "Market C"].map((m, i) => (
              <div key={m} className="flex items-center gap-1.5">
                <div className={`h-2 rounded-full bg-primary/${20 + i * 15}`} style={{ width: `${40 + i * 25}px` }} />
                <span className="text-[9px] text-primary font-medium">{m}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "persona":
      return (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col gap-0.5">
            {["Demographics", "Motivations", "Pain points"].map((t) => (
              <div key={t} className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <span className="text-[10px] text-primary">{t}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "triggers":
      return (
        <div className="flex items-center gap-1.5">
          {["Trigger", "Action", "Reward", "Investment"].map((s, i) => (
            <div key={s} className="flex items-center gap-1.5">
              <div className="px-2 py-1.5 rounded bg-primary/10 text-[9px] font-medium text-primary">{s}</div>
              {i < 3 && <ArrowRight className="h-2.5 w-2.5 text-muted-foreground" />}
            </div>
          ))}
        </div>
      );

    case "behavior":
      return (
        <div className="flex flex-col gap-1">
          {["Discover", "Evaluate", "Purchase", "Use"].map((stage, i) => (
            <div key={stage} className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ${i <= 2 ? 'bg-primary/15 text-primary' : 'bg-primary/10 text-primary/60'}`}>{i + 1}</div>
              <span className="text-[10px] text-primary font-medium">{stage}</span>
              <div className="flex-1 h-px bg-primary/10" />
            </div>
          ))}
        </div>
      );

    case "content":
      return (
        <div className="flex gap-2">
          {[{ icon: FileText, label: "Blog" }, { icon: MessageSquare, label: "Social" }, { icon: Zap, label: "Ads" }].map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-1">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <c.icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-[9px] text-primary font-medium">{c.label}</span>
            </div>
          ))}
        </div>
      );

    case "hooks":
      return (
        <div className="flex flex-col gap-1">
          {["Scroll-stopping hook", "Value delivery", "CTA / next step"].map((h, i) => (
            <div key={h} className="flex items-center gap-2">
              <Zap className={`h-3 w-3 ${i === 0 ? 'text-primary' : 'text-primary/40'}`} />
              <span className="text-[10px] text-primary font-medium">{h}</span>
            </div>
          ))}
        </div>
      );

    case "retention":
      return (
        <div className="flex items-end gap-1 h-12">
          {[100, 72, 58, 50, 47, 45, 44].map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div className="w-4 rounded-t bg-primary/20" style={{ height: `${h * 0.45}px` }} />
              <span className="text-[7px] text-primary/40">D{i}</span>
            </div>
          ))}
        </div>
      );

    case "distribution":
      return (
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary/40" />
          <div className="flex flex-col gap-1">
            {["Organic", "Paid", "Viral"].map((ch, i) => (
              <div key={ch} className="flex items-center gap-1.5">
                <div className="h-2 rounded-full bg-primary/20" style={{ width: `${60 - i * 15}px` }} />
                <span className="text-[9px] text-primary">{ch}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "timeline":
      return (
        <div className="flex items-center gap-1">
          {["W1", "W2", "W3", "W4"].map((w, i) => (
            <div key={w} className="flex flex-col items-center gap-1">
              <div className={`w-8 h-3 rounded ${i <= 1 ? 'bg-primary/25' : 'bg-primary/10'}`} />
              <span className="text-[8px] text-primary/50">{w}</span>
            </div>
          ))}
        </div>
      );

    default:
      return (
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
          <Layers className="h-6 w-6 text-primary/40" />
        </div>
      );
  }
};

export default MiniDiagram;
