// Fonts
import SmoothScroll from "@/components/smooth-scroll"
import { fontSans } from "./fonts"
// Css
import "./globals.css"
// Components
import { Header } from "@/components"
// Meta Tags
export const metadata = {
  title: "Dream Weave Media",
  description: "Generated by Dream Weave Media",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased font-sans font-normal`}>
        <Header />
        <SmoothScroll>
          <main>
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  )
}
