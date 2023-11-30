import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import ActiveSectionProvider from '@/context/activeSection'
import ToasterProvider from '@/components/reactToaster'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/ThemeSwitch'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sri Vardhan | Portfolio',
  description: 'Sri Vardhan a full-stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
       <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#f7d7d8] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#5c3f3f]"></div>
        <div className="bg-[#d5d0f7] absolute top-[-1rem] -z-10 left-[-70rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#292746]"></div>
        
        <ActiveSectionProvider>
        <ToasterProvider />
        <Header />
        {children}
        <Footer />
        </ActiveSectionProvider>
        <ThemeSwitch />
        </body>
    </html>
  )
}
