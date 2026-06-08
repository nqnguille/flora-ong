'use client'

import { WHATSAPP_URL, EMAIL, INSTAGRAM, buildWhatsAppUrl, WA_MESSAGES } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Inicio', href: '#' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Membresías', href: '#membresias' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Comunidad', href: '#comunidad' },
]

export default function Footer() {
  const waUrl = buildWhatsAppUrl(WA_MESSAGES.general)

  return (
    <footer className="bg-[#2D4239] pt-16 md:pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">

        {/* Fila principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-16 border-b border-[#F7F6EB]/10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="font-[family-name:var(--font-hanken)] text-[15px] font-bold text-[#F7F6EB] tracking-[0.06em] uppercase leading-none mb-0.5">
                Flora
              </div>
              <div className="font-[family-name:var(--font-hanken)] text-[8px] font-medium text-[#F7F6EB]/30 tracking-[0.14em] uppercase">
                Asociación Civil
              </div>
            </div>
            <p className="font-[family-name:var(--font-garamond)] italic text-[17px] text-[#F7F6EB]/60 leading-snug">
              Cultivamos conciencia.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-widest text-[#F7F6EB]/35 mb-5">
              Navegación
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Navegación footer">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-hanken)] text-[14px] text-[#F7F6EB]/60 hover:text-[#71CE6A] transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-widest text-[#F7F6EB]/35 mb-5">
              Contacto
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="font-[family-name:var(--font-hanken)] text-[14px] text-[#F7F6EB]/60 hover:text-[#71CE6A] transition-colors duration-150"
              >
                WhatsApp: +54 9 299 637 5723
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-hanken)] text-[14px] text-[#F7F6EB]/60 hover:text-[#71CE6A] transition-colors duration-150"
              >
                Instagram: @floraong
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="font-[family-name:var(--font-hanken)] text-[14px] text-[#F7F6EB]/60 hover:text-[#71CE6A] transition-colors duration-150"
              >
                {EMAIL}
              </a>
              <p className="font-[family-name:var(--font-hanken)] text-[13px] text-[#F7F6EB]/40 leading-relaxed">
                Neuquén Capital<br />
                Patagonia, Argentina
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-[family-name:var(--font-hanken)] text-[11px] uppercase tracking-widest text-[#F7F6EB]/35 mb-5">
              Legal
            </h3>
            <div className="flex flex-col gap-3 mb-8">
              <p className="font-[family-name:var(--font-hanken)] text-[13px] text-[#F7F6EB]/40 leading-relaxed">
                Asociación Civil registrada<br />
                en REPROCANN, Argentina.
              </p>
              <p className="font-[family-name:var(--font-hanken)] text-[13px] text-[#F7F6EB]/40">
                Ley 27.350 · Decreto 883/2020
              </p>
            </div>

            {/* Badge REPROCANN */}
            <div className="inline-flex items-center gap-2 px-3 py-2 border border-[#F7F6EB]/15 rounded-[3px]">
              <div className="w-5 h-5 rounded-full bg-[#71CE6A] flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2D4239" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-hanken)] text-[10px] font-bold text-[#F7F6EB]/60 tracking-[0.08em] uppercase">
                REPROCANN habilitada
              </span>
            </div>
          </div>

        </div>

        {/* Pie de página */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-[family-name:var(--font-hanken)] text-[12px] text-[#F7F6EB]/25">
            © 2026 Flora ONG — Neuquén, Patagonia. El acceso está restringido a personas con REPROCANN vigente.
          </p>
          <div className="flex flex-wrap gap-6">
            {['Aviso legal', 'Privacidad', 'Estatuto'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-[family-name:var(--font-hanken)] text-[12px] text-[#F7F6EB]/25 hover:text-[#F7F6EB]/50 transition-colors duration-150"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
