"use client"
// Media
import one from "media/about/main-elements/1.webp"
import two from "media/about/main-elements/2.webp"
import three from "media/about/main-elements/3.webp"
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
// Components
import { Button } from "@/components"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"
// Framer
import { motion } from "framer-motion"

export default function MainElements() {
    return (
        <section>
            <div className="py-[100px] relative z-[1]">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { opacity: { ease: "linear" } } }}
                >
                    <Image src={shade1} alt="Dream Weave Media" priority className="absolute -top-[350px] right-0 -z-[1]" />
                </motion.div>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 items-center relative z-[1]">
                        <div>
                            <BlurFade delay={0.5} inView>
                                <h2 className="text-[50px] xl:text-[60px] leading-tight font-bold mb-5">
                                    Our <span className="text-primary">Mission</span>!
                                </h2>
                            </BlurFade>
                            <BlurFade delay={0.5 * 2} inView>
                                <div className="max-w-[630px] grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed mb-5">
                                    <p className="text-[18px] xl:text-[20px] leading-normal font-semibold">
                                        To be forever curious and impactful in revolutionizing technology for our partner
                                    </p>
                                    <p>
                                        We aspire to create and deliver the best digital solutions for businesses wanting to acquire a competitive edge in the industry and serve their customers through robust digital channels.
                                    </p>
                                    <p>
                                        Dream Weave Media aims to help startups and organizations recognize their potential and leverage optimum, highly customized solutions for business growth and ROI.
                                    </p>
                                </div>
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
                        <div>
                            <BlurFade delay={0.5 * 4} inView>
                                <Image src={one} alt="Dream Weave Media" className="mx-auto" />
                            </BlurFade>
                        </div>
                    </div>
                </div>
                <div className="relative z-[1]">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 items-center pt-[50px] pb-[100px]">
                            <div>
                                <BlurFade delay={0.5 * 4} inView>
                                    <Image src={two} alt="Dream Weave Media" className="mx-auto" />
                                </BlurFade>
                            </div>
                            <div className="order-first lg:order-last">
                                <div className="max-w-[630px] lg:ml-auto">
                                    <BlurFade delay={0.5} inView>
                                        <h2 className="text-[50px] xl:text-[60px] leading-tight font-bold mb-5">
                                            Our <span className="text-primary">Vision</span>!
                                        </h2>
                                    </BlurFade>
                                    <BlurFade delay={0.5 * 2} inView>
                                        <div className="grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed mb-5">
                                            <p className="text-[18px] xl:text-[20px] leading-normal font-semibold">
                                                Transforming the world through technologies that disrupt
                                            </p>
                                            <p>
                                                We aim to extend the scope of current technologies into societal issues and deliver back to the community for the greater good.
                                            </p>
                                            <p>
                                                Our vision is to help 20 million lives with better education and employment opportunities, acquire ten active ventures, scale five businesses to exit, get listed to Nasdaq, become the most preferred workplace in Pakistan, and enter the Fortune 500 club in the next five years.
                                            </p>
                                        </div>
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
                        </div>
                    </div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { opacity: { ease: "linear" } } }}
                    >
                        <Image src={shade2} alt="Dream Weave Media" className="absolute -bottom-[350px] left-0 -z-[1]" />
                    </motion.div>
                </div>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 items-center">
                        <div>
                            <BlurFade delay={0.5} inView>
                                <h2 className="text-[50px] xl:text-[60px] leading-tight font-bold mb-5">
                                    Our <span className="text-primary">Values</span>!
                                </h2>
                            </BlurFade>
                            <BlurFade delay={0.5 * 2} inView>
                                <div className="grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed mb-5">
                                    <p>
                                        <span className="block mb-1 text-[18px] xl:text-[20px] leading-tight font-bold text-primary">Curiosity</span>
                                        We encourage our team members to question the norm and explore innovative solutions to problems.
                                    </p>
                                    <p>
                                        <span className="block mb-1 text-[18px] xl:text-[20px] leading-tight font-bold text-primary">Honesty</span>
                                        We value integrity and ethical behavior in all our interactions, both internally and externally.
                                    </p>
                                    <p>
                                        <span className="block mb-1 text-[18px] xl:text-[20px] leading-tight font-bold text-primary">Positivity</span>
                                        We value the power of positivity and believe that it leads to higher roductivity, creativity, and job satisfaction.
                                    </p>
                                    <p>
                                        <span className="block mb-1 text-[18px] xl:text-[20px] leading-tight font-bold text-primary">Impact</span>
                                        We strive to make a meaningful impact in everything we do at Dream Weave Media.
                                    </p>
                                    <p>
                                        <span className="block mb-1 text-[18px] xl:text-[20px] leading-tight font-bold text-primary">Disruption</span>
                                        We believe that disruptive innovation is the key to solving complex problems and creating new opportunities.
                                    </p>
                                </div>
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
                        <div>
                            <BlurFade delay={0.5 * 4} inView>
                                <Image src={three} alt="Dream Weave Media" className="mx-auto" />
                            </BlurFade>
                        </div>
                    </div>
                </div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { opacity: { ease: "linear" } } }}
                >
                    <Image src={shade1} alt="Dream Weave Media" className="absolute -bottom-[350px] right-0 -z-[1]" />
                </motion.div>
            </div>
        </section>
    )
}