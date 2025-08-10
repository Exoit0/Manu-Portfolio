"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FadeInUp, SlideInLeft, SlideInRight } from '../animations/FadeInUp'
import { Card } from '../ui/card'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/manu-rajeshnaik/',
      icon: (
        <img
          src="icons\linkedin.png"
          alt="LinkedIn icon"
          className="w-8 h-8 mx-auto object-contain"
        />
      ),
      description: 'Connect with me professionally'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/manurajeshnaik',
      icon: (
        <img
          src="/icons/github.png"
          alt="GitHub icon"
          className="w-8 h-8 mx-auto object-contain"
        />
      ),
      description: 'Check out my code repositories'
    },
    {
      name: 'Email',
      url: 'mailto:manurajeshnaik@gmail.com',
      icon: (
        <img
          src="https://images.icon-icons.com/2631/PNG/512/gmail_new_logo_icon_159149.png"
          alt="Email icon"
          className="w-8 h-8 mx-auto object-contain"
        />
      ),
      description: 'Send me a direct email'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/exoit0',
      icon: (
        <img
          src="/icons/twitter.png"
          alt="Twitter icon"
          className="w-8 h-8 mx-auto object-contain"
        />
      ),
      description: 'Follow me for tech updates'
    }
  ]

  const contactDetails = [
    {
      icon: (
        <img
          src="/icons/location.png"
          alt="Location icon"
          className="w-6 h-6 object-contain"
        />
      ),
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      isLink: false
    },
    {
      icon: (
        <img
          src="https://images.icon-icons.com/2631/PNG/512/gmail_new_logo_icon_159149.png"
          alt="Email icon"
          className="w-6 h-6 object-contain"
        />
      ),
      label: 'Email',
      value: 'manurajeshnaik@gmail.com',
      isLink: true,
      href: 'mailto:manurajeshnaik@gmail.com'
    },
    {
      icon: (
        <img
          src="/icons/status.png"
          alt="Status icon"
          className="w-6 h-6 object-contain"
        />
      ),
      label: 'Status',
      value: 'Open to opportunities',
      isLink: false,
      accent: true
    }
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)

    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section
      id="contact"
      className="section-padding bg-[#080808] text-white font-poppins"
    >
      <div className="container mx-auto px-6">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 jersey-10-pixel">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#A1A3A3] mx-auto rounded-full"></div>
          <p className="text-[#A1A3A3] mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a friendly chat about technology and
            development.
          </p>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <SlideInLeft>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semi-bold tracking-tighter text-white mb-6 font-instrument-serif">
                  Let's Connect
                </h3>
                <p className="text-[#A1A3A3] leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or
                  just want to say hello, I'd love to hear from you. Feel free
                  to reach out through any of the channels below or use the
                  contact form.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactDetails.map(
                  ({ icon, label, value, isLink, href, accent }, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-[#A1A3A350]"
                      whileHover={{ scale: 1.02, borderColor: '#4F90FF' }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>{icon}</span>
                      <div>
                        <p className="font-medium text-white">{label}</p>
                        {isLink ? (
                          <a
                            href={href}
                            className="text-[#4F90FF] hover:text-[#7ea3ff] transition-colors duration-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {value}
                          </a>
                        ) : (
                          <p
                            className={`${
                              accent ? 'text-[#4F90FF]' : 'text-[#A1A3A3]'
                            }`}
                          >
                            {value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )
                )}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Card className="p-4 text-center bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-[#A1A3A350] hover:border-[#4F90FF] transition-all duration-300 hover-lift">
                        {social.icon}
                        <p className="font-medium text-white group-hover:text-[#4F90FF] transition-colors duration-300">
                          {social.name}
                        </p>
                        <p className="text-xs text-[#A1A3A3] mt-1">
                          {social.description}
                        </p>
                      </Card>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </SlideInLeft>

          {/* Contact Form */}
          <SlideInRight>
            <Card className="p-6 md:p-8 bg-gradient-to-br from-[#1A1A1A] to-[#121212] border border-[#A1A3A350] rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-[#080808] border border-[#A1A3A350] focus:border-[#4F90FF] text-white placeholder-[#A1A3A3]"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-[#080808] border border-[#A1A3A350] focus:border-[#4F90FF] text-white placeholder-[#A1A3A3]"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-[#080808] border border-[#A1A3A350] focus:border-[#4F90FF] text-white placeholder-[#A1A3A3]"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-[#080808] border border-[#A1A3A350] focus:border-[#4F90FF] text-white placeholder-[#A1A3A3] resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4F90FF] text-white hover:bg-[#3B7DD8] disabled:opacity-50 disabled:cursor-not-allowed font-semibold py-3"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <span>📤</span>
                      </span>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
