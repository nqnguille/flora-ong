'use client'

import { useState, useEffect, useCallback } from 'react'
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

// Umbral de scroll: el hero ocupa 100svh.
// A partir de ~80px consideramos que el usuario scrolleó fuera del video.
const SCROLL_THRESHOLD = 80

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Patrón extraído de "Header 2" de 21st.dev — useScroll con threshold
  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    // Verificar estado inicial en primer render
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  // Bloquear scroll del body cuando el menú mobile está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: scrolled ? '#FFFFFF' : 'rgba(0,0,0,0)',
          borderBottomColor: scrolled ? 'rgba(45,66,57,0.12)' : 'rgba(255,255,255,0)',
        }}
        style={{ borderBottomWidth: 1, borderBottomStyle: 'solid' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Barra de contenido — se estrecha al hacer scroll */}
        <motion.div
          className="mx-auto flex h-16 items-center justify-between gap-8"
          animate={{
            maxWidth: scrolled ? '1080px' : '1200px',
            paddingLeft: scrolled ? '24px' : '80px',
            paddingRight: scrolled ? '24px' : '80px',
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ paddingLeft: '80px', paddingRight: '80px' }}
        >

          {/* Logo */}
          <a
            href="/"
            aria-label="Flora ONG — inicio"
            className="flex-shrink-0 flex flex-col leading-none"
          >
            <motion.span
              className="font-[family-name:var(--font-hanken)] text-[15px] font-bold tracking-[0.06em] uppercase"
              animate={{ color: scrolled ? '#2D4239' : '#F7F6EB' }}
              transition={{ duration: 0.3 }}
            >
              Flora
            </motion.span>
            <motion.span
              className="font-[family-name:var(--font-hanken)] text-[8px] font-medium tracking-[0.14em] uppercase"
              animate={{ color: scrolled ? 'rgba(45,66,57,0.40)' : 'rgba(247,246,235,0.50)' }}
              transition={{ duration: 0.3 }}
            >
              Asociación Civil
            </motion.span>
          </a>

          {/* Nav links — desktop */}
          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                animate={{
                  color: scrolled ? 'rgba(45,66,57,0.65)' : 'rgba(247,246,235,0.75)',
                }}
                whileHover={{
                  color: scrolled ? '#2D4239' : '#F7F6EB',
                }}
                transition={{ duration: 0.2 }}
                className="relative font-[family-name:var(--font-hanken)] text-[14px] group"
              >
                {link.label}
                {/* Subrayado animado en hover */}
                <span className="
                  absolute -bottom-0.5 left-0 w-0 h-px bg-[#71CE6A]
                  group-hover:w-full transition-all duration-200
                " />
              </motion.a>
            ))}
          </nav>

          {/* Lado derecho — desktop */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Hacete socio — CTA principal, siempre visible */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hacerse socio de Flora ONG"
              className="
                inline-flex items-center justify-center gap-2
                h-9 px-4 rounded-[4px]
                bg-[#71CE6A] text-[#2D4239]
                font-[family-name:var(--font-hanken)] text-[13px] font-bold
                transition-colors duration-150 hover:bg-[#5ab854]
              "
            >
              <IconWhatsApp size={14} />
              Hacete socio
            </a>

            {/* Contacto — link secundario */}
            <motion.a
              href="#legalidad"
              animate={{ color: scrolled ? 'rgba(45,66,57,0.50)' : 'rgba(247,246,235,0.55)' }}
              whileHover={{ color: scrolled ? '#2D4239' : '#F7F6EB' }}
              transition={{ duration: 0.2 }}
              className="font-[family-name:var(--font-hanken)] text-[13px]"
            >
              Contacto
            </motion.a>
          </div>

          {/* Hamburger + CTA mobile */}
          <div className="md:hidden flex items-center gap-3">
            {/* CTA visible en mobile incluso cuando el menú está cerrado */}
            {!menuOpen && (
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Asociarse por WhatsApp"
                className="
                  inline-flex items-center justify-center
                  h-8 px-3 rounded-[4px]
                  bg-[#71CE6A] text-[#2D4239]
                  font-[family-name:var(--font-hanken)] text-[12px] font-bold
                "
              >
                Asociarse
              </a>
            )}

            <button
              className="flex flex-col gap-[5px] p-2 -mr-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              {/* Las líneas del hamburger adaptan su color al fondo */}
              {['top', 'mid', 'bot'].map((key, i) => (
                <motion.span
                  key={key}
                  className="block w-5 h-[1.5px] origin-center"
                  style={{ backgroundColor: scrolled ? '#2D4239' : '#F7F6EB' }}
                  animate={
                    i === 0 && menuOpen ? { rotate: 45, y: 6.5 }
                    : i === 1 && menuOpen ? { opacity: 0 }
                    : i === 2 && menuOpen ? { rotate: -45, y: -6.5 }
                    : { rotate: 0, y: 0, opacity: 1 }
                  }
                  transition={{ duration: 0.2 }}
                />
              ))}
            </button>
          </div>

        </motion.div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#2D4239] flex flex-col pt-20 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-1 mt-4" aria-label="Menú mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="
                    font-[family-name:var(--font-hanken)] text-2xl font-semibold text-[#F7F6EB]
                    py-5 border-b border-[#F7F6EB]/10
                    hover:text-[#71CE6A] transition-colors duration-150
                  "
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="mt-8 flex flex-col gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.28 }}
            >
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
                  hover:bg-[#5ab854] transition-colors duration-150
                "
              >
                <IconWhatsApp size={16} />
                Hacete socio
              </a>
              <a
                href="#legalidad"
                onClick={handleLinkClick}
                className="
                  font-[family-name:var(--font-hanken)] text-[14px] text-[#F7F6EB]/40
                  text-center py-2 hover:text-[#F7F6EB]/70 transition-colors duration-150
                "
              >
                Contacto
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
