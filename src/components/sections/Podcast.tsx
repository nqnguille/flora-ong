'use client'

import { motion } from 'framer-motion'

const YOUTUBE_URL = 'https://www.youtube.com/@FloraCultivamosConciencia'

function IconYouTube() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export default function Podcast() {
  return (
    <section id="podcast" className="py-24 md:py-32 bg-[#F7F6EB]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {/* Texto */}
          <div className="max-w-[560px]">
            <span className="font-[family-name:var(--font-hanken)] text-xs font-semibold uppercase tracking-widest text-[#2D4239]/50 block mb-4">
              Podcast
            </span>
            <h2 className="font-[family-name:var(--font-garamond)] text-[40px] md:text-[52px] text-[#2D4239] leading-[1.05] mb-6">
              Espacio libre<br />de prejuicios.
            </h2>
            <p className="font-[family-name:var(--font-hanken)] text-[17px] text-[#2D4239]/65 leading-relaxed mb-8">
              Conversaciones sin filtro sobre cannabis medicinal, acceso, legalidad y bienestar. Para quienes ya eligieron informarse antes de opinar.
            </p>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-3
                h-12 px-7 rounded-[4px]
                bg-[#2D4239] text-[#F7F6EB]
                font-[family-name:var(--font-hanken)] text-sm font-bold
                hover:bg-[#1e2e25] transition-colors duration-150
              "
            >
              <IconYouTube />
              Ver en YouTube
            </a>
          </div>

          {/* Decorativo — número grande */}
          <div className="hidden md:block select-none">
            <span className="font-[family-name:var(--font-garamond)] text-[160px] leading-none text-[#71CE6A]/20 font-bold">
              ▶
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
