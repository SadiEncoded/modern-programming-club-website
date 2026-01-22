"use client";

import { Container } from "@/components/shared/container";
import { PageHeading } from "@/components/shared/page-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <Container className="py-12 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-4xl space-y-12">
        <PageHeading
          title="Get in Touch"
          subtitle="Reach the executive panel for partnerships, talks, or volunteering."
        />
        
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info Card - 2 Columns */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 h-full"
          >
            <div className="h-full rounded-3xl bg-gradient-to-b from-primary/10 to-primary/5 border border-primary/20 p-6 sm:p-8 flex flex-col justify-between gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-black mb-2" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                  Club HQ
                </h3>
                <p className="text-sm text-muted-foreground font-medium mb-6">
                  Available for queries during club hours and via Discord 24/7.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-background/50 border border-primary/10 text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase opacity-50 tracking-wider mb-1">Email Us</p>
                      <a href="mailto:hello@dicpc.org" className="text-sm font-semibold hover:text-primary transition-colors">hello@dicpc.org</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-background/50 border border-primary/10 text-primary">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase opacity-50 tracking-wider mb-1">Community</p>
                      <a href="#" className="text-sm font-semibold hover:text-primary transition-colors">discord.gg/dicpc</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-background/50 border border-primary/10 text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase opacity-50 tracking-wider mb-1">Location</p>
                      <p className="text-sm font-semibold">Daffodil International College</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-background/40 border border-primary/5 text-xs text-muted-foreground leading-relaxed">
                Looking for partnership opportunities? Email us directly with the subject &quot;Partnership&quot;.
              </div>
            </div>
          </motion.div>

          {/* Contact Form - 3 Columns */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="h-full border-border/50 shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                      <Input placeholder="John Doe" className="bg-muted/30" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                      <Input type="email" placeholder="john@example.com" className="bg-muted/30" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
                    <Input placeholder="What is this about?" className="bg-muted/30" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                    <Textarea 
                      placeholder="Share your thoughts..." 
                      className="min-h-[150px] bg-muted/30 resize-none" 
                    />
                  </div>

                  <Button className="w-full sm:w-auto font-bold gap-2" size="lg">
                    Send Message <Send className="w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
