import { getPayload } from 'payload'
import config from '@payload-config'

let cached = (global as typeof global & { payloadClient?: ReturnType<typeof getPayload> }).payloadClient

export const getPayloadClient = async () => {
  if (!cached) {
    cached = getPayload({ config })
    ;(global as typeof global & { payloadClient?: ReturnType<typeof getPayload> }).payloadClient = cached
  }

  return cached
}