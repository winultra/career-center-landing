import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'

export async function GET() {
  try {
    const payload = await getPayloadClient()

    await payload.find({
      collection: 'users',
      overrideAccess: true,
      limit: 1,
    })

    return NextResponse.json({ status: 'ready' })
  } catch {
    return NextResponse.json({ status: 'not_ready' }, { status: 503 })
  }
}
