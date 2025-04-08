"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import e1 from "media/ecommerce-development/element-1.webp"
import e2 from "media/ecommerce-development/element-2.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function Elements() {
    return (
        <section>
            <div className="pt-[100px] relative z-[2]">
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
                            <h3 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0 max-w-[1070px]">
                                <span>
                                <span className="text-primary">Ecommerce</span> Website Development – Build, <span className="text-primary">Optimize</span>, and Grow Your Online Store
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-5 mt-10 items-center">
                        <div>
                            <BlurFade delay={0.5 * 2} inView>
                                <div className="xl:max-w-[600px] grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed">
                                    <p>
                                       With over 2.14 billion people shopping online, having a well-built eCommerce website is no longer optional, it’s a necessity. Whether you're launching a new store or upgrading an existing one, the right development approach can turn online shopping into a powerful revenue-driving solution for your business. 
                                    </p>
                                    <p>
                                       But with 24 million eCommerce websites competing for attention, simply having an online store isn’t enough. Your website needs to be fast, user-friendly, and optimized for conversions. From seamless navigation to secure payment processing, our eCommerce website development services ensure your business stands out, attracts customers, and drives consistent sales. Let us help you create an online store. 
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
                                    Experience Growth with Expert Ecommerce Website Development
                                    </p>
                                    <p>
                                       The web development market is booming, growing from $65.35 billion in 2023 to an expected $130.9 billion by 2032. This growth brings huge opportunities for businesses to create better, more efficient websites. But with so many options, building the right eCommerce site can feel overwhelming. What features do you need? Which platform works best? Should you integrate eCommerce into an existing site or start fresh? 
                                    </p>
                                    <p>
                                       A well-developed eCommerce website isn’t just a nice-to-have, it’s a must for businesses wanting to attract and convert online shoppers. Dream Weave Media is a leading platform that makes this process easier, offering powerful tools to create seamless, high-performing online stores. Whether you're launching a new site or optimizing an existing one, the right web development we ensure that your business stands out and thrives in the digital market. 
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