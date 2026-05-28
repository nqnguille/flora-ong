import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: { slug: string };
}

// Scaffold — replace with MDX/CMS when content is ready
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug.replace(/-/g, " ")} | Blog Flora ONG`,
    description: "Artículo educativo sobre cannabis medicinal — Flora ONG.",
  };
}

export default function BlogPostPage({ params }: Props) {
  return (
    <div className="pt-16">
      <section className="bg-green-dark py-14 px-5">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white font-jakarta text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Volver al blog
          </Link>
          <span className="section-tag text-green-accent mb-4 block">
            Artículo
          </span>
          <h1 className="font-garamond font-bold text-white text-4xl sm:text-5xl leading-tight">
            {params.slug.replace(/-/g, " ")}
          </h1>
        </div>
      </section>

      <section className="py-16 px-5 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e8e6d9]">
            <p className="font-jakarta text-[#6b7f74] text-base leading-relaxed mb-6">
              Este artículo está en preparación. Próximamente vas a encontrar
              contenido educativo sobre cannabis medicinal, acceso legal y salud,
              basado en evidencia científica.
            </p>
            <Link
              href="/blog"
              className="font-jakarta text-sm font-semibold text-green-dark underline underline-offset-4 hover:text-green-accent transition-colors"
            >
              ← Ver todos los artículos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "ley-27350-que-significa" },
    { slug: "reprocann-como-registrarse" },
    { slug: "cannabinoides-thc-cbd-diferencias" },
  ];
}
