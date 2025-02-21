// Magic UI
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"

export function TextScroll() {
    return (
        <div className="overflow-hidden">
            <VelocityScroll>
                {
                    [
                        "Digital Marketing",
                        "UI/UX Design",
                        "Video Animation",
                        "Web Development",
                        "Digital Branding"
                    ].map((e, i) => (
                        <span key={i} className="inline-flex items-center gap-2.5">
                            <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                            <span>{e}</span>
                        </span>
                    ))
                }
            </VelocityScroll>
        </div>
    );
}