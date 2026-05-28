import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Flora ONG",
  description:
    "Educación e información sobre cannabis medicinal, Ley 27.350 y acceso terapéutico. Artículos basados en evidencia.",
  openGraph: {
    title: "Blog — Flora ONG",
    description: "Educación sobre cannabis medicinal basada en evidencia.",
    url: "https://flora.ar/blog",
  },
};

// Placeholder posts — replace with MDX/CMS data
const posts = [
  {
    slug: "ley-27350-que-significa",
    title: "¿Qué es la Ley 27.350 y qué derechos te da?",
    excerpt:
      "La Ley de Investigación Médica y Científica del Uso Medicinal de la Planta de Cannabis existe desde 2017. Te explicamos qué garantiza y cómo acceder a sus beneficios.",
    date: "2025-05-15",
    category: "Legal",
    readTime: "5 min",
  },
  {
    slug: "reprocann-como-registrarse",
    title: "REPROCANN: cómo registrarse paso a paso",
    excerpt:
      "El Registro del Programa de Cannabis del Ministerio de Salud es el documento que te permite acceder legalmente al cannabis medicinal en Argentina.",
    date: "2025-05-08",
    category: "Trámites",
    readTime: "4 min",
  },
  {
    slug: "cannabinoides-thc-cbd-diferencias",
    title: "THC, CBD y otros cannabinoides: qué son y para qué sirven",
    excerpt:
      "La planta contiene más de 100 cannabinoides identificados. Cada uno tiene efectos distintos. Entender la diferencia es el primer paso para un tratamiento efectivo.",
    date: "2025-04-28",
    category: "Educación",
    readTime: "7 min",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-green-dark py-20 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-tag text-green-accent mb-5 block">
            Blog
          </span>
          <h1 className="font-garamond font-bold text-white text-5xl sm:text-6xl leading-tight mb-5">
            Cultivamos conocimiento.
          </h1>
          <p className="font-jakarta text-white/70 text-lg max-w-lg mx-auto">
            Información basada en evidencia sobre cannabis medicinal, acceso
            legal y salud. Sin mitos, sin estigma.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-5 bg-cream">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-[#e8e6d9] rounded-3xl p-8 flex flex-col sm:flex-row gap-6 hover:border-green-dark/30 hover:shadow-md transition-all"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="section-tag text-green-dark bg-green-accent/15 px-3 py-1 rounded-full text-[0.65rem]">
                      {post.category}
                    </span>
                    <span className="font-jakarta text-[#aaa] text-xs">
                      {post.readTime} de lectura
                    </span>
                  </div>
                  <h2 className="font-garamond font-semibold text-green-dark text-2xl mb-2 group-hover:text-green-dark leading-snug">
                    {post.title}
                  </h2>
                  <p className="font-jakarta text-[#6b7f74] text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between gap-2 sm:min-w-[80px]">
                  <span className="font-jakarta text-xs text-[#aaa]">
                    {new Date(post.date).toLocaleDateString("es-AR", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                  <span className="font-jakarta text-xs font-semibold text-green-dark group-hover:text-green-accent transition-colors">
                    Leer →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center font-jakarta text-sm text-[#aaa] mt-12">
            Más artículos próximamente.
          </p>
        </div>
      </section>
    </div>
  );
}
