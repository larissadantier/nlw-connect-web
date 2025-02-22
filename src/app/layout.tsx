import type { Metadata } from 'next'
import { Oxanium, Montserrat } from 'next/font/google'

import './globals.css'

export const metadata: Metadata = {
  title: 'NLW Connect',
  description: 'Ranking Tickets',
}

const oxanium = Oxanium({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-oxanium',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-[url(/background.png)] bg-gray-900 bg-top bg-no-repeat text-gray-100 antialiased md:bg-right-top">
        <main className="mx-auto max-w-[1240px] px-5 py-8 md:py-0">
          {children}
        </main>
      </body>
    </html>
  )
}
