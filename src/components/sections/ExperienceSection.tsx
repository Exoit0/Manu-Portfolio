"use client"

import { motion } from 'framer-motion'
import { FadeInUp } from '../animations/FadeInUp'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

interface Experience {
  id: number
  title: string
  company: string
  location: string
  duration: string
  type: string
  description: string[]
  skills: string[]
  icon: string
  isLeft: boolean
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'Bajaj Allianz General Insurance',
      location: 'Pune, India',
      duration: 'May 2025 - July 2025',
      type: 'Internship',
      description: [
        'Developed and maintained Spring Boot APIs for enterprise insurance applications',
        'Redesigned chatbot UI/UX interfaces improving user engagement by 25%',
        'Collaborated with cross-functional teams on full-stack web development projects',
        'Implemented RESTful services and database optimization techniques',
        'Gained hands-on experience with enterprise-level software development practices'
      ],
      skills: ['Spring Boot', 'Java', 'REST APIs', 'UI/UX Design', 'Team Collaboration'],
      icon: '🏢',
      isLeft: true
    },
    {
      id: 2,
      title: 'B.Tech in Information Technology',
      company: 'KIIT University',
      location: 'Bhubaneswar, India',
      duration: '2022 - 2026',
      type: 'Education',
      description: [
        'Currently pursuing Bachelor of Technology in Information Technology',
        'Maintaining a CGPA of 8.15 with focus on software development and algorithms',
        'Active participation in coding competitions and technical events',
        'Coursework includes Data Structures, Algorithms, Database Management, and Web Development',
        'Member of various technical clubs and societies'
      ],
      skills: ['Computer Science Fundamentals', 'Data Structures', 'Algorithms', 'Database Management'],
      icon: '🎓',
      isLeft: false
    },
    {
      id: 3,
      title: 'NSS Volunteer',
      company: 'National Service Scheme',
      location: 'KIIT University',
      duration: '2022 - Present',
      type: 'Volunteer',
      description: [
        'Active volunteer in community service and social welfare activities',
        'Organized and participated in various social awareness programs',
        'Led team initiatives for environmental conservation projects',
        'Developed leadership and teamwork skills through community engagement',
        'Contributed to digital literacy programs in local communities'
      ],
      skills: ['Leadership', 'Community Service', 'Team Management', 'Social Impact'],
      icon: '🤝',
      isLeft: true
    }
  ]

  return (
    <section id="experience" className="section-padding bg-[#080808] text-white font-poppins">
      <div className="container mx-auto px-6">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 jersey-10-pixel">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-[#A1A3A3] mx-auto rounded-full"></div>
          <p className="text-[#A1A3A3] mt-6 max-w-2xl mx-auto">
            My journey through professional experiences, education, and community involvement
            that have shaped my skills and perspective.
          </p>
        </FadeInUp>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#A1A3A3] via-[#A1A3A3]/50 to-transparent hidden md:block"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  exp.isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-[49.4%] w-4 h-4 bg-accent rounded-full border-4 border-background z-10 hidden md:block"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />

                {/* Connecting line from dot to card */}
                <div
                  className={`hidden md:block absolute top-1/2 transform -translate-y-1/2
                    ${exp.isLeft ? 'left-[49.4%]' : 'left-[50.6%] -translate-x-full'}
                  `}
                  style={{
                    width: '4.8rem',
                    height: '2px',
                    backgroundColor: 'rgba(236, 72, 153, 0.7)'
                  }}
                ></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${exp.isLeft ? 'md:mr-8 md:pr-16' : 'md:ml-8 md:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="p-6 bg-[#101010]/90 border border-[#A1A3A3]/20 hover:border-[#A1A3A3]/40 transition-all duration-300 hover-lift">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{exp.icon}</span>
                          <div>
                            <h3 className="text-2xl font-semi-bold tracking-tighter text-white font-instrument-serif">
                              {exp.title}
                            </h3>
                            <p className="text-[#A1A3A3] font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <Badge
                          variant={exp.type === 'Internship' ? 'default' : exp.type === 'Education' ? 'secondary' : 'outline'}
                          className="bg-[#A1A3A3]/20 text-[#A1A3A3] border-[#A1A3A3]/30"
                        >
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="mb-4">
                        <p className="text-[#A1A3A3] flex items-center space-x-1">
                          <span>📅</span>
                          <span>{exp.duration}</span>
                        </p>
                        <p className="text-[#A1A3A3] flex items-center space-x-1">
                          <span>📍</span>
                          <span>{exp.location}</span>
                        </p>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="text-[#A1A3A3] flex items-start space-x-2"
                          >
                            <span className="text-[#A1A3A3] mt-1">•</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs bg-[#101010]/50 text-[#A1A3A3] border-[#A1A3A3]/30 hover:bg-[#A1A3A3]/20 transition-colors duration-300"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
