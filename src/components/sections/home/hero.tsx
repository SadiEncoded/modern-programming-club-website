"use client";

import { useTheme } from "next-themes";
import React from "react";

import { PixelImage } from "@/components/ui/pixel-image";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Spotlight } from "@/components/ui/spotlight";
import { TechText } from "@/components/ui/tech-text";
import { HERO_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && (resolvedTheme === 'dark' || theme === 'dark');

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-24 overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill={isDark ? "#30E58F" : "#E2FEF4"}
        fillOpacity={isDark ? 0.14 : 0.4}
      />
      

      {/* Background Concentric Circles (from Bg SVG) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isDark ? 0.4 : 0.15 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] min-w-[1600px] aspect-square pointer-events-none z-0"
      >
        <Image
          src="/sections/shared/bg-pattern.svg"
          alt="Background Design"
          fill
          className="object-contain opacity-80 dark:invert-[0.05]"
          priority
        />
      </motion.div>

      {/* Dynamic Background Grid Pattern */}
      {/* Retro Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <RetroGrid 
          lightLineColor="#00614A" 
          darkLineColor="#30E58F" 
          opacity={isDark ? 0.2 : 0.15}
        />
      </div>

      {/* Top Decorative Design Triplet (Left, Center, Right) */}
      <div className="relative z-20 w-full flex items-start justify-between px-6 sm:px-10 lg:px-16 pointer-events-none mt-4">
        {/* Left Design */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-1 h-[70px] sm:h-[90px] lg:h-[110px] pr-4"
        >
          <Image
            src="/sections/shared/top-left-accent.svg"
            alt=""
            fill
            className="object-contain object-left dark:invert"
            priority
          />
        </motion.div>

        {/* Center Logo/Design */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-[300px] sm:w-[450px] lg:w-[650px] h-[150px] sm:h-[220px] lg:h-[300px] mx-4 shrink-0"
        >
          <Image
            src={isDark ? "/sections/shared/top-center-accent-dark.svg" : "/sections/shared/top-center-accent.svg"}
            alt="DICPC Brand Header"
            fill
            className="object-contain object-top"
            priority
          />
        </motion.div>

        {/* Right Design */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-1 h-[70px] sm:h-[90px] lg:h-[110px] pl-4"
        >
          <Image
            src="/sections/shared/top-right-accent.svg"
            alt=""
            fill
            className="object-contain object-right dark:invert"
            priority
          />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 mt-4 flex flex-col items-center space-y-12">
        {/* Featured SVG Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[2234/1008] max-w-full md:max-w-6xl group"
        >
          
          <div className="w-full h-full animate-float">
            <PixelImage
              src="/sections/home/macBookHero.svg"
              grid="8x3"
              className="w-full h-full"
              imgClassName="object-contain"
              pixelFadeInDuration={2000}
            />
          </div>
        </motion.div>

        {/* Hero Typography Block */}
        <div className="w-full text-left pt-6 pb-32">
          <motion.h1 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[0.85]"
            style={{ fontFamily: "var(--font-bruno-ace), var(--font-orbitron), sans-serif" }}
          >
            <TechText text={HERO_DATA.title1} glitchInterval={4000} />
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-[50px] font-bold tracking-[-0.03em] text-foreground/80 pl-1 mt-3"
            style={{ fontFamily: "var(--font-bruno-ace), var(--font-orbitron), sans-serif" }}
          >
            <TechText text={HERO_DATA.title2} glitchInterval={6000} scrambleSpeed={40} />
          </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                {HERO_DATA.description}
              </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={HERO_DATA.ctaPrimary.href}
                className="inline-block px-10 py-4.5 bg-foreground text-background text-[10px] font-black tracking-[0.2em] uppercase rounded-full hover:bg-primary hover:text-white hover:shadow-[0_8px_30px_rgba(0,103,79,0.3)] transition-all relative group overflow-hidden shadow-xl dark:shadow-none"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                <span className="relative z-10">{HERO_DATA.ctaPrimary.label}</span>
                <motion.div 
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </motion.div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4.5 border-2 border-foreground/20 text-foreground text-[10px] font-black tracking-[0.2em] uppercase rounded-full hover:border-primary hover:text-primary transition-all active:bg-primary/5"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                {HERO_DATA.ctaSecondary.label}
              </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
