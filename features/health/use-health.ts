import { useQuery } from '@tanstack/react-query'

import { apiRequest } from '~/lib/api/client'
import { type HealthResponse, parseHealthResponse } from '~/lib/health'

async function fetchHealth(): Promise<HealthResponse> {
  const data = await apiRequest<unknown>('/health')
  return parseHealthResponse(data)
}

export function useHealth() {
  return useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
    refetchInterval: 30_000,
  })
}
