// Flora ONG — Constants
// Todo el copy, datos y configuración centralizados acá.
// Para actualizar copy o datos: solo modificar este archivo.

export const WHATSAPP_NUMBER = '5492996375723'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const EMAIL = 'hola@floraong.org'
export const INSTAGRAM = 'https://instagram.com/floraong'
export const DOMINIO = 'flora.ar'

export const WA_MESSAGES = {
  general: `Hola Flora, quiero información para asociarme.`,
  small: `Hola Flora, me interesa la membresía Small (10g/mes). ¿Cómo me asocio?`,
  medium: `Hola Flora, me interesa la membresía Medium (20g/mes). ¿Cómo me asocio?`,
  large: `Hola Flora, me interesa la membresía Large (30g/mes). ¿Cómo me asocio?`,
  xlarge: `Hola Flora, me interesa la membresía Extra Large (40g/mes). ¿Cómo me asocio?`,
  legalidad: `Hola Flora, tengo dudas sobre el marco legal. ¿Me pueden explicar?`,
}

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

// Stats del hero — actualizar cuando cambien
export const STATS = [
  { value: '200+', label: 'Asociados activos' },
  { value: 'Todo el país', label: 'Envío gratis' },
  { value: '2 años', label: 'Cultivando juntos' },
  { value: '100%', label: 'Marco legal REPROCANN' },
]

// Pasos de Cómo funciona
export const PASOS = [
  {
    numero: '01',
    titulo: 'Tramitás tu REPROCANN',
    descripcion: 'Si no tenés, te explicamos el proceso paso a paso. Si ya lo tenés, arrancamos hoy.',
  },
  {
    numero: '02',
    titulo: 'Elegís tu membresía',
    descripcion: 'Tres opciones de acceso mensual. Sin contratos largos, sin letra chica.',
  },
  {
    numero: '03',
    titulo: 'Accedés a tu parte del cultivo',
    descripcion: 'Cannabis de variedad documentada, calidad verificada. Enviamos a todo el país.',
  },
]

// Valores de Por qué Flora
export const VALORES = [
  {
    titulo: 'Documentado',
    descripcion: 'Cada variedad tiene nombre, porcentaje de cannabinoides y efecto esperado. Sin sorpresas.',
  },
  {
    titulo: 'Legal',
    descripcion: 'Operamos bajo REPROCANN. Vos sos asociado, no comprador. El marco jurídico te protege.',
  },
  {
    titulo: 'Calidad verificada',
    descripcion: 'Cultivo controlado, sin pesticidas, análisis de laboratorio disponibles a pedido.',
  },
  {
    titulo: 'Acompañamiento',
    descripcion: 'Equipo disponible por WhatsApp. Preguntas respondidas, sin juicio, sin apuro.',
  },
  {
    titulo: 'Comunidad',
    descripcion: 'Más de 200 personas en todo el país que eligieron esta vía. No estás solo.',
  },
]

// Membresías — sin precios (D2 resuelta)
export const MEMBRESIAS = [
  {
    nombre: 'Small',
    acceso: '10g',
    unidad: 'por mes',
    descripcion: 'El punto de entrada. Ideal para empezar, conocer el proceso y evaluar si Flora es para vos.',
    badge: null,
    waMessage: WA_MESSAGES.small,
    destacada: false,
  },
  {
    nombre: 'Medium',
    acceso: '20g',
    unidad: 'por mes',
    descripcion: 'La opción más elegida. Acceso regular con variedad garantizada para uso continuo.',
    badge: 'El más elegido',
    waMessage: WA_MESSAGES.medium,
    destacada: true,
  },
  {
    nombre: 'Large',
    acceso: '30g',
    unidad: 'por mes',
    descripcion: 'Para quienes ya saben lo que necesitan. Mayor volumen, misma calidad documentada.',
    badge: null,
    waMessage: WA_MESSAGES.large,
    destacada: false,
  },
  {
    nombre: 'Extra Large',
    acceso: '40g',
    unidad: 'por mes',
    descripcion: 'Máxima flexibilidad para uso intensivo o variedad de cepas en el mismo mes.',
    badge: null,
    waMessage: WA_MESSAGES.xlarge,
    destacada: false,
  },
]

// Artículos de Educación
export const ARTICULOS = [
  {
    titulo: 'Los mitos sobre el cannabis medicinal que frenan tu tratamiento',
    fecha: 'Marzo 2026',
    lectura: '6 min de lectura',
    imagen: 'https://images.pexels.com/photos/5702279/pexels-photo-5702279.jpeg?auto=compress&cs=tinysrgb&w=800',
    destacado: true,
  },
  {
    titulo: 'Guía completa para tramitar el REPROCANN',
    fecha: 'Enero 2026',
    lectura: '4 min de lectura',
    imagen: null,
    destacado: false,
  },
  {
    titulo: 'Índica vs Sativa: cómo elegir según tus objetivos terapéuticos',
    fecha: 'Febrero 2026',
    lectura: '5 min de lectura',
    imagen: null,
    destacado: false,
  },
]

// Afirmaciones legales
export const LEGAL_ITEMS = [
  'Ley 27.350 de cannabis medicinal vigente en Argentina',
  'Asociados con REPROCANN válido solamente',
  'Sin compraventa — acceso como socio del club',
  'Supervisión constante del marco regulatorio',
]

// Pexels image URLs (reemplazables por fotos reales post-MVP)
export const IMAGES = {
  hero: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1400',
  comunidad: 'https://images.pexels.com/photos/7195110/pexels-photo-7195110.jpeg?auto=compress&cs=tinysrgb&w=1200',
  legalidad: 'https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=800',
}
