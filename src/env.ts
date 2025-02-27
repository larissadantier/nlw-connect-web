import { z } from 'zod'

const envSchema = z.object({
  SERVER_URL: z.string().url(),
})
export const env = envSchema.parse(process.env)
