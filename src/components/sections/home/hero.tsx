"use client";

import { useTheme } from "next-themes";
import React from "react";

import { GlitchWrapper } from "@/components/ui/glitch-wrapper";
import { PixelImage } from "@/components/ui/pixel-image";
import { RetroGrid } from "@/components/ui/retro-grid";
import { Spotlight } from "@/components/ui/spotlight";
import { TechText } from "@/components/ui/tech-text";
import { HERO_DATA, JOIN_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Code2, Trophy, Users2, Zap } from "lucide-react";
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
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-start pt-12 sm:pt-16 lg:pt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill={isDark ? "#30E58F" : "#E2FEF4"}
          fillOpacity={isDark ? 0.14 : 0.4}
        />
      </motion.div>
      

      {/* Background Concentric Circles (from Bg SVG) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isDark ? 0.4 : 0.15 }}
        transition={{ duration: 1.5, delay: 0.5 }}
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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <RetroGrid 
          lightLineColor="#00614A" 
          darkLineColor="#30E58F" 
          opacity={isDark ? 0.2 : 0.15}
        />
      </motion.div>

      {/* Top Decorative Design Triplet (Left, Center, Right) */}
      <div className="relative z-20 w-full flex items-start justify-between px-4 sm:px-10 lg:px-16 pointer-events-none mt-1 sm:mt-2">
        {/* Left Design */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
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
          className="relative w-[180px] xs:w-[240px] sm:w-[450px] lg:w-[650px] h-[100px] sm:h-[220px] lg:h-[300px] mx-2 sm:mx-4 shrink-0"
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
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative flex-1 h-[50px] sm:h-[90px] lg:h-[110px] pl-2 sm:pl-4"
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
      <div className="relative z-10 w-full max-w-7xl px-6 sm:px-10 lg:px-16 -mt-8 lg:-mt-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pb-12 lg:pb-24">
        
        {/* Left Side: Typography & CTAs & Benefits */}
        <div className="w-full lg:w-3/5 text-left space-y-10 lg:space-y-12 relative z-20">
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Join Page Title Structure */}
              <div className="space-y-2">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-4xl xs:text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
                  style={{ fontFamily: "var(--font-bruno-ace), var(--font-orbitron), sans-serif" }}
                >
                  Level up <br className="hidden sm:block" />
                  your <span className="text-primary italic">
                    <TechText text="Logic" glitchInterval={5000} aria-label="Logic" />
                  </span>
                </motion.h1>
              </div>

              {/* Original Home Hero Titles (smaller as accents/sub-headings) */}
              <div className="space-y-2 pt-4 border-l-2 border-primary/20 pl-6">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-xl md:text-2xl font-bold tracking-tight text-foreground/70"
                  style={{ fontFamily: "var(--font-bruno-ace), var(--font-orbitron), sans-serif" }}
                >
                  <TechText text={HERO_DATA.title1} glitchInterval={8000} aria-label={HERO_DATA.title1} />
                </motion.h3>
                <motion.h4 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="text-lg md:text-xl font-bold tracking-tight text-foreground/50"
                  style={{ fontFamily: "var(--font-bruno-ace), var(--font-orbitron), sans-serif" }}
                >
                  <TechText text={HERO_DATA.title2} glitchInterval={10000} scrambleSpeed={40} aria-label={HERO_DATA.title2} />
                </motion.h4>
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium"
            >
              {JOIN_DATA.description}
            </motion.p>
          </div>

          {/* Benefits in a single row on desktop */}
          <div className="grid gap-8 lg:gap-70 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {JOIN_DATA.benefits.map((benefit, index) => {
              const title = benefit.title;
              const Icon = title.includes("Competitive") ? Trophy : 
                           title.includes("Skill") ? Code2 : 
                           title.includes("Community") ? Users2 : Zap;
              return (
                <motion.div 
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="group flex items-start justify-between space-x-3"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-2 min-w-50">
                    <h3 className="text-xs font-bold uppercase tracking-wide leading-tight" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTAs below benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-5"
          >
            <GlitchWrapper>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={HERO_DATA.ctaPrimary.href}
                  className="inline-block px-10 py-4.5 bg-foreground text-background text-[10px] font-black tracking-[0.2em] uppercase rounded-full hover:bg-primary hover:text-white hover:shadow-[0_8px_30px_rgba(0,103,79,0.3)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all relative group overflow-hidden shadow-xl dark:shadow-none"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  <span className="relative z-10">{HERO_DATA.ctaPrimary.label}</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </motion.div>
            </GlitchWrapper>
            
            <GlitchWrapper>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4.5 border-2 border-foreground/20 text-foreground text-[10px] font-black tracking-[0.2em] uppercase rounded-full hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all active:bg-primary/5"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                {HERO_DATA.ctaSecondary.label}
              </motion.button>
            </GlitchWrapper>
          </motion.div>
        </div>

        {/* Right Side: Featured SVG Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[55%] lg:absolute lg:right-0 lg:top-4 relative group pointer-events-none"
        >
          <div className="w-full h-full animate-float scale-110 lg:scale-125">
            <PixelImage
              src="/sections/home/macBookHero.svg"
              grid="8x3"
              className="w-full aspect-[2234/1008]"
              imgClassName="object-contain"
              pixelFadeInDuration={2000}
              loading="lazy"
            />
          </div>
          
          {/* Subtle glow effect behind macbook */}
          <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </motion.div>
      </div>
    </section>
  );
};
