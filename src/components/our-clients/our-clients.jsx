// Next
import Image from "next/image"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"
// Media
import one from "media/our-clients/1.webp"
import two from "media/our-clients/2.webp"
import three from "media/our-clients/3.webp"
import four from "media/our-clients/4.webp"
import five from "media/our-clients/5.webp"
import six from "media/our-clients/6.png"
import seven from "media/our-clients/7.png"
import eight from "media/our-clients/8.png"
import nine from "media/our-clients/9.png"
import ten from "media/our-clients/10.png"
import eleven from "media/our-clients/11.png"
import twelve from "media/our-clients/12.png"
import thirteen from "media/our-clients/13.png"
import fourteen from "media/our-clients/14.png"
import fifteen from "media/our-clients/15.png"
import sixteen from "media/our-clients/16.png"
import seventeen from "media/our-clients/17.png"
import eighteen from "media/our-clients/18.png"
import nineteen from "media/our-clients/19.png"
import twenty from "media/our-clients/20.png"
import twentyone from "media/our-clients/21.png"
import twentytwo from "media/our-clients/22.png"
import twentythree from "media/our-clients/23.png"
import twentyfour from "media/our-clients/24.png"
import twentyfive from "media/our-clients/25.png"

export default function OurClients() {
    return (
        <section>
            <div className="pb-[100px] relative z-[2]" id="partners">
                <div className="container">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10 mb-10">
                            <span className="block text-[40px] sm:text-[70px] md:text-[100px] lg:text-[120px] xl:text-[150px] 2xl:text-[160px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug animate-text-stroke text-center lg:text-left">
                                Collaborations
                            </span>
                            <h3 className="text-[50px] md:text-[50px] lg:text-[60px] leading-tight font-bold sm:absolute sm:top-0 sm:bottom-0 sm:h-full sm:flex sm:items-center text-center lg:text-left sm:right-0 sm:left-0">
                                <span>
                                    Our <span className="text-primary">Clients</span>
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 md:gap-10">
                        {
                            [six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty,twentyone,twentytwo,twentythree,twentyfour,twentyfive].map((e, i) => (
                                <div key={i} className="basis-1/5 border-2 border-gray-500 h-full transition-all duration-300 hover:border-primary p-3 rounded-lg group">
                                    <BlurFade delay={0.5 * 2} inView>
                                        <Image src={e} alt="Dream Weave Media" className="xs:max-w-[70px] transition-all duration-300 grayscale group-hover:grayscale-0 mx-auto" />
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