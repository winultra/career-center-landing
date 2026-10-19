import type { Metadata } from 'next'
import { env } from '@/lib/env'
import { getPayloadClient } from '@/lib/payload'
import { landingMetadataFallback } from '@/lib/landing-fallback'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  try {
    const payload = await getPayloadClient()
    const [seoSettings, headerSettings] = await Promise.all([
      payload.findGlobal({
        slug: 'seo-settings',
        overrideAccess: true,
        depth: 1,
      }),
      payload.findGlobal({
        slug: 'header',
        overrideAccess: true,
        depth: 1,
      }),
    ])

    const title =
      seoSettings?.defaultTitle?.trim() ||
      headerSettings?.siteTitle?.trim() ||
      landingMetadataFallback.title
    const description =
      seoSettings?.defaultDescription?.trim() ||
      headerSettings?.siteDescription?.trim() ||
      landingMetadataFallback.description
    const ogImage =
      typeof seoSettings?.ogImage === 'object' && seoSettings?.ogImage?.url
        ? seoSettings.ogImage.url
        : null

    return {
      metadataBase: new URL(env.NEXT_PUBLIC_SERVER_URL),
      title,
      description,
      keywords: [
        'профориентация',
        'профориентация подростков',
        'центр карьеры',
        'карьерное консультирование',
        'выбор профессии',
        'развитие карьеры',
        'предпринимательство',
        'бизнес-консультации',
        'ПрофСтарт',
        'Югорск',
        'ХМАО — Югра',
      ],
      alternates: {
        canonical: '/',
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },
      },
      openGraph: ogImage
        ? {
            title,
            description,
            images: [{ url: ogImage.startsWith('/') ? `${env.NEXT_PUBLIC_SERVER_URL}${ogImage}` : ogImage }],
          }
        : undefined,
    }
  } catch {
    // Metadata falls back when DB is unavailable during startup.
  }

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_SERVER_URL),
    title: landingMetadataFallback.title,
    description: landingMetadataFallback.description,
    keywords: [
      'профориентация',
      'центр карьеры',
      'выбор профессии',
      'развитие карьеры',
      'предпринимательство',
      'ПрофСтарт',
      'Югорск',
      'ХМАО — Югра',
    ],
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
    },
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
