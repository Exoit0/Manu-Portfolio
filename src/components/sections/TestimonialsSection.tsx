"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FadeInUp } from '../animations/FadeInUp'
import { Card } from '../ui/card'

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  content: string
  avatar: string
  rating: number
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Project Manager',
      position: 'Senior Project Manager',
      company: 'Bajaj Allianz General Insurance',
      content: 'Manu demonstrated exceptional technical skills during his internship. His work on Spring Boot APIs and UI/UX improvements significantly enhanced our chatbot interface. A dedicated and talented developer.',
      avatar: '👨‍💼',
      rating: 5
    },
    {
      id: 2,
      name: 'Academic Supervisor',
      position: 'Professor',
      company: 'KIIT University',
      content: 'An outstanding student with a strong grasp of software engineering principles. Manu consistently delivers high-quality work and shows great potential in full-stack development.',
      avatar: '👩‍🏫',
      rating: 5
    },
    {
      id: 3,
      name: 'Development Team Lead',
      position: 'Technical Lead',
      company: 'Web Development Projects',
      content: 'Working with Manu on the Zyfero project was a great experience. His attention to detail, modern UI/UX skills, and ability to implement complex animations made the project a success.',
      avatar: '👨‍💻',
      rating: 5
    },
    {
      id: 4,
      name: 'Peer Collaborator',
      position: 'Fellow Developer',
      company: 'Open Source Community',
      content: 'Manu brings fresh ideas and modern approaches to every project. His expertise in React and Spring Boot, combined with his collaborative spirit, makes him an excellent team member.',
      avatar: '👩‍💻',
      rating: 5
    }
  ]

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="section-padding bg-[#080808] text-white font-poppins">
      <div className="container mx-auto px-6">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 jersey-10-pixel gradient-text">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-[#A1A3A3] mx-auto rounded-full"></div>
          <p className="text-[#A1A3A3] mt-6 max-w-2xl mx-auto">
            Feedback from colleagues, mentors, and collaborators I've had the pleasure
            to work with throughout my journey.
          </p>
        </FadeInUp>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="p-8 md:p-12 text-center bg-[#121212]/70 border border-[#A1A3A3]/30 hover:border-accent/50 transition-all duration-300 rounded-lg">
                  {/* Avatar */}
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent/20 to-[#0A0A0A] rounded-full flex items-center justify-center text-4xl border-2 border-[#A1A3A3]/30">
                      {testimonials[currentIndex].avatar}
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="text-2xl text-accent mr-1"
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 italic font-poppins">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1 font-poppins">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-accent font-medium font-poppins">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-[#A1A3A3] font-poppins">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-12">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-[#121212]/80 border border-[#A1A3A3]/30 rounded-full flex items-center justify-center text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous Testimonial"
            >
              ←
            </motion.button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-12">
            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-[#121212]/80 border border-[#A1A3A3]/30 rounded-full flex items-center justify-center text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next Testimonial"
            >
              →
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-accent w-8 h-3'
                    : 'bg-[#A1A3A3] w-3 h-3 hover:bg-accent/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <FadeInUp delay={0.5} className="text-center mt-8">
          <p className="text-[#A1A3A3] text-sm font-poppins">
            {isAutoPlay ? '▶️ Auto-playing testimonials' : '⏸️ Hover to pause auto-play'}
          </p>
        </FadeInUp>
      </div>
    </section>
  )
}

export default TestimonialsSection
