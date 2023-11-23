import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VivaBem',
  description: 'Projeto para solucionar problema de saúde da população, através da tecnologia.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
