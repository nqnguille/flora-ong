'use client'

// Tracking de floraong → dashboard central gates-analytics (sin gate).
// Mide: 'view' (visita de página) y 'click' (clics en CTAs marcados con data-cta="etiqueta").
// Para medir un botón/link, agregale el atributo: <a data-cta="Sumate hero"> ... </a>
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const ENDPOINT = 'https://gates-analytics.nqnguille.workers.dev/event'
const PROJECT = 'flora-ong'

function gid(prefix: 'visitor' | 'session') {
  try {
    const store = prefix === 'visitor' ? localStorage : sessionStorage
    const k = `floraong_${prefix}_id`
    let v = store.getItem(k)
    if (!v) {
      v = `${prefix}-` + (crypto.randomUUID ? crypto.randomUUID() : Date.now() + '-' + Math.random().toString(16).slice(2))
      store.setItem(k, v)
    }
    return v
  } catch {
    return `${prefix}-unknown`
  }
}

function send(event: 'view' | 'click', key?: string) {
  try {
    const body = JSON.stringify({
      project: PROJECT,
      gate: 'sitio',
      event,
      key: key || '',
      visitor_id: gid('visitor'),
      session_id: gid('session'),
      path: location.pathname,
      lang: document.documentElement.lang || 'es',
    })
    if (navigator.sendBeacon) navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }))
    else fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true })
  } catch {
    /* nunca romper la página por analytics */
  }
}

export function FloraTrack() {
  const pathname = usePathname()

  // Una vista por página (también en navegaciones client-side), deduplicada por sesión+path.
  useEffect(() => {
    try {
      const vk = 'floraong_view_' + pathname
      if (sessionStorage.getItem(vk) === '1') return
      sessionStorage.setItem(vk, '1')
    } catch {}
    send('view')
  }, [pathname])

  // Clics en CTAs: cualquier elemento con data-cta (o dentro de uno).
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const t = e.target as HTMLElement | null
      const el = t && t.closest ? (t.closest('[data-cta]') as HTMLElement | null) : null
      if (!el) return
      const label = el.getAttribute('data-cta') || (el.textContent || '').trim().slice(0, 40) || 'cta'
      send('click', label)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
