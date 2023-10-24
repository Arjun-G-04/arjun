import './globals.css'
import localFont from 'next/font/local'
import SmoothScroll from '@/libs/smoothScroll'

export const metadata = {
  title: "Arjun's Portfolio",
  description: 'Portifolio of Arjun',
}

const myFont = localFont({
  src: '../public/fonts/pptelegraf-regular.otf',
  display: 'swap',
  variable: '--font-telegraf'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${myFont.variable}`}>
      <body>
        {children}
        <SmoothScroll />
      </body>
    </html>
  )
}
