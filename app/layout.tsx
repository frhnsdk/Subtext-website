import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'subtext — Private Messaging',
  description: 'End-to-end encrypted chats, password-protected Spaces, and real-time messaging. Your conversations, your rules.',
  keywords: ['private messaging', 'end-to-end encryption', 'secure chat', 'subtext'],
  openGraph: {
    title: 'subtext — Private Messaging',
    description: 'Messaging that keeps your secrets.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
