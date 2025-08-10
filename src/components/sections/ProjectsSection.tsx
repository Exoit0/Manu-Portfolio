"use client"

import { motion } from 'framer-motion'
import { FadeInUp, SlideInLeft, SlideInRight } from '../animations/FadeInUp'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string[]
  technologies: string[]
  features: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
  isReverse: boolean
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Zyfero - Web Design Agency Website',
      description: 'A modern, professional website for a web design agency featuring advanced animations and responsive design.',
      longDescription: [
        'Developed a comprehensive website for Zyfero web design agency',
        'Implemented advanced animations using GSAP for enhanced user experience',
        'Created responsive design ensuring optimal viewing across all devices',
        'Integrated modern UI/UX patterns following current design trends',
        'Optimized performance for fast loading times and smooth interactions'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Responsive Design'],
      features: ['Advanced Animations', 'Responsive Layout', 'Modern UI/UX', 'Performance Optimized'],
      image: '/images/Zyfero.png',
      liveUrl: 'https://exoit0.github.io/Zyfero/',
      githubUrl: 'https://github.com/Exoit0/Zyfero',
      isReverse: false
    },
    {
      id: 2,
      title: 'Interactive Portfolio Website',
      description: 'A dynamic portfolio website showcasing advanced JavaScript animations and smooth scroll effects.',
      longDescription: [
        'Built an interactive portfolio website with cutting-edge web technologies',
        'Integrated GSAP and Locomotive.js for smooth scrolling and complex animations',
        'Implemented advanced JavaScript features for dynamic content interaction',
        'Created custom CSS animations and transitions for engaging user experience',
        'Designed with mobile-first approach ensuring cross-device compatibility'
      ],
      technologies: ['JavaScript', 'GSAP', 'Locomotive.js', 'CSS3', 'HTML5'],
      features: ['Smooth Scrolling', 'Advanced Animations', 'Interactive Elements'],
      image: '/images/Portfolio.png',
      liveUrl: 'https://exoit0.github.io/Portfolio-Website/',
      githubUrl: 'https://github.com/Exoit0/Portfolio-Website',
      isReverse: true
    },
    // {
    //   id: 3,
    //   title: 'Spring Boot API Development',
    //   description: 'Enterprise-level RESTful API development with Spring Boot for insurance domain applications.',
    //   longDescription: [
    //     'Developed robust RESTful APIs using Spring Boot framework',
    //     'Implemented secure authentication and authorization mechanisms',
    //     'Created comprehensive API documentation using Swagger/OpenAPI',
    //     'Integrated with PostgreSQL database for data persistence',
    //     'Implemented proper error handling and logging mechanisms'
    //   ],
    //   technologies: ['Spring Boot', 'Java', 'PostgreSQL', 'REST API', 'Swagger'],
    //   features: ['RESTful Architecture', 'Database Integration', 'Security Implementation', 'API Documentation'],
    //   image: '🍃',
    //   githubUrl: 'https://github.com/manurajeshnaik',
    //   isReverse: false
    // }
  ]

  return (
    <section id="projects" className="section-padding bg-[#080808] text-white font-poppins">
      <div className="container mx-auto px-6">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 jersey-10-pixel gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-[#A1A3A3] mx-auto rounded-full"></div>
          <p className="text-[#A1A3A3] mt-6 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in web development,
            API design, and modern technologies.
          </p>
        </FadeInUp>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                project.isReverse ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Project Image */}
                <div className={`order-2 ${project.isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  {project.isReverse ? (
                    <SlideInRight>
                      <ProjectImage project={project} />
                    </SlideInRight>
                  ) : (
                    <SlideInLeft>
                      <ProjectImage project={project} />
                    </SlideInLeft>
                  )}
                </div>

                {/* Project Content */}
                <div className={`order-1 ${project.isReverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  {project.isReverse ? (
                    <SlideInLeft>
                      <ProjectContent project={project} />
                    </SlideInLeft>
                  ) : (
                    <SlideInRight>
                      <ProjectContent project={project} />
                    </SlideInRight>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectImage = ({ project }: { project: Project }) => (
  <motion.div
    className="relative group"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <Card className="aspect-video bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] border border-[#A1A3A3]/30 hover:border-accent/50 transition-all duration-300 overflow-hidden">
      <div className="w-full h-full">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-[#080808]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <div className="text-center space-y-4">
          {project.liveUrl && (
            <Button
              className="bg-accent text-primary-foreground hover:bg-accent/90 mr-2"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              <span className="mr-2">🌐</span>
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-primary-foreground"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <span className="mr-2">📂</span>
              Source Code
            </Button>
          )}
        </div>
      </motion.div>
    </Card>
  </motion.div>
)

const ProjectContent = ({ project }: { project: Project }) => (
  <div className="space-y-6">
    <div>
      <h3 className="text-2xl md:text-3xl font-semi-bold tracking-tighter text-white mb-3 font-instrument-serif">
        {project.title}
      </h3>
      <p className="text-[#A1A3A3] text-lg leading-relaxed font-poppins">
        {project.description}
      </p>
    </div>

    <ul className="space-y-2">
      {project.longDescription.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="text-[#A1A3A3] flex items-start space-x-2 font-poppins"
        >
          <span className="text-accent mt-1">•</span>
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>

    <div>
      <h4 className="text-lg font-semibold text-white mb-3 font-poppins">
        Key Features
      </h4>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.features.map((feature, i) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Badge
              variant="outline"
              className="bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 transition-colors duration-300"
            >
              {feature}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-lg font-semibold text-white mb-3 font-poppins">
        Technologies Used
      </h4>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Badge
              className="bg-[#121212] text-white border-[#A1A3A3]/30 hover:border-accent/50 transition-colors duration-300"
            >
              {tech}
            </Badge>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)

export default ProjectsSection
