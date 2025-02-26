"use client"
// Media
import one from "media/key-benefits/1.svg"
import two from "media/key-benefits/2.svg"
import three from "media/key-benefits/3.svg"
import four from "media/key-benefits/4.svg"
import five from "media/key-benefits/5.svg"
import six from "media/key-benefits/6.svg"
// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function KeyBenefits({ data }) {
    return (
        <section>
            <div className="relative py-[50px] z-[3]">
                <div className="container">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10">
                            <span className="block text-[50px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug lg:leading-none animate-text-stroke">
                                Benefits!
                            </span>
                            <h3 className="text-[40px] sm:text-[50px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0">
                                <span>
                                    Key <span className="text-primary">Benefits</span>!
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-10 mt-10">
                        {
                            data?.map(({ icon, title, para }, i) => (
                                <div key={i} className="border-primary rounded-2xl border-2 py-12 px-4 sm:px-6 2xl:px-8">
                                    <BlurFade delay={0.5 * i} inView>
                                        <div dangerouslySetInnerHTML={{ __html: icon }} />
                                        <h3 className="text-[25px] sm:text-[30px] lg:text-[35px] text-primary font-bold leading-tight mb-5 mt-8">
                                            {title}
                                        </h3>
                                        <p className="text-[16px] leading-relaxed text-white">
                                            {para}
                                        </p>
                                    </BlurFade>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}