import { AboutHero } from "@/components/sections/about/about-hero";
import { ChairmanSpeech } from "@/components/sections/about/chairman-speech";
import { MissionVision } from "@/components/sections/about/mission-vision";
import { ObjectivesGrid } from "@/components/sections/about/objectives-grid";
import { PrincipalSpeech } from "@/components/sections/about/principal-speech";
import { StatsShowcase } from "@/components/sections/about/stats-showcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | DICPC - Empowering Future Programmers",
  description: "Discover the mission, vision, and leadership of DIC Programming Club (DICPC). We are the premier programming community at Daffodil International College, dedicated to STEM excellence, innovation, and career development.",
  keywords: ["DICPC", "Daffodil International College", "Programming Club", "STEM", "Innovation", "Sabur Khan", "Coding Community", "Bangladesh"],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <MissionVision />
      <ObjectivesGrid />
      <StatsShowcase />
      <ChairmanSpeech />
      <PrincipalSpeech />
    </main>
  );
}
