"use client";

import { useCallback, useEffect, useState } from "react";

interface TechTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  scrambleSpeed?: number;
}

export const TechText = ({ 
  text, 
  className = "", 
  glitchInterval = 3000, 
  scrambleSpeed = 50 
}: TechTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/";

  const scramble = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => 
        prev
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsGlitching(false);
      }

      iteration += 1 / 3;
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [text, chars, scrambleSpeed]);

  useEffect(() => {
    const trigger = setInterval(() => {
      if (!isGlitching) {
        setIsGlitching(true);
        scramble();
      }
    }, glitchInterval);

    return () => clearInterval(trigger);
  }, [glitchInterval, isGlitching, scramble]);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
};
