import Constants from 'expo-constants'
import { z } from 'zod'

const envSchema = z.object({
  EXPO_PUBLIC_API_BASE_URL: z.url(),
})

const env = envSchema.parse({
  EXPO_PUBLIC_API_BASE_URL:
    Constants.expoConfig?.extra?.['EXPO_PUBLIC_API_BASE_URL'] ??
    process.env['EXPO_PUBLIC_API_BASE_URL'],
})

export const API_BASE_URL = env.EXPO_PUBLIC_API_BASE_URL

export async function apiRequest<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${path}`

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
