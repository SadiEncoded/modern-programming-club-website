"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface GlitchWrapperProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export const GlitchWrapper = ({ 
  children, 
  className = "" 
}: Omit<GlitchWrapperProps, "intensity">) => {
  const [isHovered, setIsHovered] = useState(false);

  const glitchVariants = {
    hover: {
      x: [0, -2, 2, -1, 1, 0],
      y: [0, 1, -1, 2, -2, 0],
      filter: [
        "none",
        "drop-shadow(-2px 0 #ff00c1) drop-shadow(2px 0 #00fff0)",
        "drop-shadow(2px 0 #ff00c1) drop-shadow(-2px 0 #00fff0)",
        "none"
      ],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatType: "mirror" as const,
      }
    }
  };

  return (
    <div 
      className={cn("relative inline-block group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={isHovered ? "hover" : ""}
        variants={glitchVariants}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Ghostly glitch layers */}
      {isHovered && Array.from({ length: 2 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen"
          initial={{ x: 0, opacity: 0 }}
          animate={{ 
            x: i === 0 ? [-5, 5, -3] : [5, -5, 3],
            opacity: [0, 0.5, 0],
          }}
          transition={{ 
            duration: 0.15, 
            repeat: Infinity, 
            delay: i * 0.05 
          }}
        >
          {children}
        </motion.div>
      ))}
    </div>
  );
};
