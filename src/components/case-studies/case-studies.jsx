"use client"
// Components
import { AutoPlayFadeSlider, Button } from "@/components"
// Media
import logo1 from "media/case-studies/1/logo.webp"
import project1 from "media/case-studies/1/project.webp"
import logo2 from "media/case-studies/2/logo.webp"
import project2 from "media/case-studies/2/project.webp"
// Next
import Image from "next/image"
// Framer
import { motion } from "framer-motion"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

const data = [
    {
        category: "Web Development",
        logo: logo1,
        title: "See How We Help Brands Succeed",
        para: "We work with startups, enterprises, and growing businesses to build real solutions, not just fancy ideas. Every project we take on is designed to solve a problem, create value, and push boundaries.",
        project: project1,
        link: "/case-studies/food-website-design-and-development"
    },
    {
        category: "Web Development",
        logo: logo2,
        title: "Giving a Fashion Startup a Digital Edge",
        para: "A new clothing brand came to us with a bold idea, sell unique designs online and build a loyal customer base. We crafted a slick ecommerce site, brand identity, and digital marketing plan that turned their concept into a full-time business.",
        project: project2,
        link: "/case-studies/food-website-design-and-development"
    },
    {
        category: "Web Development",
        logo: logo1,
        title: "Helping a Health-Tech App Go Live Fast",
        para: "When a healthcare startup needed a mobile app to connect doctors and patients, we stepped in with end-to-end development. From design to deployment, we built a fast, user-friendly platform that helped them launch quickly, and scale faster.",
        project: project1,
        link: "/case-studies/food-website-design-and-development"
    },
    {
        category: "Web Development",
        logo: logo2,
        title: "Taking an Offline Store Online",
        para: "A local bookstore wanted to reach more readers. We built an easy-to-navigate online store with smart inventory tools and mobile-friendly checkout. Sales doubled in the first two months, and they’ve been growing ever since.",
        project: project2,
        link: "/case-studies/food-website-design-and-development"
    },
    {
        category: "Web Development",
        logo: logo1,
        title: "Boosting Online Reach for a SaaS Brand",
        para: "A software-as-a-service business was struggling with low traffic and poor engagement. We revamped their website, added clear messaging, and launched a targeted SEO + PPC strategy that brought in more qualified leads, and kept them coming.",
        project: project1,
        link: "/case-studies/food-website-design-and-development"
    }
]

export default function CaseStudies() {
    return (
        <section>
            <div className="pt-[50px] pb-[100px] relative z-[2]" id="case-studies">
                <div className="container">
                    <div className="xl:flex items-center justify-between mb-5">
                        <BlurFade delay={0.5} inView>
                            <div className="relative z-10">
                                <span className="inline-block text-[70px] sm:text-[100px] md:text-[150px] lg:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-none animate-text-stroke">
                                    Our Work
                                </span>
                                <h3 className="text-[30px] sm:text-[45px] md:text-[43px] lg:text-[55px] leading-tight font-bold md:absolute md:top-14 lg:top-20">
                                    We Believe In Creating An <span className="text-primary">Impact!</span>
                                </h3>
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.5 * 2} inView>
                            <Button asChild variant="linkIcon2" className="hidden xl:block">
                                <div dangerouslySetInnerHTML={{
                                    __html: `<a href='/case-studies'>
                                        <span>View All</span>
                                        <div class='inline-flex items-center justify-center border-2 border-white rounded-full w-[40px] h-[40px]'>
                                            <img src='/right-arrow.svg' alt="Dream Weave Media" width='23' height='22' />
                                        </div>
                                    </a>` }} />
                            </Button>
                        </BlurFade>
                    </div>
                    <BlurFade delay={0.5 * 2} inView>
                        <p className="text-[18px] sm:text-[20px] md:text-[24px] leading-relaxed max-w-[950px] mb-5 xl:mb-0">
                            From our enterprise-grade custom software to our Generative AI-powered insights, find the answers to your business challenges and reinvent how your organization works with AI.
                        </p>
                    </BlurFade>
                    <BlurFade delay={0.5 * 3} inView>
                        <Button asChild variant="linkIcon2" className="block xl:hidden">
                            <div dangerouslySetInnerHTML={{
                                __html: `<a href='javascript:;'>
                                <span>View All</span>
                                <div class='inline-flex items-center justify-center border-2 border-white rounded-full w-[40px] h-[40px]'>
                                    <img src='/right-arrow.svg' alt="Dream Weave Media" width='23' height='22' />
                                </div>
                            </a>` }} />
                        </Button>
                    </BlurFade>
                    <div className="relative mt-10">
                        <AutoPlayFadeSlider arrows={false} dotsCss="absolute left-0 !gap-0 -bottom-6 xl:bottom-0 [&_button]:w-[50px]">
                            {
                                data.map(({ category, logo, title, para, project, link }, i) => (
                                    <div className="shrink-0 grow-0 basis-full pl-4" key={i}>
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-5 items-center">
                                            <div className="lg:col-span-6 xl:col-span-5">
                                                <span className="text-[18px] font-bold leading-tight text-primary">
                                                    {category}
                                                </span>
                                                <Image src={logo} alt="Dream Weave Media" className="my-5" />
                                                <h3 className="text-[18px] sm:text-[24px] leading-tight font-semibold mb-5">
                                                    {title}
                                                </h3>
                                                <p className="text-[14px] sm:text-[16px] leading-relaxed text-card-foreground mb-5">
                                                    {para}
                                                </p>
                                                <Button asChild variant="linkIcon2">
                                                    <div dangerouslySetInnerHTML={{
                                                        __html: `<a href=${link}>
                                                        <span>View Case Study</span>
                                                        <div class='inline-flex items-center justify-center border-2 border-white rounded-full w-[40px] h-[40px]'>
                                                            <img src='/right-arrow.svg' alt="Dream Weave Media" width='23' height='22' />
                                                        </div>
                                                    </a>` }} />
                                                </Button>
                                            </div>
                                            <div className="mt-5 lg:mt-0 lg:col-span-6 xl:col-span-7">
                                                <motion.div
                                                    initial={{ opacity: 0, filter: "blur(10px)" }}
                                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                                    transition={{
                                                        delay: 0.1,
                                                        duration: 0.5,
                                                        ease: "easeOut",
                                                    }}>
                                                    <Image src={project} alt="Dream Weave Media" className="h-[300px] lg:h-auto object-contain" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </AutoPlayFadeSlider>
                    </div>
                </div>
            </div>
        </section>
    )
}