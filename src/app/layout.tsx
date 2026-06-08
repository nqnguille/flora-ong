import type { Metadata } from 'next'
import { Hanken_Grotesk, EB_Garamond } from 'next/font/google'
import './globals.css'

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hanken',
  weight: ['400', '500', '600', '700'],
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-garamond',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://flora.ar'),
  title: 'Flora ONG — Club de cultivo medicinal en Argentina',
  description:
    'Primera ONG de cannabis medicinal de Neuquén. Accedé a cannabis de calidad documentada dentro del marco legal REPROCANN. Envío a todo el país.',
  keywords: [
    'cannabis medicinal Argentina',
    'REPROCANN',
    'club de cultivo',
    'Flora ONG',
    'cannabis legal Argentina',
    'Neuquén cannabis medicinal',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://flora.ar',
    siteName: 'Flora ONG',
    title: 'Flora ONG — Club de cultivo medicinal en Argentina',
    description:
      'Cannabis de calidad documentada dentro del marco legal REPROCANN. Envío a todo el país.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flora ONG — Cultivamos conciencia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flora ONG — Club de cultivo medicinal en Argentina',
    description:
      'Cannabis de calidad documentada dentro del marco legal REPROCANN. Envío a todo el país.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://flora.ar',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${hankenGrotesk.variable} ${ebGaramond.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['Organization', 'NGO'],
              name: 'Flora ONG',
              description:
                'Club de cultivo de cannabis medicinal bajo el marco legal REPROCANN. Primera ONG de cannabis medicinal de Neuquén.',
              url: 'https://flora.ar',
              email: 'hola@floraong.org',
              areaServed: 'AR',
              location: {
                '@type': 'Place',
                name: 'Neuquén, Patagonia, Argentina',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                availableLanguage: 'Spanish',
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#F7F6EB] text-[#2D4239] antialiased">
        {children}
      </body>
    </html>
  )
}
