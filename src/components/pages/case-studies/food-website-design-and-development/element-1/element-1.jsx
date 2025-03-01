// Next
import Image from "next/image"
// Media
import tech from "media/case-studies/food-website-design-and-development/tech-used.webp"
import laptop from "media/case-studies/food-website-design-and-development/element-1.webp"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function Element1() {
    return (
        <section>
            <div className="relative z-[3] sm:pt-[50px] pb-[100px]">
                <div className="container">
                    <div className="lg:max-w-[450px] mb-10 lg:mb-0">
                        <BlurFade delay={0.5} inView>
                            <h2 className="text-[35px] sm:text-[50px] leading-tight font-bold">
                                Tech <span className="text-primary">Used</span>!
                            </h2>
                        </BlurFade>
                        <BlurFade delay={0.5 * 2} inView>
                            <Image src={tech} alt="Dream Weave Media" className="my-10" />
                        </BlurFade>
                        <BlurFade delay={0.5 * 3} inView>
                            <h2 className="text-[35px] sm:text-[50px] leading-tight font-bold mb-5">
                                About The <span className="text-primary">Client</span>!
                            </h2>
                        </BlurFade>
                        <BlurFade delay={0.5 * 4} inView>
                            <p className="text-[16px] leading-relaxed">
                                <strong>For over a decade, Jacquelle Amankonah Horton has been dedicated to innovating within the music industry, launching award-winning music and entertainment apps.</strong>
                            </p>
                        </BlurFade>
                    </div>
                </div>
                <Image src={laptop} alt="Dream Weave Media" className="lg:absolute lg:top-[155px] xl:top-[50px] 2xl:top-[30px] lg:right-0 lg:max-w-[620px] xl:max-w-[750px] 2xl:max-w-[850px]" />
            </div>
        </section>
    )
}
