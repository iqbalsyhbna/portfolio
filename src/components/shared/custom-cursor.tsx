// src/components/shared/custom-cursor.tsx
"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useSpring(0, { stiffness: 120, damping: 18 });
  const ringY = useSpring(0, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX - 5);
      dotY.set(e.clientY - 5);
      ringX.set(e.clientX - 18);
      ringY.set(e.clientY - 18);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [dotX, dotY, ringX, ringY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] pointer-events-none z-[999] mix-blend-screen hidden lg:block"
        style={{ x: dotX, y: dotY }}
      />
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-[rgba(232,121,249,0.4)] pointer-events-none z-[998] hidden lg:block"
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}
