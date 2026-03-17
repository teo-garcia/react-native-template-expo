import { BlurView } from 'expo-blur'
import { Platform, StyleSheet, View } from 'react-native'

/**
 * Tab bar background: iOS uses a native blur effect, Android/web use a solid themed background.
 */
export default function TabBarBackground() {
  if (Platform.OS === 'ios') {
    return (
      <BlurView
        tint='systemChromeMaterial'
        intensity={80}
        style={StyleSheet.absoluteFill}
      />
    )
  }

  return <View className='absolute inset-0 bg-background' />
}
