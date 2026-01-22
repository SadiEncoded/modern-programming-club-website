"use client";

import { BRANDING, DEVELOPER, NAVIGATION } from "@/lib/constants";
import { ArrowRight, Facebook, Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export const SiteFooter = () => (
  <footer className="relative bg-background border-t border-border overflow-hidden pt-8 pb-8 sm:pt-12 sm:pb-8 w-full">
    <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24">
      
      {/* Top CTA Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 md:pb-12 mb-8 md:mb-12 border-b border-border text-center md:text-left">
        <div className="space-y-1">
          <h4 className="text-xl sm:text-2xl font-black text-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
            Ready to <span className="text-primary italic">build?</span>
          </h4>
          <p className="text-muted-foreground text-xs sm:text-sm font-medium">
            Join the elite community of student engineering excellence.
          </p>
        </div>
        <Link 
          href="/join"
          className="group flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-3.5 bg-foreground text-background text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-xl dark:shadow-none"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          Join Tomorrow&apos;s Innovators <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-16">
        
        {/* Branding & Status */}
        <div className="lg:col-span-5 space-y-6 text-center md:text-left">
          <Link href="/" className="inline-block">
            <h3 
              className="text-2xl sm:text-3xl font-black tracking-tighter text-foreground"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              DIC<span className="text-primary">PC</span>
            </h3>
          </Link>
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
              The official Programming Club of Daffodil International College. Founded on the principles of engineering rigour and collaborative growth.
            </p>
            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-foreground px-3 py-1 bg-muted rounded-lg inline-flex" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Official Member · DICSP
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left">
          {/* Explore */}
          <div className="space-y-4 sm:space-y-6">
            <h5 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
              Explore
            </h5>
            <ul className="space-y-2 sm:space-y-3">
              {NAVIGATION.footerLinks[0].links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm font-semibold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4 sm:space-y-6">
            <h5 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
              Community
            </h5>
            <div className="flex flex-col gap-2 sm:gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: NAVIGATION.social.facebook },
                { icon: Github, label: "GitHub", href: NAVIGATION.social.github },
                { icon: Linkedin, label: "LinkedIn", href: NAVIGATION.social.linkedin },
                { icon: Youtube, label: "YouTube", href: NAVIGATION.social.youtube },
              ].map((social) => (
                <a 
                  key={social.label} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm font-semibold group"
                >
                  <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4 sm:space-y-6 col-span-2 sm:col-span-1">
            <h5 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
              Resources
            </h5>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm font-semibold">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm font-semibold">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm font-semibold">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-[9px] sm:text-[10px] font-bold text-muted-foreground tracking-widest uppercase">
            © {new Date().getFullYear()} {BRANDING.name}
          </p>
          <p className="text-[8px] sm:text-[9px] text-muted-foreground/60 font-medium tracking-tight">
            ALL RIGHTS RESERVED · VERSION 1.0
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 group">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-[10px] font-bold text-muted-foreground">
            <span className="opacity-50 tracking-widest uppercase">Designed & Engineered by</span>
            <Link 
              href={DEVELOPER.facebook} 
              target="_blank"
              className="relative px-3 py-1 text-foreground group-hover:text-primary transition-all duration-300 border border-foreground/10 hover:border-primary/30 rounded-full bg-foreground/5 hover:bg-primary/5 active:scale-95"
            >
              <span className="relative z-10">{DEVELOPER.name}</span>
            </Link>
          </div>
          
          <div className="flex gap-6 items-center">
            <Link 
              href={DEVELOPER.linkedin} 
              target="_blank"
              className="text-[9px] font-black text-muted-foreground hover:text-primary tracking-[0.2em] transition-all hover:translate-y-[-1px] active:translate-y-[1px]"
            >
              LINKEDIN
            </Link>
            <div className="w-1 h-1 rounded-full bg-border" />
            <Link 
              href={DEVELOPER.github} 
              target="_blank"
              className="text-[9px] font-black text-muted-foreground hover:text-primary tracking-[0.2em] transition-all hover:translate-y-[-1px] active:translate-y-[1px]"
            >
              GITHUB
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
