"use client"

import { Container } from "@/components/shared/container";
import { RetroGrid } from "@/components/ui/retro-grid";
import { TechText } from "@/components/ui/tech-text";
import { JOIN_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Code2, Trophy, Users2, Zap } from "lucide-react";
import { RegisterForm } from "./register-form";

const ICON_MAP = {
  Trophy,
  Code2,
  Users2,
  Zap,
};

export function JoinContent() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background py-20 lg:py-32">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <RetroGrid 
          lightLineColor="#00614A" 
          darkLineColor="#30E58F" 
          opacity={0.1}
        />
      </div>
      
      <Container className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Content Side */}
          <div className="flex flex-col justify-center space-y-12">
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary uppercase"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                {JOIN_DATA.eyebrow}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
                style={{ fontFamily: "var(--font-bruno-ace), var(--font-orbitron), sans-serif" }}
              >
                {JOIN_DATA.titlePrefix}
                <span className="text-primary italic block sm:inline">
                   <TechText text={JOIN_DATA.words[0]} glitchInterval={3000} />
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed font-medium"
              >
                {JOIN_DATA.description}
              </motion.p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {JOIN_DATA.benefits.map((benefit, index) => {
                const title = benefit.title;
                const Icon = title.includes("Competitive") ? Trophy : 
                             title.includes("Skill") ? Code2 : 
                             title.includes("Community") ? Users2 : Zap;
                return (
                  <motion.div 
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group flex flex-col space-y-3"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <RegisterForm />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
