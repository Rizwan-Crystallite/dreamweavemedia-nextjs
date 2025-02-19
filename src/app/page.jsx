// Components
import { CaseStudies, OurExcellence, OurWork } from "@/components"
import { Hero, Services } from "@/components/pages/home"

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <OurWork />
      <OurExcellence />
      <CaseStudies />
    </>
  )
}