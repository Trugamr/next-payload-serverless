import path from 'path'
import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import { Users } from './collections/users'
import { Greeting } from './globals/greeting'

export default buildConfig({
  collections: [Users],
  globals: [Greeting],
  typescript: {
    outputFile: path.resolve(__dirname, 'types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI!,
  }),
  editor: slateEditor({}),
})
