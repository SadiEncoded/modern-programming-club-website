// src/app/layout.tsx
import type { Metadata } from "next";
import { Bruno_Ace, Geist, Orbitron } from "next/font/google";
import "./globals.css";


const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const brunoAce = Bruno_Ace({
  variable: "--font-bruno-ace",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DICPC — Daffodil International College Programming Club",
    template: "%s | DICPC",
  },

  description:
    "Official portal for events, contests, projects, and community of the top programming club at Daffodil International College.",

  keywords: [
    "DICPC",
    "Daffodil International College",
    "Programming Club",
    "Competitive Programming",
    "Software Development",
    "Student Community",
    "Coding Contests",
    "Bangladesh Tech",
  ],

  metadataBase: new URL("https://dicpc.club"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/brand/icon.svg", type: "image/svg+xml" },
      { url: "/brand/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon/favicon.ico" },
    ],
    apple: "/brand/favicon/apple-touch-icon.png",
    shortcut: "/brand/favicon/favicon.ico",
  },

  manifest: "/brand/favicon/site.webmanifest",

  openGraph: {
    title: "DICPC — Daffodil International College Programming Club",
    description:
      "Events, contests, projects, and the official programming community of DIC.",
    url: "https://dicpc.club",
    siteName: "DICPC",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DICPC Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DICPC — Daffodil International College Programming Club",
    description: "Official portal for events, contests, projects, and community of DICPC.",
    images: ["/og.png"],
  },
};

import { ClientLayout } from "@/components/shared/client-layout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontClasses = `${geist.variable} ${orbitron.variable} ${brunoAce.variable}`;

  return (
    <html lang="en" suppressHydrationWarning className="m-0 p-0 w-full overflow-x-hidden">
      <ClientLayout fontClasses={fontClasses}>
        {children}
      </ClientLayout>
    </html>
  );
}
