import { env } from '@/env'
import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: `${env.SERVER_URL}/docs/json`,
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: `${env.SERVER_URL}`,
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})
