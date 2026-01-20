"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    text: "Official Club under DICSP",
  },
  {
    icon: Calendar,
    text: "Founded July 2025",
  },
  {
    icon: GraduationCap,
    text: "Member GPA 2.50+ Standard",
  },
];

export const SocialProof = () => {
  return (
    <div className="w-full bg-background border-y border-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors cursor-default group"
            >
              <stat.icon className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary transition-colors" />
              <span className="text-[10px] md:text-xs font-black tracking-widest uppercase" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                {stat.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
