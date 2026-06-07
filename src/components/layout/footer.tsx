"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Heart,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const NAV_COLS = [
  {
    title: "Navigation",
    links: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Certifications", href: "#certifications" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub: <Github size={15} />,
  LinkedIn: <Linkedin size={15} />,
  Twitter: <Twitter size={15} />,
  Instagram: <Instagram size={15} />,
  Email: <Mail size={15} />,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] px-5 sm:px-8 lg:px-16 pt-14 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-14">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#hero"
              className="font-syne font-black text-2xl gradient-text block mb-3"
            >
              ⟨IS/⟩
            </a>

            <p className="text-sm text-[var(--text-tertiary)] leading-relaxed mb-5">
              Building the future, one commit at a time.
              <br />
              Based in {portfolioData.profile.location}.
            </p>

            <div className="flex flex-wrap gap-3">
              {portfolioData.socials.map((s) => (
                <motion.a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-lg border border-[var(--border-color2)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-tertiary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all"
                >
                  {SOCIAL_ICONS[s.platform]}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-16">
            {NAV_COLS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold text-[var(--text-primary)] tracking-[0.08em] uppercase mb-4">
                  {col.title}
                </h4>

                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="text-xs font-semibold text-[var(--text-primary)] tracking-[0.08em] uppercase mb-4">
                Connect
              </h4>

              <ul className="space-y-3">
                {portfolioData.socials.map((s) => (
                  <li key={s.platform}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {s.platform}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--border-color)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-[var(--text-tertiary)]">
            © {year} {portfolioData.profile.name}. Made with{" "}
            <Heart
              size={10}
              className="inline text-[var(--accent-primary)]"
            />{" "}
            in Indonesia.
          </p>

          <p className="text-xs text-[var(--text-tertiary)]">
            Next.js 15 · React 19 · TypeScript · Tailwind CSS v4
          </p>
        </div>
      </div>
    </footer>
  );
}