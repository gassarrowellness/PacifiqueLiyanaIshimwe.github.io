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
      <div className="relative w-[280px] md:w-[300px]">
        {/* Phone bezel */}
        <div className="bg-foreground/90 dark:bg-foreground/20 rounded-[2.5rem] p-[10px] shadow-xl">
          {/* Inner screen */}
          <div className="bg-card rounded-[2rem] overflow-hidden relative">
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 pt-3 pb-1">
              <span className="text-[10px] font-semibold text-foreground/70">9:41</span>
              {/* Notch / Dynamic Island */}
              <div className="w-20 h-5 bg-foreground/90 dark:bg-foreground/20 rounded-full" />
              <div className="flex items-center gap-1">
                <Signal className="h-3 w-3 text-foreground/70" />
                <Wifi className="h-3 w-3 text-foreground/70" />
                <Battery className="h-3 w-3 text-foreground/70" />
              </div>
            </div>

            {/* Screen title */}
            <div className="px-5 pt-3 pb-2">
              <h4 className="text-sm font-bold text-foreground">{screenTitle}</h4>
            </div>

            {/* Screen content */}
            <div className="px-5 pb-4 min-h-[240px] flex flex-col justify-center">
              {children}
            </div>

            {/* Navigation inside phone */}
            <div className="px-5 pb-2 flex items-center justify-between">
              <button
                onClick={onPrev}
                disabled={currentScreen === 0}
                className="flex items-center gap-0.5 text-xs text-muted-foreground hover:text-foreground disabled:opacity-20 transition-colors"
              >
                <ChevronLeft className="h-3 w-3" /> Back
              </button>
              <div className="flex gap-1.5">
                {Array.from({ length: totalScreens }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => onDotClick(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === currentScreen ? "bg-primary w-4" : "bg-border w-1.5"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={onNext}
                disabled={currentScreen === totalScreens - 1}
                className="flex items-center gap-0.5 text-xs text-muted-foreground hover:text-foreground disabled:opacity-20 transition-colors"
              >
                Next <ChevronRight className="h-3 w-3" />
              </button>
            </div>

            {/* Home indicator */}
            <div className="flex justify-center pb-2 pt-1">
              <div className="w-28 h-1 rounded-full bg-foreground/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** Renders a wireframe element string as a realistic UI component */
export const ElementRenderer = ({ element }: { element: string }) => {
  const el = element.trim();

  // Empty line = spacer
  if (el === "") return <div className="h-2" />;

  // Button: [text]
  if (el.startsWith("[") && el.endsWith("]")) {
    const label = el.slice(1, -1);
    return (
      <button className="w-full py-2 px-4 rounded-xl bg-primary text-primary-foreground text-xs font-semibold text-center transition-colors hover:bg-primary/90">
        {label}
      </button>
    );
  }

  // Inline button inside text: contains [...] but isn't purely a button
  if (el.includes("[") && el.includes("]") && !(el.startsWith("[") && el.endsWith("]"))) {
    const parts = el.split(/(\[.*?\])/g);
    return (
      <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        {parts.map((part, i) =>
          part.startsWith("[") && part.endsWith("]") ? (
            <span key={i} className="inline-block py-1 px-2.5 rounded-lg bg-primary/10 text-primary text-[10px] font-semibold">
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
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded bg-primary flex items-center justify-center">
          <span className="text-primary-foreground text-[10px]">✓</span>
        </div>
        <span className="text-xs text-foreground">{el.slice(1).trim()}</span>
      </div>
    );
  }

  // Checkbox unchecked: ☐
  if (el.startsWith("☐")) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded border border-border" />
        <span className="text-xs text-muted-foreground">{el.slice(1).trim()}</span>
      </div>
    );
  }

  // Card borders: ┌ ┐ └ ┘ │
  if (el.startsWith("┌") || el.startsWith("└")) {
    return null; // Skip card frame lines, handled by │ content
  }
  if (el.startsWith("│")) {
    const content = el.replace(/[│┐┘]/g, "").trim();
    if (!content) return null;
    // Check if content has an inline button
    if (content.includes("[") && content.includes("]")) {
      const parts = content.split(/(\[.*?\])/g);
      return (
        <div className="px-3 py-0.5 bg-accent/50 border-x border-border/30 flex flex-wrap items-center gap-1">
          {parts.map((part, i) =>
            part.startsWith("[") && part.endsWith("]") ? (
              <span key={i} className="inline-block py-1 px-2 rounded-md bg-primary text-primary-foreground text-[10px] font-semibold">
                {part.slice(1, -1)}
              </span>
            ) : (
              <span key={i} className="text-xs text-foreground">{part}</span>
            )
          )}
        </div>
      );
    }
    return (
      <div className="px-3 py-0.5 bg-accent/50 border-x border-border/30">
        <span className="text-xs text-foreground">{content}</span>
      </div>
    );
  }

  // Card frame: ┌─────┐ ┌─────┐ (side-by-side stat boxes)
  if (el.includes("┌") && el.includes("┐") && el.includes("┌", 2)) {
    return null; // Skip decorative frame lines
  }

  // Progress bars: ████
  if (el.includes("████")) {
    const parts = el.split(/█+/);
    const barLength = (el.match(/█/g) || []).length;
    const maxBar = 8;
    const pct = Math.min(100, (barLength / maxBar) * 100);
    return (
      <div className="flex items-center gap-2">
        <span className="text-[10px] text-muted-foreground w-20 shrink-0">{parts[0]?.trim()}</span>
        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-[10px] text-foreground font-medium w-8 text-right">{parts[1]?.trim()}</span>
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
            <div key={i} className="flex items-center gap-1.5">
              <div className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center ${selected ? "border-primary" : "border-border"}`}>
                {selected && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
              </div>
              <span className="text-xs text-foreground">{label}</span>
            </div>
          );
        })}
      </div>
    );
  }

  // Status indicators: ✅ 🔄 ⏳
  if (el.match(/^Step \d/)) {
    const isDone = el.includes("✅");
    const isActive = el.includes("🔄");
    return (
      <div className={`flex items-center gap-2 py-1 px-2 rounded-lg text-xs ${isDone ? "bg-green-500/10 text-green-600 dark:text-green-400" : isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>
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
            <div key={i} className="flex-1 text-center py-2 px-3 rounded-xl bg-accent/50 border border-border/30">
              <span className="text-lg font-bold text-foreground">{v.trim()}</span>
            </div>
          ))}
        </div>
      );
    }
  }

  // Emoji-prefixed lines
  if (el.match(/^[🌍💰📦⚠💡🛒🤝📊🟢📋📤📅🔄☐☑]/u)) {
    return (
      <div className="text-xs text-foreground font-medium">{el}</div>
    );
  }

  // Percentage or metric lines with arrows
  if (el.includes("↑") || el.includes("↗") || el.includes("↓")) {
    return (
      <div className="text-xs text-foreground flex justify-between">
        <span>{el}</span>
      </div>
    );
  }

  // Default: styled label
  return (
    <div className="text-xs text-muted-foreground">{el}</div>
  );
};

export default SmartphoneFrame;
