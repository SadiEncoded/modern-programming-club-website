"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Event } from "@/lib/data/local-data";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="glass-card group flex flex-col h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500">
        <CardHeader className="p-0 border-b border-border/50 relative aspect-video overflow-hidden">
          {/* Badge overlays */}
          <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-2">
            <Badge variant="secondary" className="capitalize backdrop-blur-md bg-background/50 border-border/50 text-[10px] h-5">
              {event.mode}
            </Badge>
          </div>
          
          <Image
            src={event.bannerUrl || "/sections/shared/bg-pattern.svg"}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
        </CardHeader>

        <CardContent className="flex-grow p-5 space-y-3">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary/80">
            <Calendar className="w-3 h-3" />
            {new Date(event.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
          
          <h3 className="text-lg font-black tracking-tight leading-tight group-hover:text-primary transition-colors duration-300" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
            {event.title}
          </h3>
          
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-medium">
            {event.description}
          </p>
          
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
            <MapPin className="w-3 h-3 text-primary/60" />
            <span className="truncate">{event.location}</span>
          </div>
        </CardContent>

        <CardFooter className="p-5 pt-0 mt-auto">
          {event.registrationLink ? (
            <Button asChild className="w-full group/btn shadow-lg shadow-primary/20">
              <Link href={event.registrationLink}>
                Register Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          ) : (
            <Button variant="outline" className="w-full border-border/50 hover:bg-muted font-bold text-xs" disabled>
              Completed
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};
