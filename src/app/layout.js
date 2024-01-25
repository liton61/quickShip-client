

import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from './auth/page'
import Navbar from '@/components/shared/Navbar/Navbar'
import Footer from '@/components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quick Ship',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
       <AuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </AuthProvider>
        </body>
    </html>
  )
}
