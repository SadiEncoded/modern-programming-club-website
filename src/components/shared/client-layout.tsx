"use client";

import { SiteFooter } from "@/components/footer/site-footer";
import { SiteHeader } from "@/components/header/site-header";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { TerminalLoader } from "@/components/ui/terminal-loader";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect, useState } from "react";

export function ClientLayout({ 
  children,
  fontClasses
}: { 
  children: React.ReactNode;
  fontClasses: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader for a set time or until page is ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Smooth Scroll Initialization
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <body className={`${fontClasses} font-sans antialiased text-foreground bg-background`}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="fixed inset-0 z-[9999] bg-[#050505]"
            >
              <TerminalLoader />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col min-h-screen"
            >
              <SiteHeader />
              <main className="flex-1">
                {children}
              </main>
              <SiteFooter />
            </motion.div>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </body>
  );
}
