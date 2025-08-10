"use client"

import { useEffect, useState, useMemo } from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = useMemo(() => [
    'Software Engineer',
    'Full-Stack Developer',
    'React Specialist',
    'Spring Boot Expert'
  ], [])

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentTextIndex, isDeleting, texts])

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
<section
  id="hero"
  className="relative overflow-hidden flex items-center justify-center"
  style={{
    height: 'calc(100vh - 30px)',  // Crop bottom 30px
  }}
>
  {/* Spline 3D background */}
  <div
    className="absolute inset-0 z-0 origin-bottom"
    style={{
      transform: 'scale(1.2) translateY(60px)',  // Zoom more and push down
      transformOrigin: 'bottom center',
    }}
  >
    <iframe
      src="https://my.spline.design/hellodistortingintro-JHjVIraZWOKO0hfOVNJanYX0/"
      frameBorder="0"
      width="100%"
      height="100%"
      className="w-full h-full bg-[#080808]"
    />
    {/* Overlay to hide logo */}
    <div
      style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 80,
        height: 30,
        backgroundColor: 'transparent',
        zIndex: 999,
        pointerEvents: 'none',
      }}
    />
  </div>
</section>


)

}

export default HeroSection
