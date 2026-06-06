// src/components/shared/scroll-progress.tsx
"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[200] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))",
      }}
    />
  );
}
