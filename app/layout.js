import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hét meg a nyolcát!',
  description: 'Milliárdok csepegtetve',
  favicon: "/favicon-16x16.png"
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
