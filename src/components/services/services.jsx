"use client"
// Media
import bg from "media/services-bg.webp"
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
// Next
import Image from "next/image"
// Components
import { Button } from "@/components"
// UI
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
// Framer
import { motion } from "framer-motion"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

const data = [
    {
        title: "Web <br> Development",
        para: "A great website is the heart of any online business. Dream Weave Media builds fast, secure, and mobile-friendly websites that work perfectly on all devices. Our developers make sure your website looks great and functions smoothly. Whether you need a small business site or a big platform, Dream Weave Media turns your ideas into a fully working website that helps your business grow.",
        link: "/web-development"
    },
    {
        title: "Digital <br> Marketing",
        para: "Dream Weave Media helps you reach the right people online. We use SEO, social media, ads, and email marketing to bring customers to your business. Our team creates smart marketing plans to grow your audience and increase sales. With Dream Weave Media, your business gets noticed, attracts more customers, and stands out.",
        link: "/digital-marketing"
    },
    {
        title: "Video <br> Animation",
        para: "Videos grab attention faster than anything else. Dream Weave Media creates fun, engaging, and high-quality animations to bring your ideas to life. Whether you need explainer videos, ads, or motion graphics, we make sure your message is clear and exciting. Our animation team turns complex ideas into simple and fun videos that people love to watch.",
        link: "/video-animation"
    },
    {
        title: "Ecommerce <br> Development",
        para: "Selling products online should be easy for you and your customers. Dream Weave Media builds e-commerce websites that are simple to use and secure. We help you create an online store that looks great, loads fast, and makes shopping easy. Whether you sell a few products or thousands, Dream Weave Media makes sure your store works smoothly and helps you grow your business.",
        link: "/ecommerce-development"
    },
    {
        title: "Digital <br> Branding",
        para: "Dream Weave Media helps your business stand out online. We create logos, color themes, and styles that make your brand unique. Our well-executed digital branding strategy can improve your website's ranking in search engine results pages (SERPs), leading to increased organic traffic and brand visibility. A strong brand makes people trust your business and remember it.",
        link: "/digital-branding"
    },
    {
        title: "UI/UX <br> Design",
        para: "At Dream Weave Media, we make websites and apps with Well-designed interfaces that lead to smoother navigation and ease of use, following a more positive user experience and higher customer satisfaction. Our UI/UX design team focuses on how things look and feel. We create simple, clean, and user-friendly designs that help people enjoy using your website or app.",
        link: "/ui-ux-design"
    }
]

export default function Services() {
    return (
        <section>
            <div className="relative z-[1] before:content-[''] before:inset-0 before:w-full before:absolute before:h-full before:[mix-blend-mode:overlay;] before:-z-[1] before:bg-background before:opacity-75 py-[100px]">
                <Image src={bg} alt="Dream Weave Media" fill priority className="object-cover object-center opacity-75 -z-[2]" />
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { opacity: { ease: "linear" } } }}
                >
                    <Image src={shade1} alt="Dream Weave Media" priority className="absolute -top-[350px] right-0 -z-[1]" />
                </motion.div>
                <div className="container relative z-[2]">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10">
                            <span className="inline-block text-[70px] sm:text-[100px] md:text-[150px] lg:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug animate-text-stroke">
                                Services
                            </span>
                            <h3 className="text-[40px] md:text-[50px] lg:text-[60px] leading-tight font-bold sm:absolute sm:top-7 md:top-14 lg:top-24 mb-10">
                                Services We Provide
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {
                            data.map(({ title, para, link }, i) => (
                                <CardContainer key={i} className="relative group/card bg-card rounded-2xl py-10 px-4 sm:px-6 hover:bg-popover transition-all duration-300 group-hover/card:bg-blend-color group-hover/card:shadow-[0px_10px_10px_rgba(0,_0,_0,_0.1)] group-hover/card:backdrop-blur-[2px] border-2 hover:border-primary border-transparent">
                                    <CardBody>
                                        <CardItem
                                            translateZ="50"
                                            className="text-[30px] sm:text-[40px] text-primary font-bold leading-tight mb-5"
                                        >
                                            <h3 dangerouslySetInnerHTML={{ __html: title }} />
                                        </CardItem>
                                        <CardItem
                                            as="p"
                                            translateZ="60"
                                            className="text-[16px] leading-relaxed text-card-foreground transition-all duration-300 group-hover/card:text-white mb-5"
                                        >
                                            {para}
                                        </CardItem>
                                        <CardItem
                                            translateZ={20}
                                            as="button"
                                        >
                                            <Button asChild className="text-card-foreground group-hover/card:text-white" variant="linkIcon2">
                                                <div dangerouslySetInnerHTML={{
                                                    __html: `<a href=${link}>
                                                        <span>Learn More</span>
                                                        <div class='inline-flex items-center justify-center border-2 border-white rounded-full w-[40px] h-[40px]'>
                                                            <img src='/right-arrow.svg' alt="Dream Weave Media" width='23' height='22' />
                                                        </div>
                                                    </a>` }} />
                                            </Button>
                                        </CardItem>
                                    </CardBody>
                                </CardContainer>
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