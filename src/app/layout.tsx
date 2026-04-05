import type { Metadata } from 'next'
import { landingMetadataFallback } from '@/lib/landing-fallback'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: landingMetadataFallback.title,
    description: landingMetadataFallback.description,
  }
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
