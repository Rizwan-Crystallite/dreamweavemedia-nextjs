// Media
import one from "media/our-work/1.webp"
import two from "media/our-work/2.webp"
import three from "media/our-work/3.webp"
import four from "media/our-work/4.webp"
// Next
import Image from "next/image"
// Components
import { AutoPlaySlider, Button } from "@/components"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

const data = [
    {
        img: one,
        title: "Adidas",
        para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students."
    },
    {
        img: two,
        title: "IKEA",
        para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students."
    },
    {
        img: three,
        title: "Pizza",
        para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students."
    },
    {
        img: four,
        title: "KFC",
        para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students."
    },
    {
        img: one,
        title: "Adidas",
        para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students."
    },
    {
        img: two,
        title: "IKEA",
        para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students."
    },
    {
        img: three,
        title: "Pizza",
        para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students."
    },
    {
        img: four,
        title: "KFC",
        para: "Roommate Matching Social Platform tackles the age-old challenge of Roommate Matching for college students."
    }
]

export default function OurWork() {
    return (
        <section>
            <div className="overflow-hidden py-[100px]">
                <div className="container">
                    <div className="md:flex items-center justify-between">
                        <BlurFade delay={0.5} inView>
                            <div className="relative z-10">
                                <span className="inline-block text-[70px] sm:text-[100px] lg:text-[150px] xl:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug animate-text-stroke">
                                    Portfolio
                                </span>
                                <h3 className="text-[40px] md:text-[50px] lg:text-[60px] leading-tight font-bold sm:absolute sm:top-7 lg:top-14 xl:top-24 mb-10">
                                    Our Work
                                </h3>
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.5 * 2} inView>
                            <Button asChild variant="linkIcon2" className="mb-10 md:mb-0">
                                <div dangerouslySetInnerHTML={{
                                    __html: `<a href='javascript:;'>
                                <span>View All</span>
                                <div class='inline-flex items-center justify-center border-2 border-white rounded-full w-[40px] h-[40px]'>
                                    <img src='/right-arrow.svg' alt="Dream Weave Media" width='23' height='22' />
                                </div>
                            </a>` }} />
                            </Button>
                        </BlurFade>
                    </div>
                    <AutoPlaySlider emblaWrapper="flex [margin-left:calc(2rem_*_-1)]" wrapperClasses="overflow-visible" align="start" dots={false}>
                        {
                            data.map(({ img, title, para }, i) => (
                                <div key={i} className="grow-0 shrink-0 basis-[300px] sm:basis-[400px] pl-8 group">
                                    <div className="h-[300px] sm:h-[400px] w-[300px] sm:w-[400px] rounded-3xl overflow-hidden group-hover:rounded-full transition-all duration-300 mb-5">
                                        <Image src={img} alt="Dream Weave Media" className="w-full h-full object-cover object-center transition-all duration-300" />
                                    </div>
                                    <h3 className="text-[30px] sm:text-[40px] text-primary font-bold leading-tight mb-5" dangerouslySetInnerHTML={{ __html: title }} />
                                    <p className="text-[16px] leading-relaxed text-card-foreground transition-all duration-300 group-hover:text-white">{para}</p>
                                </div>
                            ))
                        }
                    </AutoPlaySlider>
                </div>
            </div>
        </section>
    )
}