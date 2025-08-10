"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export const FadeInUp = ({
  children,
  delay = 0,
  duration = 0.6,
  className = ""
}: FadeInUpProps) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  className = ""
}: FadeInUpProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration, delay }}
    className={className}
  >
    {children}
  </motion.div>
)

export const SlideInLeft = ({
  children,
  delay = 0,
  duration = 0.6,
  className = ""
}: FadeInUpProps) => (
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

export const SlideInRight = ({
  children,
  delay = 0,
  duration = 0.6,
  className = ""
}: FadeInUpProps) => (
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  className = ""
}: {
  children: ReactNode
  staggerDelay?: number
  className?: string
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({
  children,
  className = ""
}: {
  children: ReactNode
  className?: string
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)
