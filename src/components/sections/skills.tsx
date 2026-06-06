// src/components/sections/skills.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/lib/animations";
import type { SkillCategory } from "@/types";

const CATEGORIES: SkillCategory[] = ["All", "Frontend", "Backend", "DevOps", "AI/ML", "Design"];

export function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [active, setActive] = useState<SkillCategory>("All");
  const { skills } = portfolioData;

  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="section-padding">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-2 text-[var(--accent-primary)] text-[11px] font-medium tracking-[0.12em] uppercase mb-4">
          <span className="w-6 h-px bg-[var(--accent-primary)]" /> 02 — Skills
        </motion.div>
        <motion.h2 variants={fadeUp} className="font-syne text-[clamp(32px,4vw,52px)] font-black tracking-tight leading-tight mb-3">
          Tools &amp; Technologies
        </motion.h2>
        <motion.p variants={fadeUp} className="text-[var(--text-secondary)] text-base font-light leading-relaxed max-w-md mb-10">
          A curated toolkit built over 5+ years of building production software across startups and enterprises.
        </motion.p>

        {/* Category Tabs */}
        <motion.div variants={fadeUp} className="flex gap-2 flex-wrap mb-10">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2 rounded-full text-xs border transition-all ${
                active === cat
                  ? "bg-[rgba(232,121,249,0.15)] border-[var(--accent-primary)] text-[var(--text-primary)]"
                  : "border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--border-color2)]"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
          >
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                whileHover={{ y: -4, borderColor: "rgba(232,121,249,0.4)" }}
                className="relative p-5 rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] text-center cursor-pointer group transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(232,121,249,0.05)] to-[rgba(129,140,248,0.05)] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-[28px] mb-2.5 relative z-10">{skill.icon}</div>
                <div className="text-xs font-medium text-[var(--text-primary)] mb-2 relative z-10">{skill.name}</div>
                <div className="h-1 bg-[var(--border-color)] rounded-full overflow-hidden relative z-10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                  />
                </div>
                <div className="text-[10px] text-[var(--text-tertiary)] mt-1.5 relative z-10">{skill.level}%</div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
