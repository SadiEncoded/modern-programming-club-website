"use client";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";
import { Department, TeamMemberWithSkills } from "@/types/team";
import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState("All");
  const displayMembers = members;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4 block">
            Core Team
          </span>
          <h2
            className="text-3xl md:text-4xl font-black text-foreground"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Meet Our Leaders
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["All", "Leadership", "Technical", "Operations", "Design"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border",
                activeTab === tab
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                  : "bg-muted/30 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              )}
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Team sections */}
        <div className="space-y-12">
          {["Leadership", "Operations", "Design", "Technical"].map((dept) => {
            // Filter members for this department
            // If activeTab is NOT "All", only show if it matches the active tab
            if (activeTab !== "All" && activeTab !== dept) return null;

            const deptMembers = displayMembers.filter(m => m.department === dept);
            if (deptMembers.length === 0) return null;

            return (
              <div key={dept} className="space-y-6">
                {/* Section Header (only if showing All) */}
                {activeTab === "All" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-wider" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                      {dept}
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                  </motion.div>
                )}

                <div className="flex flex-wrap justify-center gap-4">
                  {deptMembers.map((member, index) => {
                    const colors = departmentColors[member.department as Department];
                    
                    return (
                      <motion.div
                        key={member.id || member.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group relative w-[calc(50%-0.5rem)] sm:w-[calc(33.33%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
                      >
                        {/* Card */}
                        <div className={`relative h-full bg-card rounded-xl border ${colors.border} hover:border-current overflow-hidden transition-all duration-500 group-hover:${colors.text} flex flex-col`}>
                          {/* Gradient overlay on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                          
                          {/* Image container - Clean style, no box */}
                          <div className="relative aspect-[3/4] overflow-hidden bg-muted/20 group-hover/image:scale-100 transition-all duration-300">
                             <div className="absolute inset-0 z-0 hidden group-hover:block transition-all duration-500">
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
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
                            <Image
                              src={member.image_url || "/team/placeholder.jpg"}
                              alt={member.name}
                              fill
                              className="object-cover object-top group-hover:scale-105 transition-transform duration-700 relative z-20"
                            />
                            
                            {/* Department badge */}
                            <div className={`absolute top-2 right-2 z-20 px-2 py-0.5 rounded-full ${colors.bg} backdrop-blur-md border ${colors.border} shadow-sm`}>
                              <span className={`text-[8px] font-black uppercase tracking-wider ${colors.text}`}>
                                {member.department}
                              </span>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="relative z-10 p-3 flex flex-col flex-grow text-center">
                            {/* Name & Role */}
                            <h3
                              className="text-sm font-black text-foreground mb-0.5 tracking-tight"
                              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                            >
                              {member.name}
                            </h3>
                            <p className={`text-[10px] font-bold mb-2 ${colors.text} uppercase tracking-wide`}>
                              {member.role}
                            </p>

                            {/* Bio */}
                            <p className="text-[10px] text-muted-foreground leading-relaxed mb-3 font-medium line-clamp-2">
                              {member.bio}
                            </p>

                            <div className="mt-auto">
                              {/* Skills */}
                              <div className="flex flex-wrap justify-center gap-1 mb-2">
                                {member.skills?.slice(0, 3).map((skill: string) => (
                                  <span
                                    key={skill}
                                    className="px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider bg-muted/50 text-muted-foreground rounded border border-border/50"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>

                              {/* Social links */}
                              <div className="flex justify-center items-center gap-1.5 pt-2 border-t border-border/50">
                                {member.github_url && (
                                  <a
                                    href={member.github_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 rounded-full hover:bg-muted transition-colors group/icon border border-transparent hover:border-border"
                                    aria-label="GitHub"
                                  >
                                    <Github className="w-3 h-3 text-muted-foreground group-hover/icon:text-foreground transition-colors" />
                                  </a>
                                )}
                                {member.linkedin_url && (
                                  <a
                                    href={member.linkedin_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 rounded-full hover:bg-muted transition-colors group/icon border border-transparent hover:border-border"
                                    aria-label="LinkedIn"
                                  >
                                    <Linkedin className="w-3 h-3 text-muted-foreground group-hover/icon:text-foreground transition-colors" />
                                  </a>
                                )}
                                {member.email && (
                                  <a
                                    href={`mailto:${member.email}`}
                                    className="p-1.5 rounded-full hover:bg-muted transition-colors group/icon border border-transparent hover:border-border"
                                    aria-label="Email"
                                  >
                                    <Mail className="w-3 h-3 text-muted-foreground group-hover/icon:text-foreground transition-colors" />
                                  </a>
                                )}
                                {member.website_url && (
                                  <a
                                    href={member.website_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 rounded-full hover:bg-muted transition-colors group/icon border border-transparent hover:border-border"
                                    aria-label="Website"
                                  >
                                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover/icon:text-foreground transition-colors" />
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
    </section>
  );
};
