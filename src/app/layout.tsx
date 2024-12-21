import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Sidebar } from "@/components/Sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Student management system",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth bg-gray-50`}>  <Sidebar />{children}</body>
    </html>
  )
}

