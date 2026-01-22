import { Database } from "@/types/supabase";

export type TeamMember = Database["public"]["Tables"]["team_members"]["Row"];
export type TeamMemberWithSkills = TeamMember & {
  skills: string[];
  committee?: string;
};

export type Department = "Leadership" | "Technical" | "Operations" | "Design";

export interface TeamMemberInsert {
  name: string;
  role: string;
  department: Department;
  bio?: string;
  image_url?: string;
  semester?: string;
  phone?: string;
  email: string;
  github_url?: string;
  linkedin_url?: string;
  website_url?: string;
  is_active?: boolean;
  committee?: string;
  display_order?: number;
}

export interface TeamMemberUpdate extends Partial<TeamMemberInsert> {
  id: string;
}
