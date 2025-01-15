import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Golden Cipher - Advanced Cybersecurity Tools',
  description: 'Explore cutting-edge cybersecurity tools and stay protected in the digital world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

