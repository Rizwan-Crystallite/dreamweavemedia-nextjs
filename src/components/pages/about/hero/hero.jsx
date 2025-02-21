"use client"
// Components
import { Button } from "@/components"
// Media
import facebook from "media/facebook.svg"
import x from "media/x.svg"
import linkedin from "media/linkedin.svg"
import instagram from "media/instagram.svg"
import youtube from "media/youtube.svg"
import bg from "media/about/hero-bg.webp"
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
            <div className="bg-black pt-[150px] pb-[70px] xl:pb-0 xl:pt-0 xl:h-screen flex flex-col justify-center relative">
                <Image src={bg} alt="Dream Weave Media" fill priority className="object-cover object-center z-[1]" />
                <div className="container relative z-10">
                    <div className="max-w-[850px]">
                        <BlurFade delay={0.5} inView>
                            <h1 className="text-[32px] sm:text-[45px] md:text-[60px] lg:text-[75px] font-bold leading-snug sm:leading-tight mb-3">
                                About <br /> <span className="text-primary">Dream Weave Media</span>
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.5 * 2} inView>
                            <p className="text-[16px] leading-relaxed mb-5">
                                Dream Weave Media is an enterprise software development company helping startups and organizations build and implement digital transformation solutions tailored to their demand and needs.
                            </p>
                        </BlurFade>
                        <BlurFade delay={0.5 * 3} inView>
                            <ul className="text-[14px] md:text-[16px] leading-relaxed grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5 max-w-[580px]">
                                {
                                    ["Tech Integrated Solutions", "Client Focused Approach", "Disruptive Innovation", "Digital Transformation Partner"].map((e, i) => (
                                        <li key={i} className="flex items-center gap-2.5">
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.8043 0.69031C14.5442 0.263145 15.4558 0.263145 16.1957 0.69031L26.7947 6.80969C27.5346 7.23686 27.9904 8.02629 27.9904 8.88062V21.1194C27.9904 21.9737 27.5346 22.7631 26.7947 23.1903L16.1957 29.3097C15.4558 29.7369 14.5442 29.7369 13.8043 29.3097L3.20527 23.1903C2.4654 22.7631 2.00962 21.9737 2.00962 21.1194V8.88062C2.00962 8.02629 2.4654 7.23686 3.20527 6.80969L13.8043 0.69031Z" fill="#92F3F4" />
                                                <path d="M10 16.0047L12.9953 19L20.9954 11" stroke="#1B2025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <span>{e}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </BlurFade>
                        <BlurFade delay={0.5 * 4} inView>
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
                    <ul className="xl:absolute xl:top-0 xl:right-2 flex items-center mt-8 xl:mt-0 xl:grid xl:grid-cols-1 gap-4 z-[3]">
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