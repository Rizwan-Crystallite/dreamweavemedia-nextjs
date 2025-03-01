"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function Overview() {
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
                        <div className="relative z-10 mb-5">
                            <span className="block text-[50px] sm:text-[80px] md:text-[100px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug lg:leading-none animate-text-stroke">
                                Case Studies
                            </span>
                            <h3 className="text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0">
                                <span>
                                    Overview About <span className="text-primary">Food</span> Website!
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.5 * 2} inView>
                        <p className="text-[16px] leading-relaxed">
                            We envision a world where every music lover has access to a diverse and high-quality music experience. Whether you're an artist looking to reach a global audience or a fan seeking the next great sound, we’re here to make that connection seamless and enjoyable.
                        </p>
                    </BlurFade>
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-10 gap-y-10 mt-10 items-center">
                        <div className="xl:col-span-3">
                            <BlurFade delay={0.5} inView>
                                <div className="relative bg-card rounded-2xl py-10 px-4 sm:px-6 hover:bg-popover transition-all duration-300 hover:bg-blend-color hover:shadow-[0px_10px_10px_rgba(0,_0,_0,_0.1)] hover:backdrop-blur-[2px] border-2 hover:border-primary border-transparent grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-10">
                                    {
                                        [
                                            ["Industry", "Entertainment"],
                                            ["Project Duration", "4 months"],
                                            ["Location", "USA & Switzerland"],
                                            ["Funding Raised", "$2.3M"],
                                            ["Clutch Review", "5.0"],
                                            ["Awards", "The 10 Most Innovative Social Media Companies 2022, by Fast Company"]
                                        ].map(([title, text], i) => (
                                            <div key={i}>
                                                <h3 className="text-[20px] 2xl:text-[25px] text-primary font-semibold uppercase leading-tight mb-2">
                                                    {title}
                                                </h3>
                                                <p className="text-[16px] leading-relaxed">
                                                    {text}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </BlurFade>
                        </div>
                        <div className="xl:col-span-9">
                            <BlurFade delay={0.5} inView>
                                <div className="xl:col-span-9 grid grid-cols-1 gap-7">
                                    {
                                        [
                                            {
                                                title: "Problem",
                                                content: "<p><strong>Fan engagement isn’t rewarded.</strong></p><p>Fans want to keep up with their idols and it is exhausting to follow them across several social networks. They want to be recognized and rewarded for their engagement but with current solutions, their engagement is like a droplet in a sea, most of the time has zero expression giving a sense of unfairness and meaningless investment while making it very hard to find like-minded fans.</p><p>Creators aren’t generating meaningful digital revenue streams for their fans. On current platforms, fan satisfaction is too concentrated on the artists’ effort to generate content. In addition to that, creators don’t have a lot of intelligence about their fans.</p>"
                                            },
                                            {
                                                title: "Solution",
                                                content: "<p><strong>A rewarding fan community.</strong></p><p>A social network where fans can produce content about their idols and engage in a community with like-minded fans. Artists can be closer to their fans and monetize content produced with their intellectual property, while it is easier for fans to keep up with all the new information.</p>"
                                            },
                                            {
                                                title: "Results",
                                                content: "<p><strong>An award-winning startup product backed by some of the biggest names in music.</strong></p><p>Since working with us, Fave has gone on to win awards like “The 10 Most Innovative Social Media Companies 2022” by Fast Company. Moreover, Fave is now backed by some of the biggest names in music, like Sony Music & Warner Music Group.</p>"
                                            }
                                        ].map(({ title, content }, i) => (
                                            <div key={i}>
                                                <h3 className="text-[30px] 2xl:text-[35px] text-primary font-bold uppercase leading-tight mb-2">
                                                    {title}
                                                </h3>
                                                <div className="text-[16px] leading-relaxed grid grid-cols-1 gap-3" dangerouslySetInnerHTML={{
                                                    __html: content
                                                }} />
                                            </div>
                                        ))
                                    }
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