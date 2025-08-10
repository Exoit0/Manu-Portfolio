"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/manu-rajeshnaik',
      iconSrc: '/icons/linkedin.png', // from your ContactSection code
      alt: 'LinkedIn icon',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/exoit0',
      iconSrc: '/icons/github.png',
      alt: 'GitHub icon',
    },
    {
      name: 'Email',
      url: 'mailto:manurajeshnaik@gmail.com',
      iconSrc: 'https://images.icon-icons.com/2631/PNG/512/gmail_new_logo_icon_159149.png',
      alt: 'Email icon',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/exoit0',
      iconSrc: '/icons/twitter.png',
      alt: 'Twitter icon',
    },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#080808] border-t border-[#4F90FF33] text-white font-poppins">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white gradient-text">
              Manu Rajesh Naik
            </h3>
            <p className="text-[#A1A3A3] leading-relaxed">
              Software Engineer passionate about creating innovative web solutions
              with modern technologies and clean, efficient code.
            </p>
            <div className="flex items-center space-x-2 text-[#4F90FF]">
              {/* Replace 📍 emoji with image icon */}
              <img
                src="/icons/location.png"
                alt="Location icon"
                className="w-6 h-6 object-contain"
              />
              <span>Pune, Maharashtra, India</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#A1A3A3] hover:text-[#4F90FF] transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">
              Connect With Me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-[#A1A3A350] rounded-lg flex items-center justify-center group-hover:border-[#4F90FF]/50 group-hover:bg-[#4F90FF]/10 transition-all duration-300">
                    <img
                      src={social.iconSrc}
                      alt={social.alt}
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                    />
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-[#A1A3A3] text-sm">
                Always open to interesting conversations and opportunities.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[#4F90FF33] mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#A1A3A3] text-sm text-center md:text-left">
              <p>
                © {currentYear} Manu Rajesh Naik. All rights reserved.
              </p>
              <p className="mt-1">
                Built with ❤️ using React, Next.js, and Tailwind CSS
              </p>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-[#4F90FF] hover:text-[#3B7DD8] transition-colors duration-300 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <motion.svg
                className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </motion.svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
