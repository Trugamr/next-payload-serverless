import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payload',
  description: 'Welcome to Payload!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
