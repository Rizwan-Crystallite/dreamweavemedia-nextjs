"use client"
// Media
import one from "media/case-studies/latest/1.webp"
import two from "media/case-studies/latest/2.webp"
import three from "media/case-studies/latest/3.webp"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"
// Components
import { Button } from "@/components"
// UI
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

const data = [
    {
        title: "Visix",
        img: one,
        tags: ["Entertainment", "Fintech", "Web", "Custom"],
        para: "Choros is an app-less space-booking software utilizing WebAR and QR codes."
    },
    {
        title: "Synapse",
        img: two,
        tags: ["Entertainment", "Fintech", "Web", "Custom"],
        para: "Choros is an app-less space-booking software utilizing WebAR and QR codes."
    },
    {
        title: "Ovvio",
        img: three,
        tags: ["Entertainment", "Fintech", "Web", "Custom"],
        para: "Choros is an app-less space-booking software utilizing WebAR and QR codes."
    }
]

export default function Latest() {
    return (
        <section>
            <div className="sm:py-[50px] relative z-[2]">
                <div className="container">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10">
                            <span className="block text-[40px] sm:text-[70px] md:text-[100px] lg:text-[130px] xl:text-[160px] 2xl:text-[180px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug lg:leading-none animate-text-stroke">
                                Case Studies!
                            </span>
                            <h3 className="text-[40px] sm:text-[50px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0">
                                <span>
                                    Latest <span className="text-primary">Case Studies</span>!
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 mt-10">
                        {
                            data.map(({ title, para, img, tags }, i) => (
                                <CardContainer key={i} className="relative group/card bg-card rounded-2xl py-10 px-4 lg:px-6 hover:bg-popover transition-all duration-300 group-hover/card:bg-blend-color group-hover/card:shadow-[0px_10px_10px_rgba(0,_0,_0,_0.1)] group-hover/card:backdrop-blur-[2px] border-2 hover:border-primary border-transparent">
                                    <CardBody>
                                        <CardItem
                                            translateZ="50"
                                            className="text-[30px] lg:text-[40px] text-primary font-bold leading-tight mb-5"
                                        >
                                            <h3 dangerouslySetInnerHTML={{ __html: title }} />
                                        </CardItem>
                                        <CardItem
                                            translateZ="50"
                                            className="rounded-2xl overflow-hidden"
                                        >
                                            <Image src={img} alt="Dream Weave Media" className="w-full" />
                                        </CardItem>
                                        <CardItem
                                            as="p"
                                            translateZ="60"
                                            className="text-[16px] leading-relaxed text-card-foreground transition-all duration-300 group-hover/card:text-white mb-5 mt-8"
                                        >
                                            {para}
                                        </CardItem>
                                        <CardItem
                                            translateZ={20}
                                            as="button"
                                        >
                                            <Button asChild className="text-card-foreground group-hover/card:text-white" variant="linkIcon2">
                                                <div dangerouslySetInnerHTML={{
                                                    __html: `<a href='javascript:;'>
                                                        <span>Learn More</span>
                                                        <div class='inline-flex items-center justify-center border-2 border-white rounded-full w-[40px] h-[40px]'>
                                                            <img src='/right-arrow.svg' alt="Dream Weave Media" width='23' height='22' />
                                                        </div>
                                                    </a>` }} />
                                            </Button>
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}