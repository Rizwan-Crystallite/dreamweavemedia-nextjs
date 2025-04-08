"use client"
// Components
import { Button } from "@/components"
// Media
import facebook from "media/facebook.svg"
import x from "media/x.svg"
import linkedin from "media/linkedin.svg"
import instagram from "media/instagram.svg"
import youtube from "media/youtube.svg"
import bg from "media/video-animation/hero-bg.webp"
// Next
import Image from "next/image"
// Framer
import { motion } from "framer-motion"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

const socials = [
    [facebook, "/"],
    [x, "/"],
    [linkedin, "/"],
    [instagram, "/"],
    [youtube, "/"]
]

const variants = {
    "close": {
        opacity: 0,
        y: -50
    },
    "open": (i) => (
        {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3 * i,
                type: "spring",
                duration: 1
            }
        }
    )
}

export default function Hero() {
    return (
        <section>
            <div className="bg-black pt-[150px] pb-[70px] xl:pb-[100px] xl:pt-0 xl:h-screen flex flex-col justify-end relative">
                <Image src={bg} alt="Dream Weave Media" fill priority className="object-cover object-center z-[1]" />
                <div className="container relative z-10">
                    <div className="max-w-[815px]">
                        <BlurFade delay={0.5} inView>
                            <h1 className="text-[29px] sm:text-[48px] md:text-[62px] lg:text-[70px] font-bold leading-snug sm:leading-tight mb-3">
                            Bring Your Story to Life with Captivating <br className="hidden sm:block" /> <span className="text-primary">Video Animations</span>
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.5 * 2} inView>
                            <p className="text-[16px] leading-relaxed mb-5">
                            We turn your ideas into engaging videos that speak directly to your audience. Studies show that viewers remember 95% of a message when they see it in motion. With over 200 projects delivered, our simple and clear approach ensures your message isn’t lost in translation. Our videos are designed to be easy to understand and help your business grow.
                            </p>
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
                    <ul className="xl:absolute xl:top-0 xl:right-2 flex items-center mt-8 xl:mt-0 xl:grid xl:grid-cols-1 gap-4 z-[2]">
                        {
                            socials.map(([icon, link], i) => (
                                <motion.li key={i} viewport={{ once: true }} variants={variants} initial="close" whileInView="open" custom={i}>
                                    <a href={link} className="w-[50px] h-[50px] border-2 border-white bg-[#093943] inline-flex items-center justify-center rounded-full [&:hover_img]:brightness-0 [&:hover_img]:invert hover:bg-secondary">
                                        <Image src={icon} alt="Dream Weave Media" />
                                    </a>
                                </motion.li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}