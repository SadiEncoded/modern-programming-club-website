"use client";

import { EventCard } from "@/components/shared/cards/event-card";
import { SectionTitle } from "@/components/shared/section-title";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { useState } from "react";

interface EventsPreviewProps {
  events: Array<{
    id: string;
    title: string;
    description: string;
    date: string;
    bannerUrl: string;
    mode: "online" | "offline" | "hybrid";
    location: string;
    registrationLink?: string;
  }>;
}

export const EventsPreview = ({ events }: EventsPreviewProps) => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  // Separate events into upcoming and past
  const now = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) >= now).slice(0, 3);
  const pastEvents = events.filter(event => new Date(event.date) < now).slice(0, 3);

  const displayEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative">
      {/* Background gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <SectionTitle
          eyebrow="Latest Agenda"
          title="Practice jams, workshops, showcases."
          description="DICPC hosts 3+ events every month to maintain training and competition momentum."
          align="center"
        />

        {/* Tab System */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`
                px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300
                ${activeTab === "upcoming" 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "text-muted-foreground hover:text-foreground"
                }
              `}
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              <Calendar className="w-3.5 h-3.5 inline-block mr-2" />
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`
                px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300
                ${activeTab === "past" 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                  : "text-muted-foreground hover:text-foreground"
                }
              `}
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              <Clock className="w-3.5 h-3.5 inline-block mr-2" />
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {displayEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 text-center py-12"
          >
            <p className="text-muted-foreground text-sm">
              No {activeTab} events at the moment. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
