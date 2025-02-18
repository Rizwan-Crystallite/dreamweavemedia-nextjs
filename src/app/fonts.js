// Next
import { Poppins as FontSans } from "next/font/google"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal"],
    display: "swap",
    fallback: ["system-ui", "arial"]
})

export { fontSans }