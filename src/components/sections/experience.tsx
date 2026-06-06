// src/components/sections/experience.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/lib/animations";

const ACCENT_COLORS = [
  "var(--accent-primary)",
  "var(--accent-secondary)",
  "var(--accent-tertiary)",
];

export function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="experience"
      className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-color)]"
    >
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-2 text-[var(--accent-primary)] text-[11px] font-medium tracking-[0.12em] uppercase mb-4">
          <span className="w-6 h-px bg-[var(--accent-primary)]" /> 03 — Experience
        </motion.div>
        <motion.h2 variants={fadeUp} className="font-syne text-[clamp(32px,4vw,52px)] font-black tracking-tight leading-tight mb-16">
          Where I&apos;ve<br />made impact
        </motion.h2>

        <div className="relative pl-8">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-2 bottom-0 w-px"
            style={{ background: `linear-gradient(to bottom, var(--accent-primary), var(--border-color), transparent)` }}
          />

          {portfolioData.experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              custom={i}
              className="relative mb-12 last:mb-0"
            >
              {/* Dot */}
              <div
                className="absolute -left-[40px] top-1.5 w-4 h-4 rounded-full border-2 bg-[var(--bg-primary)] flex items-center justify-center"
                style={{ borderColor: ACCENT_COLORS[i % ACCENT_COLORS.length] }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: ACCENT_COLORS[i % ACCENT_COLORS.length] }}
                />
              </div>

              <motion.div
                whileHover={{ borderColor: "var(--border-color2)" }}
                className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-7 transition-colors"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="font-syne text-lg font-bold">{exp.role}</h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {exp.current && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-[rgba(52,211,153,0.12)] text-[var(--accent-tertiary)] border border-[rgba(52,211,153,0.2)]">
                        Current
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] border border-[var(--border-color)]">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-sm font-medium mb-1" style={{ color: ACCENT_COLORS[i % ACCENT_COLORS.length] }}>
                  {exp.company}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-[var(--text-tertiary)] mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={11} /> {exp.period} · {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={11} /> {exp.location}
                  </span>
                </div>

                <p className="text-[var(--text-secondary)] text-sm leading-[1.75] mb-5">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-1.5 mb-5">
                  {exp.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <span className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ background: ACCENT_COLORS[i % ACCENT_COLORS.length] }} />
                      {a}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] border border-[var(--border-color)]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
