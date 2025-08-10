"use client"

import { motion } from 'framer-motion'
import { FadeInUp, SlideInLeft, SlideInRight } from '../animations/FadeInUp'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-padding bg-[#080808] text-white font-poppins"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <FadeInUp className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-bold mb-4 jersey-10-pixel">
  About Me
</h2>

          <div className="w-24 h-1 bg-[#A1A3A3] mx-auto rounded-full"></div>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <SlideInLeft className="flex justify-center lg:justify-start ml-4 lg:ml-16">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
<div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#3B3B3B] to-[#0A0B0B] border-4 border-[#A1A3A3]/30 p-2">
  <div className="w-full h-full rounded-full bg-[#080808] overflow-hidden">
    <img
      src="images\pfp.png" // replace with actual image path
      alt="Profile Picture"
      className="w-full h-full object-cover rounded-full"
    />
  </div>
</div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-[#A1A3A3]/20 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                 <img
    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
    alt="Spring Boot Logo"
    className="w-8 h-8"
  />
              </motion.div>

<motion.div
  className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#A1A3A3]/20 rounded-full flex items-center justify-center"
  animate={{ rotate: -360 }}
  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
>
  <img
    src="https://dominickm.com/wp-content/uploads/2016/06/spring-boot-logo_full.png"
    alt="Spring Boot Logo"
    className="w-8 h-8"
  />
</motion.div>

            </motion.div>
          </SlideInLeft>

          {/* Bio Content */}
          <SlideInRight>
            <div className="space-y-6">
<h3 className="text-2xl md:text-3xl font-semi-bold tracking-tighter text-white font-instrument-serif">
  Ex- Software Engineer Intern @BajajAllianz | <br></br>Full-Stack Developer
</h3>

              <div className="space-y-4 text-[#A1A3A3] leading-relaxed font-poppins">
                <p>
                  I'm a hardworking Software Engineer with hands-on experience in Spring Boot
                  development and Moddern Web technologies. Currently in 4th Year, B.Tech in
                  Information Technology from KIIT University.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center space-x-2 text-cadetgray">
                  <span className="w-2 h-2 bg-[#A1A3A3] rounded-full"></span>
                  <span>📍 Pune, Maharashtra, India</span>
                </div>
                <div className="flex items-center space-x-2 text-cadetgray">
                  <span className="w-2 h-2 bg-[#A1A3A3] rounded-full"></span>
                  <span>🎓 B.Tech IT, KIIT University</span>
                </div>
                <div className="flex items-center space-x-2 text-cadetgray">
                  <span className="w-2 h-2 bg-[#A1A3A3] rounded-full"></span>
                  <span>💼 Open to opportunities</span>
                </div>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
