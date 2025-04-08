"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import e1 from "media/digital-branding/element-1.webp"
import e2 from "media/digital-branding/element-2.webp"
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
                            <h3 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0 max-w-[900px]">
                                <span>
                                Your <span className="text-primary">Brand</span>, Your <span className="text-primary">Identity</span>, Your <span className="text-primary">Story</span>.
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-5 mt-10 items-center">
                        <div>
                            <BlurFade delay={0.5 * 2} inView>
                                <div className="xl:max-w-[600px] grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed">
                                    <p className="text-[18px] xl:text-[20px] leading-normal font-semibold">
                                    A weak brand blends in, a strong brand stands out. We don’t just design logos; we create branding that reflects your values, speaks to your audience, and makes a lasting impression. Whether you're launching a new business or revamping an old one, we make sure your brand identity feels right and resonates with people.
                                    </p>
                                    <ul className="leading-relaxed grid grid-cols-1 gap-y-2.5 list-image-li-dot list-inside">
                                        {
                                            [
                                                "Logo Design & Branding",
                                                "Brand Strategy & Positioning",
                                                "Visual Identity Design",
                                                "Brand Messaging & Voice",
                                                "Corporate Identity & Guidelines",
                                                "Packaging & Label Design",
                                                "Social Media Branding",
                                                "Rebranding & Brand Refresh",
                                                "Brand Consistency & Consulting",
                                            ].map((e, i) => (
                                                <li key={i}>
                                                    {e}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <p>
                                        <strong>Your brand is your business’s personality with Dream Weave Media,</strong> let’s make sure it’s one people remember.
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
                                    At Dream Weave Media Our Branding That Speaks, So You Don’t Have To.
                                    </p>
                                    <ul className="leading-relaxed grid grid-cols-1 gap-y-2.5 list-image-li-dot list-inside">
                                        {
                                            [
                                                "Logo Design & Branding",
                                                "Brand Strategy & Positioning",
                                                "Visual Identity Design",
                                                "Brand Messaging & Voice",
                                                "Corporate Identity & Guidelines",
                                                "Packaging & Label Design",
                                                "Social Media Branding",
                                                "Rebranding & Brand Refresh",
                                                "Brand Consistency & Consulting",
                                            ].map((e, i) => (
                                                <li key={i}>
                                                    {e}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <p>
                                        <strong>Your brand should tell a story before you even say a word. A strong,</strong> consistent identity makes your business recognizable, builds trust, and creates emotional connections. We help businesses shape their brand in a way that sticks with people and keeps them coming back.
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