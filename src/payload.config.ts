import path from 'path'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import { News } from './collections/News'
import { Reviews } from './collections/Reviews'
import { Applications } from './collections/Applications'

import { Header } from './globals/Header'
import { HomePage } from './globals/HomePage'
import { ContactSettings } from './globals/ContactSettings'
import { Footer } from './globals/Footer'
import { SEOSettings } from './globals/SEOSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: undefined,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Media, News, Reviews, Applications],
  globals: [Header, HomePage, ContactSettings, Footer, SEOSettings],
  secret: process.env.PAYLOAD_SECRET || '',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})