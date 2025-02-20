"use client"
// Components
import { Button, WhiteLogo } from "@/components"
import Navbar from "./navbar"
import MobileNavbar from "./mobile-navbar"
// Framer
import { motion } from "framer-motion"
// React
import { useEffect, useState } from "react"
// Magic UI
import { ScrollProgress } from "@/components/magicui/scroll-progress"

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isSticky = window.scrollY > 5
            setIsSticky(isSticky)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const handleIsMobile = () => {
            setIsMobile(window.innerWidth <= 1199)
        }
        handleIsMobile()
        window.addEventListener("resize", handleIsMobile)
        return () => {
            window.removeEventListener("resize", handleIsMobile)
        }
    }, [])
    return (
        <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className={`fixed top-0 left-0 right-0 z-50 ${isSticky ? "bg-card" : ""}`} >
            <div className="py-9">
                <div className="container">
                    <div className="flex items-center">
                        <WhiteLogo />
                        {
                            isMobile ? <MobileNavbar /> : <Navbar />
                        }
                        <div className="hidden md:flex items-center gap-5">
                            <Button asChild variant="linkIcon">
                                <div dangerouslySetInnerHTML={{
                                    __html: `<a href='tel:0001234567'>
                                        <img src='/primary-c-phone.svg' alt="Dream Weave Media" width='25' height='24' />
                                        <span>000 123 4567</span>
                                    </a>` }} />
                            </Button>
                            <Button asChild>
                                <div dangerouslySetInnerHTML={{ __html: `<a href='javascript:;'>Get In Touch</a>` }} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {isSticky && <ScrollProgress className="top-[126px]" />}
        </motion.header>
    )
}