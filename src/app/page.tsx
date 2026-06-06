// src/app/page.tsx
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { CertificationsSection } from "@/components/sections/certifications";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BlogPreviewSection } from "@/components/sections/blog-preview";
import { ContactSection } from "@/components/sections/contact";
import { CommandPalette } from "@/components/shared/command-palette";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { BackToTop } from "@/components/shared/back-to-top";
import { SectionNavigator } from "@/components/shared/section-navigator";
import { LoadingScreen } from "@/components/shared/loading-screen";
import { SmoothScroll } from "@/providers/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <SectionNavigator />
      <BackToTop />
      <CommandPalette />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <TestimonialsSection />
        <BlogPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
