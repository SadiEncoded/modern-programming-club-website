"use client";

import { cn } from "@/lib/utils";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import { Loader } from "./loader";

interface LoadingStep {
  message: string;
  minDuration: number;
  maxDuration: number;
}

const loadingSteps: LoadingStep[] = [
  { message: "$ Initializing DICPC...", minDuration: 100, maxDuration: 250 },
  { message: "> Synchronizing Algorithms...", minDuration: 150, maxDuration: 300 },
  { message: "> Loading Happy Face :) :)", minDuration: 100, maxDuration: 200 },
  { message: "> Finalizing system optimization...", minDuration: 100, maxDuration: 250 },
  { message: "✓ Ready To Go, Stranger!", minDuration: 400, maxDuration: 800 },
];

export const TerminalLoader = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (currentIndex < loadingSteps.length) {
      const step = loadingSteps[currentIndex];
      const randomDuration = Math.floor(Math.random() * (step.maxDuration - step.minDuration + 1)) + step.minDuration;
      
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, step.message]);
        setCurrentIndex((prev) => prev + 1);
        setLoadingProgress(((currentIndex + 1) / loadingSteps.length) * 100);
      }, randomDuration);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Preload critical resources
  useEffect(() => {
    // Preload fonts silently
    if (typeof window !== "undefined") {
      document.fonts.ready.catch(() => {
        // Silently handle font loading errors
      });
    }

    // Preload images (add your critical images here)
    const imagesToPreload: string[] = [
      "/brand/text-logo.svg",
      "/sections/shared/header-left-accent.svg",
      "/sections/shared/header-right-accent.svg",
      "/brand/icon(darkVersion).svg",
      "/brand/icon(lightVersion).svg",
      "/sections/shared/bg-pattern.svg",
      "/sections/shared/top-left-accent.svg",
      "/sections/shared/top-center-accent-dark.svg",
      "/sections/shared/top-center-accent.svg",
      "/sections/shared/top-right-accent.svg",
      "/sections/home/macBookHero.svg",
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-primary-vibrant font-mono p-4 sm:p-8 flex flex-col relative overflow-hidden select-none animate-in fade-in duration-500">
      {/* CRT Effects */}
      <div className="absolute inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] vignette" />
        <div className="absolute inset-0 w-full h-[2px] bg-primary-vibrant/5 animate-[scanline_8s_linear_infinite] translate-y-[-100%] scanline" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
      </div>

      {/* Main Terminal Frame */}
      <div className="relative z-10 flex-1 flex flex-col animate-[terminal-flicker_10s_infinite] terminal-frame">
        {/* Terminal header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 border-b border-primary-vibrant/10 pb-3 sm:pb-4">
          <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
          </div>
          <div className="h-3 sm:h-4 w-[1px] bg-primary-vibrant/20 mx-1 sm:mx-2" />
          <span className="text-[8px] sm:text-[10px] tracking-[0.2em] font-bold opacity-70 uppercase animate-[terminal-glow_4s_infinite]">
            DICPC - CORE_SYSTEM_V2.0
          </span>
        </div>

        {/* Terminal content */}
        <div className="flex-1 flex flex-col items-center justify-center -mt-8 sm:-mt-12">
          <div className="w-full max-w-2xl px-2 sm:px-4 flex flex-col items-center">
            {/* Logo Section */}
            <div className="mb-8 sm:mb-12 relative animate-[logo-pulse_4s_infinite] transition-all duration-300 w-[200px] sm:w-[300px]">
              <NextImage 
                src="/brand/text-logo.svg" 
                alt="DICPC Logo" 
                width={300} 
                height={98}
                className="opacity-90 brightness-110 drop-shadow-[0_0_15px_rgba(48,229,143,0.3)] object-contain w-full h-auto"
                priority
              />
            </div>

            <div className="w-full">
              {/* Command History */}
              <div className="space-y-1 sm:space-y-1.5 mb-8 sm:mb-10 min-h-[120px] sm:min-h-[160px] border-l border-primary-vibrant/5 pl-3 sm:pl-4">
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className="text-[10px] sm:text-xs md:text-sm tracking-wide flex items-start gap-2 sm:gap-3 opacity-0 animate-[fade-in_0.3s_ease-out_forwards,terminal-glow_4s_infinite]"
                  >
                    <span className="opacity-40 text-[8px] sm:text-[10px] mt-0.5">{`[${(720 + i).toString()}]`}</span>
                    <span className={cn(
                      "break-words max-w-[90%]",
                      line.startsWith("✓") ? "text-green-400" : 
                      line.startsWith("$") ? "text-blue-400" : "text-primary-vibrant/90"
                    )}>
                      {line}
                    </span>
                  </div>
                ))}
                {currentIndex < loadingSteps.length && (
                  <div className="flex items-center gap-2">
                    <span className="opacity-40 text-[8px] sm:text-[10px]">{`[${(720 + lines.length).toString()}]`}</span>
                    <span className="w-1.5 h-3 sm:w-2 sm:h-4 bg-primary-vibrant/80 animate-pulse mt-0.5" />
                  </div>
                )}
              </div>

              {/* Central Visual Loader */}
              <div className="flex flex-col items-center justify-center gap-8 sm:gap-10">
                <div className="relative group scale-90 sm:scale-100">
                  <div className="absolute -inset-4 bg-primary-vibrant/10 rounded-full blur-2xl group-hover:bg-primary-vibrant/20 transition-all duration-500" />
                  <Loader className="scale-110 sm:scale-125" />
                </div>

                {/* Enhanced Progress UI */}
                <div className="w-full max-w-[280px] sm:max-w-sm">
                  <div className="flex justify-between text-[8px] sm:text-[10px] mb-2 tracking-[0.2em] opacity-50 font-bold uppercase">
                    <span>Progress Status</span>
                    <span>{Math.round(loadingProgress)}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 relative overflow-hidden ring-1 ring-primary-vibrant/10">
                    <div
                      className="h-full bg-primary-vibrant shadow-[0_0_15px_rgba(48,229,143,0.6)] transition-all duration-500 ease-out"
                      style={{ width: `${loadingProgress}%` }}
                    />
                  </div>
                  <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2">
                    <div className="flex items-center gap-4 text-[8px] sm:text-[10px] tracking-[0.3em] font-black italic opacity-40 uppercase text-center">
                      <span className="animate-pulse">Loading System Resources</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal footer */}
        <div className="mt-auto pt-6 sm:pt-8 border-t border-primary-vibrant/5 flex flex-col xs:flex-row justify-between items-center xs:items-end gap-2 xs:gap-0 opacity-30 text-[8px] sm:text-[9px] tracking-widest uppercase font-bold text-center xs:text-left">
          <div>LOC: SHAL_0XF421</div>
          <div className="flex gap-4">
            <span>SYS_READY: {currentIndex === loadingSteps.length ? "TRUE" : "FALSE"}</span>
            <span className="animate-pulse">BOOT_SEQ_ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
