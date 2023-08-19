import Footer from './components/footer'
import Navbar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vazou',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
