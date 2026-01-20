/**
 * Global constants and configuration values
 * This file contains all hardcoded values used throughout the application
 * to maintain consistency and enable easy updates
 */

// ============================================
// NAVIGATION CONFIGURATION
// ============================================

export const NAVIGATION = {
  main: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Team", href: "/team" },
  ],
  // --- NEW FOOTER STRUCTURE INTEGRATED ---
  footerLinks: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Events", href: "/events" },
        { label: "Join Community", href: "/join" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "/contact" },
      ],
    },
    // The "Contact" column will be built using the NAVIGATION.contact object
  ],
  // ----------------------------------------
  social: {
    facebook: "https://www.facebook.com/DICPCOfficial",
    github: "https://www.facebook.com/DICPCOfficial",
    linkedin: "https://www.facebook.com/DICPCOfficial",
    youtube: "https://www.facebook.com/DICPCOfficial",
    discord: "https://www.facebook.com/DICPCOfficial",
  },
  contact: {
    email: "dicpc.officials@gmail.com",
    phone: "+8801681279979",
    address: "Daffodil International College, Baburhat, Chandpur, Bangladesh",
  },
} as const;

export const DEVELOPER = {
  name: "MAHMUDUL HASAN SADI",
  github: "https://github.com/SadiEncoded",
  githubUsername: "SadiEncoded",
  linkedin: "https://www.linkedin.com/in/sadiencoded/",
  facebook: "https://www.facebook.com/SadiEncoded",
} as const;

// ============================================
// GRID LAYOUTS
// ============================================

export const GRID_LAYOUTS = {
  oneCol: "grid gap-6",
  twoCol: "grid gap-6 md:grid-cols-2",
  threeCol: "grid gap-6 md:grid-cols-3",
  fourCol: "grid gap-6 md:grid-cols-4",
  responsive: "grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
} as const;

// ============================================
// CARD GRADIENTS
// ============================================

export const CARD_GRADIENTS = {
  event: "from-[#0f151d] to-[#06090d]",
  project: "from-[#0f1a1c] to-[#06090a]",
  member: "from-[#111821] to-[#070a0f]",
  default: "from-background to-background",
} as const;

// ============================================
// TEXT STYLES & SPACING
// ============================================

export const TEXT_STYLES = {
  uppercase: "uppercase tracking-[0.2em] text-xs",
  uppercaseMedium: "uppercase tracking-[0.3em] text-xs",
  uppercaseLarge: "uppercase tracking-[0.4em] text-xs",
} as const;

// ============================================
// DATE FORMATTING
// ============================================

export const DATE_FORMATS = {
  full: "PPP",
  monthDay: "MMM d",
  shortDate: "M/d/yyyy",
  fullDate: "EEEE, MMMM d, yyyy",
} as const;

// ============================================
// COMPONENT SIZES
// ============================================

export const SIZES = {
  avatar: {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16",
    xlarge: "h-24 w-24",
  },
  icon: {
    small: "h-3.5 w-3.5",
    medium: "h-4 w-4",
    large: "h-5 w-5",
    xlarge: "h-6 w-6",
  },
} as const;

// ============================================
// BRANDING
// ============================================

export const BRANDING = {
  name: "DICPC",
  fullName: "Daffodil International College Programming Club",
  tagline: "Learn · Build · Compete · Lead",
  description:
    "Official home for DICPC events, members, achievements, and projects.",
} as const;

// ============================================
// PAGINATION & LIMITS
// ============================================

export const PAGINATION = {
  cardsPerPage: 12,
  eventsPreviewLimit: 3,
  membersPreviewLimit: 6,
  projectsPreviewLimit: 3,
  achievementsPreviewLimit: 6,
  blogPostsPreviewLimit: 3,
} as const;

// ============================================
// ANIMATION & TRANSITION
// ============================================

export const ANIMATIONS = {
  cardHover: "transition hover:-translate-y-1 hover:border-primary/60",
  fadeIn: "animate-in fade-in",
  slideUp: "animate-in slide-in-from-bottom-4",
} as const;
