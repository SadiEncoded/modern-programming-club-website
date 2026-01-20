"use client";

import { ABOUT_HERO_DATA } from "@/lib/data";
import { motion } from "framer-motion";

export const AboutHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background pt-32 pb-20">
      {/* SVG Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Circuit board inspired pattern */}
              <path d="M10 10 L90 10 M10 10 L10 90 M90 10 L90 90 M10 90 L90 90" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="10" cy="10" r="2" fill="currentColor"/>
              <circle cx="90" cy="10" r="2" fill="currentColor"/>
              <circle cx="10" cy="90" r="2" fill="currentColor"/>
              <circle cx="90" cy="90" r="2" fill="currentColor"/>
              <path d="M50 10 L50 30 M30 50 L70 50 M50 70 L50 90" stroke="currentColor" strokeWidth="1" fill="none"/>
              <circle cx="50" cy="30" r="2" fill="currentColor"/>
              <circle cx="50" cy="70" r="2" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-primary">
            {ABOUT_HERO_DATA.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 tracking-tight"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          {ABOUT_HERO_DATA.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
            {ABOUT_HERO_DATA.quote}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            {ABOUT_HERO_DATA.description}
          </p>
        </motion.div>

        {/* Geometric divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-border to-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-[1px] rotate-45" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
