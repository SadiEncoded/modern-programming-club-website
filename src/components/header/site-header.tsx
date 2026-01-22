"use client";

import { ThemeSwitcher } from "@/components/shared/theme-switcher";
import { NAVIGATION } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Bell, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const logoSrc = mounted && (theme === "dark" || resolvedTheme === "dark") 
    ? "/brand/icon(darkVersion).svg" 
    : "/brand/icon(lightVersion).svg";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative transition-all duration-300">
          {/* Left Design Pattern - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/" className="relative w-20 h-10 shrink-0 opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/sections/shared/header-left-accent.svg"
                alt="DICPC Home"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          {/* Logo - Visible on mobile/tablet */}
          <Link href="/" className="lg:hidden flex items-center space-x-2 group">
            <div className="relative">
              <Image
                src={logoSrc}
                alt="DICPC logo"
                width={300}
                height={300}
                priority
                className={cn(
                  "transition-all duration-500 group-hover:scale-110",
                  isScrolled ? "w-8 h-8" : "w-10 h-10"
                )}
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered sequence */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {NAVIGATION.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group px-1 py-2 text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/80 hover:text-primary transition-colors duration-300"
                  style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                >
                  {item.label}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"
                    layoutId="nav-hover"
                  />
                  <span className="absolute -top-1 -right-1 w-1 h-1 bg-primary scale-0 rounded-full transition-transform duration-300 group-hover:scale-100" />
                </Link>
              ))}
              <Link
                href="/join"
                className="relative group px-6 py-2 text-[10px] font-black tracking-[0.2em] uppercase bg-foreground text-background hover:bg-primary-vibrant hover:text-white transition-all duration-300 rounded-full overflow-hidden"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
              >
                <span className="relative z-10">Join Now</span>
                <motion.div 
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>
          </nav>

          {/* Right Section: Pattern + Notifications */}
          <div className="flex items-center space-x-6">
            {/* Theme switcher */}
            <div className="flex items-center">
              <ThemeSwitcher />
              
              <button
                className="hidden md:block p-2.5 rounded-full hover:bg-muted transition-all duration-300 text-muted-foreground hover:text-primary active:scale-95"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-muted transition-all duration-300 overflow-hidden"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </motion.div>
            </button>

            {/* Right Design Pattern - Far Right */}
            <div className="hidden lg:block relative w-20 h-10 ml-2 shrink-0 opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/sections/shared/header-right-accent.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-[500px] border-t border-white/10" : "max-h-0"
        )}
      >
        <div className="bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
            {NAVIGATION.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 space-y-2">
              <button
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-all"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span>Notifications</span>
              </button>
              <Link
                href="/join"
                className="block w-full px-4 py-3 bg-foreground text-background rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-center hover:bg-primary-vibrant hover:text-white transition-all shadow-lg"
                style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
                onClick={() => setIsOpen(false)}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
