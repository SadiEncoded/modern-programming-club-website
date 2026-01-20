import { AnimatedReveal } from "@/components/shared/animated-reveal";
import { Card } from "@/components/shared/card";
import Link from "next/link";

const links = [
  {
    label: "Competition Services",
    href: "/events",
    desc: "Manage contest registration, rosters, and logistics.",
    tag: "Popular",
  },
  {
    label: "Project Workspace",
    href: "/projects",
    desc: "Track club builds, contributors, and milestones.",
    tag: "New",
  },
  {
    label: "Membership Hub",
    href: "/join",
    desc: "Apply to squads, mentorship pods, and volunteer roles.",
    tag: "Recommended",
  },
];

export const QuickLinks = () => (
  <section className="py-12">
    <div className="mb-6 text-center">
      <span className="pill">Priority Club Workflows</span>
      <h2 className="mt-4 text-3xl font-semibold">
        Quick Access to DICPC Operations
      </h2>
      <p className="text-muted-foreground">
        Choose the programming-club workflow you need to move faster with your squad.
      </p>
    </div>
    <div className="grid gap-6 md:grid-cols-3">
      {links.map((link, i) => (
        <AnimatedReveal key={link.href} transition={{ delay: i * 0.1 }}>
          <Card className="flex h-full flex-col justify-between rounded-[32px] border border-gray-100 bg-gray-50/50 p-8 hover:border-primary/20 transition-all group">
            <div className="flex items-center justify-between">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {/* Simple icon placeholder */}
                <span className="text-xl">▢</span>
              </div>
              <span className="rounded-full bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                {link.tag}
              </span>
            </div>
            <div className="mt-6 space-y-1">
              <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-primary transition-colors">{link.label}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{link.desc}</p>
            </div>
            <Link
              href={link.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-all group-hover:gap-3"
            >
              Open Workflow →
            </Link>
          </Card>
        </AnimatedReveal>
      ))}
    </div>
  </section>
);
