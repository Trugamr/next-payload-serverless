import { CollectionConfig } from 'payload/types'

export const Users = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email is added by default,
  ],
} satisfies CollectionConfig
