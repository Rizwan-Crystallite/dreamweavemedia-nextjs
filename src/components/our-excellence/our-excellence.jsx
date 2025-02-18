// Magic UI
import { NumberTicker } from "@/components/magicui/number-ticker"

export default function OurExcellence() {
    return (
        <section>
            <div className="pt-[50px] pb-[100px]">
                <div className="container">
                    <div className="relative z-10 md:text-center mb-10 md:mb-28 xl:mb-0">
                        <span className="inline-block text-[45px] sm:text-[70px] md:text-[90px] lg:text-[125px] xl:text-[150px] 2xl:text-[180px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug animate-text-stroke">
                            Our Excellence
                        </span>
                        <h3 className="text-[38px] sm:text-[45px] md:text-[70px] lg:text-[50px] xl:text-[60px] leading-tight font-bold md:absolute md:top-8 lg:top-12 xl:top-14 2xl:top-24 left-0 right-0">
                            Excellence Is Our <span className="text-primary">Bare Minimum.</span>
                        </h3>
                    </div>
                    <p className="md:text-center text-[20px] md:text-[26px] lg:text-[32px] xl:text-[40px] max-w-[1200px] md:mx-auto text-primary leading-relaxed mb-14">
                        We are a digital transformation powerhouse trusted by leading global names. With 15+ years of experience and 350+ tech innovators, we build a digital infrastructure that empowers our clients to lead their industries.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-evenly gap-x-5 gap-y-10">
                        {
                            [
                                ["1300", "Completed Projects"],
                                ["350", "Talented Team"],
                                ["600", "Satisfied Clients"]
                            ].map(([num, txt], i) => (
                                <div key={i} className="text-center">
                                    <NumberTicker value={num} />
                                    <p className="text-[18px] lg:text-[20px] mt-5 text-primary leading-relaxed">
                                        {txt}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}