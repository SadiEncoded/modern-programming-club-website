/**
 * LOCAL DATA EXAMPLE TEMPLATE
 * 
 * Copy this file to 'local-data.ts' and fill in your actual data.
 * 'local-data.ts' is gitignored to protect sensitive information like 
 * phone numbers and personal emails when pushing to GitHub.
 */

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  bannerUrl: string;
  mode: "online" | "offline" | "hybrid";
  location: string;
  registrationLink?: string;
};

export type Member = {
  id: string;
  name: string;
  role: string;
  department: "Leadership" | "Technical" | "Operations" | "Design";
  image_url: string;
  bio: string;
  skills: string[];
  email: string;
  is_active: boolean;
  committee: string;
  display_order: number;
  created_at: string;
  updated_at: string;
  semester: string | null;
  phone: string | null;
  github_url: string | null;
  linkedin_url: string | null;
  website_url: string | null;
  codeforcesId?: string | null;
  leetcodeId?: string | null;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  githubLink: string;
  previewImage: string;
  techStack: string[];
  members: string[];
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  excerpt: string;
  author: string;
  createdAt: string;
};

export const events: Event[] = [
  {
    id: "example-1",
    title: "Example Title",
    description: "Example description.",
    date: "2026-01-01",
    bannerUrl: "/sections/shared/bg-pattern.svg",
    mode: "offline",
    location: "Example Location",
  }
];

export const members: Member[] = [
  {
    id: "1",
    name: "Member Name",
    role: "Role",
    department: "Leadership",
    image_url: "/people/team/executive-2025/president.svg",
    bio: "Bio description.",
    skills: ["Skill"],
    email: "email@example.com",
    is_active: true,
    committee: "2025",
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "1st Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  }
];

export const achievements: Achievement[] = [];
export const projects: Project[] = [];
export const resources: Resource[] = [];
export const blogPosts: BlogPost[] = [];
