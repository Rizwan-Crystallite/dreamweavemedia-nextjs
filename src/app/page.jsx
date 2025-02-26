// Components
import { CaseStudies, OurExcellence, OurWork, Services, OurClients, Testimonials, Awards, PullCTA } from "@/components"
import { Hero, OurProcess } from "@/components/pages/home"

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <OurWork />
      <OurExcellence />
      <CaseStudies />
      <OurProcess />
      <OurClients />
      <Testimonials />
      <Awards />
      <PullCTA />
    </>
  )
}