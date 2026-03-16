import { Colors } from '~/lib/constants/colors'
import { useColorScheme } from '~/lib/hooks/use-color-scheme'

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme()
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  }

  return Colors[theme][colorName]
}
