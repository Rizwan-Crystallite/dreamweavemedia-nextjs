"use client"
// Components
import { Button } from "@/components"
// Media
import facebook from "media/facebook.svg"
import x from "media/x.svg"
import linkedin from "media/linkedin.svg"
import instagram from "media/instagram.svg"
import youtube from "media/youtube.svg"
import bg from "media/ui-ux-design/hero-bg.webp"
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
                    <div className="max-w-[1100px]">
                        <BlurFade delay={0.5} inView>
                            <span className="block text-[23px] lg:text-[28px] text-primary font-bold leading-tight mb-5">75% of users judge a business based on its design.</span>
                            <h1 className="text-[30px] sm:text-[50px] md:text-[60px] font-bold leading-snug sm:leading-tight mb-3">
                             With our <span className="text-primary">Top-Rated UI/UX</span> Services Make yours unforgettable.
                            </h1>
                        </BlurFade>
                        <BlurFade delay={0.5 * 2} inView>
                            <p className="text-[16px] leading-relaxed mb-5">
                            Users decide in just 3 seconds whether to stay on your website or leave. If your design is confusing, slow, or unappealing, they’ll move on without a second thought. A good UI/UX isn’t just about looks, it’s about keeping visitors engaged, guiding them smoothly, and making sure they take action. At Dream Weave Media we design experiences that grab attention, build trust, and turn visitors into customers
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