// Media
import bg from "media/services-bg.webp"
import shade1 from "media/shade-1.webp"
import shade2 from "media/shade-2.webp"
// Next
import Image from "next/image"
// Components
import { Button } from "@/components"

const data = [
    {
        title: "Web <br> Development",
        para: "Get an edge over your competitors and boost your profitability with magnetic web experiences. Dream Weave Media is the choice of the UAE’s leading brands for website design and web development services in Dubai. Whether it’s custom web development or WordPress web development, we make sure you get the best of both worlds in the form of a responsive, secure, and high-performance website.",
        link: "/web-development"
    },
    {
        title: "Digital <br> Marketing",
        para: "Get an edge over your competitors and boost your profitability with magnetic web experiences. Dream Weave Media is the choice of the UAE’s leading brands for website design and web development services in Dubai. Whether it’s custom web development or WordPress web development, we make sure you get the best of both worlds in the form of a responsive, secure, and high-performance website.",
        link: "/digital-marketing"
    },
    {
        title: "Video <br> Animation",
        para: "Get an edge over your competitors and boost your profitability with magnetic web experiences. Dream Weave Media is the choice of the UAE’s leading brands for website design and web development services in Dubai. Whether it’s custom web development or WordPress web development, we make sure you get the best of both worlds in the form of a responsive, secure, and high-performance website.",
        link: "/video-animation"
    },
    {
        title: "Ecommerce <br> Development",
        para: "Get an edge over your competitors and boost your profitability with magnetic web experiences. Dream Weave Media is the choice of the UAE’s leading brands for website design and web development services in Dubai. Whether it’s custom web development or WordPress web development, we make sure you get the best of both worlds in the form of a responsive, secure, and high-performance website.",
        link: "/ecommerce-development"
    },
    {
        title: "Digital <br> Branding",
        para: "Get an edge over your competitors and boost your profitability with magnetic web experiences. Dream Weave Media is the choice of the UAE’s leading brands for website design and web development services in Dubai. Whether it’s custom web development or WordPress web development, we make sure you get the best of both worlds in the form of a responsive, secure, and high-performance website.",
        link: "/digital-branding"
    },
    {
        title: "UI/UX <br> Design",
        para: "Get an edge over your competitors and boost your profitability with magnetic web experiences. Dream Weave Media is the choice of the UAE’s leading brands for website design and web development services in Dubai. Whether it’s custom web development or WordPress web development, we make sure you get the best of both worlds in the form of a responsive, secure, and high-performance website.",
        link: "/ui-ux-design"
    }
]

export default function Services() {
    return (
        <section>
            <div className="relative z-[1] before:content-[''] before:inset-0 before:w-full before:absolute before:h-full before:[mix-blend-mode:overlay;] before:-z-[1] before:bg-background before:opacity-75 py-[100px]">
                <Image src={bg} alt="Dream Weave Media" fill priority className="object-cover object-center opacity-75 -z-[2]" />
                <Image src={shade1} alt="Dream Weave Media" priority className="absolute -top-[350px] right-0 -z-[1]" />
                <div className="container">
                    <div className="relative z-10">
                        <span className="inline-block text-[70px] sm:text-[100px] md:text-[150px] lg:text-[200px] font-bold stroke-white [-webkit-text-stroke:3px_#0BCCCF] [-webkit-text-fill-color:transparent;] opacity-10 leading-snug animate-text-stroke">
                            Services
                        </span>
                        <h3 className="text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-tight font-bold sm:absolute sm:top-7 md:top-14 lg:top-24 mb-10">
                            Core Services We Provide
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {
                            data.map(({ title, para, link }, i) => (
                                <div key={i} className="bg-card rounded-2xl py-10 px-4 sm:px-6 hover:bg-accent transition-all duration-300 group hover:bg-blend-color hover:shadow-[0px_10px_10px_rgba(0,_0,_0,_0.1)] hover:backdrop-blur-[2px] border-2 hover:border-primary border-transparent">
                                    <h3 className="text-[30px] sm:text-[40px] text-primary font-bold leading-tight mb-5" dangerouslySetInnerHTML={{ __html: title }} />
                                    <p className="text-[16px] leading-relaxed text-card-foreground transition-all duration-300 group-hover:text-white mb-5">{para}</p>
                                    <Button asChild className="text-card-foreground group-hover:text-white" variant="linkIcon2">
                                        <div dangerouslySetInnerHTML={{
                                            __html: `<a href=${link}>
                                                <span>Learn More</span>
                                                <div class='inline-flex items-center justify-center border-2 border-white rounded-full w-[40px] h-[40px]'>
                                                    <img src='/right-arrow.svg' alt="Dream Weave Media" width='23' height='22' />
                                                </div>
                                            </a>` }} />
                                    </Button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Image src={shade2} alt="Dream Weave Media" priority className="absolute -bottom-[350px] left-0 -z-[1]" />
            </div>
        </section>
    )
}