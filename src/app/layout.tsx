import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"
import { RootProvider } from "@/components"
import { APP_METADATA, APP_TITLE } from "@/lib/config"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: {
    default: APP_TITLE as string,
    template: `%s | ${APP_TITLE}`
  },
  ...APP_METADATA
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
