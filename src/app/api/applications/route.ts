import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'
import { applicationSchema } from '@/lib/validations'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const parsed = applicationSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Ошибка валидации формы',
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      )
    }

    const data = parsed.data

    if (data.company && data.company.trim() !== '') {
      return NextResponse.json(
        {
          success: false,
          message: 'Подозрительная активность',
        },
        { status: 400 },
      )
    }

    const payload = await getPayloadClient()

    const created = await payload.create({
      collection: 'applications',
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        sourceBlock: data.sourceBlock || 'unknown',
        isPrivacyAccepted: data.isPrivacyAccepted,
        status: 'new',
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Заявка успешно сохранена',
      applicationId: created.id,
    })
  } catch (error) {
    console.error('Application submit error:', error)

    const message =
      error instanceof Error && 'payloadInitError' in error
        ? 'Сервис заявок временно недоступен. Проверьте подключение к Postgres и попробуйте снова.'
        : 'Внутренняя ошибка сервера'

    return NextResponse.json(
      {
        success: false,
        message,
      },
      { status: message === 'Внутренняя ошибка сервера' ? 500 : 503 },
    )
  }
}
