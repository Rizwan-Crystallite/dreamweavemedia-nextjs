"use client"
// Media
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
// Framer
import { motion } from "framer-motion"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"
// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const data = [
  {
    item: "How much does it cost to develop an eCommerce website?",
    content: "Costs vary based on features, design, and complexity.",
  },
  {
    item: "How do you ensure data security in big data projects?",
    content:
      " We use robust encryption, regular audits, and secure coding practices.",
  },
  {
    item: "What sets an eCommerce web development company apart?",
    content:
      "Our expertise, custom solutions, and reliable support make the difference.",
  },
  {
    item: "Do you provide ongoing support & maintenance?",
    content:
      "Yes, we offer continuous support and regular updates after launch.",
  },
  {
    item: "How do you build eCommerce mobile apps?",
    content: "We use agile methods and best-in-class development practices.",
  },
  {
    item: "How long does it take to develop an eCommerce app?",
    content: "Typically, 3–6 months, depending on the project’s scope.",
  },
  {
    item: "What eCommerce development solutions do you offer?",
    content:
      "We provide custom websites, mobile apps, CMS integrations, and more.",
  },
]

export default function FAQs() {
  return (
    <section>
      <div className="pt-[50px] md:pt-[100px] pb-[100px] relative z-[2]">
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
              <span className="block text-[100px] sm:text-[80px] md:text-[100px] lg:text-[130px] xl:text-[150px] 2xl:text-[180px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug lg:leading-none animate-text-stroke">
                FAQ’s
              </span>
              <h3 className="text-[30px] sm:text-[35px] md:text-[40px] xl:text-[50px] 2xl:text-[55px] leading-snug lg:leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0 mb-5 md:mb-0">
                <span>
                  Frequently Asked{" "}
                  <span className="text-primary">Questions</span>
                </span>
              </h3>
            </div>
          </BlurFade>
          <Accordion
            type="single"
            collapsible
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10"
          >
            {data &&
              data.map(({ item, content }, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                  <AccordionTrigger>{item}</AccordionTrigger>
                  <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
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
