// Components
import { Button } from "@/components"
// Media
import facebook from "media/facebook.svg"
import x from "media/x.svg"
import linkedin from "media/linkedin.svg"
import instagram from "media/instagram.svg"
import youtube from "media/youtube.svg"
// Next
import Image from "next/image"

const socials = [
    [facebook, "/"],
    [x, "/"],
    [linkedin, "/"],
    [instagram, "/"],
    [youtube, "/"]
]

export default function Hero() {
    return (
        <section>
            <div className="bg-black pt-[150px] pb-[70px] xl:pb-0 xl:pt-0 xl:h-screen flex flex-col justify-center relative z-[1]">
                <div className="container relative z-10">
                    <div className="max-w-[960px]">
                        <h1 className="text-[28px] sm:text-[45px] md:text-[60px] lg:text-[75px] font-bold leading-snug sm:leading-tight mb-3">
                            Connecting <span className="text-primary">BRANDS</span> With <span className="text-primary">GLOBAL</span> Audiences
                        </h1>
                        <p className="text-[16px] leading-relaxed mb-5">
                            You have an idea, we have the talent and resources to turn it into a reality. Dream Weave Media is a globally recognized digital agency elevating brands through ground-breaking user experience and disruptive digital products.
                        </p>
                        <Button asChild variant="linkIcon2">
                            <div dangerouslySetInnerHTML={{
                                __html: `<a href='javascript:;'>
                                    <span>Let’s Discuss</span>
                                    <div class='inline-flex items-center justify-center border-2 border-white rounded-full w-[40px] h-[40px]'>
                                        <img src='/right-arrow.svg' alt="Dream Weave Media" width='23' height='22' />
                                    </div>
                                </a>` }} />
                        </Button>
                    </div>
                    <ul className="xl:absolute xl:top-0 xl:right-2 flex items-center mt-8 xl:mt-0 xl:grid xl:grid-cols-1 gap-4">
                        {
                            socials.map(([icon, link], i) => (
                                <li key={i}>
                                    <a href={link} className="w-[50px] h-[50px] border-2 border-white bg-[#093943] inline-flex items-center justify-center rounded-full [&:hover_img]:brightness-0 [&:hover_img]:invert hover:bg-secondary">
                                        <Image src={icon} alt="Dream Weave Media" />
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}