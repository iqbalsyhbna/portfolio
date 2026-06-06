// src/components/shared/command-palette.tsx
"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Command, Hash, Download, Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  category: string;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigate = useCallback((href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }, []);

  const commands: CommandItem[] = [
    { id: "hero", label: "Go to Home", icon: <Hash size={14} />, action: () => navigate("#hero"), category: "Navigation" },
    { id: "about", label: "About Me", description: "Learn who I am", icon: <Hash size={14} />, action: () => navigate("#about"), category: "Navigation" },
    { id: "projects", label: "View Projects", description: "Bento grid showcase", icon: <Hash size={14} />, action: () => navigate("#projects"), category: "Navigation" },
    { id: "skills", label: "My Skills", description: "Tech stack & expertise", icon: <Hash size={14} />, action: () => navigate("#skills"), category: "Navigation" },
    { id: "experience", label: "Work Experience", description: "Career history", icon: <Hash size={14} />, action: () => navigate("#experience"), category: "Navigation" },
    { id: "contact", label: "Contact Me", description: "Get in touch", icon: <Mail size={14} />, action: () => navigate("#contact"), category: "Navigation" },
    {
      id: "cv", label: "Download CV / Resume", description: "PDF format",
      icon: <Download size={14} />,
      action: () => { window.open(portfolioData.profile.cvUrl); setOpen(false); },
      category: "Actions",
    },
    {
      id: "github", label: "GitHub Profile", description: portfolioData.socials.find(s => s.platform === "GitHub")?.url,
      icon: <Github size={14} />,
      action: () => { window.open(portfolioData.socials.find(s => s.platform === "GitHub")?.url); setOpen(false); },
      category: "Actions",
    },
    {
      id: "linkedin", label: "LinkedIn Profile", description: portfolioData.socials.find(s => s.platform === "LinkedIn")?.url,
      icon: <Linkedin size={14} />,
      action: () => { window.open(portfolioData.socials.find(s => s.platform === "LinkedIn")?.url); setOpen(false); },
      category: "Actions",
    },
    {
      id: "twitter", label: "Twitter / X", description: portfolioData.socials.find(s => s.platform === "Twitter")?.url,
      icon: <Twitter size={14} />,
      action: () => { window.open(portfolioData.socials.find(s => s.platform === "Twitter")?.url); setOpen(false); },
      category: "Actions",
    },
    ...portfolioData.projects.map((p) => ({
      id: `proj-${p.id}`,
      label: p.shortName,
      description: p.description.slice(0, 60) + "…",
      icon: <FileText size={14} />,
      action: () => { navigate("#projects"); },
      category: "Projects",
    })),
  ];

  const filtered = query
    ? commands.filter((c) =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.description?.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  const grouped = filtered.reduce<Record<string, CommandItem[]>>((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-command-palette", onOpen);
    return () => window.removeEventListener("open-command-palette", onOpen);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
      if (open) {
        if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1)); }
        if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIndex((i) => Math.max(i - 1, 0)); }
        if (e.key === "Enter") { e.preventDefault(); filtered[selectedIndex]?.action(); }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered, selectedIndex]);

  useEffect(() => { setSelectedIndex(0); }, [query]);

  let flatIdx = 0;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 bg-black/70 backdrop-blur-lg"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="w-full max-w-[560px] bg-[var(--bg-secondary)] border border-[var(--border-color2)] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border-color)]">
              <Search size={16} className="text-[var(--text-tertiary)]" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent border-none outline-none text-[15px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] font-dm"
              />
              <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-[var(--surface)] border border-[var(--border-color)] text-[10px] text-[var(--text-tertiary)] font-mono">
                ESC
              </div>
            </div>

            {/* Results */}
            <div className="max-h-[400px] overflow-y-auto p-3">
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category}>
                  <div className="text-[10px] font-semibold text-[var(--text-tertiary)] tracking-[0.1em] uppercase px-3 py-2">{category}</div>
                  {items.map((item) => {
                    const isSelected = flatIdx === selectedIndex;
                    const currentIdx = flatIdx++;
                    return (
                      <motion.div
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(currentIdx)}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-colors ${
                          isSelected ? "bg-[var(--surface2)]" : "hover:bg-[var(--surface)]"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-[var(--surface)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)]">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[13px] text-[var(--text-primary)]">{item.label}</div>
                          {item.description && (
                            <div className="text-[11px] text-[var(--text-tertiary)] truncate">{item.description}</div>
                          )}
                        </div>
                        {isSelected && <ArrowRight size={14} className="text-[var(--text-tertiary)]" />}
                      </motion.div>
                    );
                  })}
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-10 text-[var(--text-tertiary)] text-sm">No results for "{query}"</div>
              )}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-[var(--border-color)] flex items-center gap-4 text-[11px] text-[var(--text-tertiary)]">
              <span className="flex items-center gap-1.5"><Command size={10} /> K to open</span>
              <span>↑↓ to navigate</span>
              <span>↵ to select</span>
              <span>ESC to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
