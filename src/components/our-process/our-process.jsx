// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function OurProcess({ data }) {
    return (
        <section>
            <div className="py-[50px] relative z-[3]">
                <div className="container">
                    <BlurFade delay={0.5} inView>
                        <div className="relative z-10">
                            <span className="block text-[50px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[170px] 2xl:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug lg:leading-none animate-text-stroke">
                                Process
                            </span>
                            <h3 className="text-[40px] sm:text-[50px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-0 md:bottom-0 md:h-full md:flex md:items-center md:right-0 md:left-0">
                                <span>
                                    Our <span className="text-primary">Process</span>!
                                </span>
                            </h3>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-10 mt-10">
                        {
                            data?.map(({ title, list }, i) => (
                                <div key={i} className="relative  bg-card rounded-2xl py-10 px-4 2xl:px-6 hover:bg-popover transition-all duration-300 hover:bg-blend-color hover:shadow-[0px_10px_10px_rgba(0,_0,_0,_0.1)] hover:backdrop-blur-[2px] border-2 hover:border-primary border-transparent">
                                    <h3 className="text-[25px] lg:text-[30px] text-primary font-bold leading-tight mb-5" dangerouslySetInnerHTML={{ __html: title }} />
                                    <ul className="text-[16px] leading-relaxed grid grid-cols-1 gap-3">
                                        {
                                            list.map((e, i) => (
                                                <li key={i} className="flex items-center gap-2.5">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.8043 0.69031C14.5442 0.263145 15.4558 0.263145 16.1957 0.69031L26.7947 6.80969C27.5346 7.23686 27.9904 8.02629 27.9904 8.88062V21.1194C27.9904 21.9737 27.5346 22.7631 26.7947 23.1903L16.1957 29.3097C15.4558 29.7369 14.5442 29.7369 13.8043 29.3097L3.20527 23.1903C2.4654 22.7631 2.00962 21.9737 2.00962 21.1194V8.88062C2.00962 8.02629 2.4654 7.23686 3.20527 6.80969L13.8043 0.69031Z" fill="#92F3F4" />
                                                        <path d="M10 16.0047L12.9953 19L20.9954 11" stroke="#1B2025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <span className="w-[calc(100%-40px)]">{e}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}