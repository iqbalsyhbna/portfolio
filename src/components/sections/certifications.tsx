// src/components/sections/certifications.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function CertificationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="certifications"
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
          <span className="w-6 h-px bg-[var(--accent-primary)]" /> 05 — Certifications
        </motion.div>
        <motion.h2 variants={fadeUp} className="font-syne text-[clamp(32px,4vw,52px)] font-black tracking-tight leading-tight mb-16">
          Verified<br />Credentials
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, borderColor: "var(--border-color2)" }}
              className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] transition-colors group cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: cert.color }}
              >
                {cert.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold leading-tight">{cert.name}</h3>
                  <ExternalLink size={12} className="shrink-0 text-[var(--text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                </div>
                <p className="text-xs text-[var(--text-tertiary)] mt-1 mb-2">{cert.issuer}</p>
                <span className="inline-block px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[10px] text-[var(--text-tertiary)] border border-[var(--border-color)]">
                  {cert.date}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
