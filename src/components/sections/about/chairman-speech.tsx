"use client";

import { TechText } from "@/components/ui/tech-text";
import { CHAIRMAN_SPEECH_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const ChairmanSpeech = () => {
  const [lang, setLang] = useState<"en" | "bn">("bn");

  const content = {
    bn: {
      title: "তরুণ প্রজন্মের উচিত ক্যারিয়ার ও দক্ষতা উন্নয়নে মনোনিবেশ করা, পশ্চিমাদের অপসংস্কৃতি পরিহার করা",
      date: "১৩ নভেম্বর, ২০২২",
      speech: `একটি দেশের সব থেকে বড় জনশক্তি হচ্ছে সেই দেশের তরুণেরা। আজকের যুবসমাজই হচ্ছে আগামীর ভবিষ্যত। কিন্তু বাংলাদেশের বর্তমান প্রেক্ষাপটে আমরা লক্ষ্য করছি যে, তরুণদের যে বয়সে জ্ঞানের পরিধি বাড়ানোর সময়, যে বয়সে তরুণরা Innovation নিয়ে আলোচনা করবে, Entrepreneur হবে, বিভিন্ন চ্যালেঞ্জ নিয়ে লড়াই করে নিজের তারুণ্য প্রমাণ করবে তার পরিবর্তে বর্তমানে ৯৯% তরুণ তরুণী কিংবা ছাত্র ছাত্রীরা ভুল কালচার, গান-বাজনা ও অপসংস্কৃতিকে আঁকড়ে ধরছে।

আমাদের যুব সমাজ যদি নিজস্ব শিক্ষা, সংস্কৃতি বাদ দিয়ে সর্বদাই অপসংস্কৃতির পিছনে নিজেদের মূল্যবান সময় নষ্ট করে তবে কখনই তা সম্ভব নয়। তবে, আমরা চাইলেই কিন্তু এই অসম্ভবকে সম্ভব করতে পারি। এর জন্য আমাদের তরুণদের উচিত নিজেদের শিক্ষা, জ্ঞান, দক্ষতা ও সময়গুলোকে নিজেদের জীবন ও ক্যারিয়ার গঠণের পিছনে ব্যয় করা। ভবিষ্যতে কর্মসংস্থান বৃদ্ধি ও উদ্যোক্তা তৈরির জন্য তরুণদের নিজ নিজ দক্ষতা বাড়াতে হবে। 

মোটকথা, পশ্চিমাদের নন-কালচার থেকে বের হয়ে আজকের তরুণ সমাজকে Innovation এর দিকে এবং STEM অর্থাৎ Science, Technology, Engineering, Mathmetics এর দিকে ধাবিত করলে তবেই বাংলাদেশ পৃথিবীতে সকল স্তরে নেতৃত্ব প্রদান করতে সক্ষম হবে।`
    },
    en: {
      title: "Youth Must Focus on Career & Skill Development, Moving Beyond Misguided Influences",
      date: "November 13, 2022",
      speech: `The greatest strength of a nation is its youth; they are the architects of our future. At an age when young minds should be expanding their knowledge, discussing innovation, and embracing entrepreneurship, we often see potential being wasted on unproductive habits and superficial trends.

To make the impossible possible, our youth must dedicate their energy to career building, scientific research, and professional growth. To drive employment and innovation, honing specialized skills is essential. By sharing 'Best Practices' and engaging in creative groups, the next generation can prove their mettle and prepare to lead the nation.

In short, by breaking free from misguided influences and pivoting toward Innovation and STEM (Science, Technology, Engineering, Mathematics), Bangladesh will truly be capable of leading the world at every level.`
    }
  };

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
              {CHAIRMAN_SPEECH_DATA.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-foreground mb-4" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
              <TechText text={CHAIRMAN_SPEECH_DATA.title} glitchInterval={8000} />
            </h2>
          </motion.div>

          {/* Language Toggle */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center bg-muted/50 rounded-full p-1 border border-border backdrop-blur-sm"
          >
            <button
              onClick={() => setLang("bn")}
              className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${lang === "bn" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-primary"}`}
            >
              বাংলা
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${lang === "en" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-primary"}`}
            >
              English
            </button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8 items-start">
          {/* Chairman Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-sm mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-xl">
              <Image
                src="/people/chairman/sabur-khan.jpg"
                alt="Dr. Md. Sabur Khan"
                fill
                className="object-cover"
              />
            </div>
            {/* Signature Box */}
            <div className="mt-4 p-5 rounded-2xl bg-card border border-border shadow-sm">
              <p className="text-lg font-black text-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                {CHAIRMAN_SPEECH_DATA.name}
              </p>
              <p className="text-xs text-muted-foreground font-semibold mt-1">
                {CHAIRMAN_SPEECH_DATA.role}
              </p>
            </div>
          </motion.div>

          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:order-2"
          >
            <div className="relative p-6 sm:p-8 md:p-12 bg-card border border-border shadow-sm rounded-lg sm:rounded-r-lg group">
              {/* Vertical Lead Line - Hidden on mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary/40 rounded-l-lg hidden sm:block" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                   <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-muted/50 border border-border rounded">
                     <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-primary rotate-180" />
                   </div>
                   <div className="h-px flex-1 bg-border/40" />
                   <p className="text-[9px] sm:text-[10px] font-black text-primary uppercase tracking-[0.2em] whitespace-nowrap">
                    {lang === "bn" ? "১৩ নভেম্বর, ২০২২" : "November 13, 2022"}
                  </p>
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-foreground mb-6 sm:mb-8 leading-tight max-w-2xl" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                  {lang === "bn" ? content.bn.title : CHAIRMAN_SPEECH_DATA.title}
                </h3>

                <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed font-medium text-sm md:text-base whitespace-pre-line border-l border-border/20 pl-4 sm:pl-6">
                  {lang === "bn" ? content.bn.speech : CHAIRMAN_SPEECH_DATA.content.join('\n\n')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
