import { NextResponse } from 'next/server'


import { getPayloadClient } from '@/lib/payload'

type MediaRelation = {
  url?: string | null
}

type RichPoint = {
  text?: string | null
}

type LandingNewsDoc = {
  id: string | number
  title?: string | null
  slug?: string | null
  excerpt?: string | null
  content?: unknown
  publishedAt?: string | null
  sortOrder?: number | null
  coverImage?: MediaRelation | null
}

type LandingReviewDoc = {
  id: string | number
  name?: string | null
  text?: string | null
  sourceName?: string | null
  sortOrder?: number | null
  date?: string | null
  createdAt?: string | null
  avatar?: MediaRelation | null
}

type IntroSlideDoc = {
  id: string | number
  title?: string | null
  text?: string | null
  image?: MediaRelation | null
}

type AudienceItemDoc = {
  id: string | number
  title?: string | null
  points?: RichPoint[] | null
  buttonText?: string | null
  buttonLink?: string | null
}

type CareerGuidanceItemDoc = {
  id: string | number
  title?: string | null
  price?: string | null
  points?: RichPoint[] | null
  buttonText?: string | null
  buttonLink?: string | null
}

type EntrepreneurshipItemDoc = {
  id: string | number
  title?: string | null
  price?: string | null
  points?: RichPoint[] | null
  buttonText?: string | null
  buttonLink?: string | null
}

export async function GET() {
  try {
    const payload = await getPayloadClient()

    const [newsResult, reviewsResult, headerResult, footerResult, contactSettingsResult, homePageResult] =
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
        payload.findGlobal({
          slug: 'home-page',
          depth: 2,
        }),
      ])

    const news = ((newsResult.docs ?? []) as LandingNewsDoc[]).map((item) => ({
      id: item.id,
      title: item.title ?? '',
      slug: item.slug ?? '',
      excerpt: item.excerpt ?? '',
      content: item.content ?? null,
      publishedAt: item.publishedAt ?? null,
      sortOrder: item.sortOrder ?? 0,
      image: item.coverImage?.url ?? null,
    }))

    const reviews = ((reviewsResult.docs ?? []) as LandingReviewDoc[]).map((item) => ({
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
      hero: {
        title: homePageResult?.hero?.title ?? null,
        subtitle: homePageResult?.hero?.subtitle ?? null,
        buttonText: homePageResult?.hero?.buttonText ?? 'Оставить заявку',
        buttonLink: homePageResult?.hero?.buttonLink ?? '#contact-form',
        image: homePageResult?.hero?.image?.url ?? null,
        isVisible: homePageResult?.hero?.isVisible ?? true,
      },
      introSlider: {
        title: homePageResult?.introSlider?.title ?? null,
        slides: Array.isArray(homePageResult?.introSlider?.slides)
                ? (homePageResult.introSlider.slides as IntroSlideDoc[]).map((item) => ({
                    id: item.id,
                    title: item.title ?? '',
                    text: item.text ?? '',
                    image: item.image?.url ?? null,
        }))
        : [],
      },
      about: {
        title: homePageResult?.about?.title ?? null,
        text: homePageResult?.about?.text ?? null,
        image: homePageResult?.about?.image?.url ?? null,
        isVisible: homePageResult?.about?.isVisible ?? true,
      },
      audience: {
        title: homePageResult?.audience?.title ?? null,
        isVisible: homePageResult?.audience?.isVisible ?? true,
        items: Array.isArray(homePageResult?.audience?.items)
          ? (homePageResult.audience.items as AudienceItemDoc[]).map((item) => ({
              id: item.id,
              title: item.title ?? '',
              points: Array.isArray(item.points)
                ? item.points
                    .map((point: RichPoint) => point.text?.trim() ?? '')
                    .filter(Boolean)
                : [],
              buttonText: item.buttonText ?? 'Оставить заявку',
              buttonLink: item.buttonLink ?? '#contact-form',
            }))
          : [],
      },
      careerGuidance: {
        title: homePageResult?.careerGuidance?.title ?? null,
        isVisible: homePageResult?.careerGuidance?.isVisible ?? true,
        items: Array.isArray(homePageResult?.careerGuidance?.items)
          ? (homePageResult.careerGuidance.items as CareerGuidanceItemDoc[]).map((item) => ({
              id: item.id,
              title: item.title ?? '',
              price: item.price ?? '',
              points: Array.isArray(item.points)
                ? item.points
                    .map((point: RichPoint) => point.text?.trim() ?? '')
                    .filter(Boolean)
                : [],
              buttonText: item.buttonText ?? 'Купить',
              buttonLink: item.buttonLink ?? '#contact-form',
            }))
          : [],
      },
      cta: {
        title: homePageResult?.cta?.title ?? null,
        text: homePageResult?.cta?.text ?? null,
        buttonText: homePageResult?.cta?.buttonText ?? 'Оставить заявку',
        buttonLink: homePageResult?.cta?.buttonLink ?? '#contact-form',
        managerText: homePageResult?.cta?.managerText ?? 'или написать:',
        managerLink: homePageResult?.cta?.managerLink ?? '#contact-form',
        managerIcon: homePageResult?.cta?.managerIcon?.url ?? null,
        isVisible: homePageResult?.cta?.isVisible ?? true,
      },
      entrepreneurship: {
        title: homePageResult?.entrepreneurship?.title ?? null,
        isVisible: homePageResult?.entrepreneurship?.isVisible ?? true,
        items: Array.isArray(homePageResult?.entrepreneurship?.items)
          ? (homePageResult.entrepreneurship.items as EntrepreneurshipItemDoc[]).map((item) => ({
              id: item.id,
              title: item.title ?? '',
              price: item.price ?? '',
              points: Array.isArray(item.points)
                ? item.points
                    .map((point: RichPoint) => point.text?.trim() ?? '')
                    .filter(Boolean)
                : [],
              buttonText: item.buttonText ?? 'Купить',
              buttonLink: item.buttonLink ?? '#contact-form',
            }))
          : [],
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