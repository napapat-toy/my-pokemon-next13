import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokemon App',
  description: 'Site pokemon information from api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} relative bg-slate-200`}>
        <Navbar />
        <main className='h-full w-full my-4 mb-8 flex flex-col items-center'>
          {children}
        </main>
      </body>
    </html>
  )
}
