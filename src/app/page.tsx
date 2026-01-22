"use client";

import { EventsPreview } from "@/components/sections/home/events-preview";
import { Hero } from "@/components/sections/home/hero";
import { SocialProof } from "@/components/sections/home/social-proof";
import { ThreePillars } from "@/components/sections/home/three-pillars";
import { Container } from "@/components/shared/container";
import { getEvents, type Event } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await getEvents();
      setEvents(data);
    };
    loadEvents();
  }, []);

  return (
    <motion.main 
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
          }
        }
      }}
      className="flex min-h-screen flex-col"
    >
      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
        <Hero />
      </motion.div>
      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
        <ThreePillars />
      </motion.div>
      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
        <SocialProof />
      </motion.div>
      
      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
        <Container className="py-12">
          <EventsPreview events={events} />
        </Container>
      </motion.div>
    </motion.main>
  );
}
