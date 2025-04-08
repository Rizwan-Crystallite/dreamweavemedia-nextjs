"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import e1 from "media/web-development/element-1.webp"
import e2 from "media/web-development/element-2.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function Elements() {
  return (
    <section>
      <div className="pt-[100px] pb-[100px] relative z-[2]">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { opacity: { ease: "linear" } },
          }}
        >
          <Image
            src={shade1}
            alt="Dream Weave Media"
            priority
            className="absolute -top-[350px] right-0 -z-[1]"
          />
        </motion.div>
        <div className="container">
          <BlurFade delay={0.5} inView>
            <div className="relative z-10">
              <span className="block text-[50px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug lg:leading-none animate-text-stroke">
                Our Work!
              </span>
              <h3 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0 max-w-[1000px]">
                <span>
                  Let's have a look at some of{" "}
                  <span className="text-primary">our successful</span> projects.
                </span>
              </h3>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-5 mt-10 items-center">
            <div>
              <BlurFade delay={0.5 * 2} inView>
                <div className="xl:max-w-[600px] grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed">
                  <p className="text-[18px] xl:text-[20px] leading-normal font-semibold">
                    Take a look at some projects we’re proud of. We offer every
                    service you need to build a complete web-based product,
                    including:
                  </p>
                  <ul className="leading-relaxed grid grid-cols-1 gap-y-2.5 list-image-li-dot list-inside">
                    {[
                      "Website Development",
                      "Web Application Development",
                      "eCommerce Solutions",
                      "Custom Content Management Systems",
                      "No-code & Low-code Development",
                      "Ideation, Market Research, Wireframing, and Prototyping",
                      "Project Management, UI/UX Design, Coding, and QA Testing",
                      "Cybersecurity, Consulting, Publishing, Maintenance, and Support",
                    ].map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>
                      Our goal is to create solutions that match your business
                      needs perfectly
                    </strong>
                    , whether you’re starting fresh or boosting an existing
                    site.
                  </p>
                </div>
              </BlurFade>
            </div>
            <div>
              <BlurFade delay={0.5 * 3} inView>
                <Image src={e1} alt="Dream Weave Media" className="mx-auto" />
              </BlurFade>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-5 mt-20 items-center">
            <div>
              <BlurFade delay={0.5} inView>
                <Image src={e2} alt="Dream Weave Media" className="mx-auto" />
              </BlurFade>
            </div>
            <div className="order-first lg:order-last">
              <BlurFade delay={0.5} inView>
                <div className="xl:max-w-[600px] ml-auto grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed">
                  <p className="text-[18px] xl:text-[20px] leading-normal font-semibold">
                    Our promise goes beyond just delivering a product—we build a
                    partnership. We work closely with you to bring your vision
                    to life while staying on time and on budget. Our approach is
                    rooted in transparency, innovation, and accountability.
                  </p>
                  <ul className="leading-relaxed grid grid-cols-1 gap-y-2.5 list-image-li-dot list-inside">
                    {[
                      "Transparent Process: We keep you informed every step of the way.",
                      "Tailored Solutions: Every project is unique, and our strategies are customized just for you.",
                      "Ongoing Support: Our relationship continues even after launch, with reliable maintenance and updates.",
                      "Innovation at Heart: We use the latest technology to keep your business ahead of the curve.",
                    ].map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>
                      Experience the difference that a truly dedicated team can
                      make.
                    </strong>{" "}
                    Let’s create something extraordinary together.
                  </p>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { opacity: { ease: "linear" } },
          }}
        >
          <Image
            src={shade2}
            alt="Dream Weave Media"
            className="absolute -bottom-[350px] left-0 -z-[1]"
          />
        </motion.div>
      </div>
    </section>
  )
}
