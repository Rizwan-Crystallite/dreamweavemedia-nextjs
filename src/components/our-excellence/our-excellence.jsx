"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
// Magic UI
import { NumberTicker } from "@/components/magicui/number-ticker"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function OurExcellence() {
    return (
        <section>
            <div className="pt-[50px] pb-[100px] relative z-[1]">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { opacity: { ease: "linear" } } }}
                >
                    <Image src={shade1} alt="Dream Weave Media" priority className="absolute -top-[350px] right-0 -z-[1]" />
                </motion.div>
                <div className="container">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10 md:text-center mb-10 md:mb-28 lg:mb-0">
                            <span className="inline-block text-[45px] sm:text-[70px] md:text-[90px] lg:text-[125px] xl:text-[150px] 2xl:text-[180px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug animate-text-stroke">
                                Our Excellence
                            </span>
                            <h3 className="text-[38px] sm:text-[45px] md:text-[70px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-8 lg:top-12 xl:top-14 2xl:top-24 left-0 right-0">
                            Turning Clicks into <span className="text-primary">Connections</span>, and <span className="text-primary">Connections</span> into Conversions.
                            </h3>
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.5 * 2} inView>
                        <p className="md:text-center text-[20px] md:text-[26px] lg:text-[32px] xl:text-[35px] max-w-[1200px] md:mx-auto text-primary leading-relaxed mb-14">
                        At Dream Weave Media, digital marketing isn’t just about algorithms and analytics, it’s about people. We blend strategy, creativity, and a little bit of marketing magic to help brands stand out, get noticed, and stay remembered. With years of experience and a team that lives and breathes digital, we don’t just follow trends and we create them. Whether it’s SEO, social media, content, or paid campaigns, we make sure your brand doesn’t just exist online but thrives. Let’s build something unforgettable together.
                        </p>
                    </BlurFade>
                    <div className="flex flex-col md:flex-row items-center justify-evenly gap-x-5 gap-y-10">
                        {
                            [
                                ["1000", "Completed Campaigns"],
                                ["50", "Talented Team"],
                                ["600", "Satisfied Clients"]
                            ].map(([num, txt], i) => (
                                <div key={i} className="text-center border-2 border-primary p-5 md:p-0 w-[300px] rounded-lg md:border-0 md:w-auto">
                                    <NumberTicker value={num} />
                                    <p className="text-[18px] lg:text-[20px] mt-5 text-primary leading-relaxed">
                                        {txt}
                                    </p>
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