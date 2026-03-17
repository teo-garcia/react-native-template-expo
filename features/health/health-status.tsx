import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { ThemedText } from '~/components/themed-text/themed-text'
import { useHealth } from '~/features/health/use-health'

const STATUS_COLOR: Record<string, string> = {
  ok: '#22c55e',
  degraded: '#f59e0b',
  down: '#ef4444',
}

export function HealthStatus() {
  const { data, isLoading, isError } = useHealth()

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='small' />
        <ThemedText style={styles.label}>Checking API…</ThemedText>
      </View>
    )
  }

  if (isError || !data) {
    return (
      <View style={styles.container}>
        <View style={[styles.dot, { backgroundColor: STATUS_COLOR['down'] }]} />
        <ThemedText style={styles.label}>API unreachable</ThemedText>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.dot,
          { backgroundColor: STATUS_COLOR[data.status] ?? '#687076' },
        ]}
      />
      <ThemedText style={styles.label}>API {data.status}</ThemedText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  label: {
    opacity: 0.8,
  },
})
