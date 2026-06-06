// src/components/sections/blog-preview.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { staggerContainer, fadeUp } from "@/lib/animations";

const POST_GRADIENTS = [
  "from-[#1a0533] to-[#2d0a52]",
  "from-[#03152b] to-[#051e3e]",
  "from-[#031a0d] to-[#042d14]",
];

export function BlogPreviewSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="blog"
      className="section-padding bg-[var(--bg-secondary)] border-t border-[var(--border-color)]"
    >
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-[var(--accent-primary)] text-[11px] font-medium tracking-[0.12em] uppercase mb-4">
              <span className="w-6 h-px bg-[var(--accent-primary)]" /> 08 — Blog
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-syne text-[clamp(32px,4vw,52px)] font-black tracking-tight leading-tight">
              Latest<br />Writing
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
          >
            View all posts <ArrowRight size={14} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {portfolioData.blogPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={`/blog/${post.slug}`}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4, borderColor: "rgba(232,121,249,0.4)" }}
              className="bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl overflow-hidden transition-colors group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className={`h-40 bg-gradient-to-br ${POST_GRADIENTS[i % POST_GRADIENTS.length]} flex items-center justify-center relative`}>
                <div className="text-4xl opacity-40">📝</div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded bg-black/40 text-[10px] text-white/80 backdrop-blur-sm">
                      <Tag size={8} /> {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-[11px] text-[var(--text-tertiary)] mb-3">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                </div>
                <h3 className="font-syne text-base font-bold leading-snug mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{post.excerpt}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
