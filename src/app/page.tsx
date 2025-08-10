"use client"

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollProgressBar from '@/components/common/ScrollProgressBar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Projects Section */}
        <ProjectsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
