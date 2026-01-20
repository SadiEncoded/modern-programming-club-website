"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedRevealProps = MotionProps & {
  className?: string;
  children: React.ReactNode;
};

export const AnimatedReveal = ({
  className,
  children,
  ...motionProps
}: AnimatedRevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className={cn(className)}
    {...motionProps}
  >
    {children}
  </motion.div>
);
