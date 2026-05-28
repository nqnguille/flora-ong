import { Hero } from "@/components/sections/Hero";
import { PorQueFlora } from "@/components/sections/PorQueFlora";
import { QueEsFlora } from "@/components/sections/QueEsFlora";
import { Memberships } from "@/components/sections/Memberships";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Trust } from "@/components/sections/Trust";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PorQueFlora />
      <QueEsFlora />
      <Memberships />
      <HowItWorks />
      <Trust />
      <ContactForm />
    </>
  );
}
