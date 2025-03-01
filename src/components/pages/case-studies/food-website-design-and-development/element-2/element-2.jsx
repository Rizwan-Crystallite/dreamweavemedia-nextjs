"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Media
import laptop from "media/case-studies/food-website-design-and-development/element-2.webp"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

const list = [
    {
        title: "Fans creating artist-related content",
        para: "From an architectural perspective, the solution had a challenge from the beginning, which was the realtime ingestion of data from hundreds of different sources, to keep server stability."
    },
    {
        title: "Creators want to monetize their intellectual property",
        para: "Fave allows creators to monetize their IP through their fans’ content and gives access to in-depth data. This uses the latent potential of a digital footprint from fans. Creators can fight the waves against the usage by fans of their intellectual property or surf the wave by accepting it and monetizing it."
    },
    {
        title: "Native vs. hybrid",
        para: "There was from moment one a great challenge of matching the budget with the scope. Hybrid solutions are very flexible and powerful but are not meant for media-centric apps. Native has the security of having all features supported but it always takes longer and needs a larger team. We did a benchmark of hybrid technologies for the development and we’ve come to the conclusion Native Script would be possible for a quick MVP launch which later should be replaced by a fully native app."
    }
]

export default function Element2() {
    return (
        <section>
            <div className="relative z-[2] sm:pt-[50px] pb-[100px]">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { opacity: { ease: "linear" } } }}
                >
                    <Image src={shade1} alt="Dream Weave Media" priority className="absolute -top-[350px] right-0 -z-[1]" />
                </motion.div>
                <div className="container">
                    <div className="lg:max-w-[600px] mb-10 lg:mb-0 ml-auto">
                        <BlurFade delay={0.5} inView>
                            <h2 className="text-[35px] sm:text-[50px] leading-tight font-bold text-primary mb-5">
                                01 The Challenges
                            </h2>
                        </BlurFade>
                        <BlurFade delay={0.5 * 2} inView>
                            <ul className="text-[16px] leading-relaxed grid grid-cols-1 gap-5">
                                {
                                    list.map(({ title, para }, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M27.6359 1.06567H4.36316C2.22097 1.06567 0.484375 2.80227 0.484375 4.94446V28.2172C0.484375 30.3594 2.22097 32.096 4.36316 32.096H27.6359C29.7781 32.096 31.5147 30.3594 31.5147 28.2172V4.94446C31.5147 2.80227 29.7781 1.06567 27.6359 1.06567Z" fill="#27E9E9" />
                                                <path d="M16.0004 27.005C10.2501 27.005 5.57617 22.331 5.57617 16.5807C5.57617 10.8304 10.2501 6.15649 16.0004 6.15649C21.7507 6.15649 26.4247 10.8304 26.4247 16.5807C26.4247 22.331 21.7507 27.005 16.0004 27.005ZM16.0004 7.61104C11.055 7.61104 7.03072 11.6353 7.03072 16.5807C7.03072 21.5262 11.055 25.5504 16.0004 25.5504C20.9459 25.5504 24.9701 21.5262 24.9701 16.5807C24.9701 11.6353 20.9459 7.61104 16.0004 7.61104Z" fill="#1B1D22" />
                                                <path d="M18.4244 17.3081H12.6062C12.2086 17.3081 11.8789 16.9784 11.8789 16.5808C11.8789 16.1832 12.2086 15.8535 12.6062 15.8535H18.4244C18.8219 15.8535 19.1516 16.1832 19.1516 16.5808C19.1516 16.9784 18.8219 17.3081 18.4244 17.3081Z" fill="#1B1D22" />
                                                <path d="M16.4846 20.2171C16.3004 20.2171 16.1161 20.1492 15.9707 20.0037C15.6895 19.7225 15.6895 19.2571 15.9707 18.9759L18.3658 16.5807L15.9707 14.1856C15.6895 13.9044 15.6895 13.4389 15.9707 13.1577C16.2519 12.8765 16.7173 12.8765 16.9986 13.1577L19.9076 16.0668C20.1889 16.348 20.1889 16.8134 19.9076 17.0947L16.9986 20.0037C16.8531 20.1492 16.6689 20.2171 16.4846 20.2171Z" fill="#1B1D22" />
                                            </svg>
                                            <span className="block w-[calc(100%-48px)]">
                                                <strong className="block text-primary text-[18px] leading-snug mb-3">
                                                    {title}
                                                </strong>
                                                <span>{para}</span>
                                            </span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </BlurFade>
                    </div>
                </div>
                <Image src={laptop} alt="Dream Weave Media" className="lg:absolute lg:top-[230px] xl:top-[130px] 2xl:top-[70px] lg:left-0 lg:max-w-[420px] xl:max-w-[660px] 2xl:max-w-[820px]" />
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
