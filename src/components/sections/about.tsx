// src/components/sections/about.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import {
  staggerContainer,
  fadeUp,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";
import Image from "next/image";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub: <Github size={16} />,
  LinkedIn: <Linkedin size={16} />,
  Twitter: <Twitter size={16} />,
  Instagram: <Instagram size={16} />,
  Email: <Mail size={16} />,
};

export function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const { profile, socials } = portfolioData;

  return (
    <section
      id="about"
      className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-color)]"
    >
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-2 text-[var(--accent-primary)] text-[11px] font-medium tracking-[0.12em] uppercase mb-4"
        >
          <span className="w-6 h-px bg-[var(--accent-primary)]" /> 01 — About Me
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-syne text-[clamp(32px,4vw,52px)] font-black tracking-tight leading-tight mb-16"
        >
          The person
          <br />
          behind the code
        </motion.h2>

        <div className="grid lg:grid-cols-[420px_1fr] gap-8 lg:gap-12 items-center">
          {/* Avatar */}
          <motion.div
            variants={slideInLeft}
            className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] aspect-square mx-auto lg:mx-0"
          >
            <div className="relative w-full h-full overflow-hidden rounded-3xl">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 420px"
                className="object-cover rounded-3xl"
              />

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,.35), transparent 40%)",
                }}
              />

              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))",
                  opacity: 0.08,
                }}
              />
            </div>

            {/* Floating Status Badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-[var(--surface)] border border-[var(--border-color2)] rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-xl"
            >
              <div className="text-xs text-[var(--text-tertiary)]">Status</div>

              <div className="text-sm font-semibold text-[var(--accent-tertiary)] flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-tertiary)] animate-pulse" />
                {profile.available ? "Available" : "Unavailable"}
              </div>
            </motion.div>
          </motion.div>

          {/* Info */}
          <motion.div
            variants={slideInRight}
            className="text-center lg:text-left"
          >
            <h3 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              {profile.name}
            </h3>

            <p className="text-[var(--accent-primary)] text-sm sm:text-base font-medium mb-6">
              {profile.title} · Product Architect
            </p>

            <p className="text-[14px] sm:text-[15px] lg:text-base text-[var(--text-secondary)] leading-relaxed lg:leading-[1.85] mb-6">
              {profile.longBio}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {profile.traits.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-xs text-[var(--text-secondary)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl border border-[var(--border-color2)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all"
                >
                  {SOCIAL_ICONS[s.platform]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
