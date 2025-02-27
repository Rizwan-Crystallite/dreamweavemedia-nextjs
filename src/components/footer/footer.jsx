// Next
import Link from "next/link"
// Media
import one from "media/locations/1.webp"
import two from "media/locations/2.webp"
import three from "media/locations/3.webp"
import four from "media/locations/4.webp"
import five from "media/locations/5.webp"
import facebook from "media/facebook.svg"
import x from "media/x.svg"
import linkedin from "media/linkedin.svg"
import instagram from "media/instagram.svg"
import youtube from "media/youtube.svg"
// Next
import Image from "next/image"
// Components
import { WhiteLogo } from "@/components"

const menuTitle = "text-[#838383] text-[20px] leading-tight font-semibold uppercase flex items-center gap-2.5"
const menuLinks = "text-[20px] sm:text-[24px] md:text-[18px] lg:text-[20px] xl:text-[26px] leading-loose lg:leading-relaxed mt-5"
const menuLinksHover = "hover:underline-offset-4 hover:underline hover:text-primary transition-all duration-300"
const locationText = "hidden lg:block text-[12px] xl:text-[14px] 2xl:text-[18px] leading-normal text-white mt-3"

const socials = [
    [facebook, "/"],
    [x, "/"],
    [linkedin, "/"],
    [instagram, "/"],
    [youtube, "/"]
]

export default function Footer() {
    return (
        <section>
            <div className="border-t-2 border-[#34363D] py-[40px] md:py-[80px] relative z-[2]">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
                        <div>
                            <h3 className={menuTitle}>
                                <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                                <span>Company</span>
                            </h3>
                            <ul className={menuLinks}>
                                {
                                    [
                                        ["About Us", "/about"],
                                        ["Testimonial", "/#testimonial"],
                                        ["Process", "/#process"],
                                        ["Contact", "/contact"]
                                    ].map(([text, link], i) => (
                                        <li key={i}>
                                            <a href={link} className={menuLinksHover}>
                                                {text}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="sm:pl-10 md:pl-0 2xl:pl-10">
                            <h3 className={menuTitle}>
                                <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                                <span>Resources</span>
                            </h3>
                            <ul className={menuLinks}>
                                {
                                    [
                                        ["Blog", "/blog"],
                                        ["Events", "/events"],
                                        ["Press Release", "press-release"],
                                        ["Work", "/#wokr"]
                                    ].map(([text, link], i) => (
                                        <li key={i}>
                                            <a href={link} className={menuLinksHover}>
                                                {text}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="lg:pl-10 xl:pl-6 2xl:pl-20">
                            <h3 className={menuTitle}>
                                <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                                <span>Services</span>
                            </h3>
                            <ul className={menuLinks}>
                                {
                                    [
                                        ["Ecommerce", "/ecommerce-development"],
                                        ["Animation", "video-animation"],
                                        ["Web Development", "/web-development"],
                                        ["UI/UX Design", "/ui-ux-design"]
                                    ].map(([text, link], i) => (
                                        <li key={i}>
                                            <a href={link} className={menuLinksHover}>
                                                {text}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="sm:pl-10 md:pl-10 lg:pl-20 2xl:pl-40">
                            <h3 className={menuTitle}>
                                <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                                <span>Insights</span>
                            </h3>
                            <ul className={menuLinks}>
                                {
                                    [
                                        ["Case Studies", "/case-studies"],
                                        ["Partners", "/#partners"],
                                        ["Manifesto", "/"],
                                        ["Careers", "/careers"]
                                    ].map(([text, link], i) => (
                                        <li key={i}>
                                            <a href={link} className={menuLinksHover}>
                                                {text}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-[#34363D] py-[40px] md:py-[80px]">
                <div className="container">
                    <div className="grid grid-cols-5 gap-x-5 gap-y-10 items-end">
                        <div>
                            <Image src={one} alt="Dream Weave Media" className="mb-5 mx-auto lg:mx-0" />
                            <h3 className={`${menuTitle} !text-white text-center lg:text-left !block !text-[10px] md:!text-[20px]`}>USA</h3>
                            <p className={locationText}>
                                79, Madison Ave <br /> Manhattan, NY 10001, <br /> USA
                            </p>
                        </div>
                        <div>
                            <Image src={two} alt="Dream Weave Media" className="mb-5 mx-auto lg:mx-0" />
                            <h3 className={`${menuTitle} !text-white text-center lg:text-left !block !text-[10px] md:!text-[20px]`}>Australia</h3>
                            <p className={locationText}>
                                107 Shurvell Rd, <br /> Hunchy QLD 4555, <br /> Australia
                            </p>
                        </div>
                        <div>
                            <Image src={three} alt="Dream Weave Media" className="mb-5 mx-auto lg:mx-0" />
                            <h3 className={`${menuTitle} !text-white text-center lg:text-left !block !text-[10px] md:!text-[20px]`}>UK</h3>
                            <p className={locationText}>
                                3rd Floor, 86-90, <br /> Paul Street EC2A 4NE <br /> London, UK
                            </p>
                        </div>
                        <div>
                            <Image src={four} alt="Dream Weave Media" className="mb-5 mx-auto lg:mx-0" />
                            <h3 className={`${menuTitle} !text-white text-center lg:text-left !block !text-[10px] md:!text-[20px]`}>UAE</h3>
                            <p className={locationText}>
                                Tiger Al Yarmook Building, <br /> 13th floor B-block <br /> Al Nahda St - Sharjah
                            </p>
                        </div>
                        <div>
                            <Image src={five} alt="Dream Weave Media" className="mb-5 mx-auto lg:mx-0" />
                            <h3 className={`${menuTitle} !text-white text-center lg:text-left !block !text-[10px] md:!text-[20px]`}>CANADA</h3>
                            <p className={locationText}>
                                Suite 3810, Bankers Hall West, <br /> 888 - 3rd Street Sw <br /> Calgary Alberta
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-[#34363D] py-[20px] md:py-[40px]">
                <div className="container">
                    <div className="flex items-center flex-wrap xl:flex-nowrap justify-between gap-5">
                        <div className="basis-full xl:basis-auto [&_a_svg]:mx-auto [&_a_svg]:xl:mx-0">
                            <WhiteLogo />
                        </div>
                        <div className="basis-full lg:basis-auto">
                            <ul className="flex flex-col sm:divide-x-2 sm:flex-row items-center sm:divide-[#838383] justify-center sm:[&_li:first-child]:pr-2 sm:[&_li:nth-child(2)]:px-2 sm:[&_li:last-child]:pl-2">
                                {
                                    [
                                        ["2024 © Dream Weave Media", ""],
                                        ["Site Map", "/site-map"],
                                        ["Privacy Policy", "/privacy-policy"]
                                    ].map(([text, link], i) => (
                                        <li key={i}>
                                            <a href={link} className="text-[#838383] text-[16px] leading-tight">
                                                {text}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="basis-full lg:basis-auto">
                            <ul className="flex items-center justify-center gap-4">
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
                </div>
            </div>
        </section>
    )
}