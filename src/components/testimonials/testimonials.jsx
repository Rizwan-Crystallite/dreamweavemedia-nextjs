"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import logos from "media/testimonisla-logos.svg"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// UI
import { CardStack } from "@/components/ui/card-stack"


const data = [
    {
        para: "The team stood out because of their swift response time and patience. Dream Weave Media provided one contact person, which helped streamline project management and coordination. Not only did Dream Weave Media follow the budget and timeline, the team even offered additional services at no extra charge.",
        name: "Elijah James",
        jd: "Founder"
    },
    {
        para: "Willing to accommodate nonprofit budgets, Cubix brought their robust experience to the project. They checked in consistently, and were communicative, easy to reach, and responsive. The Android app shows over 500 downloads to date.",
        name: "Jack Agresti",
        jd: "CEO"
    },
    {
        para: "The team stood out because of their swift response time and patience. Dream Weave Media provided one contact person, which helped streamline project management and coordination. Not only did Dream Weave Media follow the budget and timeline, the team even offered additional services at no extra charge.",
        name: "Elijah James",
        jd: "Founder"
    },
    {
        para: "Willing to accommodate nonprofit budgets, Cubix brought their robust experience to the project. They checked in consistently, and were communicative, easy to reach, and responsive. The Android app shows over 500 downloads to date.",
        name: "Jack Agresti",
        jd: "CEO"
    }
]

export default function Testimonials() {
    return (
        <section>
            <div className="pb-[190px] relative z-[1]">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { opacity: { ease: "linear" } } }}
                >
                    <Image src={shade1} alt="Dream Weave Media" priority className="absolute -top-[350px] right-0 -z-[1]" />
                </motion.div>
                <div className="container">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10 mb-5">
                            <span className="block text-center text-[46px] sm:text-[70px] md:text-[100px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug lg:leading-none animate-text-stroke">
                                Testimonial's
                            </span>
                            <h3 className="text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[60px] leading-snug font-bold sm:absolute sm:top-0 sm:bottom-0 sm:h-full sm:flex sm:items-center justify-center sm:right-0 sm:left-0 text-center">
                                <span>
                                    Our Clients Simply Love <span className="text-primary"> <br className=" lg:hidden" /> What We Do.</span>
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.5 * 2} inView>
                        <p className="text-[16px] sm:text-[20px] lg:text-[24px] leading-relaxed max-w-[950px] text-center mx-auto mb-10">
                            Proud to serve as the innovation partner for industry leaders who have experienced our expertise and excellence firsthand.
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.5 * 3} inView>
                        <Image src={logos} alt="Dream Weave Media" className="mx-auto" />
                    </BlurFade>
                    <div className="max-w-[800px] mx-auto">
                        <CardStack items={data} />
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