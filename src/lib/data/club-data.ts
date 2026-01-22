/**
 * DICPC PRODUCTION DATA
 * Last Updated: 2026-01-22
 * Build ID: 01HRC
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
  // Upcoming Events
  {
    id: "upcoming-1",
    title: "ICPC Regional Preparation Workshop",
    description: "Intensive training session covering advanced algorithms, dynamic programming, and graph theory to prepare for the upcoming ICPC regional contest.",
    date: "2026-02-15",
    bannerUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    mode: "hybrid",
    location: "DICPC Lab & Online",
    registrationLink: "/join",
  },
  {
    id: "upcoming-2",
    title: "Web Development Bootcamp 2026",
    description: "Learn modern web development with React, Next.js, and TypeScript. Build real-world projects and deploy them to production.",
    date: "2026-02-28",
    bannerUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    mode: "offline",
    location: "Campus Auditorium",
    registrationLink: "/join",
  },
  {
    id: "upcoming-3",
    title: "AI & Machine Learning Workshop",
    description: "Hands-on workshop exploring machine learning fundamentals, neural networks, and practical AI applications using Python and TensorFlow.",
    date: "2026-03-10",
    bannerUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    mode: "online",
    location: "Zoom Meeting",
    registrationLink: "/join",
  },
  
  // Past Events
  {
    id: "past-1",
    title: "NHSPC 2025 National Programming Contest",
    description: "DICPC members represented the college at the National High School Programming Contest 2025, competing against top programmers nationwide.",
    date: "2025-12-20",
    bannerUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    mode: "offline",
    location: "Dhaka University",
  },
  {
    id: "past-2",
    title: "Hackathon 2025: Code for Change",
    description: "24-hour hackathon where teams built innovative solutions for social impact. Over 50 participants created projects addressing real-world problems.",
    date: "2025-11-15",
    bannerUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    mode: "offline",
    location: "Campus Innovation Hub",
  },
  {
    id: "past-3",
    title: "Competitive Programming Bootcamp",
    description: "Week-long intensive bootcamp covering data structures, algorithms, and problem-solving techniques. Featured guest lectures from industry experts.",
    date: "2025-10-05",
    bannerUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    mode: "hybrid",
    location: "DICPC Lab & Online",
  },
  {
    id: "past-4",
    title: "Git & GitHub Workshop",
    description: "Beginner-friendly workshop teaching version control fundamentals, collaborative workflows, and open-source contribution best practices.",
    date: "2025-09-20",
    bannerUrl: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80",
    mode: "offline",
    location: "Computer Lab 2",
  },
  {
    id: "past-5",
    title: "Tech Talk: Career in Software Engineering",
    description: "Alumni panel discussion featuring successful software engineers from top tech companies sharing career insights and industry trends.",
    date: "2025-08-30",
    bannerUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    mode: "online",
    location: "YouTube Live",
  },
];

export const members: Member[] = [
  {
    id: "1",
    name: "Rupom Sarker",
    role: "President",
    department: "Leadership",
    image_url: "/people/team/executive-2025/president.svg",
    bio: "Leading DICPC with vision and dedication to foster a thriving programming community.",
    skills: ["Leadership", "Strategy", "Community Building", "Management"],
    email: "madhurjhosarker@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "3rd Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
  {
    id: "2",
    name: "Sheik Muhammad Shourov",
    role: "Vice President",
    department: "Leadership",
    image_url: "/people/team/executive-2025/vice-president-shourov.svg",
    bio: "Supporting club operations and driving strategic initiatives for member growth.",
    skills: ["Leadership", "Strategy", "Community Building", "Management"],
    email: "shourovpower2002@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 2,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "3rd Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
  {
    id: "3",
    name: "Mahmudul Hasan Sadi",
    role: "Vice President",
    department: "Leadership",
    image_url: "/people/team/executive-2025/vice-president-sadi.svg",
    bio: "Passionate about competitive programming and building innovative tech solutions.",
    skills: ["Leadership", "Strategy", "Community Building", "Management"],
    email: "sadi.hasanmain@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 3,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "1st Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
  {
    id: "4",
    name: "Rabeya Akter Ratna",
    role: "General Secretary",
    department: "Operations",
    image_url: "/people/team/executive-2025/general-secretary-ratna.svg",
    bio: "Managing club operations and ensuring smooth execution of all activities.",
    skills: ["Organization", "Coordination", "Planning", "Communication"],
    email: "rabeyasu56@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 4,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "3rd Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
  {
    id: "5",
    name: "Dipon Chakraborty",
    role: "Joint Secretary",
    department: "Operations",
    image_url: "/people/team/executive-2025/general-secretary-prantik.svg",
    bio: "Supporting administrative tasks and coordinating member activities.",
    skills: ["Organization", "Coordination", "Planning", "Communication"],
    email: "prantikchakraborty05@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 5,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "1st Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
  {
    id: "6",
    name: "Rashedul Islam",
    role: "Treasurer",
    department: "Operations",
    image_url: "/people/team/executive-2025/treasurer-rashed.svg",
    bio: "Managing club finances and ensuring transparent resource allocation.",
    skills: ["Organization", "Coordination", "Planning", "Communication"],
    email: "ahmedrabbihjcjv@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 6,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "3rd Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
  {
    id: "7",
    name: "Mahin Binta Matin",
    role: "Treasurer",
    department: "Operations",
    image_url: "/people/team/executive-2025/treasurer-mahin.svg",
    bio: "Overseeing financial planning and maintaining club budget records.",
    skills: ["Organization", "Coordination", "Planning", "Communication"],
    email: "mahin.binta21@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 7,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "1st Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
  {
    id: "8",
    name: "Saima Akter Mim",
    role: "Event Coordinator",
    department: "Operations",
    image_url: "/people/team/executive-2025/event-coordinator-mim.svg",
    bio: "Organizing engaging programming events and workshops for the community.",
    skills: ["Organization", "Coordination", "Planning", "Communication"],
    email: "sm6292561@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 8,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "3rd Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
  {
    id: "9",
    name: "Prottasha Chakraborty",
    role: "Event Coordinator",
    department: "Operations",
    image_url: "/people/team/executive-2025/event-coordinator-prottasha.svg",
    bio: "Coordinating contests and hackathons to enhance member skills.",
    skills: ["Organization", "Coordination", "Planning", "Communication"],
    email: "prottashacb@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 9,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "1st Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
  {
    id: "10",
    name: "Sadia Akter",
    role: "Media & Communication Head",
    department: "Design",
    image_url: "/people/team/executive-2025/media-head-sadia.svg",
    bio: "Managing club communications and social media presence.",
    skills: ["Social Media", "Content Creation", "Branding", "Design"],
    email: "mimsadi098765@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 10,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "3rd Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
  {
    id: "11",
    name: "Sabrina Sultana",
    role: "Media & Communication Head",
    department: "Design",
    image_url: "/people/team/executive-2025/media-head-sabrina.svg",
    bio: "Creating engaging content and managing digital outreach strategies.",
    skills: ["Social Media", "Content Creation", "Branding", "Design"],
    email: "sabrinasultana1152@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 11,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "1st Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
  {
    id: "12",
    name: "Hasan Dhrubo",
    role: "Tech Lead",
    department: "Technical",
    image_url: "/people/team/executive-2025/tech-lead.svg",
    bio: "Leading technical projects and mentoring members in software development.",
    skills: ["System Design", "Backend", "CP Training", "Mentorship"],
    email: "hasandhrubo603@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 12,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "1st Semester",
    phone: null,
    github_url: null,
    linkedin_url: null,
    website_url: null
  },
  {
    id: "13",
    name: "Hasanul Banna",
    role: "Training & Development Lead",
    department: "Technical",
    image_url: "/people/team/executive-2025/training-head.svg",
    bio: "Designing training programs and conducting workshops for skill development.",
    skills: ["System Design", "Backend", "CP Training", "Mentorship"],
    email: "bannahasanul608@gmail.com",
    is_active: true,
    committee: "2025",
    display_order: 13,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    semester: "3rd Semester",
    phone: null,
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
