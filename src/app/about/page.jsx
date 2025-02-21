// Components
import { Awards, Counter, OurClients, PullCTA, Testimonials, TextScroll } from "@/components"
import { Hero, MainElements, OurTeam } from "@/components/pages/about"

export default function Page() {
    return (
        <>
            <Hero />
            <MainElements />
            <Counter />
            <TextScroll />
            <OurTeam />
            <OurClients />
            <Testimonials />
            <Awards />
            <PullCTA />
        </>
    )
}