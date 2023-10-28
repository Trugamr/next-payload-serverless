import { type Payload, getPayload } from 'payload/dist/payload'
import type { InitOptions } from 'payload/config'

declare global {
  var __payload:
    | {
        client: Payload | null
        promise: Promise<Payload> | null
      }
    | undefined
}

// Persist payload client
if (!global.__payload) {
  global.__payload = {
    client: null,
    promise: null,
  }
}
const cache = global.__payload

type GetPayloadClientOptions = Partial<InitOptions>

/**
 * Gets the Payload client instance
 */
export default async function getPayloadClient(options: GetPayloadClientOptions = {}) {
  // Initialize client
  if (!cache.promise) {
    cache.promise = getPayload({
      secret: process.env.PAYLOAD_SECRET!,
      ...options,
    })
  }

  // Return cached client if it exists
  if (cache.client) {
    return cache.client
  }

  // Wait for client to be initialized
  cache.client = await cache.promise

  return cache.client
}
