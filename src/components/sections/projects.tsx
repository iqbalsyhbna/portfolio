// src/components/sections/projects.tsx
"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, BookOpen, X, Search } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/lib/animations";
import type { Project, ProjectCategory } from "@/types";

const CATEGORIES: ProjectCategory[] = ["All", "SaaS", "Analytics", "OSS", "E-commerce", "AI"];

const THUMB_COLORS: Record<string, string> = {
  SaaS: "from-[#1a0533] via-[#2d0a52] to-[rgba(232,121,249,0.2)]",
  Analytics: "from-[#03152b] via-[#051e3e] to-[rgba(96,165,250,0.2)]",
  OSS: "from-[#031a0d] via-[#042d14] to-[rgba(52,211,153,0.2)]",
  "E-commerce": "from-[#2a1800] via-[#3d2200] to-[rgba(251,191,36,0.2)]",
  AI: "from-[#1a0015] via-[#2d0028] to-[rgba(248,113,113,0.2)]",
};

const TAG_STYLES: Record<string, string> = {
  Featured: "bg-[rgba(232,121,249,0.12)] text-[var(--accent-primary)] border-[rgba(232,121,249,0.2)]",
  "AI/ML": "bg-[rgba(129,140,248,0.12)] text-[var(--accent-secondary)] border-[rgba(129,140,248,0.2)]",
  "Open Source": "bg-[rgba(52,211,153,0.12)] text-[var(--accent-tertiary)] border-[rgba(52,211,153,0.2)]",
};

const ICONS: Record<string, string> = {
  SaaS: "🧠", Analytics: "💹", OSS: "🌿", "E-commerce": "🛒", AI: "💬",
};

function ProjectCard({
  project,
  large,
  onClick,
}: {
  project: Project;
  large?: boolean;
  onClick: () => void;
}) {
  const thumbColor = THUMB_COLORS[project.category] || THUMB_COLORS.SaaS;
  const tagStyle = TAG_STYLES[project.tags[0]] || TAG_STYLES["Featured"];

  return (
    <motion.div
      layout
      variants={fadeUp}
      whileHover={{ y: -4, borderColor: "rgba(167,139,250,0.4)" }}
      onClick={onClick}
      className={`rounded-3xl border border-[var(--border-color)] bg-[var(--surface)] overflow-hidden cursor-pointer transition-colors ${large ? "md:col-span-7" : "md:col-span-5"}`}
    >
      <div className={`h-36 bg-gradient-to-br ${thumbColor} flex items-center justify-center text-3xl`}>
        {ICONS[project.category] || "🚀"}
      </div>
      <div className="p-6">
        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase border mb-3 ${tagStyle}`}>
          {project.tags[0]}
        </span>
        <h3 className="font-syne text-xl font-bold mb-2 leading-tight">{project.name}</h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] border border-[var(--border-color)]">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white hover:opacity-85 transition-opacity">
            Live Demo ↗
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg text-xs border border-[var(--border-color2)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all">
            GitHub
          </a>
          {project.caseStudy && (
            <a href={project.caseStudy}
              className="px-3 py-1.5 rounded-lg text-xs border border-[var(--border-color2)] text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all">
              Case Study
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const thumbColor = THUMB_COLORS[project.category] || THUMB_COLORS.SaaS;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-48 bg-gradient-to-br ${thumbColor} flex items-center justify-center text-5xl relative`}>
          {ICONS[project.category] || "🚀"}
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="p-8">
          <h2 className="font-syne text-2xl font-bold mb-2">{project.name}</h2>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">{project.longDescription}</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {Object.entries(project.metrics).filter(([, v]) => v).map(([k, v]) => (
              <div key={k} className="bg-[var(--surface)] rounded-xl p-3 text-center border border-[var(--border-color)]">
                <div className="font-syne font-bold text-lg gradient-text">{v}</div>
                <div className="text-[11px] text-[var(--text-tertiary)] capitalize">{k}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((t) => (
              <span key={t} className="px-3 py-1 rounded-lg text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-color)]">{t}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white text-sm font-medium hover:opacity-85 transition-opacity">
              <ExternalLink size={14} /> Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border-color2)] text-[var(--text-secondary)] text-sm hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all">
              <Github size={14} /> GitHub
            </a>
            {project.caseStudy && (
              <a href={project.caseStudy}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--border-color2)] text-[var(--text-secondary)] text-sm hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all">
                <BookOpen size={14} /> Case Study
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [category, setCategory] = useState<ProjectCategory>("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return portfolioData.projects.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [category, search]);

  return (
    <>
      <section id="projects" className="section-padding">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 text-[var(--accent-primary)] text-[11px] font-medium tracking-[0.12em] uppercase mb-4">
            <span className="w-6 h-px bg-[var(--accent-primary)]" /> 04 — Projects
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-syne text-[clamp(32px,4vw,52px)] font-black tracking-tight leading-tight mb-4">
            Featured<br />Work
          </motion.h2>

          {/* Search + Filter */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10 mt-10">
            <div className="relative flex-1 max-w-sm">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-[var(--border-color2)] bg-[var(--surface)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs border transition-all ${
                    category === cat
                      ? "bg-[rgba(232,121,249,0.15)] border-[var(--accent-primary)] text-[var(--text-primary)]"
                      : "border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--border-color2)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Bento Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${search}`}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-12 gap-4"
            >
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project as Project}
                  large={i === 0}
                  onClick={() => setSelectedProject(project as Project)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
