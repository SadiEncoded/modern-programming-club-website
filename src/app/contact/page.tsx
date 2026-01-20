import { Container } from "@/components/shared/container";
import { PageHeading } from "@/components/shared/page-heading";
import { Card } from "@/components/shared/card";

export default function ContactPage() {
  return (
    <Container>
      <PageHeading
        title="Contact"
        subtitle="Reach the executive panel for partnerships, talks, or volunteering."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <h3 className="text-xl font-semibold">Club HQ</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Daffodil International College + Discord (24/7)
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <p>Email: hello@dicpc.org</p>
            <p>Discord: discord.gg/dicpc</p>
            <p>Facebook: fb.com/dicpc</p>
          </div>
        </Card>
        <Card>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                className="mt-1 w-full rounded-2xl border border-border px-4 py-3"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-2xl border border-border px-4 py-3"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                className="mt-1 min-h-[120px] w-full rounded-2xl border border-border px-4 py-3"
                placeholder="Share some context"
              />
            </div>
            <button className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background">
              Send Message
            </button>
          </form>
        </Card>
      </div>
    </Container>
  );
}

