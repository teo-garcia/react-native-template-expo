import { env } from '~/lib/env'

export const API_BASE_URL = env.apiBaseUrl

export async function apiRequest<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = new URL(path, API_BASE_URL).toString()

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}
