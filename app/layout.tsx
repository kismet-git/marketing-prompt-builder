import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marketing Prompt Builder – Free AI Prompt Generator for Marketers",
  description:
    "Get a custom ChatGPT prompt for your next marketing challenge in under 60 seconds. No AI skills required.",
  icons: {
    icon: "https://d7gtruneqk2qegaa.public.blob.vercel-storage.com/app-icon-0422ff-OkSxa1CvyxbGXfXTW8yDtt1eBci3lk.png",
    shortcut:
      "https://d7gtruneqk2qegaa.public.blob.vercel-storage.com/app-icon-0422ff-OkSxa1CvyxbGXfXTW8yDtt1eBci3lk.png",
    apple: "https://d7gtruneqk2qegaa.public.blob.vercel-storage.com/app-icon-0422ff-OkSxa1CvyxbGXfXTW8yDtt1eBci3lk.png",
  },
  manifest: "/manifest.json",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Marketing Prompt Builder – Free AI Prompt Generator for Marketers</title>
        <meta
          name="description"
          content="Get a custom ChatGPT prompt for your next marketing challenge in under 60 seconds. No AI skills required."
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
