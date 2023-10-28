import { GlobalConfig } from 'payload/types'

export const Greeting = {
  slug: 'greeting',
  fields: [
    {
      type: 'text',
      name: 'message',
    },
  ],
} satisfies GlobalConfig
