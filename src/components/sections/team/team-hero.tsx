"use client";

import { motion } from "framer-motion";

interface TeamHeroProps {
  stats?: {
    totalMembers: number;
    coreTeam: number;
  };
}

export const TeamHero = ({ stats }: TeamHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-12 sm:pt-32 sm:pb-20">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 sm:mb-6"
        >
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary">
            Meet The Team
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl font-black text-foreground mb-4 sm:mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          The Minds Behind DICPC
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium"
        >
          A collective of passionate students, competitive programmers, and innovators
          building the future of technology at Daffodil International College.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-12 flex items-center justify-center gap-4 sm:gap-8"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
              {stats?.totalMembers || "50+"}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">Active Members</div>
          </div>
          <div className="w-px h-8 sm:h-12 bg-border" />
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-black text-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
              {stats?.coreTeam || "15+"}
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">Core Team</div>
          </div>
          <div className="w-px h-8 sm:h-12 bg-border" />
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-black text-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
              100%
            </div>
            <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">Dedication</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
