// Components
import { Button, FrontEndForm } from "@/components"
// Media
import bg from "media/contact/hero-bg.webp"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function Hero() {
    return (
        <section>
            <div className="bg-black pt-[150px] pb-[70px] xl:pt-[200px] relative">
                <Image src={bg} alt="Dream Weave Media" fill priority className="object-cover object-center z-[1]" />
                <div className="container relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
                        <div>
                            <BlurFade delay={0.5} inView>
                                <h1 className="text-[40px] sm:text-[65px] lg:text-[60px] xl:text-[70px] 2xl:text-[75px] font-bold leading-snug sm:leading-tight mb-3">
                                    <span className="text-primary">Kickstart</span> Your Digital Journey <span className="text-primary">Today</span>!
                                </h1>
                            </BlurFade>
                            <BlurFade delay={0.5 * 2} inView>
                                <p className="text-[16px] leading-relaxed mb-5">
                                    We’d love to learn more about you and what we can design and build together.
                                </p>
                            </BlurFade>
                            <BlurFade delay={0.5 * 4} className="flex flex-col sm:flex-row sm:items-center sm:gap-5" inView>
                                <Button asChild variant="linkIcon">
                                    <div dangerouslySetInnerHTML={{
                                        __html: `<a href='tel:0001234567'>
                                        <img src='/primary-c-phone.svg' alt="Dream Weave Media" width='25' height='24' />
                                        <span>000 123 4567</span>
                                    </a>` }} />
                                </Button>
                                <Button asChild variant="linkIcon">
                                    <div dangerouslySetInnerHTML={{
                                        __html: `<a href='mailto:abcd@DreamWeaveMedia.com'>
                                        <img src='/primary-c-phone.svg' alt="Dream Weave Media" width='25' height='24' />
                                        <span>abcd@DreamWeaveMedia.com</span>
                                    </a>` }} />
                                </Button>
                            </BlurFade>
                        </div>
                        <div className="relative">
                            <div className="bg-popover py-12 px-4 sm:px-8 rounded-2xl border-2 border-primary lg:absolute lg:right-0 lg:left-0 mx-auto lg:top-0 mt-10 lg:mt-0 max-w-[500px]">
                                <h3 className="text-[30px] sm:text-[40px] font-bold leading-tight text-primary mb-10 text-center">
                                    Request A Proposal
                                </h3>
                                <FrontEndForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}