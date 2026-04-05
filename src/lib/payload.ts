import { getPayload } from 'payload'
import config from '@payload-config'

let cached = (global as typeof global & { payloadClient?: ReturnType<typeof getPayload> }).payloadClient

export const getPayloadClient = async () => {
  if (!cached) {
    cached = getPayload({ config }).catch((error) => {
      cached = undefined
      ;(global as typeof global & { payloadClient?: ReturnType<typeof getPayload> }).payloadClient = undefined
      throw error
    }) as ReturnType<typeof getPayload>
    ;(global as typeof global & { payloadClient?: ReturnType<typeof getPayload> }).payloadClient = cached
  }

  return cached
}
