"use client"
// Components
import { Button } from "@/components"
// Media
import facebook from "media/facebook.svg"
import x from "media/x.svg"
import linkedin from "media/linkedin.svg"
import instagram from "media/instagram.svg"
import youtube from "media/youtube.svg"
import bg from "media/digital-branding/hero-bg.webp"
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
                                Shaping Experiences with <span className="text-primary">Top-Rated Digital Branding</span> Services!
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.5 * 2} inView>
                            <p className="text-[16px] leading-relaxed mb-5">
                                Do you want to boost your digital presence with top-class UI/UX design? Dream Weave Media is where you must start this journey. Your website doesn’t just have to look good, it should work right too and that exactly is what we do for you.
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