import { EventFilter } from "@/components/sections/events/event-filter";
import { EventsHero } from "@/components/sections/events/events-hero";
import { Container } from "@/components/shared/container";
import { getEvents } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Contests",
  description: "Explore upcoming coding contests, workshops, and practice sessions hosted by DICPC.",
};

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="min-h-screen bg-background">
      <EventsHero />
      <div className="pt-20">
        <Container>
          <EventFilter events={events} />
        </Container>
      </div>
    </main>
  );
}
