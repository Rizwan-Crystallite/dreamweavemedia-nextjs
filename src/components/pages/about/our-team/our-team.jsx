"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import one from "media/about/our-team/1.webp"
import two from "media/about/our-team/2.webp"
import three from "media/about/our-team/3.webp"
import four from "media/about/our-team/4.webp"
import five from "media/about/our-team/5.webp"
import six from "media/about/our-team/6.webp"
import seven from "media/about/our-team/7.webp"
import eight from "media/about/our-team/8.webp"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"

const data = [
    {
        img: one,
        title: "Digital Branding"
    },
    {
        img: two,
        title: "UI/UX Designer"
    },
    {
        img: three,
        title: "Web Development"
    },
    {
        img: four,
        title: "Ecommerce Development"
    },
    {
        img: five,
        title: "Video Animation"
    },
    {
        img: six,
        title: "Digital Marketing"
    }
]

export default function OurTeam() {
    return (
        <section>
            <div className="pb-[100px] pt-[150px] relative z-[1]">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { opacity: { ease: "linear" } } }}
                >
                    <Image src={shade1} alt="Dream Weave Media" className="absolute -top-[350px] right-0 -z-[1]" />
                </motion.div>
                <div className="container">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10">
                            <span className="inline-block text-[55px] sm:text-[100px] md:text-[150px] lg:text-[180px] xl:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-none animate-text-stroke">
                                Benefits!
                            </span>
                            <h3 className="text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[60px] leading-snug sm:leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 max-w-[1000px] flex items-center h-full">
                                <span>
                                    Our <span className="text-primary">Services</span>!
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-4 md:flex justify-center gap-x-5 mt-10">
                        {
                            data.map(({ img, title }, i) => (
                                <div key={i} className="md:basis-[12.5%] h-[400px] group rounded-full relative z-[1] overflow-hidden [&:nth-child(even)]:mt-10">
                                        <Image src={img} fill alt="Dream Weave Media" className="z-[-1] object-cover object-center" />
                                        <div className="absolute inset-0 bg-black opacity-50"></div>
                                        <h3 className="-rotate-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            {title}
                                        </h3>
                                </div>
                            ))
                        }
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