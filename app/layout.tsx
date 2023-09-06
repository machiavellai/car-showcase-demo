// import  from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import {NavBar, Footer} from '@/components'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Showcase',
  description: 'Discover the best working cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
