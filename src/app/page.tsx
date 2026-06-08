import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import ComoFunciona from '@/components/sections/ComoFunciona'
import PorQueFlora from '@/components/sections/PorQueFlora'
import Membresias from '@/components/sections/Membresias'
import Comunidad from '@/components/sections/Comunidad'
import Podcast from '@/components/sections/Podcast'
import Educacion from '@/components/sections/Educacion'
import Legalidad from '@/components/sections/Legalidad'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ComoFunciona />
        <PorQueFlora />
        <Membresias />
        <Comunidad />
        <Podcast />
        <Educacion />
        <Legalidad />
      </main>
      <Footer />
    </>
  )
}
