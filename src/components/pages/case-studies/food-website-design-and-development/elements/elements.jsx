"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Media
import element3 from "media/case-studies/food-website-design-and-development/element-3.webp"
import element4 from "media/case-studies/food-website-design-and-development/element-4.webp"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

const list1 = [
    {
        title: "Fandom",
        para: "A digital place where fans can upload content about their favourite creator and relate with other fans. The purpose is to have a centralized area where the creator can interact with her fans and where all creator related content is posted."
    },
    {
        title: "Coin System",
        para: "Rewarding users for uploading content on their creator’s fandom with coins that can be used to purchase merchandise from the same creator."
    },
    {
        title: "Leaderboard",
        para: "Fans and creators can visualize the fans with most points won inside each fandom and win specific prizes depending on their scoring."
    }
]

const list2 = [
    {
        title: "Product Scope",
        para: "We focused on the business vision and created a comprehensive brief for the project by gathering all the research on the market, competitor benchmarks and any other necessary information. Then we met with the client in an immersive session to craft a value proposition and set the main assumptions to prove. Finally, we created the ultimate list of user stories and features necessary to prove those main assumptions within the MVP."
    },
    {
        title: "Product Rationale and Tech Scope",
        para: "After an immersive session with all the stakeholders, we had all the information we needed to create the ultimate list of User Stories and features necessary to prove the main assumptions in a Proof of Concept (POC). Our experts in Product, UX/UI and Tech Architecture focused on finding the answers to all of the questions raised throughout the scope preparation."
    },
    {
        title: "Clickable Prototype",
        para: "We developed a non-functional prototype to simulate user interaction. The experience of using the clickable prototype was very much like the final product itself, this was the adequate phase to test the information architecture, the UX and most importantly to present all involved counterparts a concrete outcome."
    },
    {
        title: "Final UX/UI Development",
        para: "With the decisions closed in the previous steps, we went on developing the product through agile cycles."
    }
]

export default function Elements() {
    return (
        <section>
            <div className="relative z-[2] pt-[100px] lg:pt-[150px] pb-[100px]">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { opacity: { ease: "linear" } } }}
                >
                    <Image src={shade1} alt="Dream Weave Media" priority className="absolute -top-[350px] right-0 -z-[1]" />
                </motion.div>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 items-center">
                        <div>
                            <BlurFade delay={0.5} inView>
                                <h2 className="text-[35px] sm:text-[50px] leading-tight font-bold text-primary mb-5">
                                    02 Key Features
                                </h2>
                            </BlurFade>
                            <BlurFade delay={0.5 * 2} inView>
                                <ul className="text-[16px] leading-relaxed grid grid-cols-1 gap-5">
                                    {
                                        list1.map(({ title, para }, i) => (
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
                        <div>
                            <BlurFade delay={0.5 * 3} inView>
                                <Image src={element3} alt="Dream Weave Media" className="mx-auto" />
                            </BlurFade>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 items-center mt-[100px]">
                        <div>
                            <BlurFade delay={0.5 * 3} inView>
                                <Image src={element3} alt="Dream Weave Media" className="mx-auto" />
                            </BlurFade>
                        </div>
                        <div className="order-first lg:order-last">
                            <BlurFade delay={0.5} inView>
                                <h2 className="text-[35px] sm:text-[50px] leading-tight font-bold text-primary mb-5">
                                    03 The Process
                                </h2>
                            </BlurFade>
                            <BlurFade delay={0.5 * 2} inView>
                                <ul className="text-[16px] leading-relaxed grid grid-cols-1 gap-5">
                                    {
                                        list2.map(({ title, para }, i) => (
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
