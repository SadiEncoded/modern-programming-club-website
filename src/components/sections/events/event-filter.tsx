"use client";

import { EventCard } from "@/components/shared/cards/event-card";
import type { Event } from "@/lib/data";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { EventDetailsModal } from "./event-details-modal";

const filters = [
  { id: "upcoming", label: "Upcoming Events" },
  { id: "past", label: "Past Logs" },
];

type EventFilterProps = {
  events: Event[];
};

export const EventFilter = ({ events }: EventFilterProps) => {
  const [filter, setFilter] = useState(filters[0].id);
  const [activeEventId, setActiveEventId] = useState<string | null>(null);

  const filteredEvents = useMemo(() => {
    const now = new Date();
    return events.filter((event) => {
      const isUpcoming = new Date(event.date) >= now;
      return filter === "upcoming" ? isUpcoming : !isUpcoming;
    });
  }, [events, filter]);

  const activeEvent = events.find((event) => event.id === activeEventId);

  return (
    <div className="space-y-12 pb-20">
      <div className="flex justify-center">
        <div className="inline-flex bg-muted/30 p-1 border border-border">
          {filters.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`relative px-8 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                filter === item.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              {filter === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-background border border-primary/50 shadow-[0_0_15px_rgba(var(--primary-rgb),0.15)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <LayoutGroup>
        <motion.div 
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.length ? (
              filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setActiveEventId(event.id)}
                  className="cursor-pointer"
                >
                  <EventCard event={event} />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-20 text-center border border-border border-dashed bg-muted/10"
              >
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                  System_Status: No_Data_Found
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <EventDetailsModal
        event={activeEvent ?? null}
        onClose={() => setActiveEventId(null)}
      />
    </div>
  );
};
