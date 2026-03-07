import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'

async function createAdmin() {
  const payload = await getPayload({ config })

  const email = 'admin@example.com'
  const password = 'Admin12345!'

  const existingUsers = await payload.find({
    collection: 'users',
    limit: 1,
    where: {
      email: {
        equals: email,
      },
    },
  })

  if (existingUsers.docs.length > 0) {
    console.log(`Admin user already exists: ${email}`)
    process.exit(0)
  }

  await payload.create({
    collection: 'users',
    data: {
      email,
      password,
    },
  })

  console.log(`Admin user created: ${email}`)
  process.exit(0)
}

createAdmin().catch((error) => {
  console.error(error)
  process.exit(1)
})