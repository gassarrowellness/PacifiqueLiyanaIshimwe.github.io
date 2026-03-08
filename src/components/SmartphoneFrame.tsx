import { ReactNode } from "react";
import { ChevronLeft, ChevronRight, Signal, Wifi, Battery } from "lucide-react";

interface SmartphoneFrameProps {
  screenTitle: string;
  children: ReactNode;
  currentScreen: number;
  totalScreens: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (i: number) => void;
}

const SmartphoneFrame = ({
  screenTitle,
  children,
  currentScreen,
  totalScreens,
  onPrev,
  onNext,
  onDotClick,
}: SmartphoneFrameProps) => {
  return (
    <div className="flex justify-center">
      <div className="relative w-[280px] md:w-[320px]">
        {/* Outer device shadow */}
        <div className="absolute inset-0 rounded-[3rem] bg-[#c9b896]/20 blur-xl scale-105" />
        
        {/* Phone bezel - champagne/gold metallic */}
        <div className="relative bg-gradient-to-b from-[#d4c5a9] via-[#c9b896] to-[#bfae8a] dark:from-[#8a7d65] dark:via-[#7a6e58] dark:to-[#6b604d] rounded-[3rem] p-[6px] shadow-2xl ring-1 ring-[#bfae8a]/30">
          {/* Side buttons */}
          <div className="absolute -left-[2px] top-[80px] w-[3px] h-6 rounded-l bg-[#b5a57e] dark:bg-[#6b604d]" />
          <div className="absolute -left-[2px] top-[115px] w-[3px] h-10 rounded-l bg-[#b5a57e] dark:bg-[#6b604d]" />
          <div className="absolute -left-[2px] top-[135px] w-[3px] h-10 rounded-l bg-[#b5a57e] dark:bg-[#6b604d]" />
          <div className="absolute -right-[2px] top-[110px] w-[3px] h-14 rounded-r bg-[#b5a57e] dark:bg-[#6b604d]" />

          {/* Inner screen */}
          <div className="relative bg-card rounded-[2.6rem] overflow-hidden">
            {/* Camera punch-hole */}
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-black/80 z-10" />
            {/* Status bar */}
            <div className="flex items-center justify-between px-7 pt-3 pb-0.5">
              <span className="text-[11px] font-bold text-foreground/80 tracking-tight">9:41</span>
              <div className="flex items-center gap-[3px]">
                <Signal className="h-2.5 w-2.5 text-foreground/70" strokeWidth={2.5} />
                <Wifi className="h-2.5 w-2.5 text-foreground/70" strokeWidth={2.5} />
                <Battery className="h-3 w-3 text-foreground/70" strokeWidth={2.5} />
              </div>
            </div>

            {/* Screen title - app header style */}
            <div className="px-6 pt-4 pb-2">
              <h4 className="text-base font-bold text-foreground tracking-tight">{screenTitle}</h4>
            </div>

            {/* Screen content */}
            <div className="px-5 pb-5 min-h-[260px] flex flex-col justify-start">
              {children}
            </div>

            {/* Navigation inside phone */}
            <div className="px-5 pb-1.5 flex items-center justify-between">
              <button
                onClick={onPrev}
                disabled={currentScreen === 0}
                className="flex items-center gap-0.5 text-xs text-[#b5a57e] hover:text-[#8a7d65] disabled:opacity-20 transition-colors"
              >
                <ChevronLeft className="h-3 w-3" /> Back
              </button>
              <div className="flex gap-1.5">
                {Array.from({ length: totalScreens }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => onDotClick(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === currentScreen ? "bg-[#c9b896] w-4" : "bg-[#d4c5a9]/40 w-1.5"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={onNext}
                disabled={currentScreen === totalScreens - 1}
                className="flex items-center gap-0.5 text-xs text-[#b5a57e] hover:text-[#8a7d65] disabled:opacity-20 transition-colors"
              >
                Next <ChevronRight className="h-3 w-3" />
              </button>
            </div>

            {/* Home indicator */}
            <div className="flex justify-center pb-2 pt-1">
              <div className="w-32 h-[5px] rounded-full bg-[#c9b896]/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Renders a wireframe element string as a realistic, app-grade UI component */
export const ElementRenderer = ({ element }: { element: string }) => {
  const el = element.trim();

  // Empty line = spacer
  if (el === "") return <div className="h-3" />;

  // Button: [text]
  if (el.startsWith("[") && el.endsWith("]")) {
    const label = el.slice(1, -1);
    return (
      <button className="w-full py-2.5 px-5 rounded-2xl bg-primary text-primary-foreground text-xs font-semibold text-center shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-[0.98]">
        {label}
      </button>
    );
  }

  // Inline button inside text
  if (el.includes("[") && el.includes("]") && !(el.startsWith("[") && el.endsWith("]"))) {
    const parts = el.split(/(\[.*?\])/g);
    return (
      <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        {parts.map((part, i) =>
          part.startsWith("[") && part.endsWith("]") ? (
            <span key={i} className="inline-block py-1.5 px-3 rounded-xl bg-primary text-primary-foreground text-[10px] font-semibold shadow-sm">
              {part.slice(1, -1)}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </div>
    );
  }

  // Checkbox checked: ☑
  if (el.startsWith("☑")) {
    return (
      <div className="flex items-center gap-3 py-2 px-3 rounded-xl bg-primary/5 border border-primary/15">
        <div className="w-5 h-5 rounded-lg bg-primary flex items-center justify-center shadow-sm">
          <span className="text-primary-foreground text-[10px] font-bold">✓</span>
        </div>
        <span className="text-xs text-foreground font-medium">{el.slice(1).trim()}</span>
      </div>
    );
  }

  // Checkbox unchecked: ☐
  if (el.startsWith("☐")) {
    return (
      <div className="flex items-center gap-3 py-2 px-3 rounded-xl bg-secondary/50 border border-border/50">
        <div className="w-5 h-5 rounded-lg border-2 border-border" />
        <span className="text-xs text-muted-foreground">{el.slice(1).trim()}</span>
      </div>
    );
  }

  // Card borders: ┌ ┐ └ ┘ - skip decorative lines
  if (el.startsWith("┌") || el.startsWith("└") || el.match(/^[┌└].*[┐┘]$/)) {
    return null;
  }

  // Card content lines: │
  if (el.startsWith("│")) {
    const content = el.replace(/[│┐┘]/g, "").trim();
    if (!content) return null;
    // Check if content has an inline button
    if (content.includes("[") && content.includes("]")) {
      const parts = content.split(/(\[.*?\])/g);
      return (
        <div className="px-4 py-1 bg-accent/40 flex flex-wrap items-center gap-1.5">
          {parts.map((part, i) =>
            part.startsWith("[") && part.endsWith("]") ? (
              <span key={i} className="inline-block py-1.5 px-3 rounded-xl bg-primary text-primary-foreground text-[10px] font-semibold shadow-sm">
                {part.slice(1, -1)}
              </span>
            ) : (
              <span key={i} className="text-xs text-foreground font-medium">{part}</span>
            )
          )}
        </div>
      );
    }
    return (
      <div className="px-4 py-1 bg-accent/40">
        <span className="text-xs text-foreground font-medium">{content}</span>
      </div>
    );
  }

  // Side-by-side stat box frames
  if (el.includes("┌") && el.includes("┐") && el.includes("┌", 2)) {
    return null;
  }

  // Progress bars: ████
  if (el.includes("████")) {
    const parts = el.split(/█+/);
    const barLength = (el.match(/█/g) || []).length;
    const maxBar = 8;
    const pct = Math.min(100, (barLength / maxBar) * 100);
    const label = parts[0]?.trim();
    const value = parts[1]?.trim();
    return (
      <div className="flex items-center gap-3 py-1">
        <span className="text-[11px] text-foreground font-medium w-20 shrink-0">{label}</span>
        <div className="flex-1 h-2.5 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-[11px] text-foreground font-bold w-10 text-right">{value}</span>
      </div>
    );
  }

  // Radio buttons: ○ ●
  if (el.includes("○") || el.includes("●")) {
    const items = el.split(/\s{2,}/);
    return (
      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => {
          const selected = item.includes("●");
          const label = item.replace(/[○●]\s?/, "").trim();
          return (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selected ? "border-primary bg-primary/5" : "border-border"}`}>
                {selected && <div className="w-2 h-2 rounded-full bg-primary" />}
              </div>
              <span className="text-xs text-foreground">{label}</span>
            </div>
          );
        })}
      </div>
    );
  }

  // Status indicators: Step N
  if (el.match(/^Step \d/)) {
    const isDone = el.includes("✅");
    const isActive = el.includes("🔄");
    return (
      <div className={`flex items-center gap-2 py-1.5 px-3 rounded-xl text-xs font-medium ${isDone ? "bg-green-500/10 text-green-600 dark:text-green-400" : isActive ? "bg-primary/10 text-primary" : "text-muted-foreground bg-secondary/50"}`}>
        <span>{el}</span>
      </div>
    );
  }

  // Stat boxes pattern: │ 142 │ │  8  │
  if (el.includes("│") && !el.startsWith("│")) {
    const values = el.split("│").filter(v => v.trim());
    if (values.length >= 2) {
      return (
        <div className="flex gap-3">
          {values.map((v, i) => (
            <div key={i} className="flex-1 text-center py-3 px-3 rounded-2xl bg-accent/60 border border-border/40 shadow-sm">
              <span className="text-xl font-bold text-foreground tracking-tight">{v.trim()}</span>
            </div>
          ))}
        </div>
      );
    }
  }

  // Emoji-prefixed lines - action items / features
  if (el.match(/^[🌍💰📦⚠💡🛒🤝📊🟢📋📤📅🔄☐☑🌱💊]/u)) {
    return (
      <div className="flex items-center gap-2 py-1.5 px-3 rounded-xl bg-secondary/40 border border-border/30">
        <span className="text-xs text-foreground font-medium">{el}</span>
      </div>
    );
  }

  // Percentage or metric lines with arrows
  if (el.includes("↑") || el.includes("↗")) {
    return (
      <div className="text-xs text-foreground flex justify-between items-center py-1 px-3 rounded-lg bg-green-500/5">
        <span className="font-medium">{el}</span>
      </div>
    );
  }
  if (el.includes("↓")) {
    return (
      <div className="text-xs text-foreground flex justify-between items-center py-1 px-3 rounded-lg bg-destructive/5">
        <span className="font-medium">{el}</span>
      </div>
    );
  }

  // Input field pattern: ________
  if (el.includes("________")) {
    const label = el.replace("________", "").trim();
    return (
      <div>
        {label && <span className="text-[10px] text-muted-foreground mb-1 block">{label}</span>}
        <div className="h-9 rounded-xl border border-border bg-secondary/30 px-3 flex items-center">
          <span className="text-xs text-muted-foreground/50">Type here...</span>
        </div>
      </div>
    );
  }

  // Dropdown pattern: [Dropdown selector]
  if (el.toLowerCase().includes("dropdown")) {
    return (
      <div className="h-9 rounded-xl border border-border bg-secondary/30 px-3 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Select...</span>
        <ChevronLeft className="h-3 w-3 text-muted-foreground -rotate-90" />
      </div>
    );
  }

  // "Type a message..." or chat input
  if (el.toLowerCase().includes("type a message") || el.toLowerCase().includes("type your")) {
    return (
      <div className="h-9 rounded-2xl border border-border bg-secondary/30 px-4 flex items-center">
        <span className="text-xs text-muted-foreground/50">{el}</span>
      </div>
    );
  }

  // Table-like rows with │ separators (e.g. "Week │ W1  W2  W3  W4")
  if (el.includes("│") && el.includes("W")) {
    return (
      <div className="text-[10px] text-foreground font-mono py-1 px-2 bg-secondary/30 rounded-lg">
        {el}
      </div>
    );
  }

  // Metric labels like "MRR: $42,500"
  if (el.includes(":") && (el.includes("$") || el.includes("%"))) {
    const [label, value] = el.split(":").map(s => s.trim());
    return (
      <div className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-secondary/30 border border-border/20">
        <span className="text-[11px] text-muted-foreground">{label}</span>
        <span className="text-sm text-foreground font-bold">{value}</span>
      </div>
    );
  }

  // Lines starting with a label like "Logo", "Welcome message", section headers
  if (el.match(/^[A-Z]/) && el.length < 40 && !el.includes(":")) {
    return (
      <div className="text-sm text-foreground font-semibold tracking-tight">{el}</div>
    );
  }

  // Default: body text
  return (
    <div className="text-xs text-muted-foreground leading-relaxed">{el}</div>
  );
};

export default SmartphoneFrame;
