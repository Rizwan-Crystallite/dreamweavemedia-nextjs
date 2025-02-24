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
                <div className="container relative z-10 text-center">
                    <div className="max-w-[850px] mx-auto">
                        <BlurFade delay={0.5} inView>
                            <h1 className="text-[55px] lg:text-[75px] font-bold leading-snug sm:leading-tight mb-3">
                                Thank <span className="text-primary">You</span>
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.5 * 2} inView>
                            <p className="text-[18px] leading-relaxed mb-5">
                                We've received your Query. Our team will get back to you soon.
                            </p>
                        </BlurFade>
                        <BlurFade delay={0.5 * 3} inView>
                            <Button asChild className="mx-auto" variant="linkIcon2">
                                <div dangerouslySetInnerHTML={{
                                    __html: `<a href='/'>
                                    <span>Get Back to Home</span>
                                    <div class='inline-flex items-center justify-center border-2 border-white rounded-full w-[40px] h-[40px]'>
                                        <img src='/right-arrow.svg' alt="Dream Weave Media" width='23' height='22' />
                                    </div>
                                </a>` }} />
                            </Button>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    )
}