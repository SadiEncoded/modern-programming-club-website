"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

export const PrincipalSpeech = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sm:mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-3 sm:mb-4 block">
              Message from Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
              Principal&apos;s Message
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8 items-start">
          {/* Principal Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-sm mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-xl">
              <Image
                src="/people/principal/shibly-shadik.jpg"
                alt="Principal of Daffodil International College"
                fill
                className="object-cover"
              />
            </div>
            {/* Signature Box */}
            <div className="mt-4 p-5 rounded-2xl bg-card border border-border shadow-sm">
              <p className="text-lg font-black text-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                Md. Shibly Shadik
              </p>
              <p className="text-xs text-muted-foreground font-semibold mt-1">
                Principal, Daffodil International College
              </p>
            </div>
          </motion.div>

          {/* Speech Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:order-2"
          >
            <div className="relative p-6 sm:p-8 md:p-12 bg-card border border-border shadow-sm rounded-lg sm:rounded-r-lg group">
              {/* Vertical Lead Line - show only on sm+ */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary/40 rounded-l-lg hidden sm:block" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-muted/50 border border-border rounded">
                     <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-primary rotate-180" />
                   </div>
                   <div className="h-px flex-1 bg-border/40" />
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-foreground mb-6 sm:mb-8 leading-tight max-w-2xl" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                  Building Dreams & Shaping Tomorrow&apos;s Innovators
                </h3>

                <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed font-medium text-sm md:text-base border-l border-border/20 pl-4 sm:pl-6">
                  <p>
                    It brings me immense pride to witness the remarkable growth and achievements of the 
                    <span className="font-bold text-primary"> DIC Programming Club</span>. This vibrant community 
                    represents the future of technology and innovation in our institution.
                  </p>
                  
                  <p>
                    Our students are not just learning to code—they are learning to think critically, solve complex problems, 
                    and collaborate effectively. The DICPC embodies our commitment to excellence in computer science education 
                    and our vision to nurture the next generation of tech leaders.
                  </p>

                  <p>
                    Through competitive programming, hackathons, and collaborative projects, our members are building 
                    skills that will serve them throughout their careers. I encourage every student passionate about 
                    technology to join this dynamic community and be part of something truly transformative.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
