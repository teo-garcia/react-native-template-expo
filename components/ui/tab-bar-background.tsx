import { BlurView } from 'expo-blur'
import { Platform, StyleSheet, View } from 'react-native'

import { Colors } from '~/lib/constants/colors'

/**
 * Tab bar background: iOS uses a native blur effect, Android/web use a solid background.
 */
export default function TabBarBackground() {
  if (Platform.OS === 'ios') {
    return (
      <BlurView
        tint="systemChromeMaterial"
        intensity={80}
        style={StyleSheet.absoluteFill}
      />
    )
  }

  return <View style={[StyleSheet.absoluteFill, styles.background]} />
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.light.background,
  },
})
