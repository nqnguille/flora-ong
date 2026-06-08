'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { buildWhatsAppUrl, WA_MESSAGES, WHATSAPP_URL } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Inicio', href: '#' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Membresías', href: '#membresias' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Comunidad', href: '#comunidad' },
]

function IconWhatsApp({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general)

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50 bg-white
          transition-all duration-200
          ${scrolled ? 'border-b border-[#2D4239]/10' : 'border-b border-[#2D4239]/8'}
        `}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-20 h-16 flex items-center justify-between gap-8">

          {/* Logo */}
          <a
            href="/"
            aria-label="Flora ONG — inicio"
            className="flex-shrink-0 flex flex-col leading-none"
          >
            <span className="font-[family-name:var(--font-hanken)] text-[15px] font-bold text-[#2D4239] tracking-[0.06em] uppercase">
              Flora
            </span>
            <span className="font-[family-name:var(--font-hanken)] text-[8px] font-medium text-[#2D4239]/40 tracking-[0.14em] uppercase">
              Asociación Civil
            </span>
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  font-[family-name:var(--font-hanken)] text-[14px] text-[#2D4239]/75
                  hover:text-[#2D4239] transition-colors duration-150
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Lado derecho — desktop */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Hacete socio — outline */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hacerse socio de Flora ONG"
              className="
                inline-flex items-center justify-center
                h-9 px-4 rounded-[4px]
                bg-transparent text-[#2D4239] border border-[#2D4239]/40
                font-[family-name:var(--font-hanken)] text-[13px] font-semibold
                hover:border-[#2D4239] transition-colors duration-150
              "
            >
              Hacete socio
            </a>

            {/* Contacto */}
            <a
              href="#legalidad"
              className="
                font-[family-name:var(--font-hanken)] text-[14px] text-[#2D4239]/60
                hover:text-[#2D4239] transition-colors duration-150
              "
            >
              Contacto
            </a>

            {/* WhatsApp ícono */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Flora ONG"
              className="
                flex items-center justify-center
                w-9 h-9 rounded-[4px]
                text-[#71CE6A] hover:text-[#2D4239] hover:bg-[#71CE6A]/10
                transition-colors duration-150
              "
            >
              <IconWhatsApp size={18} />
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-[1.5px] bg-[#2D4239] transition-transform duration-200 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-[#2D4239] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-[#2D4239] transition-transform duration-200 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>

        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#2D4239] flex flex-col pt-20 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-2 mt-4" aria-label="Menú mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="
                    font-[family-name:var(--font-hanken)] text-2xl font-semibold text-[#F7F6EB]
                    py-5 border-b border-[#F7F6EB]/10
                    hover:text-[#71CE6A] transition-colors duration-150
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="
                  inline-flex items-center justify-center gap-2
                  w-full h-14 rounded-[4px]
                  bg-[#71CE6A] text-[#2D4239]
                  font-[family-name:var(--font-hanken)] text-base font-bold
                "
              >
                <IconWhatsApp size={16} />
                Hacete socio
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
