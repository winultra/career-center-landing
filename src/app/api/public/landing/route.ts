import { NextResponse } from 'next/server'

import { getPayloadClient } from '@/lib/payload'

export async function GET() {
  try {
    const payload = await getPayloadClient()

    const [newsResult, reviewsResult, headerResult, footerResult, contactSettingsResult] =
      await Promise.all([
        payload.find({
          collection: 'news',
          where: {
            isPublished: {
              equals: true,
            },
          },
          sort: ['sortOrder', '-publishedAt'],
          depth: 1,
          limit: 100,
        }),
        payload.find({
          collection: 'reviews',
          where: {
            isPublished: {
              equals: true,
            },
          },
          sort: 'sortOrder',
          depth: 1,
          limit: 100,
        }),
        payload.findGlobal({
          slug: 'header',
          depth: 1,
        }),
        payload.findGlobal({
          slug: 'footer',
          depth: 1,
        }),
        payload.findGlobal({
          slug: 'contact-settings',
          depth: 1,
        }),
      ])

    const news = (newsResult.docs ?? []).map((item: any) => ({
      id: item.id,
      title: item.title ?? '',
      slug: item.slug ?? '',
      excerpt: item.excerpt ?? '',
      content: item.content ?? null,
      publishedAt: item.publishedAt ?? null,
      sortOrder: item.sortOrder ?? 0,
      image: item.coverImage?.url ?? null,
    }))

    const reviews = (reviewsResult.docs ?? []).map((item: any) => ({
      id: item.id,
      name: item.name ?? '',
      text: item.text ?? '',
      source: item.sourceName ?? null,
      sortOrder: item.sortOrder ?? 0,
      date: item.date ?? item.createdAt ?? null,
      avatar: item.avatar?.url ?? null,
    }))

    return NextResponse.json({
      news,
      reviews,
      header: {
        logo: headerResult?.logo?.url ?? null,
        siteTitle: headerResult?.siteTitle ?? 'ПрофСтарт',
        siteDescription:
          headerResult?.siteDescription ??
          'Центр карьеры, профориентации и предпринимательства для подростков, родителей, молодёжи и начинающих предпринимателей.',
      },
      footer: {
        logo: footerResult?.logo?.url ?? null,
        addressTitle: footerResult?.addressTitle ?? null,
        addressText: footerResult?.addressText ?? null,
        contactTitle: footerResult?.contactTitle ?? null,
        phone: footerResult?.phone ?? null,
        email: footerResult?.email ?? null,
        isVisible: footerResult?.isVisible ?? true,
      },
      contactSection: {
        title: contactSettingsResult?.title ?? null,
        description: contactSettingsResult?.description ?? null,
        phone: contactSettingsResult?.phone ?? null,
        email: contactSettingsResult?.email ?? null,
        address: contactSettingsResult?.address ?? null,
        image: contactSettingsResult?.image?.url ?? null,
        isVisible: contactSettingsResult?.isVisible ?? true,
      },
    })
  } catch (error) {
    console.error('GET /api/public/landing failed', error)

    return NextResponse.json(
      {
        error: 'Failed to load landing content',
      },
      { status: 500 },
    )
  }
}