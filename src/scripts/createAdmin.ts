import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'
import { getBootstrapEnv } from '@/lib/env'

async function ensureUser({
  email,
  password,
  role,
}: {
  email: string
  password: string
  role: 'admin' | 'editor'
}) {
  const payload = await getPayload({ config })
  const existingUsers = await payload.find({
    collection: 'users',
    overrideAccess: true,
    limit: 1,
    where: {
      email: {
        equals: email,
      },
    },
  })

  if (existingUsers.docs.length > 0) {
    console.log(`User already exists: ${email}`)
    return
  }

  await payload.create({
    collection: 'users',
    overrideAccess: true,
    data: {
      email,
      password,
      role,
    },
  })

  console.log(`User created: ${email} (${role})`)
}

async function bootstrapUsers() {
  const bootstrapEnv = getBootstrapEnv()

  await ensureUser({
    email: bootstrapEnv.SUPERADMIN_EMAIL,
    password: bootstrapEnv.SUPERADMIN_PASSWORD,
    role: 'admin',
  })

  await ensureUser({
    email: bootstrapEnv.EDITOR_EMAIL,
    password: bootstrapEnv.EDITOR_PASSWORD,
    role: 'editor',
  })

  process.exit(0)
}

bootstrapUsers().catch((error) => {
  console.error(error)
  process.exit(1)
})
