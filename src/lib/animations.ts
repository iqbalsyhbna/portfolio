// src/lib/animations.ts
import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export const cardHover = {
  rest: { y: 0, borderColor: "rgba(63,63,70,1)" },
  hover: {
    y: -4,
    borderColor: "rgba(167,139,250,0.5)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const orb = {
  initial: { scale: 1, opacity: 0.7 },
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.7, 1, 0.7],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

export const scrollProgress = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
};
