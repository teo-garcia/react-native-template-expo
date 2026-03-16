import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'

import { apiRequest } from '~/lib/api/client'

const healthResponseSchema = z.object({
  status: z.enum(['ok', 'degraded', 'down']),
  timestamp: z.string(),
  version: z.string().optional(),
})

export type HealthResponse = z.infer<typeof healthResponseSchema>

async function fetchHealth(): Promise<HealthResponse> {
  const data = await apiRequest<unknown>('/health')
  return healthResponseSchema.parse(data)
}

export function useHealth() {
  return useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
    refetchInterval: 30_000,
  })
}
