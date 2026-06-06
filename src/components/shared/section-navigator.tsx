// src/components/shared/section-navigator.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export function SectionNavigator() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-3"
      aria-label="Section navigation"
    >
      {SECTIONS.map(({ id, label }) => (
        <div key={id} className="relative flex items-center justify-end group">
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-2 py-1 rounded-lg bg-[var(--surface2)] border border-[var(--border-color)] text-[11px] text-[var(--text-secondary)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {label}
          </span>
          <button
            onClick={() => scrollTo(id)}
            aria-label={label}
            className="focus-visible:outline-none"
          >
            <motion.div
              animate={{
                scale: active === id ? 1.5 : 1,
                backgroundColor: active === id ? "var(--accent-primary)" : "var(--border-color2)",
              }}
              transition={{ duration: 0.2 }}
              className="w-1.5 h-1.5 rounded-full"
            />
          </button>
        </div>
      ))}
    </nav>
  );
}
