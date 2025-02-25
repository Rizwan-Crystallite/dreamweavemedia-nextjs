"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import one from "media/locations/cities/1.webp"
import two from "media/locations/cities/2.webp"
import three from "media/locations/cities/3.webp"
import four from "media/locations/cities/4.webp"
import five from "media/locations/cities/5.webp"
import six from "media/locations/cities/6.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

const data = [
    {
        img: one,
        title: "USA",
        para: "79, Madison Ave Manhattan, <br> NY 10001, USA"
    },
    {
        img: two,
        title: "Australia",
        para: "107 Shurvell Rd, Hunchy QLD, <br> 4555, Australia"
    },
    {
        img: three,
        title: "UK",
        para: "3rd Floor, 86-90 Paul Street <br> EC2A 4NE London, UK"
    },
    {
        img: four,
        title: "UAE",
        para: "Tiger Al Yarmook Building, <br> 13th Floor B-block Al Nahda St - <br> Sharjah"
    },
    {
        img: five,
        title: "Canada",
        para: "Suite 3810, Bankers Hall West, <br> 888 - 3rd Street Sw Calgary Alberta"
    },
    {
        img: six,
        title: "Pakistan",
        para: "Plot 26, Block B, SMCH Society, <br> Main Shahrah-e-Faisal <br> Karachi"
    }
]

export default function Locations() {
    return (
        <section>
            <div className="pt-[100px] lg:pt-[300px] pb-[100px] relative z-[2]">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { opacity: { ease: "linear" } } }}
                >
                    <Image src={shade1} alt="Dream Weave Media" priority className="absolute -top-[350px] right-0 -z-[1]" />
                </motion.div>
                <div className="container">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10">
                            <span className="block text-[60px] sm:text-[100px] md:text-[120px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug lg:leading-none animate-text-stroke">
                                Location's
                            </span>
                            <h3 className="text-[40px] sm:text-[50px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0 mb-5 md:mb-0">
                                <span>
                                    Our <span className="text-primary">Global Office</span> Locations!
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.5 * 2} inView>
                        <p className="text-[16px] sm:text-[20px] lg:text-[24px] leading-relaxed max-w-[500px] font-medium">
                            Find your team among 350 specialists in 5 offices from 5 countries.
                        </p>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 gap-y-10">
                        {
                            data.map(({ img, title, para }, i) => (
                                <div key={i} className="group text-center">
                                    <Image src={img} alt="Dream Weave Media" className="h-[450px] object-cover rounded-3xl w-full object-top" />
                                    <h3 className="text-[30px] sm:text-[40px] text-primary font-bold leading-tight my-5" dangerouslySetInnerHTML={{ __html: title }} />
                                    <p className="text-[20px] xl:text-[18px] 2xl:text-[20px] leading-relaxed text-card-foreground transition-all duration-300 group-hover:text-white" dangerouslySetInnerHTML={{ __html: para }} />
                                </div>
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