// Components
import { Button } from "@/components"
// Magic UI
import { BlurFade } from "@/components/magicui/blur-fade"

export default function PullCTA() {
    return (
        <section>
            <div className="pt-[50px] pb-[100px]">
                <div className="container">
                    <div className="text-center">
                        <BlurFade delay={0.5} inView>
                            <span className="text-[18px] font-light leading-tight mb-5 inline-block">Pull The Trigger!</span>
                        </BlurFade>
                        <BlurFade delay={0.5 * 2} inView>
                            <h2 className="text-[30px] sm:text-[50px] lg:text-[70px] font-bold leading-tight">
                                <span className="text-primary">Initiate</span> Your Project <br className="hidden sm:block" /> The Moment Has <span className="text-primary">Arrived.</span>
                            </h2>
                        </BlurFade>
                        <BlurFade delay={0.5 * 3} inView>
                            <Button asChild className="mx-auto mt-5">
                                <div dangerouslySetInnerHTML={{ __html: `<a href='javascript:;'>Get In Touch</a>` }} />
                            </Button>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    )
}