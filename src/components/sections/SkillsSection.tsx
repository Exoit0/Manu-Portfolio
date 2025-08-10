"use client"

import { motion } from 'framer-motion'
import { FadeInUp, StaggerContainer, StaggerItem } from '../animations/FadeInUp'
import { Card } from '../ui/card'
import { useState } from 'react'

interface Skill {
  name: string
  icon: JSX.Element
  description: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
  icon: JSX.Element
}

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <img src="/icons/frontend.png" className="h-10 w-10" draggable={false} />,
      skills: [
        {
          name: 'React',
          icon: (
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="React"
              className="h-6 w-6"
              draggable={false}
            />
          ),
          description: 'Building dynamic and interactive user interfaces',
        },
        {
          name: 'JavaScript',
          icon: (
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
              alt="JavaScript"
              className="h-6 w-6"
              draggable={false}
            />
          ),
          description: 'Modern ES6+ features and frameworks',
        },
        {
          name: 'HTML5',
          icon: <img src="/icons/html.png" alt="HTML5" className="h-6 w-6" draggable={false} />,
          description: 'Semantic markup and accessibility',
        },
        {
          name: 'CSS3',
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              className="h-6 w-6"
              draggable={false}
            />
          ),
          description: 'Responsive design and animations',
        },
        {
          name: 'Tailwind CSS',
          icon: <img src="/icons/tailwindcss.png" alt="Tailwind CSS" className="h-6 w-6" draggable={false} />,
          description: 'Utility-first CSS framework',
        },
        {
          name: 'Bootstrap',
          icon: <img src="/icons/bootstrap.png" alt="Bootstrap" className="h-6 w-6" draggable={false} />,
          description: 'Responsive component library',
        },
      ],
    },
    {
      title: 'Backend Development',
      icon: <img src="/icons/backend.png" alt="Backend" className="h-10 w-10" draggable={false} />,
      skills: [
        {
          name: 'Spring Boot',
          icon: (
            <img
              src="https://dominickm.com/wp-content/uploads/2016/06/spring-boot-logo_full.png"
              alt="Spring Boot"
              className="h-6 w-6"
              draggable={false}
            />
          ),
          description: 'Enterprise Java application development',
        },
        {
          name: 'Node.js',
          icon: <img src="/icons/nodejs.png" alt="Node.js" className="h-6 w-6" draggable={false} />,
          description: 'Server-side JavaScript runtime',
        },
        {
          name: 'Java',
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="Java"
              className="h-6 w-6"
              draggable={false}
            />
          ),
          description: 'Object‑oriented programming and enterprise solutions',
        },
        {
          name: 'Python',
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
              className="h-6 w-6"
              draggable={false}
            />
          ),
          description: 'Scripting and automation',
        },
        {
          name: 'RESTful APIs',
          icon: <img src="/icons/restapi.png" alt="RESTful APIs" className="h-6 w-6" draggable={false} />,
          description: 'API design and implementation',
        },
        {
          name: 'C Language',
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              alt="C"
              className="h-6 w-6"
              draggable={false}
            />
          ),
          description: 'System programming fundamentals',
        },
      ],
    },
    {
      title: 'Database & Tools',
      icon: <img src="/icons/database.png" alt="Tools" className="h-10 w-10" draggable={false} />,
      skills: [
        {
          name: 'PostgreSQL',
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="PostgreSQL"
              className="h-6 w-6"
              draggable={false}
            />
          ),
          description: 'Advanced relational database management',
        },
        {
          name: 'MySQL',
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL"
              className="h-6 w-6"
              draggable={false}
            />
          ),
          description: 'Database design and optimization',
        },
        {
          name: 'Git',
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
              className="h-6 w-6"
              draggable={false}
            />
          ),
          description: 'Version control and collaboration',
        },
        {
          name: 'GitHub',
          icon: <img src="/icons/github.png" alt="GitHub" className="h-6 w-6" draggable={false} />,
          description: 'Code repository and project management',
        },
        {
          name: 'Postman',
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
              alt="Postman"
              className="h-6 w-6"
              draggable={false}
            />
          ),
          description: 'API testing and documentation',
        },
        {
          name: 'VS Code',
          icon: (
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="VS Code"
              className="h-6 w-6"
              draggable={false}
            />
          ),
          description: 'Integrated development environment',
        },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-[#080808] text-white font-poppins">
      <div className="container mx-auto px-6">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 jersey-10-pixel">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-[#A1A3A3] mx-auto rounded-full"></div>
          <p className="text-[#A1A3A3] mt-6 max-w-2xl mx-auto font-poppins">
            A comprehensive overview of my technical skills and proficiency levels
            across different domains of software development.
          </p>
        </FadeInUp>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <FadeInUp key={category.title} delay={categoryIndex * 0.2}>
              <Card className="p-6 md:p-8 bg-[#111111] border-[#A1A3A3]/20 hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-2xl md:text-3xl font-lightbold tracking-tighter text-white ml-4 font-instrument-serif">
                    {category.title}
                  </h3>
                </div>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <motion.div
                        className="relative group"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <Card className="px-4 py-3 pt-4 pb-1 bg-[#1A1A1A] border-[#A1A3A3]/10 hover:border-accent/50 transition-all duration-300 hover-lift">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-2">
                              {skill.icon}
                              <span className="font-semibold text-white">{skill.name}</span>
                            </div>
                          </div>

                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                              opacity: hoveredSkill === skill.name ? 1 : 0,
                              height: hoveredSkill === skill.name ? 'auto' : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-[#A1A3A3] pb-3">{skill.description}</p>
                          </motion.div>
                        </Card>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </Card>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
