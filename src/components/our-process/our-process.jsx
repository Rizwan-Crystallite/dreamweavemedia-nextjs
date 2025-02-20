"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import one from "media/our-process/1.webp"
import two from "media/our-process/2.webp"
import three from "media/our-process/3.webp"
import four from "media/our-process/4.webp"
import five from "media/our-process/5.webp"
import six from "media/our-process/6.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"
// Components
import { AutoPlayFadeSlider, Button } from "@/components"

const data = [
    {
        title: "Ideate",
        para: "Signal is a next-gen communication app that prioritizes your privacy with end-to-end encryption. Experience seamless, secure messaging without compromising your data.",
        img: one,
        link: "javascript:;"
    },
    {
        title: "Design",
        para: "Product design merges form and function to create user-centered solutions. It focuses on crafting products that are not only aesthetically pleasing but also practical and intuitive to use.",
        img: two,
        link: "javascript:;"
    },
    {
        title: "Develop",
        para: "Develop involves creating and refining software solutions through coding, testing, and iteration. The process ensures that applications are functional, efficient, and meet user needs.",
        img: three,
        link: "javascript:;"
    },
    {
        title: "Test",
        para: "An educational test measures students' knowledge and skills in a specific subject area. It helps educators assess learning progress, identify areas for improvement, and guide instructional strategies.",
        img: four,
        link: "javascript:;"
    },
    {
        title: "Launch",
        para: "A software launch releases a new or updated application to users, involving extensive testing, marketing, and user support. It aims to deliver a seamless experience and introduce new.",
        img: five,
        link: "javascript:;"
    },
    {
        title: "Support",
        para: "Customer support provides assistance to users by resolving issues, answering questions, and offering guidance. It ensures a positive experience by addressing concerns promptly and effectively.",
        img: six,
        link: "javascript:;"
    }
]

export default function OurProcess() {
    return (
        <section>
            <div className="pt-[50px] pb-[100px] relative z-[2]">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { opacity: { ease: "linear" } } }}
                >
                    <Image src={shade1} alt="Dream Weave Media" priority className="absolute -top-[350px] right-0 -z-[1]" />
                </motion.div>
                <div className="container">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10 mb-10 md:mb-20">
                            <span className="inline-block text-[55px] sm:text-[70px] md:text-[100px] lg:text-[130px] xl:text-[150px] 2xl:text-[180px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-none animate-text-stroke">
                                Our Process
                            </span>
                            <h3 className="text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-8 lg:top-12 xl:top-14 2xl:top-20 left-0 right-0 max-w-[1000px]">
                                Innovative Ideation, Design, and Execution In <span className="text-primary">One Place.</span>
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="relative mt-10">
                        <AutoPlayFadeSlider arrowsCss="absolute lg:top-8 2xl:top-16 lg:left-10 lg:right-[inherit] right-0 bottom-0" dotsCss="absolute left-0 !gap-0 top-0 2xl:top-[10%] bottom-0 h-full 2xl:!h-[80%] !flex-col [&_button]:h-[20%] [&_button]:w-[5px] [&_button]:!bg-[#33383F] !w-max">
                            {
                                data.map(({ title, para, img, link }, i) => (
                                    <div className="shrink-0 grow-0 basis-full pl-4" key={i}>
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 items-center">
                                            <div className="pl-5 sm:pl-10 lg:col-span-8">
                                                <h3 className="text-[40px] lg:text-[60px] leading-tight font-bold text-primary mb-5 2xl:mb-8">
                                                    {title}
                                                </h3>
                                                <p className="text-[15px] sm:text-[18px] xl:text-[24px] leading-relaxed mb-5 2xl:mb-8 max-w-[810px]">
                                                    {para}
                                                </p>
                                                <Button asChild variant="linkIcon2">
                                                    <div dangerouslySetInnerHTML={{
                                                        __html: `<a href=${link}>
                                                            <span>Let’s Discuss</span>
                                                            <div class='inline-flex items-center justify-center border-2 border-white rounded-full w-[40px] h-[40px]'>
                                                                <img src='/right-arrow.svg' alt="Dream Weave Media" width='23' height='22' />
                                                            </div>
                                                        </a>` }} />
                                                </Button>
                                            </div>
                                            <div className="mt-5 lg:mt-0 lg:col-span-4">
                                                <motion.div
                                                    initial={{ y: 50, filter: "blur(10px)" }}
                                                    whileInView={{ y: 0, filter: "blur(0px)" }}
                                                    transition={{
                                                        delay: 0.1,
                                                        duration: 0.5,
                                                        ease: "easeOut",
                                                    }}>
                                                    <Image src={img} alt="Dream Weave Media" className="h-[300px] lg:h-auto object-contain mx-auto" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </AutoPlayFadeSlider>
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
