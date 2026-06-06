// src/components/sections/testimonials.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function TestimonialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="testimonials"
      className="section-padding border-t border-[var(--border-color)]"
    >
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-2 text-[var(--accent-primary)] text-[11px] font-medium tracking-[0.12em] uppercase mb-4">
          <span className="w-6 h-px bg-[var(--accent-primary)]" /> 06 — Testimonials
        </motion.div>
        <motion.h2 variants={fadeUp} className="font-syne text-[clamp(32px,4vw,52px)] font-black tracking-tight leading-tight mb-16">
          What people<br />say about me
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {portfolioData.testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, borderColor: "var(--border-color2)" }}
              className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl p-7 transition-colors flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5 text-[var(--accent-yellow)]">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--text-secondary)] text-sm leading-[1.85] italic flex-1 mb-6 relative">
                <span
                  className="font-syne text-[40px] text-[var(--accent-primary)] leading-none absolute -top-2 -left-1"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <span className="pl-5">{t.quote}</span>
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-syne"
                  style={{ background: t.color.replace("0.3", "0.2"), color: "var(--accent-primary)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold font-syne">{t.author}</div>
                  <div className="text-xs text-[var(--text-tertiary)]">
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
