"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import e1 from "media/video-animation/element-1.webp"
import e2 from "media/video-animation/element-2.webp"
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
                            <h3 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0 max-w-[1000px]">
                                <span>
                                    Building a seamless <span className="text-primary">Experience</span> for both retailers and <span className="text-primary">end-users</span> with <span className="text-primary">UI/UX design</span>
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-5 mt-10 items-center">
                        <div>
                            <BlurFade delay={0.5 * 2} inView>
                                <div className="xl:max-w-[600px] grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed">
                                    <p className="text-[18px] xl:text-[20px] leading-normal font-semibold">
                                    Why Choose Video Animation?
                                    </p>
                                    <p>
                                    Videos are not only fun to watch—they are proven to boost understanding. Nearly 90% of information is retained when presented with a video, compared to just 10% when read as text. Our animations break down complex ideas into clear, simple visuals that your audience will appreciate.
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
                                    Simple, Creative, and Effective Video Solutions
                                    </p>
                                    <p>
                                    Simple and clear communication is key. Our video animation services are built on the idea that simple language and engaging visuals lead to better understanding and higher retention. We use basic language, clear figures, and real data to create content that resonates with your viewers.
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