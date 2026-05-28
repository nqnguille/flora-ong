"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Scale, ClipboardList, Newspaper } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Socios activos" },
  { icon: Scale, value: "Ley 27.350", label: "Marco legal nacional" },
  { icon: ClipboardList, value: "REPROCANN", label: "Registro oficial" },
  { icon: Newspaper, value: "Revista Mate", label: "Aval editorial" },
];

export function Trust() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="aval" className="bg-cream py-24 px-5">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag text-green-dark mb-4 block">
            Respaldo y confianza
          </span>
          <h2 className="font-garamond font-bold text-green-dark text-4xl sm:text-5xl mb-4">
            No somos una startup.
            <br />
            <em>Somos una comunidad.</em>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#e8e6d9]"
            >
              <s.icon size={24} className="text-green-dark/40 mx-auto mb-3" />
              <p className="font-garamond font-bold text-green-dark text-xl mb-1">
                {s.value}
              </p>
              <p className="font-jakarta text-[#6b7f74] text-xs">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Legal framework banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="bg-green-dark rounded-3xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <span className="section-tag text-green-accent mb-3 block">
                Marco Legal
              </span>
              <h3 className="font-garamond font-bold text-white text-3xl mb-4">
                Respaldados por ley.
              </h3>
              <p className="font-jakarta text-white/70 leading-relaxed">
                La Ley Nacional 27.350 garantiza el derecho al acceso al
                cannabis medicinal. REPROCANN es el registro oficial del
                Ministerio de Salud de la Nación que habilita a pacientes y
                organizaciones a acceder a cannabis medicinal de forma legal.
                Flora opera dentro de este marco con total transparencia.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:min-w-52">
              {["Ley 27.350", "REPROCANN", "Ministerio de Salud", "Acompañamiento médico"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 bg-white/8 border border-white/10 rounded-xl px-4 py-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-accent flex-shrink-0" />
                    <span className="font-jakarta text-white/80 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* Logos row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-12 opacity-60"
        >
          {["Revista Mate", "Ley 27.350", "REPROCANN", "flora.ar"].map(
            (name, i) => (
              <div key={name} className="flex flex-col items-center gap-1">
                <span className="font-garamond font-semibold text-green-dark text-base">
                  {name}
                </span>
                <span className="section-tag text-[#8a9e95] text-[0.65rem]">
                  {["Aval editorial", "Marco legal", "Registro oficial", "Dominio oficial"][i]}
                </span>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
