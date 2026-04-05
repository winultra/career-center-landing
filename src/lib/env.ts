import { z } from 'zod'

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '')

const baseEnvSchema = z.object({
  DATABASE_URL: z.string().trim().min(1, 'DATABASE_URL is required'),
  PAYLOAD_SECRET: z.string().trim().min(32, 'PAYLOAD_SECRET must be at least 32 characters long'),
  NEXT_PUBLIC_SERVER_URL: z
    .string()
    .trim()
    .url('NEXT_PUBLIC_SERVER_URL must be a valid URL')
    .transform(trimTrailingSlash),
  POSTGRES_DB: z.string().trim().min(1, 'POSTGRES_DB is required'),
  POSTGRES_USER: z.string().trim().min(1, 'POSTGRES_USER is required'),
  POSTGRES_PASSWORD: z.string().trim().min(1, 'POSTGRES_PASSWORD is required'),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(60_000),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().int().positive().default(5),
})

const bootstrapEnvSchema = z.object({
  SUPERADMIN_EMAIL: z.string().trim().email('SUPERADMIN_EMAIL must be a valid email'),
  SUPERADMIN_PASSWORD: z
    .string()
    .min(12, 'SUPERADMIN_PASSWORD must be at least 12 characters long'),
  EDITOR_EMAIL: z.string().trim().email('EDITOR_EMAIL must be a valid email'),
  EDITOR_PASSWORD: z.string().min(12, 'EDITOR_PASSWORD must be at least 12 characters long'),
})

const formatIssues = (issues: z.ZodIssue[]) =>
  issues.map((issue) => `- ${issue.message}`).join('\n')

export const env = (() => {
  const parsed = baseEnvSchema.safeParse(process.env)

  if (!parsed.success) {
    throw new Error(`Invalid environment configuration:\n${formatIssues(parsed.error.issues)}`)
  }

  return parsed.data
})()

export const getBootstrapEnv = () => {
  const parsed = bootstrapEnvSchema.safeParse(process.env)

  if (!parsed.success) {
    throw new Error(`Invalid bootstrap environment configuration:\n${formatIssues(parsed.error.issues)}`)
  }

  return parsed.data
}
