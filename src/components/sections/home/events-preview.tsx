import { EventCard } from "@/components/cards/event-card";
import { SectionTitle } from "@/components/shared/section-title";
import { getEvents } from "@/lib/data";

export const EventsPreview = async () => {
  const events = await getEvents({ limit: 3 });

  return (
    <section className="py-16">
      <SectionTitle
        eyebrow="Latest Agenda"
        title="Practice jams, workshops, showcases."
        description="DICPC hosts 3+ events every month to maintain training and competition momentum."
        align="center"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
};
