// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

const data = [
    {
        title: "Conceptualization",
        list: "Market understanding <br /> Localization"
    },
    {
        title: "Product Design",
        list: "User flow <br /> Designing"
    },
    {
        title: "Development",
        list: "Android App <br /> iOS App"
    },
    {
        title: "Deployment",
        list: "Play Store publishing <br /> App Store publishing"
    }
]

export default function OurProcess() {
    return (
        <section>
            <div className="xl:py-[50px] relative z-[3]">
                <div className="container">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10">
                            <span className="block text-[50px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug lg:leading-none animate-text-stroke">
                                Process
                            </span>
                            <h3 className="text-[40px] sm:text-[45px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0">
                                <span>
                                    Our <span className="text-primary">Services</span> Provided!
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10 mt-10">
                        {
                            data?.map(({ title, list }, i) => (
                                <div key={i} className="relative z-[1]  bg-card rounded-2xl py-10 px-4 2xl:px-6 hover:bg-popover transition-all duration-300 hover:bg-blend-color hover:shadow-[0px_10px_10px_rgba(0,_0,_0,_0.1)] hover:backdrop-blur-[2px] border-2 hover:border-primary border-transparent text-center">
                                    <span className="absolute text-[100px] font-bold text-white opacity-20 left-0 right-0 text-center top-0 bottom-0 flex items-center justify-center -z-[1]">{i + 1}</span>
                                    <h3 className="text-[25px] 2xl:text-[28px] text-primary font-bold leading-tight mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                                    <p className="text-[20px] leading-relaxed" dangerouslySetInnerHTML={{__html: list}} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}