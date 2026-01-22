"use client";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";
import { Department, TeamMemberWithSkills } from "@/types/team";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const departmentColors: Record<Department, { gradient: string; border: string; text: string; bg: string }> = {
  Leadership: {
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
    text: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10",
  },
  Technical: {
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    text: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10",
  },
  Operations: {
    gradient: "from-emerald-500/20 to-green-500/20",
    border: "border-emerald-500/30",
    text: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  Design: {
    gradient: "from-orange-500/20 to-amber-500/20",
    border: "border-orange-500/30",
    text: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-500/10",
  },
};

// TeamGrid component using members passed from parent
interface TeamGridProps {
  members: TeamMemberWithSkills[];
}

export const TeamGrid = ({ members }: TeamGridProps) => {
  // Group members by committee
  const committees = Array.from(new Set(members.map(m => m.committee || "2025"))).sort().reverse();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {committees.map((committeeYear) => {
          const committeeMembers = members.filter(m => (m.committee || "2025") === committeeYear);
          
          return (
            <div key={committeeYear} className="space-y-12">
              {/* Committee Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2
                  className="text-4xl md:text-5xl font-black text-foreground mb-4"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  Executive Committee {committeeYear}
                </h2>
                <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
              </motion.div>

              {/* Department Sections within Committee */}
              <div className="space-y-16">
                {["Leadership", "Operations", "Design", "Technical"].map((dept) => {
                  const deptMembers = committeeMembers.filter(m => m.department === dept);
                  if (deptMembers.length === 0) return null;

                  return (
                    <div key={`${committeeYear}-${dept}`} className="space-y-8">
                      {/* Department Header */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                      >
                        <h3 className="text-xl font-black text-foreground uppercase tracking-widest" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                          {dept}
                        </h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                      </motion.div>

                      {/* Members Grid */}
                      <div className="flex flex-wrap justify-center gap-6">
                        {deptMembers.map((member, index) => {
                          const colors = departmentColors[member.department as Department];
                          
                          return (
                            <motion.div
                              key={member.id || member.name}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.05, duration: 0.5 }}
                              className="group relative w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(25%-1.125rem)] max-w-[280px]"
                            >
                              {/* Card */}
                              <div className={cn(
                                "relative h-full bg-card rounded-2xl border transition-all duration-500 flex flex-col overflow-hidden",
                                colors.border,
                                "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
                              )}>
                                {/* Hover Background Overlay */}
                                <div className={cn(
                                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                                  colors.gradient
                                )} />
                                
                                {/* Image container */}
                                <div className="relative aspect-square overflow-hidden bg-muted/20">
                                   <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                      <CanvasRevealEffect
                                        animationSpeed={3}
                                        containerClassName="bg-transparent"
                                        colors={[
                                           dept === "Leadership" ? [168, 85, 247] :
                                           dept === "Technical" ? [59, 130, 246] :
                                           dept === "Operations" ? [16, 185, 129] :
                                           [249, 115, 22]
                                        ]}
                                        dotSize={2}
                                      />
                                   </div>
                                  <Image
                                    src={member.image_url || "/team/placeholder.jpg"}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110 relative z-10"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Content */}
                                <div className="p-4 flex flex-col flex-grow text-center relative z-20">
                                  <h4
                                    className="text-base font-black text-foreground mb-1 tracking-tight"
                                    style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                                  >
                                    {member.name}
                                  </h4>
                                  <p className={cn("text-xs font-bold mb-3 uppercase tracking-wider", colors.text)}>
                                    {member.role}
                                  </p>

                                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                                    {member.bio}
                                  </p>

                                  <div className="mt-auto space-y-4">
                                    {/* Skills (Visual pill style) */}
                                    <div className="flex flex-wrap justify-center gap-1.5">
                                      {member.skills?.slice(0, 2).map((skill: string) => (
                                        <span
                                          key={skill}
                                          className="px-2 py-0.5 text-[9px] font-bold uppercase bg-secondary/50 text-secondary-foreground rounded-full border border-border/50"
                                        >
                                          {skill}
                                        </span>
                                      ))}
                                    </div>

                                    {/* Social links */}
                                    <div className="flex justify-center items-center gap-3 pt-3 border-t border-border/50">
                                      {member.github_url && (
                                        <a href={member.github_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                          <Github className="w-4 h-4" />
                                        </a>
                                      )}
                                      {member.linkedin_url && (
                                        <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                          <Linkedin className="w-4 h-4" />
                                        </a>
                                      )}
                                      {member.email && (
                                        <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                          <Mail className="w-4 h-4" />
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
