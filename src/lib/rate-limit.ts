type RateLimitEntry = {
  count: number
  resetAt: number
}

type RateLimitOptions = {
  key: string
  limit: number
  windowMs: number
}

type RateLimitResult = {
  allowed: boolean
  remaining: number
  resetAt: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

const cleanupExpiredEntries = (now: number) => {
  for (const [key, value] of rateLimitStore.entries()) {
    if (value.resetAt <= now) {
      rateLimitStore.delete(key)
    }
  }
}

export const getRequestIp = (request: Request) => {
  const forwardedFor = request.headers.get('x-forwarded-for')

  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown'
  }

  return request.headers.get('x-real-ip')?.trim() || 'unknown'
}

export const checkRateLimit = ({ key, limit, windowMs }: RateLimitOptions): RateLimitResult => {
  const now = Date.now()
  cleanupExpiredEntries(now)

  const currentEntry = rateLimitStore.get(key)

  if (!currentEntry || currentEntry.resetAt <= now) {
    const resetAt = now + windowMs
    rateLimitStore.set(key, { count: 1, resetAt })

    return {
      allowed: true,
      remaining: Math.max(limit - 1, 0),
      resetAt,
    }
  }

  if (currentEntry.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: currentEntry.resetAt,
    }
  }

  currentEntry.count += 1
  rateLimitStore.set(key, currentEntry)

  return {
    allowed: true,
    remaining: Math.max(limit - currentEntry.count, 0),
    resetAt: currentEntry.resetAt,
  }
}
