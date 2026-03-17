import { BlurView } from 'expo-blur'
import { Platform, StyleSheet, View } from 'react-native'

import { useThemeColor } from '~/lib/hooks/use-theme-color'

/**
 * Tab bar background: iOS uses a native blur effect, Android/web use a solid themed background.
 */
export default function TabBarBackground() {
  const backgroundColor = useThemeColor({}, 'background')

  if (Platform.OS === 'ios') {
    return (
      <BlurView
        tint='systemChromeMaterial'
        intensity={80}
        style={StyleSheet.absoluteFill}
      />
    )
  }

  return <View style={[StyleSheet.absoluteFill, { backgroundColor }]} />
}
