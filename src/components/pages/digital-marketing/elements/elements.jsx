"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
import e1 from "media/digital-marketing/element-1.webp"
import e2 from "media/digital-marketing/element-2.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function Elements() {
  return (
    <section>
      <div className="py-[100px] relative z-[2]">
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
              <h3 className="text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0 max-w-[1200px]">
                <span>
                  Maximizing Business Growth with{" "}
                  <span className="text-primary">Budget-Friendly</span>,
                  Data-Driven, and AI-enabled{" "}
                  <span className="text-primary">Digital Marketing</span>{" "}
                  Services
                </span>
              </h3>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 gap-x-5 mt-10 items-center">
            <div>
              <BlurFade delay={0.5 * 2} inView>
                <div className="xl:max-w-[600px] grid grid-cols-1 gap-y-4 text-[16px] leading-relaxed">
                  <p className="text-[18px] xl:text-[20px] leading-normal font-semibold">
                    Recent studies have shown that businesses utilizing
                    data-driven marketing strategies experience significant
                    improvements in customer engagement and conversion rates.
                  </p>
                  <ul className="leading-relaxed grid grid-cols-1 gap-y-2.5 list-image-li-dot list-inside">
                    {[
                      "Companies that adopt data-driven marketing are six times more likely to be profitable year-over-year.",
                      "Personalized email campaigns, based on customer data, can increase open rates by 26%.",
                      "Businesses implementing data-driven personalization delivered five to eight times the ROI on marketing spend.",
                      "Organizations with a strong data-driven culture are three times more likely to report significant improvements in decision-making.",
                      "Targeted ads based on user behavior data are twice as effective as non-targeted ads.",
                      "Data-driven companies are 23 times more likely to acquire customers.",
                      "Marketing campaigns informed by data analytics can lead to a 15-20% increase in marketing ROI.",
                      "Utilizing customer data platforms can improve cross-selling and up-selling opportunities by 20-30%.",
                      "Businesses that leverage big data analytics have seen a 10% reduction in overall cost.",
                    ].map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
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
                    Dream Weave Media specializes in creating targeted campaigns
                    that resonate with your audience, fostering deeper
                    connections, and driving conversions.
                  </p>
                  <ul className="leading-relaxed grid grid-cols-1 gap-y-2.5 list-image-li-dot list-inside">
                    {[
                      "Effective targeting has proven to enhance customer engagement and satisfaction.",
                      "Segmented email campaigns have a 14.31% higher open rate than non-segmented ones.",
                      "Personalized web experiences can increase sales by 20%.",
                      "Retargeting ads are 76% more likely to be clicked than regular display ads.",
                      "Social media posts tailored to specific audience segments have 50% higher engagement rates.",
                      "Companies using advanced personalization report a $20 return for every $1 spent.",
                      "Targeted content marketing generates over three times as many leads as traditional marketing.",
                      "Businesses that personalize web experiences see, on average, a 19% uplift in sales.",
                      "Mobile-targeted marketing campaigns have a 98% open rate.",
                      "Location-based targeting can increase conversion rates by up to 2.5 times.",
                    ].map((e, i) => (
                      <li key={i}>{e}</li>
                    ))}
                  </ul>
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
