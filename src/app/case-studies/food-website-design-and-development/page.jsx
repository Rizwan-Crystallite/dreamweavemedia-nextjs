// Components
import { Awards, OurClients, PullCTA, Testimonials, TextScroll } from "@/components"
import { Element1, Element2, Elements, Hero, OurProcess, Overview } from "@/components/pages/case-studies/food-website-design-and-development"

export default function Page() {
    return (
        <>
            <Hero />
            <Overview />
            <Element1 />
            <Element2 />
            <OurProcess />
            <Elements />
            <TextScroll />
            <div className="h-[100px]"></div>
            <OurClients />
            <Testimonials />
            <Awards />
            <PullCTA />
        </>
    )
}