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
    id: "1",
    title: "Example Event",
    description: "This is a placeholder description for an event.",
    date: "2026-01-01",
    bannerUrl: "/sections/shared/bg-pattern.svg",
    mode: "offline",
    location: "Campus Auditorium",
  },
];

export const members: Member[] = [
  {
    id: "1",
    name: "John Doe",
    role: "President",
    department: "Leadership",
    image_url: "/team/placeholder.jpg",
    bio: "Placeholder bio for the president.",
    skills: ["Leadership", "Example"],
    email: "john.doe@example.com",
    is_active: true,
    display_order: 1,
    created_at: "",
    updated_at: "",
    semester: "4th",
    phone: "017XXXXXXXX",
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
];

export const achievements: Achievement[] = [
  {
    id: "a1",
    title: "Example Achievement",
    description: "Description of a significant achievement.",
    imageUrl: "/sections/shared/bg-pattern.svg",
    date: "2024-01-01",
    category: "general",
  },
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Example Project",
    description: "A placeholder project description.",
    githubLink: "#",
    previewImage: "/sections/shared/bg-pattern.svg",
    techStack: ["Next.js"],
    members: ["1"],
  },
];

export const resources: Resource[] = [
  {
    id: "r1",
    title: "Example Resource",
    description: "A placeholder resource link.",
    category: "Guides",
    link: "#",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Example Blog Post",
    slug: "example-post",
    coverImage: "/sections/shared/bg-pattern.svg",
    excerpt: "Placeholder excerpt for a blog post.",
    author: "Admin",
    createdAt: "2024-01-01",
  },
];
