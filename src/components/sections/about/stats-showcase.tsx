"use client";

import { IMPACT_DATA, STATS_DATA } from "@/lib/data";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem = ({ value, label, suffix = "", delay = 0 }: StatItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value);
      }, delay);
    }
  }, [isInView, value, motionValue, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <div
        ref={ref}
        className="text-5xl md:text-6xl font-black text-foreground mb-2"
        style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
      >
        0{suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

export const StatsShowcase = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4 block">
            {IMPACT_DATA.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
            {IMPACT_DATA.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS_DATA.map((stat) => (
            <StatItem 
              key={stat.label} 
              value={stat.value} 
              label={stat.label} 
              suffix={stat.suffix} 
              delay={stat.delay} 
            />
          ))}
        </div>

        {/* Geometric divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-border" />
          <div className="w-1.5 h-1.5 bg-primary/40 rotate-45" />
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  );
};
