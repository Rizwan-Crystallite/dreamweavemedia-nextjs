// Components
import { Button } from "@/components"
// Media
import bg from "media/about/hero-bg.webp"
import laptop from "media/case-studies/food-website-design-and-development/hero.webp"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"
// Next 
import Link from "next/link"


export default function Hero() {
    return (
        <section>
            <div className="bg-black md:pb-[100px] 2xl:pb-[150px] pt-[150px] md:pt-[200px] 2xl:pt-[250px] relative z-[3]">
                <Image src={bg} alt="Dream Weave Media" fill priority className="object-cover object-center z-[-1]" />
                <div className="container relative z-[2]">
                    <div className="max-w-[700px]">
                        <BlurFade delay={0.5} inView>
                            <Link href="/case-studies" className="bg-primary py-1 px-3 mb-5 inline-block text-accent rounded-full">
                                Case Studies
                            </Link>
                        </BlurFade>
                        <BlurFade delay={0.5 * 2} inView>
                            <h1 className="text-[28px] sm:text-[40px] md:text-[50px] lg:text-[58px] font-bold leading-snug sm:leading-tight mb-10">
                                Food Website <br /> <span className="text-primary">Design</span> & <span className="text-primary">Development</span>.
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.5 * 3} inView>
                            <Button asChild variant="linkIcon2">
                                <div dangerouslySetInnerHTML={{
                                    __html: `<a href='javascript:;'>
                                    <span>Let’s Discuss</span>
                                    <div class='inline-flex items-center justify-center border-2 border-white rounded-full w-[40px] h-[40px]'>
                                        <img src='/right-arrow.svg' alt="Dream Weave Media" width='23' height='22' />
                                    </div>
                                </a>` }} />
                            </Button>
                        </BlurFade>
                    </div>
                </div>
                <Image src={laptop} alt="Dream Weave Media" priority className="md:absolute md:z-[-1] container md:object-contain md:h-[400px] 2xl:h-[550px] md:object-right-bottom md:right-0 md:left-0 md:bottom-0" />
            </div>
        </section>
    )
}