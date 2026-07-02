// src/components/sections/hero.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight, ChevronDown } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { portfolioData } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/animations";

const TECH_ICONS = ["⚛️", "▲", "🔷", "🟢", "🐳", "☁️", "🤖", "🎨"];

function TechFloat({ icon, style }: { icon: string; style: React.CSSProperties }) {
  return (
    <motion.div
      className="absolute text-2xl opacity-20 select-none pointer-events-none"
      style={style}
      animate={{ y: [-8, 8, -8], rotate: [-4, 4, -4] }}
      transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {icon}
    </motion.div>
  );
}

function StatCard({
  stat,
  index,
}: {
  stat: typeof portfolioData.profile.stats[0];
  index: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true });

  const cleanValue = stat.value.replace(/[^\d.]/g, "");
  const isNumeric = cleanValue !== "" && !isNaN(Number(cleanValue));
  const num = Number(cleanValue);
  const suffix = stat.value.replace(/[\d.]/g, "");

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={index}
      className="text-center sm:text-left"
    >
      <div className="font-syne text-3xl font-black text-[var(--text-primary)]">
        {inView ? (
          isNumeric ? (
            <>
              <CountUp
                end={num}
                duration={2}
                delay={index * 0.15}
                decimals={cleanValue.includes(".") ? 2 : 0}
              />
              {suffix && (
                <span className="text-[var(--accent-primary)]">
                  {suffix}
                </span>
              )}
            </>
          ) : (
            <span>{stat.value}</span>
          )
        ) : (
          <span>{stat.value}</span>
        )}
      </div>

      <div className="mt-1 text-[11px] text-[var(--text-tertiary)]">
        {stat.label}
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const { profile } = portfolioData;

  const floatPositions = [
    { top: "18%", right: "12%" }, { top: "35%", right: "6%" },
    { top: "55%", right: "18%" }, { bottom: "30%", right: "8%" },
    { top: "25%", left: "5%" }, { bottom: "40%", left: "8%" },
    { top: "60%", left: "4%" }, { bottom: "20%", left: "12%" },
  ];

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-16 pt-24 pb-16"
    >
      {/* Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,121,249,0.15) 0%, transparent 70%)", top: "-100px", left: "-100px" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(129,140,248,0.12) 0%, transparent 70%)", bottom: "-100px", right: "10%" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)", top: "40%", right: "20%" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-bg" />

        {/* Floating Tech Icons */}
        {TECH_ICONS.map((icon, i) => (
          <TechFloat key={i} icon={icon} style={floatPositions[i]} />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl"
        style={{ y, opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(232,121,249,0.3)] bg-[rgba(232,121,249,0.08)] text-[var(--accent-primary)] text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-tertiary)] animate-pulse" />
            {profile.available ? profile.availableText : "Not currently available"}
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-syne text-[clamp(40px,6vw,88px)] font-black leading-[1.1] sm:leading-[1.0] tracking-[-0.04em] mb-4"
        >
          <span className="text-[var(--text-secondary)]">Full-Stack</span>
          <br />
          {/* PERBAIKAN: Ditambahkan `block sm:inline-block` dan min-width/height agar layout tidak bergeser */}
          <span className="gradient-text-tri block sm:inline-block min-h-[1.1em] sm:h-[1em] align-bottom whitespace-nowrap">
            <TypeAnimation
              sequence={["Engineer", 2000, "Architect", 2000, "Creator", 2000]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </span>
          <br className="hidden sm:block" />
          <span className="text-[var(--text-secondary)]"> &amp; Builder</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          className="text-[clamp(15px,1.8vw,19px)] text-[var(--text-secondary)] font-light leading-relaxed max-w-[560px] mb-10"
        >
          I build <em className="text-[var(--text-primary)] not-italic font-normal">world-class digital products</em>{" "}
          with clean code, beautiful design, and meaningful user experiences.
          5+ years crafting software that scales.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-14">
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white text-sm font-medium shadow-lg"
            whileHover={{ scale: 1.02, y: -2, boxShadow: "0 20px 40px rgba(232,121,249,0.35)" }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work <ArrowRight size={14} />
          </motion.a>
          <motion.a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border-color2)] bg-[var(--surface)] text-[var(--text-primary)] text-sm hover:border-[var(--accent-primary)] transition-all"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={14} /> Download CV
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[var(--border-color2)] bg-[var(--surface)] text-[var(--text-primary)] text-sm hover:border-[var(--accent-primary)] transition-all"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Say Hello 👋
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={staggerContainer} className="flex flex-wrap gap-10">
          {profile.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-tertiary)] text-[10px] tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-[var(--border-color2)] to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 w-full bg-gradient-to-b from-transparent to-[var(--accent-primary)]"
            style={{ height: "40%" }}
            animate={{ y: ["-100%", "300%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <ChevronDown size={14} />
      </motion.div>
    </section>
  );
}