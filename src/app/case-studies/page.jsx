// Components
import { CaseStudies, PullCTA } from "@/components"
// Next
import Link from "next/link"

export default function Page() {
    return (
        <>
            <section>
                <div className="">
                    <div className="container h-[250px] relative">
                        <h1 className="absolute inset-0 flex items-end pb-[50px] text-[20px] justify-start">
                            <Link href="/" className="hover:text-primary">Home</Link>&nbsp;/&nbsp;
                            <span className="text-primary">Case Studies</span>
                        </h1>
                    </div>
                </div>
            </section>
            <CaseStudies />
            <PullCTA />
        </>
    )
}