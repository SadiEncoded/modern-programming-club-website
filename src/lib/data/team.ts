import { TeamMemberWithSkills } from "@/types/team";
import { members as localMembers } from "./club-data";

/**
 * Fetch all active team members with their skills (Mocked)
 */
export async function getTeamMembers(): Promise<TeamMemberWithSkills[]> {
  return localMembers.map(member => ({
    ...member,
    skills: member.skills || []
  })) as unknown as TeamMemberWithSkills[];
}

/**
 * Fetch team members by department (Mocked)
 */
export async function getTeamMembersByDepartment(
  department: string
): Promise<TeamMemberWithSkills[]> {
  return localMembers.filter(m => m.department === department).map(member => ({
    ...member,
    skills: member.skills || []
  })) as unknown as TeamMemberWithSkills[];
}

/**
 * Get team statistics (Mocked)
 */
export async function getTeamStats() {
  const totalMembers = localMembers.length;
  const coreTeam = localMembers.filter(m => ["Leadership", "Technical"].includes(m.department)).length;

  return {
    totalMembers,
    coreTeam,
  };
}
