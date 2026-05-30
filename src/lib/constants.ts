export const WA_NUMBER = "5492994000000";
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;
export const WA_LINK = `${WA_BASE}?text=${encodeURIComponent("Hola, me interesa asociarme a Flora 🌿")}`;

export const waLink = (text: string) =>
  `${WA_BASE}?text=${encodeURIComponent(text)}`;

export const MEMBERSHIPS = [
  {
    name: "Esencial",
    grams: 10,
    priceUSD: 100,
    pricePerGram: "10",
    description: "Para quienes están empezando o tienen requerimientos moderados.",
    features: [
      "10g de flor medicinal por mes",
      "Evaluación inicial sin cargo",
      "Gestión de REPROCANN incluida",
      "Envío nacional por Andreani",
      "Perfil de cannabinoides del lote",
    ],
    featured: false,
    waText: "Hola, me interesa la Membresía Esencial de Flora 🌿",
  },
  {
    name: "Plus",
    grams: 20,
    priceUSD: 190,
    pricePerGram: "9.5",
    description: "La más elegida. Mejor relación precio-gramo y más flexibilidad.",
    features: [
      "20g de flor medicinal por mes",
      "Evaluación inicial sin cargo",
      "Gestión de REPROCANN incluida",
      "Envío nacional por Andreani",
      "Perfil de cannabinoides del lote",
      "Selección de variedad disponible",
    ],
    featured: true,
    waText: "Hola, me interesa la Membresía Plus de Flora 🌿",
  },
  {
    name: "Completa",
    grams: 40,
    priceUSD: 360,
    pricePerGram: "9",
    description: "Para tratamientos continuos o requerimientos más altos.",
    features: [
      "40g de flor medicinal por mes",
      "Evaluación inicial sin cargo",
      "Gestión de REPROCANN incluida",
      "Envío nacional por Andreani",
      "Perfil de cannabinoides del lote",
      "Selección de variedad disponible",
      "Seguimiento médico prioritario",
    ],
    featured: false,
    waText: "Hola, me interesa la Membresía Completa de Flora 🌿",
  },
];

export const FAQ = [
  {
    q: "¿Es legal acceder al cannabis a través de Flora?",
    a: "Sí, completamente. Somos una Asociación Civil inscripta que opera bajo la Ley Nacional 27.350 y el programa REPROCANN del Ministerio de Salud de la Nación. Cada socio tiene su registro individual. Podés verificar el marco legal en el sitio del Ministerio.",
  },
  {
    q: "¿Qué es el REPROCANN y cómo lo tramito?",
    a: "REPROCANN es el Registro del Programa de Cannabis del Ministerio de Salud. Es el documento que habilita legalmente tu acceso. El proceso es 100% online: completás el formulario en el sitio del Ministerio con tu diagnóstico y la firma de un médico. Nosotros te acompañamos en cada paso sin cargo adicional.",
  },
  {
    q: "¿Necesito tener REPROCANN antes de asociarme?",
    a: "No. Podés iniciar el contacto sin tenerlo. Durante la evaluación inicial revisamos tu situación y, si corresponde, te orientamos en la gestión. En muchos casos el proceso lleva menos de una semana.",
  },
  {
    q: "¿Cómo llega el pedido y qué tan discreto es?",
    a: "Despachamos por Andreani a todo el país. El packaging no tiene identificación externa de Flora ni hace referencia al contenido. Recibís número de seguimiento y cada envío incluye la documentación legal correspondiente.",
  },
  {
    q: "¿Cómo garantizan la calidad?",
    a: "Cultivamos nosotros mismos con genéticas seleccionadas por su perfil terapéutico. Cada lote tiene su perfil de cannabinoides (THC, CBD, terpenos principales). Recibís ese informe con cada entrega. No hay intermediarios ni reventas.",
  },
  {
    q: "¿Los precios son en dólares?",
    a: "El precio de referencia es en USD para mantener estabilidad frente a la inflación. El pago se coordina en pesos al tipo de cambio del día. Consultanos por los medios de pago disponibles.",
  },
  {
    q: "¿Puedo cambiar de plan o cancelar?",
    a: "Sí. No hay contratos ni permanencia mínima. Podés cambiar de membresía o pausar cuando necesités. Solo avisanos con anticipación suficiente para coordinar el siguiente ciclo.",
  },
];
