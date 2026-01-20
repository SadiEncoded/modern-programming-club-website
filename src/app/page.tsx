import { EventsPreview } from "@/components/sections/home/events-preview";
import { Hero } from "@/components/sections/home/hero";
import { SocialProof } from "@/components/sections/home/social-proof";
import { ThreePillars } from "@/components/sections/home/three-pillars";
// import { AboutPreview } from "@/components/sections/home/about-preview";
// import { MembersPreview } from "@/components/sections/home/members-preview";
// import { ProjectsPreview } from "@/components/sections/home/projects-preview";
import { Container } from "@/components/shared/container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ThreePillars />
      <SocialProof />
      
      <Container className="py-12">
        <EventsPreview />
        
        {/* Under-construction sections hidden for minimal version */}
        {/* <AboutPreview /> */}
        {/* <MembersPreview /> */}
        {/* <ProjectsPreview /> */}
      </Container>
    </main>
  );
}
