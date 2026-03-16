import { StyleSheet, View } from 'react-native'

import { ThemedText } from '~/components/ui/themed-text'
import { ThemedView } from '~/components/ui/themed-view'
import { HealthStatus } from '~/features/health/health-status'
import { Colors } from '~/lib/constants/colors'

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.hero} />
      <View style={styles.content}>
        <ThemedText type='title'>Home</ThemedText>
        <ThemedText style={styles.subtitle}>
          React Native · Expo SDK 55 · New Architecture
        </ThemedText>
        <HealthStatus />
      </View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    height: 200,
    backgroundColor: Colors.brand.hero,
  },
  content: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  subtitle: {
    opacity: 0.6,
  },
})
