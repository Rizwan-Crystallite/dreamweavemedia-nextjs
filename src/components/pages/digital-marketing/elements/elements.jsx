"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import e1 from "media/digital-marketing/element-1.webp"
import e2 from "media/digital-marketing/element-2.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function Elements() {
    return (
        <section>
            <div className="py-[100px] relative z-[2]">
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
                                Our Work!
                            </span>
                            <h3 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0 max-w-[1000px]">
                                <span>
                                    Expand your digital growth with our <span className="text-primary">AI-enabled</span>, budget-friendly Digital <span className="text-primary">Marketing</span> Services!
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-5 mt-10 items-center">
                        <div>
                            <BlurFade delay={0.5 * 2} inView>
                                <div className="xl:max-w-[600px] grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed">
                                    <p className="text-[18px] xl:text-[20px] leading-normal font-semibold">
                                        We offer every web development service you need to build a full-blown web-based product, such as:
                                    </p>
                                    <ul className="leading-relaxed grid grid-cols-1 gap-y-2.5 list-image-li-dot list-inside">
                                        {
                                            ["Website Development", "Web Application Development", "eCommerce Solutions Development", "Dedicated Content Management System Development", "No-code Development & Low-code Development", "Ideation - Market Research - Wireframing - Prototyping", "Project Management - UI Design - UX Design - Coding - QA Testing", "Cybersecurity - Consulting - Publishing - Maintenance - Support"].map((e, i) => (
                                                <li key={i}>
                                                    {e}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <p>
                                        <strong>The role of a web development company is to seek and build solutions that can best fulfill the client’s unique business goals.</strong> With the right web development services, you’ll be able to build a successful product from scratch or increase the performance of an existing one.
                                    </p>
                                </div>
                            </BlurFade>
                        </div>
                        <div>
                            <BlurFade delay={0.5 * 3} inView>
                                <Image src={e1} alt="Dream Weave Media" className="mx-auto" />
                            </BlurFade>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-5 mt-20 items-center">
                        <div>
                            <BlurFade delay={0.5} inView>
                                <Image src={e2} alt="Dream Weave Media" className="mx-auto" />
                            </BlurFade>
                        </div>
                        <div className="order-first lg:order-last">
                            <BlurFade delay={0.5} inView>
                                <div className="xl:max-w-[600px] ml-auto grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed">
                                    <p className="text-[18px] xl:text-[20px] leading-normal font-semibold">
                                        21% Conversion Increase With Product and UI Design Services for Mobile App!
                                    </p>
                                    <ul className="leading-relaxed grid grid-cols-1 gap-y-2.5 list-image-li-dot list-inside">
                                        {
                                            ["Website Development", "Web Application Development", "eCommerce Solutions Development", "Dedicated Content Management System Development", "No-code Development & Low-code Development", "Ideation - Market Research - Wireframing - Prototyping", "Project Management - UI Design - UX Design - Coding - QA Testing", "Cybersecurity - Consulting - Publishing - Maintenance - Support"].map((e, i) => (
                                                <li key={i}>
                                                    {e}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <p>
                                        <strong>The role of a web development company is to seek and build solutions that can best fulfill the client’s unique business goals.</strong> With the right web development services, you’ll be able to build a successful product from scratch or increase the performance of an existing one.
                                    </p>
                                </div>
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