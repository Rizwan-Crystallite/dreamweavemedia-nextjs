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
                                    We stay curious and focused on building tech that makes a difference.
                                    </p>
                                    <p>
                                    Our mission is to create easy-to-use digital tools that help businesses grow, connect with their customers, and stay ahead of the curve.
                                    </p>
                                    <p>
                                    At Dream Weave Media, we work closely with startups and organizations to unlock their full potential through flexible, high-impact solutions.
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
                                            Shaping the future through smart, practical tech.
                                            </p>
                                            <p>
                                                We believe technology can solve real problems. That’s why we aim to:
                                            </p>
                                        </div>
                                    </BlurFade>
                                    <BlurFade delay={0.5 * 3} inView>
                            <ul className="text-[14px] md:text-[16px] leading-relaxed grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 max-w-[580px]">
                                {
                                    ["Improve lives through education and job access", "Build and grow standout businesses", "Reach top platforms", "Join the Fortune 500"].map((e, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <div className="shrink-0">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.8043 0.69031C14.5442 0.263145 15.4558 0.263145 16.1957 0.69031L26.7947 6.80969C27.5346 7.23686 27.9904 8.02629 27.9904 8.88062V21.1194C27.9904 21.9737 27.5346 22.7631 26.7947 23.1903L16.1957 29.3097C15.4558 29.7369 14.5442 29.7369 13.8043 29.3097L3.20527 23.1903C2.4654 22.7631 2.00962 21.9737 2.00962 21.1194V8.88062C2.00962 8.02629 2.4654 7.23686 3.20527 6.80969L13.8043 0.69031Z" fill="#92F3F4" />
                                                <path d="M10 16.0047L12.9953 19L20.9954 11" stroke="#1B2025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            </div>
                                            <span>{e}</span>
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
                                        We love asking “what if” and exploring better ways to do things.
                                    </p>
                                    <p>
                                        <span className="block mb-1 text-[18px] xl:text-[20px] leading-tight font-bold text-primary">Honesty</span>
                                        We work with transparency and respect, always.
                                    </p>
                                    <p>
                                        <span className="block mb-1 text-[18px] xl:text-[20px] leading-tight font-bold text-primary">Positivity</span>
                                        Good vibes lead to good work — simple as that.
                                    </p>
                                    <p>
                                        <span className="block mb-1 text-[18px] xl:text-[20px] leading-tight font-bold text-primary">Impact</span>
                                        We don’t just build — we create results that matter.
                                    </p>
                                    <p>
                                        <span className="block mb-1 text-[18px] xl:text-[20px] leading-tight font-bold text-primary">Disruption</span>
                                        We challenge norms to build smarter, faster, better.
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