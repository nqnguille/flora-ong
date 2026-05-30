"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scale, Microscope, Stethoscope, Leaf, Package, HandHeart } from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Acceso 100% legal",
    desc: "Asociación Civil inscripta, operamos bajo Ley 27.350 con registro REPROCANN. Tu membresía está documentada.",
  },
  {
    icon: Microscope,
    title: "Trazabilidad de lote",
    desc: "Cada entrega incluye el perfil de cannabinoides del lote. Sabés exactamente qué recibís antes de recibirlo.",
  },
  {
    icon: Stethoscope,
    title: "Acompañamiento médico",
    desc: "Evaluación inicial sin cargo. Un profesional revisa tu caso y orienta tu tratamiento desde el primer contacto.",
  },
  {
    icon: Leaf,
    title: "Genéticas seleccionadas",
    desc: "Cultivamos variedades elegidas por su perfil terapéutico. No lo que hay, sino lo que funciona.",
  },
  {
    icon: Package,
    title: "Envío a todo el país",
    desc: "Despachamos por Andreani a cualquier provincia. Discreto, asegurado, con número de seguimiento.",
  },
  {
    icon: HandHeart,
    title: "Precio de comunidad",
    desc: "USD 9 a 12 por gramo. Sin intermediarios especulativos. El precio refleja el costo real del cultivo.",
  },
];

export function QueEsFlora() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="que-es" className="bg-green-dark py-24 px-5">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14"
        >
          <span className="section-tag text-green-accent mb-4 block">
            Qué es Flora
          </span>
          <h2 className="font-garamond font-bold text-white text-4xl sm:text-5xl leading-tight mb-6 max-w-2xl">
            Un club de cultivo medicinal.
            <br />
            <em className="text-green-accent">Nada más. Nada menos.</em>
          </h2>
          <p className="font-jakarta text-white/70 text-lg leading-relaxed max-w-xl">
            Somos una Asociación Civil con sede en Neuquén. Cultivamos cannabis
            medicinal para nuestros socios bajo el marco de la Ley 27.350 y el
            programa REPROCANN. Sin rodeos, sin burocracia innecesaria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: "easeOut" }}
              className="bg-white/6 border border-white/10 rounded-2xl p-6 hover:bg-green-accent/10 transition-colors group"
            >
              <div className="w-11 h-11 rounded-xl bg-green-accent/15 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-green-accent" />
              </div>
              <h3 className="font-garamond font-semibold text-white text-xl mb-2">
                {f.title}
              </h3>
              <p className="font-jakarta text-white/60 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
