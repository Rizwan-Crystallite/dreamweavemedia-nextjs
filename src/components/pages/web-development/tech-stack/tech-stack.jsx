"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import front from "media/web-development/front-end.webp"
import back from "media/web-development/back-end.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function TechStack() {
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
              <span className="block text-[45px] sm:text-[80px] md:text-[100px] lg:text-[130px] xl:text-[150px] 2xl:text-[180px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug lg:leading-none animate-text-stroke">
                TECH-STACK!
              </span>
              <h3 className="text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0 mb-5 md:mb-0 capitalize">
                <span>
                  The Tech <span className="text-primary">behind</span> our{" "}
                  <span className="text-primary">Services</span>!
                </span>
              </h3>
            </div>
          </BlurFade>
          <BlurFade delay={0.5 * 2} inView>
            <p className="text-[16px] sm:text-[20px] lg:text-[24px] leading-relaxed max-w-[1000px] font-medium">
              Our developers work with cutting-edge tools and languages to build
              a tech stack that perfectly fits your project.
            </p>
          </BlurFade>
          <div className="bg-[linear-gradient(90deg,_rgba(7,8,12,1)_0%,_rgba(39,233,233,1)_50%,_rgba(0,0,0,1)_100%)] h-[1px] w-full my-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-10 items-center">
            <div>
              <BlurFade delay={0.5} inView>
                <Image
                  src={front}
                  alt="Dream Weave Media"
                  className="md:max-w-[90%] md:mx-auto"
                />
              </BlurFade>
            </div>
            <div>
              <BlurFade delay={0.5 * 2} inView>
                <Image
                  src={back}
                  alt="Dream Weave Media"
                  className="md:max-w-[90%] md:mx-auto"
                />
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
