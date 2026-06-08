'use client'

import { motion } from 'framer-motion'

type ButtonVariant = 'primary' | 'secondary' | 'footer'

interface ButtonProps {
  variant?: ButtonVariant
  href: string
  children: React.ReactNode
  ariaLabel?: string
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#71CE6A] text-[#2D4239] border-transparent hover:bg-[#60bb59]',
  secondary:
    'bg-transparent text-[#2D4239] border-[1.5px] border-[#2D4239] hover:bg-[#2D4239]/5',
  footer:
    'bg-transparent text-[#F7F6EB] border-[1.5px] border-[#F7F6EB] hover:bg-[#F7F6EB]/10',
}

export default function Button({
  variant = 'primary',
  href,
  children,
  ariaLabel,
  className = '',
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`
        inline-flex items-center justify-center
        h-12 px-6 rounded-[4px]
        font-[family-name:var(--font-hanken)] text-sm font-bold tracking-wide
        border transition-colors duration-150 cursor-pointer
        ${variantStyles[variant]}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
    >
      {children}
    </motion.a>
  )
}
