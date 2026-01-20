export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      team_members: {
        Row: {
          id: string
          name: string
          role: string
          department: "Leadership" | "Technical" | "Operations" | "Design"
          bio: string | null
          image_url: string | null
          semester: string | null
          phone: string | null
          email: string
          github_url: string | null
          linkedin_url: string | null
          website_url: string | null
          is_active: boolean
          display_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          role: string
          department: "Leadership" | "Technical" | "Operations" | "Design"
          bio?: string | null
          image_url?: string | null
          semester?: string | null
          phone?: string | null
          email: string
          github_url?: string | null
          linkedin_url?: string | null
          website_url?: string | null
          is_active?: boolean
          display_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string
          department?: "Leadership" | "Technical" | "Operations" | "Design"
          bio?: string | null
          image_url?: string | null
          semester?: string | null
          phone?: string | null
          email?: string
          github_url?: string | null
          linkedin_url?: string | null
          website_url?: string | null
          is_active?: boolean
          display_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      skills: {
        Row: {
          id: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
        }
      }
      team_member_skills: {
        Row: {
          team_member_id: string
          skill_id: string
        }
        Insert: {
          team_member_id: string
          skill_id: string
        }
        Update: {
          team_member_id?: string
          skill_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
