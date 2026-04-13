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
  description: 'Infinity Space keeps private chats password-locked, locally controlled, and end-to-end encrypted. Your conversations, your rules.',
  keywords: ['private messaging', 'end-to-end encryption', 'secure chat', 'subtext'],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
