import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Users } from './src/collections/Users.ts'
import { Media } from './src/collections/Media.ts'
import { News } from './src/collections/News.ts'
import { Reviews } from './src/collections/Reviews.ts'
import { Applications } from './src/collections/Applications.ts'

import { Header } from './src/globals/Header.ts'
import { HomePage } from './src/globals/HomePage.ts'
import { ContactSettings } from './src/globals/ContactSettings.ts'
import { Footer } from './src/globals/Footer.ts'
import { SEOSettings } from './src/globals/SEOSettings.ts'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || '',
  editor: lexicalEditor(),
  collections: [Users, Media, News, Reviews, Applications],
  globals: [Header, HomePage, ContactSettings, Footer, SEOSettings],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  cors: [process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'],
  csrf: [process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'],
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
})
