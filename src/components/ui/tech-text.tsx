"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface TechTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  className?: string;
  glitchInterval?: number;
  scrambleSpeed?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/";

export const TechText = ({ 
  text, 
  className = "", 
  glitchInterval = 3000, 
  scrambleSpeed = 40,
  ...props
}: TechTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const isGlitching = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = useCallback(() => {
    if (isGlitching.current) return;
    isGlitching.current = true;
    
    let iteration = 0;
    const textLen = text.length;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        let result = "";
        for (let i = 0; i < textLen; i++) {
          if (i < iteration) {
            result += text[i];
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        return result;
      });

      if (iteration >= textLen) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        isGlitching.current = false;
      }

      iteration += 1 / 2; // Slightly faster for smoothness
    }, scrambleSpeed);
  }, [text, scrambleSpeed]);

  useEffect(() => {
    const trigger = setInterval(scramble, glitchInterval);
    return () => {
      clearInterval(trigger);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [glitchInterval, scramble]);

  return (
    <span className={className} {...props}>
      {displayText}
    </span>
  );
};
