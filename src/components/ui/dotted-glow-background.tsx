"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

interface DottedGlowBackgroundProps {
  className?: string;
  gap?: number;
  radius?: number;
  color?: string;
  darkColor?: string;
  glowColor?: string;
  darkGlowColor?: string;
  colorLightVar?: string;
  colorDarkVar?: string;
  glowColorLightVar?: string;
  glowColorDarkVar?: string;
  opacity?: number;
  backgroundOpacity?: number;
  speedMin?: number;
  speedMax?: number;
  speedScale?: number;
}

interface Dot {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  phase: number;
}

export const DottedGlowBackground = ({
  className,
  gap = 12,
  radius = 1.5, // Slightly smaller radius for cleaner look
  color = "rgba(0,0,0,0.1)", // Lighter default dots
  darkColor = "rgba(255,255,255,0.1)",
  glowColor = "rgba(48, 229, 143, 0.4)", // Primary color glow
  darkGlowColor = "rgba(48, 229, 143, 0.4)",
  opacity = 0.6,
  speedMin = 0.4,
  speedMax = 1.3,
  speedScale = 0.5, // Slower default speed
}: DottedGlowBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dots: Dot[] = [];

    const getDotColor = () => {
      const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark");
      return isDark ? darkColor : color;
    };

    const getGlowColor = () => {
      const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark");
      return isDark ? darkGlowColor : glowColor;
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);

      // Initialize dots grid
      dots = [];
      const cols = Math.ceil(rect.width / gap);
      const rows = Math.ceil(rect.height / gap);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            // Only add some randomly to be glowing "active" dots to save performance and create effect from demo
            // Actually the requested component seems to be a grid of dots where some glow.
            // Let's implement a grid where every dot exists but pulses.
             dots.push({
              x: i * gap + gap / 2,
              y: j * gap + gap / 2,
              radius: radius,
              maxRadius: radius * 2,
              speed: (Math.random() * (speedMax - speedMin) + speedMin) * speedScale,
              phase: Math.random() * Math.PI * 2,
            });
        }
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() / 1000;
      const currentDotColor = getDotColor();
      const currentGlowColor = getGlowColor();

      dots.forEach((dot) => {
        // Calculate pulse
        const pulse = Math.sin(time * dot.speed + dot.phase);
        const normalizedPulse = (pulse + 1) / 2; // 0 to 1

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = currentDotColor;
        ctx.fill();

        // Draw glow for "active" state (simulated by high pulse)
        if (normalizedPulse > 0.8) {
           const glowOpacity = (normalizedPulse - 0.8) * 5; // Scale remainder to 0-1
           ctx.beginPath();
           ctx.arc(dot.x, dot.y, dot.radius * 3, 0, Math.PI * 2);
           ctx.fillStyle = currentGlowColor.replace(/[\d.]+\)$/g, `${glowOpacity})`); // Quick hack to inject opacity if rgba string doesn't handle it perfectly, better to use solid RGB and set globalAlpha
           // actually better:
           ctx.save();
           ctx.globalAlpha = glowOpacity * opacity;
           ctx.fillStyle = currentGlowColor;
           ctx.fill();
           ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, systemTheme, gap, radius, color, darkColor, glowColor, darkGlowColor, opacity, speedMax, speedMin, speedScale]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
      style={{ opacity }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};
