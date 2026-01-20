

// import { supabase } from "@/lib/supabase";
import { cache } from "react";
import {
    achievements as localAchievements,
    blogPosts as localBlogPosts,
    events as localEvents,
    members as localMembers,
    projects as localProjects,
    resources as localResources,
    type Event,
    type Member,
    type Project
} from "./local-data";

type QueryOptions = {
  limit?: number;
  orderBy?: string;
  ascending?: boolean;
};

const isSupabaseConfigured = false;
//   Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
//   Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const sliceFallback = <T,>(data: T[], limit?: number) =>
  typeof limit === "number" ? data.slice(0, limit) : data;

// Transform database row to Event type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformEvent = (row: any): Event => ({
  id: row.id,
  title: row.title,
  description: row.description || "",
  date: row.date, // Already mapped from event_date in view
  bannerUrl: row.bannerUrl || "", // Already mapped from banner_url in view
  mode: "offline" as const, // Default, can be enhanced later
  location: row.location || "",
  registrationLink: undefined,
});

// Transform database row to Member type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformMember = (row: any): Member => ({
  id: row.id,
  name: row.name, // Already mapped from full_name in view
  department: "Technical", // Will need to join with departments table
  role: row.role,
  bio: row.bio || "",
  skills: [], // Not in current schema
  image_url: row.image_url || "", // Already mapped from avatar_url in view
  email: row.email || "",
  is_active: row.is_active ?? true,
  display_order: row.display_order ?? 0,
  created_at: row.created_at || "",
  updated_at: row.updated_at || "",
  semester: row.semester || null,
  phone: row.phone || null,
  github_url: row.github_url || null,
  linkedin_url: row.linkedin_url || null,
  website_url: row.website_url || null,
  codeforcesId: row.codeforcesId || null,
  leetcodeId: row.leetcodeId || null,
});

// Transform database row to Project type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformProject = (row: any): Project => ({
  id: row.id,
  title: row.title,
  description: row.description || "", // Already mapped from details in view
  githubLink: "", // Not in current schema
  previewImage: row.previewImage || "", // Already mapped from cover_url in view
  techStack: [], // Not in current schema
  members: [], // Will need to join with project_members
});

 
async function queryTable<T>(
  _table: string,
  fallback: T[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _transform?: (row: any) => T,
  { limit }: QueryOptions = {},
): Promise<T[]> {
  const fallbackData = sliceFallback(fallback, limit);
  return fallbackData;
}

 
async function fetchSingle<T>(
  _table: string,
  column: keyof T & string,
  value: string,
  fallback: T[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  _transform?: (row: any) => T,
): Promise<T | null> {
  return fallback.find((item) => item[column] === value) ?? null;
}

export const isSupabaseConnected = isSupabaseConfigured;

export const getEvents = cache(
  async (options?: QueryOptions) =>
    queryTable<Event>("events", localEvents, transformEvent, {
      orderBy: "date",
      ascending: true,
      ...options,
    }),
);

export const getEventById = cache(
  async (id: string) =>
    fetchSingle<Event>("events", "id", id, localEvents, transformEvent),
);

export const getMembers = cache(
  async (options?: QueryOptions) =>
    queryTable<Member>("members", localMembers, transformMember, {
      orderBy: "name",
      ascending: true,
      ...options,
    }),
);

export const getProjects = cache(
  async (options?: QueryOptions) =>
    queryTable<Project>("projects", localProjects, transformProject, {
      orderBy: "created_at",
      ascending: false,
      ...options,
    }),
);

export const getAchievements = cache(
  async (options?: QueryOptions) => {
    // Achievements table doesn't exist yet, return local data
    return sliceFallback(localAchievements, options?.limit);
  },
);

export const getResources = cache(
  async (options?: QueryOptions) => {
    // Resources table doesn't exist yet, return local data
    return sliceFallback(localResources, options?.limit);
  },
);

export const getBlogPosts = cache(
  async (options?: QueryOptions) => {
    // Blog posts table doesn't exist yet, return local data
    return sliceFallback(localBlogPosts, options?.limit);
  },
);

export const getBlogPostBySlug = cache(
  async (slug: string) => {
    // Blog posts table doesn't exist yet, return local data
    return localBlogPosts.find((post) => post.slug === slug) ?? null;
  },
);

export * from "./about";
export * from "./home";
export * from "./join";
export * from "./local-data";
export * from "./team";
