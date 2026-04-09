import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ImpactNumbers from "@/components/ImpactNumbers"
import InstructorsSection from "@/components/InstructorsSection"
import ImplementationSection from "@/components/ImplementationSection"
import CommunitySection from "@/components/CommunitySection"
import ViralAgentSection from "@/components/ViralAgentSection"
import GptAgentSection from "@/components/GptAgentSection"
// import TechSection from "@/components/TechSection" // removida temporariamente
import NivelacionSection from "@/components/NivelacionSection"

import BonusSection from "@/components/BonusSection"
import PricingSection from "@/components/PricingSection"
import GuaranteeSection from "@/components/GuaranteeSection"
import CertificateSection from "@/components/CertificateSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FaqSection from "@/components/FaqSection"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ImpactNumbers />
      <InstructorsSection />
      <ImplementationSection />
      <CommunitySection />
      <ViralAgentSection />
      <GptAgentSection />
      {/* <TechSection /> removida temporariamente */}
      <NivelacionSection />

      <BonusSection />
      <PricingSection />
      <GuaranteeSection />
      <CertificateSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  )
}

export default Index
