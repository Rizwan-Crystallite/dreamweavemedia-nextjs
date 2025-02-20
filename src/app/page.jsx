// Components
import { CaseStudies, OurExcellence, OurWork, Services, OurProcess, OurClients, Testimonials, Awards, PullCTA } from "@/components"
import { Hero } from "@/components/pages/home"

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