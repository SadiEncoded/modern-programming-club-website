"use client";

import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { TechText } from "@/components/ui/tech-text";
import { FOUNDATION_DATA, PILLARS_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";

export const ThreePillars = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (resolvedTheme === 'dark' || theme === 'dark');

  return (
    <section id="pillars" className={`py-12 sm:py-16 lg:py-24 ${isDark ? 'bg-muted/30' : 'bg-muted/35'} relative overflow-hidden transition-colors duration-300`}>
      {/* Background accent */}
       <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
        </div>
      <div className="absolute inset-0 pointer-events-none">
        <DottedGlowBackground 
          color={isDark ? "rgba(255,255,255,0.12)" : "rgba(0, 97, 74, 0.15)"}
          glowColor={isDark ? "rgba(48, 229, 143, 0.4)" : "rgba(48, 229, 143, 0.2)"}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3 sm:mb-4 block">
              {FOUNDATION_DATA.eyebrow}
            </span>
            <h2 
              className="text-xl sm:text-3xl md:text-4xl font-black text-foreground mb-3 sm:mb-4"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              {FOUNDATION_DATA.title}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mt-4 sm:mt-6" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {PILLARS_DATA.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative h-full p-5 sm:p-8 bg-card rounded-2xl border ${pillar.borderColor} hover:border-primary/40 transition-all duration-300 overflow-hidden`}>
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-10 sm:w-14 h-10 sm:h-14 rounded-xl bg-muted/50 ${pillar.iconColor} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="w-5 sm:w-7 h-5 sm:h-7" strokeWidth={2.5} />
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-lg sm:text-2xl font-black text-foreground mb-3 sm:mb-4 tracking-tight" 
                    style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                  >
                    <TechText text={pillar.title} glitchInterval={8000} />
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal-dark/70 dark:text-muted-foreground leading-relaxed text-xs sm:text-sm font-medium">
                    {pillar.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
                    <div className={`h-1 w-10 sm:w-12 ${pillar.iconColor.replace('text-', 'bg-')} rounded-full opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
