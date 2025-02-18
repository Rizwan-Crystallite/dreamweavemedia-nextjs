// Shadcn
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"
// React
import { useState } from "react"
// Next
import NextLink from "next/link"
import { usePathname } from "next/navigation"
// Lucide Icons
import { Menu } from "lucide-react"

const Link = ({ text, href }) => {
    const pathname = usePathname()
    const isActive = href === pathname

    return (
        <NextLink href={href} className={`${isActive ? "text-primary" : ""} hover:text-primary transition-all duration-300 text-[16px] leading-loose`}>
            {text}
        </NextLink>
    )
}

const services = [
    { text: "UI/UX Design", href: "/ui-ux-design" },
    { text: "Digital Branding", href: "/digital-branding" },
    { text: "Ecommerce Development", href: "/ecommerce-development" },
    { text: "Video Animation", href: "/video-animation" },
    { text: "Digital Marketing", href: "/digital-marketing" },
    { text: "Web Development", href: "/web-development" }
]

export default function MobileNavbar() {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex flex-col items-center ml-auto md:mr-10">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className="bg-white rounded-full p-2">
                    <Menu className="h-8 w-8 text-secondary" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription></SheetDescription>
                    </SheetHeader>
                    <ul>
                        {
                            [
                                ["Home", "/"],
                                ["About", "/about"],
                                ["Services", ""],
                                ["Case Studies", "/case-studies"],
                                ["Careers", "/careers"],
                                ["Blog", "/blog"]
                            ].map(([text, link], i) => (
                                text === "Services" ? (
                                    <Sheet key={i}>
                                        <SheetTrigger>
                                            Services
                                        </SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader>
                                                <SheetTitle></SheetTitle>
                                                <SheetDescription></SheetDescription>
                                            </SheetHeader>
                                            <ul>
                                                {
                                                    services.map(({ text, href }, i) => (
                                                        <li key={i} onClick={(prev) => (setOpen(!prev))}>
                                                            <Link href={href} text={text} />
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </SheetContent>
                                    </Sheet>
                                ) : (
                                    <li key={i} onClick={(prev) => (setOpen(!prev))}>
                                        <Link href={link} text={text} />
                                    </li>
                                )
                            ))
                        }
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    )
}