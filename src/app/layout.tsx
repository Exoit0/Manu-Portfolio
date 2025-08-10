import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/common/ThemeProvider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Manu Rajesh Naik",
  description: "Software Engineer with expertise in Spring Boot, React, JavaScript, and full-stack development. Currently pursuing B.Tech in IT from KIIT University with hands-on experience at Bajaj Allianz General Insurance.",
  keywords: "Software Engineer, Full-Stack Developer, React, Spring Boot, JavaScript, Web Development, Manu Rajesh Naik",
  authors: [{ name: "Manu Rajesh Naik" }],
  creator: "Manu Rajesh Naik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manurajeshnaik.vercel.app",
    title: "Manu Rajesh Naik - Software Engineer & Full-Stack Developer",
    description: "Software Engineer with expertise in Spring Boot, React, JavaScript, and full-stack development.",
    siteName: "Manu Rajesh Naik Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manu Rajesh Naik - Software Engineer & Full-Stack Developer",
    description: "Software Engineer with expertise in Spring Boot, React, JavaScript, and full-stack development.",
    creator: "@manurajeshnaik",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
            <head>
        {/* Google Fonts preload and stylesheet links */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap" rel="stylesheet" />

      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
