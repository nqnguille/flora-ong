'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { STATS, buildWhatsAppUrl, WA_MESSAGES } from '@/lib/constants'

// Paleta inline — Tailwind v4 con inline styles para colores custom
const C = {
  cream: '#F7F6EB',
  dark: '#2D4239',
  accent: '#71CE6A',
  white: '#FFFFFF',
}

// Video de fondo — naturaleza patagónica / plantas
// Usamos un video de Pexels con autoplay compatible (sin audio, formato mp4)
const VIDEO_SRC =
  'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_25fps.mp4'

// Poster image como fallback para cuando el video no carga o reduced-motion
const VIDEO_POSTER =
  'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1400'

// Variantes de animación — timing cinematográfico
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const lineVariants: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.55 },
  },
}

const statsVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.9 },
  },
}

const statItemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

function IconWhatsApp() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)

    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
      if (videoRef.current) {
        if (e.matches) {
          videoRef.current.pause()
        } else {
          videoRef.current.play().catch(() => {})
        }
      }
    }

    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Pausa el video si reduced-motion está activo al montar
  useEffect(() => {
    if (reducedMotion && videoRef.current) {
      videoRef.current.pause()
    }
  }, [reducedMotion])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
      aria-label="Hero — Flora ONG"
    >
      {/* ── Video de fondo ─────────────────────────────────────── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_SRC}
        poster={VIDEO_POSTER}
        autoPlay={!reducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* ── Overlay oscuro + fade inferior ─────────────────────── */}
      {/* Base: oscurece el video para legibilidad del texto */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.52)' }}
        aria-hidden="true"
      />
      {/* Fade inferior: transición suave hacia la siguiente sección */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: `linear-gradient(to bottom, transparent, ${C.dark}cc)`,
        }}
        aria-hidden="true"
      />
      {/* Viñeta sutil en los bordes */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.28) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Contenido centrado ─────────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          className="flex flex-col items-center max-w-[720px] w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Badge REPROCANN */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-[3px]"
            style={{
              border: `1px solid rgba(247, 246, 235, 0.22)`,
              backgroundColor: 'rgba(247, 246, 235, 0.07)',
            }}
          >
            <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: C.accent }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ backgroundColor: C.accent }}
              />
            </span>
            <span
              className="font-[family-name:var(--font-hanken)] text-[10px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: `${C.cream}99` }}
            >
              Asociación civil registrada en REPROCANN · Neuquén
            </span>
          </motion.div>

          {/* Headline — EB Garamond italic, impacto máximo */}
          <motion.h1
            variants={itemVariants}
            className="font-[family-name:var(--font-garamond)] italic leading-[1.0] mb-6"
            style={{
              color: C.cream,
              fontSize: 'clamp(56px, 8vw, 96px)',
              letterSpacing: '-0.01em',
            }}
          >
            Cultivamos<br />conciencia.
          </motion.h1>

          {/* Separador verde */}
          <motion.div
            variants={lineVariants}
            className="w-10 h-px mb-6"
            style={{
              backgroundColor: C.accent,
              transformOrigin: 'center',
            }}
          />

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="font-[family-name:var(--font-hanken)] leading-relaxed mb-10 max-w-[480px]"
            style={{
              color: `${C.cream}cc`,
              fontSize: 'clamp(16px, 2.2vw, 20px)',
            }}
          >
            El primer club de cultivo para personas con REPROCANN en Patagonia.
            Cannabis de calidad documentada, dentro del marco legal.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 mb-16"
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hacerse socio de Flora ONG por WhatsApp"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-[4px] font-[family-name:var(--font-hanken)] text-sm font-bold transition-all duration-150 hover:scale-[1.03]"
              style={{
                backgroundColor: C.accent,
                color: C.dark,
              }}
            >
              <IconWhatsApp />
              Hacete socio
            </a>

            <a
              href="#como-funciona"
              className="group inline-flex items-center justify-center gap-2 h-12 px-8 rounded-[4px] font-[family-name:var(--font-hanken)] text-sm font-bold transition-colors duration-150"
              style={{
                backgroundColor: 'transparent',
                color: C.cream,
                border: `1.5px solid rgba(247, 246, 235, 0.35)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(247, 246, 235, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              Cómo funciona
              <span className="inline-block transition-transform duration-150 group-hover:translate-x-[3px]">
                →
              </span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-0"
            variants={statsVariants}
            initial="hidden"
            animate="visible"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statItemVariants}
                className="flex sm:items-center"
              >
                {index > 0 && (
                  <div
                    className="hidden sm:block w-px h-8 mx-8 flex-shrink-0"
                    style={{ backgroundColor: 'rgba(247, 246, 235, 0.2)' }}
                  />
                )}
                <div>
                  <div
                    className="font-[family-name:var(--font-garamond)] leading-none mb-1"
                    style={{
                      color: C.accent,
                      fontSize: 'clamp(24px, 3vw, 32px)',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-wider"
                    style={{ color: `${C.cream}80` }}
                  >
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* ── Scroll indicator ───────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        aria-hidden="true"
      >
        <span
          className="font-[family-name:var(--font-hanken)] text-[10px] uppercase tracking-[0.14em]"
          style={{ color: `${C.cream}50` }}
        >
          Conocé más
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ color: `${C.cream}50` }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 3v10M3 8l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>

    </section>
  )
}
