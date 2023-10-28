import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Website',
  description: 'Welcome to website!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
