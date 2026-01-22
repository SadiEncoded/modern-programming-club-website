"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users } from "lucide-react";

const objectives = [
  {
    icon: GraduationCap,
    title: "Educational & Skill Development",
    description: "Enhance problem-solving, logical reasoning, and algorithmic capabilities through competitive programming and project-based learning.",
    color: "emerald",
    points: [
      "Hands-on workshops and coding sessions",
      "Learning across languages and frameworks",
      "Hackathons and coding contests"
    ]
  },
  {
    icon: Briefcase,
    title: "Professional & Career Development",
    description: "Support personal and professional growth in computer science, software engineering, and related technological domains.",
    color: "blue",
    points: [
      "Preparation for competitions",
      "Industry challenge readiness",
      "Career mentorship programs"
    ]
  },
  {
    icon: Users,
    title: "Community & Innovation",
    description: "Foster an inclusive, collaborative, and innovative learning environment promoting teamwork, mentorship, and peer-to-peer learning.",
    color: "cyan",
    points: [
      "Showcase student talent",
      "Collaborative projects",
      "Inclusive community building"
    ]
  }
];

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-600 dark:text-emerald-400",
    icon: "text-emerald-500"
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-600 dark:text-blue-400",
    icon: "text-blue-500"
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    text: "text-cyan-600 dark:text-cyan-400",
    icon: "text-cyan-500"
  }
};

export const ObjectivesGrid = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-primary mb-3 sm:mb-4 block">
            Our Objectives
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground mb-3 sm:mb-4" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
            Three Pillars of Excellence
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach to building skilled, professional, and community-oriented programmers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {objectives.map((objective, index) => {
            const colors = colorMap[objective.color];
            const Icon = objective.icon;
            
            return (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`relative bg-card border ${colors.border} rounded-lg p-6 sm:p-8 h-full hover:border-current transition-all duration-300 flex flex-col overflow-hidden`}>
                  {/* Icon Box */}
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-6 sm:mb-8 flex items-center justify-center bg-muted/30 border border-border rounded-md group-hover:border-current transition-colors">
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${colors.icon}`} />
                    <div className={`absolute -top-1 -left-1 w-2 h-2 border-t border-l ${colors.border}`} />
                    <div className={`absolute -bottom-1 -right-1 w-2 h-2 border-b border-r ${colors.border}`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-black mb-3 sm:mb-4 ${colors.text}`} style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                    {objective.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 font-medium">
                    {objective.description}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2 sm:space-y-3 mt-auto">
                    {objective.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`w-1.5 h-px bg-current mt-[10px] opacity-40`} />
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 opacity-[0.03] pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
