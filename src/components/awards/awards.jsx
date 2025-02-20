// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"
// Media
import one from "media/awards/1.webp"
import two from "media/awards/2.webp"
import three from "media/awards/3.webp"
import four from "media/awards/4.webp"
// Next
import Image from "next/image"
// Components
import { AutoScrollSlider } from "@/components"

const data = [
    {
        text: "Recognized Among Top Animation Companies 2024",
        logo: one
    },
    {
        text: "Recognized Among Top Animation Companies 2024",
        logo: two
    },
    {
        text: "Recognized Among Top Animation Companies 2024",
        logo: three
    },
    {
        text: "Recognized Among Top Animation Companies 2024",
        logo: four
    },
    {
        text: "Recognized Among Top Animation Companies 2024",
        logo: one
    },
    {
        text: "Recognized Among Top Animation Companies 2024",
        logo: two
    },
    {
        text: "Recognized Among Top Animation Companies 2024",
        logo: three
    },
    {
        text: "Recognized Among Top Animation Companies 2024",
        logo: four
    }
]

export default function Awards() {
    return (
        <section>
            <div className="relative z-[2] pb-[100px]">
                <div className="container">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10 mb-5 md:mb-0">
                            <span className="inline-block text-[55px] sm:text-[70px] md:text-[150px] lg:text-[180px] xl:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-none animate-text-stroke">
                                Award’s
                            </span>
                            <h3 className="text-[24px] sm:text-[35px] md:text-[45px] lg:text-[50px] xl:text-[60px] leading-snug sm:leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 max-w-[1000px] inline-flex justify-center h-full">
                                <span>
                                    We Transform Businesses Through <span className="text-primary">Design Innovation.</span>
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.5 * 2} inView>
                        <p className="text-[16px] sm:text-[18px] lg:text-[24px] leading-relaxed max-w-[950px]">
                            A full-spectrum Design &development company empowering enterprises with visionary digital transformations that set new benchmarks for innovation.
                        </p>
                    </BlurFade>
                </div>
                <AutoScrollSlider wrapperCss="mt-10">
                    {
                        data.map(({ text, logo }, i) => (
                            <div key={i} className="grow-0 shrink-0 basis-auto pl-4">
                                <div className="w-[300px] sm:w-[360px] rounded-2xl py-20 px-7 sm:px-14 relative">
                                    <div className="absolute inset-0 rounded-2xl border-[4px] border-transparent bg-[linear-gradient(270deg,_#2C2F35_0%,_rgba(35,_37,_40,_0)_98.83%)]"></div>
                                    <Image src={logo} alt="Dream Weave Media" className="mb-5" />
                                    <p className="text-[#757575] text-[16px]">{text}</p>
                                </div>
                            </div>
                        ))
                    }
                </AutoScrollSlider>
            </div>
        </section>
    )
}