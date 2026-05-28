export const WA_NUMBER = "5492994000000";
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;
export const WA_LINK = `${WA_BASE}?text=${encodeURIComponent("Hola, me interesa saber más sobre Flora ONG 🌿")}`;

export const waLink = (text: string) =>
  `${WA_BASE}?text=${encodeURIComponent(text)}`;

export const MEMBERSHIPS = [
  {
    name: "Esencial",
    grams: 10,
    priceUSD: 100,
    pricePerGram: "10",
    description: "Para quienes empiezan o tienen requerimientos moderados.",
    features: [
      "10g de flor medicinal por mes",
      "Evaluación médica gratuita",
      "Gestión REPROCANN incluida",
      "Envío nacional por Andreani",
      "Informe de trazabilidad del lote",
    ],
    featured: false,
    waText: "Hola, me interesa la Membresía Esencial de Flora ONG 🌿",
  },
  {
    name: "Plus",
    grams: 20,
    priceUSD: 190,
    pricePerGram: "9.5",
    description: "La más elegida. Mejor precio por gramo y más opciones.",
    features: [
      "20g de flor medicinal por mes",
      "Evaluación médica gratuita",
      "Gestión REPROCANN incluida",
      "Envío nacional por Andreani",
      "Informe de trazabilidad del lote",
      "Selección de variedad disponible",
    ],
    featured: true,
    waText: "Hola, me interesa la Membresía Plus de Flora ONG 🌿",
  },
  {
    name: "Completa",
    grams: 40,
    priceUSD: 360,
    pricePerGram: "9",
    description: "Para tratamientos continuos o requerimientos altos.",
    features: [
      "40g de flor medicinal por mes",
      "Evaluación médica gratuita",
      "Gestión REPROCANN incluida",
      "Envío nacional por Andreani",
      "Informe de trazabilidad del lote",
      "Selección de variedad disponible",
      "Seguimiento médico prioritario",
    ],
    featured: false,
    waText: "Hola, me interesa la Membresía Completa de Flora ONG 🌿",
  },
];

export const FAQ = [
  {
    q: "¿Es legal acceder al cannabis medicinal a través de Flora?",
    a: "Sí. Operamos bajo el marco de la Ley Nacional 27.350 y el registro REPROCANN del Ministerio de Salud de la Nación. Todo el proceso es legal, documentado y acompañado por profesionales médicos habilitados.",
  },
  {
    q: "¿Necesito tener REPROCANN para asociarme?",
    a: "No es obligatorio para iniciar el proceso. Nuestro equipo médico evalúa tu caso y, si corresponde, te acompaña en la gestión del REPROCANN sin costo adicional.",
  },
  {
    q: "¿Cómo funciona el envío?",
    a: "Realizamos envíos a todo el país a través de Andreani, de forma discreta y segura. Cada paquete incluye el informe de trazabilidad del lote correspondiente.",
  },
  {
    q: "¿Los precios están en dólares?",
    a: "El precio de referencia es en USD para mantener estabilidad, pero coordinamos el pago en pesos al tipo de cambio al momento de la transacción. Consultá con nuestro equipo para los medios de pago disponibles.",
  },
  {
    q: "¿Cómo sé que la calidad es buena?",
    a: "Trabajamos con genéticas seleccionadas por su perfil terapéutico. Cada lote tiene trazabilidad completa: sabés exactamente qué concentración de cannabinoides tiene lo que recibís.",
  },
  {
    q: "¿Puedo cambiar de membresía?",
    a: "Sí, podés cambiar tu membresía en cualquier momento. Hablá con nuestro equipo y lo coordinamos sin problemas.",
  },
];
