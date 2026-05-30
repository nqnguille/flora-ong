import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Flora ONG",
  description:
    "Terpenos, guía REPROCANN, uso responsable. Información directa sobre cannabis medicinal para quienes ya decidieron.",
  openGraph: {
    title: "Blog — Flora ONG",
    description: "Cannabis medicinal sin rodeos. Para quienes ya decidieron.",
    url: "https://flora.ar/blog",
  },
};

const posts = [
  {
    slug: "terpenos-que-son-y-por-que-importan",
    title: "Terpenos: qué son y por qué determinan tu experiencia tanto como los cannabinoides",
    excerpt:
      "El aroma de una variedad no es marketing. Los terpenos modulan los efectos del THC y el CBD de formas concretas. Entender esto cambia cómo elegís tu genética.",
    date: "2026-05-20",
    category: "Ciencia",
    readTime: "6 min",
  },
  {
    slug: "reprocann-guia-completa-2026",
    title: "Cómo tramitar el REPROCANN en 2026: guía paso a paso",
    excerpt:
      "El proceso es online, gratuito y más rápido de lo que pensás. Acá está todo lo que necesitás saber: quién puede solicitarlo, qué documentación necesitás y cuánto tarda.",
    date: "2026-05-10",
    category: "Trámites",
    readTime: "5 min",
  },
  {
    slug: "uso-responsable-cannabis-medicinal",
    title: "Uso responsable del cannabis medicinal: lo que nadie te explica",
    excerpt:
      "Titulación, consistencia y registro. Tres prácticas simples que hacen la diferencia entre un tratamiento efectivo y uno que funciona a medias. Sin sermones.",
    date: "2026-04-28",
    category: "Práctica",
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
            Para quienes ya decidieron.
          </h1>
          <p className="font-jakarta text-white/70 text-lg max-w-lg mx-auto">
            Sin evangelizar, sin explicar lo básico. Información concreta sobre
            cannabis medicinal para adultos que ya saben lo que buscan.
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
                  <h2 className="font-garamond font-semibold text-green-dark text-2xl mb-2 leading-snug">
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
