import './globals.css'
import { Ubuntu } from 'next/font/google'

const inter = Ubuntu({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Velte',
  description: 'velte real estate properties Nigeria nigeria houses lands',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
