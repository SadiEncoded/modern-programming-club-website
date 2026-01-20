import { notFound } from "next/navigation";
import { Container } from "@/components/shared/container";
import { PageHeading } from "@/components/shared/page-heading";
import { getEventById } from "@/lib/data";
import { Card } from "@/components/shared/card";
import { formatDate } from "@/lib/utils";

type EventDetailsPageProps = {
  params: { id: string };
};

export default async function EventDetailsPage({ params }: EventDetailsPageProps) {
  const { id } = params;
  const event = await getEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <Container>
      <PageHeading
        title={event.title}
        subtitle={`${formatDate(event.date)} · ${event.location}`}
      />
      <Card>
        <p className="text-muted-foreground">{event.description}</p>
        <div className="mt-6 space-y-2 text-sm">
          <p>
            <span className="font-semibold">Mode:</span> {event.mode}
          </p>
          {event.registrationLink && (
            <a
              href={event.registrationLink}
              className="inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-background"
            >
              Register
            </a>
          )}
        </div>
      </Card>
    </Container>
  );
}
