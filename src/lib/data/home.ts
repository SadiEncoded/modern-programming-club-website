import { BookOpen, Code2, Trophy } from "lucide-react";

export const HERO_DATA = {
  title1: "{Code Your Future}",
  title2: "//Build Your Dreams//",
  description: "DICPC is more than just a club. It's a launchpad for the next generation of engineers, problem solvers, and innovators. Ready to push your limits?",
  ctaPrimary: {
    label: "Join Community",
    href: "/join"
  },
  ctaSecondary: {
    label: "Learn More",
    href: "#pillars"
  }
};

export const PILLARS_DATA = [
  {
    icon: BookOpen,
    title: "Learn",
    description: "Master algorithms and problem-solving through intensive workshops, peer mentorship, and structured training programs.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Code2,
    title: "Build",
    description: "Transform ideas into production-ready systems through collaborative hackathons and real-world engineering projects.",
    gradient: "from-emerald-500/10 to-green-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-500/20",
  },
  {
    icon: Trophy,
    title: "Compete",
    description: "Challenge yourself in national and international programming contests. Compete with the world's best developers.",
    gradient: "from-orange-500/10 to-amber-500/10",
    iconColor: "text-orange-600 dark:text-orange-400",
    borderColor: "border-orange-500/20",
  },
];

export const FOUNDATION_DATA = {
  eyebrow: "Our Foundation",
  title: "Developing Tomorrow's Innovators"
};
