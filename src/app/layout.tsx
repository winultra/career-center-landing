import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Center Landing',
  description: 'Career Center Landing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}