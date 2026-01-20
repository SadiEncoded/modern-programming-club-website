"use client";

import type { Event } from "@/lib/data";
import { cn, formatDate } from "@/lib/utils";

type EventDetailsModalProps = {
  event: Event | null;
  onClose: () => void;
};

export const EventDetailsModal = ({ event, onClose }: EventDetailsModalProps) => (
  <div
    className={cn(
      "fixed inset-0 z-40 grid place-items-center bg-black/40 px-4 transition-opacity",
      event ? "opacity-100" : "pointer-events-none opacity-0",
    )}
  >
    {event && (
      <div className="w-full max-w-lg rounded-3xl bg-background p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {formatDate(event.date)}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{event.title}</h3>
          </div>
          <button
            className="rounded-full border border-border px-3 py-1 text-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{event.description}</p>
        <div className="mt-4 rounded-2xl bg-muted p-4 text-sm">
          <p>
            <span className="font-semibold">Mode:</span> {event.mode}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {event.location}
          </p>
        </div>
        {event.registrationLink && (
          <a
            href={event.registrationLink}
            className="mt-6 inline-flex w-full justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background"
          >
            Register now
          </a>
        )}
      </div>
    )}
  </div>
);
