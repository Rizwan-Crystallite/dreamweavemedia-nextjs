"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import e1 from "media/ui-ux-design/element-1.webp"
import e2 from "media/ui-ux-design/element-2.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function Elements() {
  return (
    <section>
      <div className="pt-[100px] relative z-[2]">
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
              <h3 className="text-[30px] sm:text-[40px] lg:text-[50px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0 max-w-[1000px]">
                <span>
                  We Create Seamless,{" "}
                  <span className="text-primary">
                    User-Friendly Experiences
                  </span>{" "}
                  That Keep Users Engaged, Build Trust, and{" "}
                  <span className="text-primary">Drive Conversions</span>.
                </span>
              </h3>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-5 mt-10 items-center">
            <div>
              <BlurFade delay={0.5 * 2} inView>
                <div className="xl:max-w-[600px] grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed">
                  <p className="text-[18px] xl:text-[20px] leading-normal font-semibold">
                    From wireframes to final design, we craft UI/UX solutions
                    that make every interaction smooth, intuitive, and
                    result-driven.
                  </p>
                  <ul className="leading-relaxed grid grid-cols-1 gap-y-2.5 list-image-li-dot list-inside">
                    {[
                      "Website Development",
                      "Web Application Development",
                      "eCommerce Solutions Development",
                      "Dedicated Content Management System Development",
                      "No-code Development & Low-code Development",
                      "Ideation - Market Research - Wireframing - Prototyping",
                      "Project Management - UI Design - UX Design - Coding - QA Testing",
                      "Cybersecurity - Consulting - Publishing - Maintenance - Support",
                    ].map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>
                      The role of a web development company is to seek and build
                      solutions that can best fulfill the client’s unique
                      business goals.
                    </strong>
                     With the right web development services, you’ll be able to
                    build a successful product from scratch or increase the
                    performance of an existing one.
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
                    Your Website Should Feel Effortless—Because That’s What
                    Users Expect.
                  </p>
                  <ul className="leading-relaxed grid grid-cols-1 gap-y-2.5 list-image-li-dot list-inside">
                    {[
                      "Website Development",
                      "Web Application Development",
                      "eCommerce Solutions Development",
                      "Dedicated Content Management System Development",
                      "No-code Development & Low-code Development",
                      "Ideation - Market Research - Wireframing - Prototyping",
                      "Project Management - UI Design - UX Design - Coding - QA Testing",
                      "Cybersecurity - Consulting - Publishing - Maintenance - Support",
                    ].map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>
                      A frustrating experience can cost you potential customers.{" "}
                    </strong>
                    If your website feels slow, cluttered, or hard to navigate,
                    visitors will leave before they even see what you offer. We
                    design smooth, intuitive interfaces that make every click
                    easy and every action seamless, so users stay longer and
                    convert faster.
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
