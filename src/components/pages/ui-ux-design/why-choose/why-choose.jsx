"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import stacks from "media/ui-ux-design/stacks.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"
// Components
import { Button } from "@/components"

export default function WhyChoose() {
    return (
        <section>
            <div className="pt-[100px] pb-[100px] relative z-[2]">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { opacity: { ease: "linear" } } }}
                >
                    <Image src={shade1} alt="Dream Weave Media" priority className="absolute -top-[350px] right-0 -z-[1]" />
                </motion.div>
                <div className="container">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10">
                            <span className="block text-[50px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug lg:leading-none animate-text-stroke">
                                Choose Us!
                            </span>
                            <h3 className="text-[40px] sm:text-[50px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0">
                                <span>
                                    UI/UX <span className="text-primary">Design</span> Service!
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-5 mt-10 items-center">
                        <div>
                            <BlurFade delay={0.5 * 2} inView>
                                <div className="xl:max-w-[600px] grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed mb-5">
                                    <p className="text-[18px] xl:text-[20px] leading-normal font-semibold">
                                        Design an engaging product that is easy-to-use, attractive and functional.
                                    </p>
                                    <p>
                                        You only have one chance to make a first impression, so make the right one. Our flexible and adaptable approach to UI/UX design allows us to simplify complex processes and deliver meaningful user experiences.
                                    </p>
                                </div>
                            </BlurFade>
                            <BlurFade delay={0.5 * 3} inView>
                                <ul className="text-[14px] xl:text-[16px] leading-relaxed grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                                    {
                                        ["1300+ Successful Projects", "15+ Years of Experience", "350+ Designers and Developers", "User Acquisition Modeling", "Proven Expertise in Cutting-Edge Technologies", "MVP Architecture Design"].map((e, i) => (
                                            <li key={i} className="flex items-center gap-2.5">
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.8043 0.69031C14.5442 0.263145 15.4558 0.263145 16.1957 0.69031L26.7947 6.80969C27.5346 7.23686 27.9904 8.02629 27.9904 8.88062V21.1194C27.9904 21.9737 27.5346 22.7631 26.7947 23.1903L16.1957 29.3097C15.4558 29.7369 14.5442 29.7369 13.8043 29.3097L3.20527 23.1903C2.4654 22.7631 2.00962 21.9737 2.00962 21.1194V8.88062C2.00962 8.02629 2.4654 7.23686 3.20527 6.80969L13.8043 0.69031Z" fill="#92F3F4" />
                                                    <path d="M10 16.0047L12.9953 19L20.9954 11" stroke="#1B2025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="w-[calc(100%-40px)]">{e}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </BlurFade>
                            <BlurFade delay={0.5 * 4} inView>
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
                                <Image src={stacks} alt="Dream Weave Media" className="mx-auto" />
                            </BlurFade>
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
        </section>
    )
}