import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import Providers from "./providers"
import {  cn } from "@/lib/utils"
import 'flowbite';
import './globals.css'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const metadata = {
  title: 'CAM',
  description: '',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}>
          <Providers>{children}</Providers>
      </body>
    </html>
  )
}