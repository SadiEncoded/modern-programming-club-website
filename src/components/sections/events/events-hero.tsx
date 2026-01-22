"use client";

import { motion } from "framer-motion";
import { Calendar, Code2, Terminal } from "lucide-react";

export const EventsHero = () => {
  return (
    <section className="relative w-full pt-24 pb-12 sm:pt-32 overflow-hidden border-b border-border/50">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          
          <div className="space-y-6 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-primary font-mono text-xs sm:text-sm tracking-widest uppercase"
            >
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>System_Events_Log</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground tracking-tighter"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              ENGAGE <br />
              <span className="text-primary mr-4">&gt;&gt;</span>
              EXECUTE
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-lg text-muted-foreground font-medium leading-relaxed border-l-2 border-primary/30 pl-4 sm:pl-6"
            >
              Join the timeline of innovation. Participate in hackathons, workshops, and 
              coding sprints designed to upgrade your stack.
            </motion.p>
          </div>

          {/* Stats / Decorative Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 md:gap-8"
          >
            <div className="h-28 w-28 sm:h-32 sm:w-32 bg-card border border-border flex flex-col items-center justify-center p-4 text-center group hover:border-primary transition-colors">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground group-hover:text-primary transition-colors mb-2" />
              <span className="text-xl sm:text-2xl font-bold font-mono">20+</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Annual Events</span>
            </div>
            <div className="h-28 w-28 sm:h-32 sm:w-32 bg-card border border-border flex flex-col items-center justify-center p-4 text-center group hover:border-primary transition-colors">
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground group-hover:text-primary transition-colors mb-2" />
              <span className="text-xl sm:text-2xl font-bold font-mono">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Tech Focused</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
