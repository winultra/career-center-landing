import type { Metadata } from 'next'

async function getLandingMeta() {
  try {
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    const response = await fetch(`${baseUrl}/api/public/landing`, {
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(`Failed to load landing metadata: ${response.status}`)
    }

    return response.json()
  } catch {
    return null
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const landingData = await getLandingMeta()

  const title = landingData?.header?.siteTitle ?? 'ПрофСтарт'
  const description =
    landingData?.header?.siteDescription ??
    'Центр карьеры, профориентации и предпринимательства для подростков, родителей, молодёжи и начинающих предпринимателей.'

  return {
    title,
    description,
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