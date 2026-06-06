// src/components/shared/back-to-top.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          whileHover={{ scale: 1.1, background: "var(--accent-primary)" }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-xl bg-[var(--surface2)] border border-[var(--border-color2)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:border-[var(--accent-primary)] transition-colors shadow-lg"
        >
          <ChevronUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
