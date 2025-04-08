// Media
import one from "media/our-work/1.webp"
import two from "media/our-work/2.webp"
import three from "media/our-work/3.webp"
import four from "media/our-work/4.webp"
import five from "media/our-work/5.png"
import six from "media/our-work/6.png"
import seven from "media/our-work/7.png"
import eight from "media/our-work/8.png"
import nine from "media/our-work/9.png"
import ten from "media/our-work/10.png"
import eleven from "media/our-work/11.png"
import twelve from "media/our-work/12.png"
// Next
import Image from "next/image"
// Components
import { AutoPlaySlider, Button } from "@/components"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

const data = [
    {
        img: twelve,
        title: "Eurotunnel le shuttle",
        para: "Built a bright and easy-to-use website for Eurotunnel le shuttle so travelers can learn about crossing the Channel by train. Our design makes booking trips simple and fast for everyone."
    },
    {
        img: five,
        title: "Ford",
        para: "Helped Ford share their newest car models and exciting stories online in a friendly way. By creating eye-catching pages, we made it fun for people to explore their vehicles and features."
    },
    {
        img: three,
        title: "Le Kilt",
        para: "Teamed up with Le Kilt to showcase their stylish clothing collections in a modern, easy-to-browse layout. Our work helps shoppers see how each piece can fit into their own unique style."
    },
    {
        img: six,
        title: "Hilliard Law",
        para: "Created a clear and helpful website for Hilliard Law so clients can quickly find the legal answers they need. Our simple design makes it easier to understand services and get the right support."
    },
    {
        img: seven,
        title: "GAP",
        para: "Worked with GAP to share comfy and cool clothing options that everyone can enjoy. By using happy images and simple messages, we showed how GAP brings people together with fun fashion."
    },
    {
        img: eight,
        title: "Founder",
        para: "Helped Founder support new businesses by building a place where ideas can grow and turn into success. Our tools make it easier for budding entrepreneurs to learn, plan, and launch their big dreams."
    },
    {
        img: three,
        title: "Magnet",
        para: "Partnered with Magnet to attract more customers by designing user-friendly pages that show off their best products. Our easy layout and clear details keep visitors interested and ready to buy."
    },
    {
        img: nine,
        title: "Payoneer",
        para: "Worked with Payoneer to make sending and receiving money around the world feel safe and simple. Our design shows people how easy it is to manage their funds with just a few clicks."
    },
    {
        img: ten,
        title: "City Of Norfolk",
        para: "Helped the City Of Norfolk share news, events, and stories in a fun, friendly way. Our clear design makes it easy for neighbors to stay connected and learn about local happenings."
    },
    {
        img: eleven,
        title: "Freelancer",
        para: "We joined forces with Freelancer to connect skilled workers with the jobs they love. Our improvements make it simple for people to show off their talents and find the right projects fast."
    },
]

export default function OurWork() {
    return (
        <section>
            <div className="overflow-hidden py-[100px] relative z-[2]" id="wokr">
                <div className="container">
                    <div className="md:flex items-center justify-between">
                        <BlurFade delay={0.5} inView>
                            <div className="relative z-10">
                                <span className="inline-block text-[70px] sm:text-[100px] lg:text-[150px] xl:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug animate-text-stroke">
                                    Portfolio
                                </span>
                                <h3 className="text-[40px] md:text-[50px] lg:text-[60px] leading-tight font-bold sm:absolute sm:top-7 lg:top-14 xl:top-24 mb-10">
                                    Our <span className="text-primary">Work</span>!
                                </h3>
                            </div>
                        </BlurFade>
                        <BlurFade delay={0.5 * 2} inView>
                            <Button asChild variant="linkIcon2" className="mb-10 md:mb-0">
                                <div dangerouslySetInnerHTML={{
                                    __html: `<a href='javascript:;'>
                                <span>View All</span>
                                <div class='inline-flex items-center justify-center border-2 border-white rounded-full w-[40px] h-[40px]'>
                                    <img src='/right-arrow.svg' alt="Dream Weave Media" width='23' height='22' />
                                </div>
                            </a>` }} />
                            </Button>
                        </BlurFade>
                    </div>
                    <AutoPlaySlider emblaWrapper="flex [margin-left:calc(2rem_*_-1)]" wrapperClasses="overflow-visible" align="start" dots={false}>
                        {
                            data.map(({ img, title, para }, i) => (
                                <div key={i} className="grow-0 shrink-0 basis-[300px] sm:basis-[400px] pl-8 group">
                                    <div className="h-[300px] sm:h-[400px] w-[300px] sm:w-[400px] rounded-3xl overflow-hidden group-hover:rounded-full transition-all duration-300 mb-5">
                                        <Image src={img} alt="Dream Weave Media" className="w-full h-full object-cover object-center transition-all duration-300" />
                                    </div>
                                    <h3 className="text-[30px] sm:text-[40px] text-primary font-bold leading-tight mb-5" dangerouslySetInnerHTML={{ __html: title }} />
                                    <p className="text-[16px] leading-relaxed text-card-foreground transition-all duration-300 group-hover:text-white">{para}</p>
                                </div>
                            ))
                        }
                    </AutoPlaySlider>
                </div>
            </div>
        </section>
    )
}