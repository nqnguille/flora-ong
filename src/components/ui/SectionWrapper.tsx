'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  id?: string
  className?: string
  innerClassName?: string
  animate?: boolean
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  innerClassName = '',
  animate = true,
}: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <motion.div
        ref={ref}
        className={`max-w-[1200px] mx-auto px-6 md:px-20 ${innerClassName}`}
        initial={animate ? { opacity: 0, y: 20 } : {}}
        animate={animate && isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
