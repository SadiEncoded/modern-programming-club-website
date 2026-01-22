"use client";

import { MISSION_VISION_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export const MissionVision = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/10 rounded-tr-lg" />
              
              <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-muted/50 border border-border rounded-md group-hover:border-primary/30 transition-colors">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary/40" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary/40" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                  {MISSION_VISION_DATA.mission.title}
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                {MISSION_VISION_DATA.mission.content}
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="relative bg-card border border-border rounded-lg p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/10 rounded-tl-lg" />

              <div className="flex items-center gap-4 sm:gap-5 mb-4 sm:mb-6">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-muted/50 border border-border rounded-md group-hover:border-primary/30 transition-colors">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-primary/40" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-primary/40" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                  {MISSION_VISION_DATA.vision.title}
                </h2>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                {MISSION_VISION_DATA.vision.quote}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
                {MISSION_VISION_DATA.vision.content}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
