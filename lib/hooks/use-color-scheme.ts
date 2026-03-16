import { useColorScheme as useNativeColorScheme } from 'react-native'

type AppColorScheme = 'light' | 'dark'

export function useColorScheme(): AppColorScheme {
  const colorScheme = useNativeColorScheme()

  return colorScheme === 'dark' ? 'dark' : 'light'
}
