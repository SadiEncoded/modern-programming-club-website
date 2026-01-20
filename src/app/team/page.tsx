import { TeamGrid } from "@/components/sections/team/team-grid";
import { TeamHero } from "@/components/sections/team/team-hero";
import { Container } from "@/components/shared/container";
import { getTeamMembers, getTeamStats } from "@/lib/data/team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the passionate minds behind DICPC - students, developers, and competitive programmers building the future of tech at Daffodil International College.",
};

export default async function TeamPage() {
  // Fetch team data from database (will fallback to mock data if DB not configured)
  const teamMembers = await getTeamMembers();
  const stats = await getTeamStats();

  return (
    <Container>
      <TeamHero stats={stats} />
      <TeamGrid members={teamMembers} />
    </Container>
  );
}
