// Components
import { Awards, OurClients, PullCTA, Testimonials } from "@/components"
import { Hero, Locations } from "@/components/pages/contact"

export default function Page() {
    return (
        <>
            <Hero />
            <Locations />
            <OurClients />
            <Testimonials />
            <Awards />
            <PullCTA />
        </>
    )
}