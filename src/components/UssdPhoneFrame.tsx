import { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface UssdPhoneFrameProps {
  screenTitle: string;
  children: ReactNode;
  currentScreen: number;
  totalScreens: number;
  onPrev: () => void;
  onNext: () => void;
  onDotClick: (i: number) => void;
}

const UssdPhoneFrame = ({
  screenTitle,
  children,
  currentScreen,
  totalScreens,
  onPrev,
  onNext,
  onDotClick,
}: UssdPhoneFrameProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-[260px] md:w-[280px]">
        {/* Phone bezel - classic phone shape */}
        <div className="bg-gradient-to-b from-[#d4c5a9] via-[#c9b896] to-[#bfae8a] dark:from-[#8a7d65] dark:via-[#7a6e58] dark:to-[#6b604d] rounded-[2rem] p-[10px] shadow-xl ring-1 ring-[#bfae8a]/30">
          {/* Earpiece */}
          <div className="flex justify-center pt-2 pb-3">
            <div className="w-12 h-1.5 rounded-full bg-[#b5a57e]/50 dark:bg-[#6b604d]/50" />
          </div>

          {/* Screen area - plain white */}
          <div className="bg-white rounded-lg mx-1 overflow-hidden">
            {/* Screen title bar */}
            <div className="px-3 pt-2 pb-1 border-b border-gray-200">
              <h4 className="text-[11px] font-bold text-gray-800 text-center">{screenTitle}</h4>
            </div>

            {/* USSD content - monospace */}
            <div className="px-3 py-3 min-h-[200px] font-mono text-[11px] text-gray-900 leading-relaxed">
              {children}
            </div>

            {/* Input field */}
            <div className="px-3 pb-2">
              <div className="border border-gray-300 rounded px-2 py-1.5 text-[11px] font-mono text-gray-400 bg-gray-50">
                Enter response<span className="animate-pulse">|</span>
              </div>
            </div>
          </div>

          {/* Keypad */}
          <div className="px-3 pt-3 pb-1">
            <div className="grid grid-cols-3 gap-1.5">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((key) => (
                <div
                  key={key}
                  className="h-8 rounded-lg bg-[#b5a57e]/30 dark:bg-[#6b604d]/30 flex items-center justify-center text-xs font-bold text-[#5a5040] dark:text-[#a89870] select-none"
                >
                  {key}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons row */}
          <div className="flex justify-center gap-6 pt-2 pb-1">
            <div className="w-8 h-8 rounded-full bg-[#b5a57e]/40 dark:bg-[#6b604d]/30 flex items-center justify-center">
              <span className="text-[8px] font-bold text-[#5a5040] dark:text-[#a89870]">SEND</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#b5a57e]/50 dark:bg-[#6b604d]/30 border-2 border-[#a89870]/40" />
            <div className="w-8 h-8 rounded-full bg-[#b5a57e]/40 dark:bg-[#6b604d]/30 flex items-center justify-center">
              <span className="text-[8px] font-bold text-[#5a5040] dark:text-[#a89870]">END</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation controls outside phone */}
      <div className="flex items-center justify-center gap-4">
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
    </div>
  );
};

export default UssdPhoneFrame;
