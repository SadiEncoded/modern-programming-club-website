"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Department, TeamMemberWithSkills } from "@/types/team";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface MobileTeamCardProps {
  member: TeamMemberWithSkills;
  dept: string;
}

const departmentColors: Record<Department, { border: string; text: string; bg: string; icon: string }> = {
  Leadership: {
    border: "border-purple-500/30",
    text: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-500/10",
    icon: "text-purple-500"
  },
  Technical: {
    border: "border-blue-500/30",
    text: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/10",
    icon: "text-blue-500"
  },
  Operations: {
    border: "border-emerald-500/30",
    text: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    icon: "text-emerald-500"
  },
  Design: {
    border: "border-orange-500/30",
    text: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-500/10",
    icon: "text-orange-500"
  },
};

export const MobileTeamCard = ({ member }: Omit<MobileTeamCardProps, "dept">) => {
  const colors = departmentColors[member.department as Department];
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={() => setIsExpanded(!isExpanded)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      className={cn(
        "relative rounded-xl bg-card border shadow-sm overflow-hidden cursor-pointer active:scale-[0.98] transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
        colors.border
      )}
    >
      {/* Background Accent */}
      <div className={cn("absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-transparent to-background/50 pointer-events-none", colors.bg)} />

      <div className="flex items-start gap-4 p-3 relative z-10">
        {/* Image Section - Left Side */}
        <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border border-border/50 bg-muted/30">
          {!imageLoaded && <Skeleton className="absolute inset-0" />}
          <Image
            src={member.image_url || "/team/placeholder.jpg"}
            alt={member.name}
            fill
            className={cn("object-cover transition-opacity duration-300", imageLoaded ? "opacity-100" : "opacity-0")}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Header Content Section - Right Side */}
        <div className="flex-1 min-w-0 pr-6">
          <h4 
            className="text-sm font-black text-foreground mb-0.5"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            {member.name}
          </h4>
          <p className={cn("text-[10px] font-bold uppercase tracking-wider mb-2", colors.text)}>
            {member.role}
          </p>

          {!isExpanded && (
            <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
              {member.github_url && (
                <a href={member.github_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {member.linkedin_url && (
                <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Expand Icon */}
        <div className="absolute right-3 top-3 text-muted-foreground/50">
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isExpanded ? "rotate-180" : "rotate-0")} />
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-4 pt-1 border-t border-border/30 relative z-10">
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {member.bio}
              </p>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {member.skills?.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[9px] font-bold uppercase bg-secondary/50 text-secondary-foreground rounded-full border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-start items-center gap-4 pt-2" onClick={(e) => e.stopPropagation()}>
                  {member.github_url && (
                    <a href={member.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors bg-muted/30 px-3 py-1.5 rounded-md border border-border/50">
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {member.linkedin_url && (
                    <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors bg-muted/30 px-3 py-1.5 rounded-md border border-border/50">
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors bg-muted/30 px-3 py-1.5 rounded-md border border-border/50">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative vertical bar on right */}
      <div className={cn("absolute right-0 top-4 bottom-4 w-1 rounded-l-full opacity-40 transition-colors", colors.bg.replace('/10', '/50'))} />
    </motion.div>
  );
};
