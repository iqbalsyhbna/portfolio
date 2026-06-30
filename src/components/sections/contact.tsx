// src/components/sections/contact.tsx
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MapPin, Mail, Clock, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from "@/lib/animations";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const { profile } = portfolioData;

  const contactItems = [
    { icon: <Mail size={18} />, label: "Email", value: profile.email },
    { icon: <MapPin size={18} />, label: "Location", value: `${profile.location} (${profile.timezone})` },
    {
      icon: <CheckCircle size={18} />, label: "Status",
      value: profile.available ? profile.availableText : "Not available",
      accent: profile.available,
    },
    { icon: <Clock size={18} />, label: "Response time", value: profile.responseTime },
  ];

  return (
    <section id="contact" className="section-padding">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left */}
        <motion.div variants={slideInLeft}>
          <div className="flex items-center gap-2 text-[var(--accent-primary)] text-[11px] font-medium tracking-[0.12em] uppercase mb-4">
            <span className="w-6 h-px bg-[var(--accent-primary)]" /> 07 — Contact
          </div>
          <h2 className="font-syne text-[clamp(36px,4vw,56px)] font-black tracking-tight leading-[1.1] mb-6">
            Let&apos;s build<br />something<br />
            <span className="gradient-text">amazing</span><br />
            together.
          </h2>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-10 max-w-md">
            Open for freelance projects, full-time roles, and interesting collaborations.
            Let&apos;s talk about your next big idea.
          </p>

          <div className="flex flex-col gap-5">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)]">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[11px] text-[var(--text-tertiary)] mb-0.5">{item.label}</div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: item.accent ? "var(--accent-tertiary)" : "var(--text-primary)" }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right – Form */}
        <motion.div
          variants={slideInRight}
          className="bg-[var(--surface)] border border-[var(--border-color)] rounded-3xl p-8 lg:p-10"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-[rgba(52,211,153,0.15)] border border-[rgba(52,211,153,0.3)] flex items-center justify-center text-[var(--accent-tertiary)]">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-syne text-xl font-bold">Message Sent!</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Thanks for reaching out. I&apos;ll get back to you within {profile.responseTime.toLowerCase()}.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-[var(--text-secondary)] font-medium">Full Name</label>
                  <input
                    {...register("name")}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color2)] bg-[var(--bg-tertiary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-colors"
                  />
                  {errors.name && <p className="text-[11px] text-red-400">{errors.name.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-[var(--text-secondary)] font-medium">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-color2)] bg-[var(--bg-tertiary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-colors"
                  />
                  {errors.email && <p className="text-[11px] text-red-400">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-[var(--text-secondary)] font-medium">Subject</label>
                <input
                  {...register("subject")}
                  placeholder="Project inquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border-color2)] bg-[var(--bg-tertiary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-colors"
                />
                {errors.subject && <p className="text-[11px] text-red-400">{errors.subject.message}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-[var(--text-secondary)] font-medium">Message</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border-color2)] bg-[var(--bg-tertiary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none focus:border-[var(--accent-primary)] transition-colors resize-none leading-relaxed"
                />
                {errors.message && <p className="text-[11px] text-red-400">{errors.message.message}</p>}
              </div>

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-red-400 text-center font-medium bg-red-950/20 border border-red-500/30 py-2.5 rounded-xl"
                >
                  Failed to send message. Please try again later.
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white text-sm font-semibold tracking-wide disabled:opacity-70 transition-opacity"
              >
                {status === "loading" ? (
                  <><Loader2 size={16} className="animate-spin" /> Sending…</>
                ) : (
                  <><Send size={14} /> Send Message</>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
