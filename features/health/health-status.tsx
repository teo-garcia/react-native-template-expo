import { ActivityIndicator, Text, View } from 'react-native'

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
      <View className='flex-row items-center gap-2 mt-2'>
        <ActivityIndicator size='small' />
        <Text className='text-foreground opacity-80'>Checking API…</Text>
      </View>
    )
  }

  if (isError || !data) {
    return (
      <View className='flex-row items-center gap-2 mt-2'>
        <View
          className='w-[10px] h-[10px] rounded-full'
          style={{ backgroundColor: STATUS_COLOR['down'] }}
        />
        <Text className='text-foreground opacity-80'>API unreachable</Text>
      </View>
    )
  }

  return (
    <View className='flex-row items-center gap-2 mt-2'>
      <View
        className='w-[10px] h-[10px] rounded-full'
        style={{ backgroundColor: STATUS_COLOR[data.status] ?? '#687076' }}
      />
      <Text className='text-foreground opacity-80'>API {data.status}</Text>
    </View>
  )
}
