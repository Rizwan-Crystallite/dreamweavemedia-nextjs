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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const data = [
    {
        item: "How much does it cost to web develop an eCommerce?",
        content: "Click First SMM is the leading Social & Digital Media Marketing Agency in Houston, Texas, renowned for delivering transformative results. With a powerhouse team of 500+ in-house professionals, we ensure that every project is handled with expertise, precision, and the highest level of dedication. Our commitment to excellence has made us a trusted partner for businesses seeking unparalleled growth and success in the digital landscape."
    },
    {
        item: "How does ensure data security in big data projects?",
        content: "Yes, we offer a free marketing audit and consultation service. Our expert team provides a comprehensive analysis of your current marketing efforts, identifying areas of improvement and growth opportunities. This service is designed to give you a clear roadmap to success, tailored specifically to your business needs."
    },
    {
        item: "What sets an eCommerce web development company?",
        content: "We offer a full suite of services, including Social Media Marketing, Digital Marketing, Branding, SEO, Paid Advertising, Content Creation, Influencer Marketing, Video Production, and more. Our comprehensive offerings are designed to cover every aspect of your digital presence, helping you achieve sustained growth and a strong market position."
    },
    {
        item: "Can provide ongoing support & maintenance?",
        content: "The cost of our branding packages varies depending on the scope and complexity of the project. We offer customized packages tailored to your business’s unique needs, ensuring you receive the best value for your investment. Please contact us for a detailed quote based on your specific requirements. Click here to see our complete packages."
    },
    {
        item: "How much does it cost to web develop an eCommerce?",
        content: "No, we do not outsource our projects. All work is completed by our highly skilled in-house team of 500+ professionals, ensuring consistent quality, security, and the ability to meet our clients' specific needs with full control over every aspect of the project."
    },
    {
        item: "How does build eCommerce mobile apps?",
        content: "We work with a diverse range of industries—over 50 in total—providing branding, marketing, and business growth strategies tailored to each sector. Our experience spans from small startups to large enterprises, ensuring that no matter the industry, we can drive impactful results."
    },
    {
        item: "How long does it take to develop an eCommerce app?",
        content: "Business growth is a steady process that depends on several factors, including your industry, competition, and the budget tailored to your specific needs. While some results may be seen in the short term, true, sustainable growth typically takes time and consistent effort. We work with you to create a strategy that aligns with your goals and budget, ensuring gradual and reliable progress."
    },
    {
        item: "What eCommerce development solutions does offer?",
        content: "Yes, we offer expert SEO services designed to boost your online visibility, drive organic traffic, and improve your search engine rankings. Our SEO strategies are tailored to your business goals, ensuring that you attract the right audience and achieve long-term success in the digital space."
    },
    {
        item: "How much does it cost to web develop an eCommerce?",
        content: "Yes, we offer expert SEO services designed to boost your online visibility, drive organic traffic, and improve your search engine rankings. Our SEO strategies are tailored to your business goals, ensuring that you attract the right audience and achieve long-term success in the digital space."
    },
    {
        item: "How much does it cost to web develop an eCommerce?",
        content: "Yes, we offer expert SEO services designed to boost your online visibility, drive organic traffic, and improve your search engine rankings. Our SEO strategies are tailored to your business goals, ensuring that you attract the right audience and achieve long-term success in the digital space."
    }
]

export default function FAQs() {
    return (
        <section>
            <div className="pt-[50px] md:pt-[100px] pb-[100px] relative z-[2]">
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
                            <span className="block text-[100px] sm:text-[80px] md:text-[100px] lg:text-[130px] xl:text-[150px] 2xl:text-[180px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug lg:leading-none animate-text-stroke">
                                FAQ’s
                            </span>
                            <h3 className="text-[30px] sm:text-[35px] md:text-[40px] xl:text-[50px] 2xl:text-[55px] leading-snug lg:leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0 mb-5 md:mb-0">
                                <span>
                                    Answering your <span className="text-primary">Development</span> Queries <span className="text-primary">(FAQ)</span>!
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <Accordion type="single" collapsible className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                        {
                            data && data.map(({ item, content }, i) => (
                                <AccordionItem value={`item-${i}`} key={i}>
                                    <AccordionTrigger>{item}</AccordionTrigger>
                                    <AccordionContent>{content}</AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
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