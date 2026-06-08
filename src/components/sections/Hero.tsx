'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { STATS, IMAGES, buildWhatsAppUrl, WA_MESSAGES } from '@/lib/constants'

const statsVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const statItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Hero() {
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general)

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-end">

      {/* Imagen de fondo — full width / full height */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.hero}
          alt="Campo natural con vegetación en Patagonia"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay semi-transparente — gradiente de abajo para legibilidad */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Contenido — sobre el overlay */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-20 pb-16 md:pb-24 pt-28 md:pt-32">

        {/* Badge REPROCANN */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 bg-black/40 rounded-[3px]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#71CE6A] flex-shrink-0" />
          <span className="font-[family-name:var(--font-hanken)] text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80">
            Asociación civil registrada en REPROCANN · Neuquén
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          className="font-[family-name:var(--font-garamond)] text-[64px] md:text-[80px] leading-[1.0] text-white mb-5 max-w-[700px]"
        >
          Cultivamos<br />conciencia.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="font-[family-name:var(--font-hanken)] text-[18px] text-white/75 leading-relaxed mb-10 max-w-[520px]"
        >
          Sos socio de tu propia medicina. Legal, acompañado, sin juicio.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 mb-16"
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hacerse socio de Flora ONG por WhatsApp"
            className="
              inline-flex items-center justify-center gap-2
              h-12 px-8 rounded-[4px]
              bg-[#71CE6A] text-[#2D4239]
              font-[family-name:var(--font-hanken)] text-sm font-bold
              hover:bg-[#60bb59] transition-colors duration-150
            "
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hacete socio
          </a>

          <a
            href="#como-funciona"
            className="
              inline-flex items-center justify-center
              h-12 px-8 rounded-[4px]
              bg-transparent text-white border-[1.5px] border-white/60
              font-[family-name:var(--font-hanken)] text-sm font-bold
              hover:bg-white/10 hover:border-white transition-colors duration-150
            "
          >
            Cómo funciona
          </a>
        </motion.div>

        {/* Stats — fila horizontal con divisores */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0"
          variants={statsVariants}
          initial="hidden"
          animate="visible"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statItem}
              className="flex sm:items-center gap-0"
            >
              {/* Divisor entre stats (solo desktop) */}
              {index > 0 && (
                <div className="hidden sm:block w-px h-8 bg-white/20 mx-8 flex-shrink-0" />
              )}
              <div>
                <div className="font-[family-name:var(--font-garamond)] text-[28px] md:text-[32px] text-[#71CE6A] leading-none mb-1">
                  {stat.value}
                </div>
                <div className="font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-wider text-white/55">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
