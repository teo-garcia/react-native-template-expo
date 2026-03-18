import type { ForwardedRef } from 'react'
import React from 'react'
import { Pressable, ScrollView, View } from 'react-native'

// Provide required env vars before any module that validates them at load time
process.env['EXPO_PUBLIC_API_BASE_URL'] = 'http://localhost:3000'

jest.mock('react-native-reanimated', () => {
  return {
    __esModule: true,
    default: {
      ScrollView,
      View,
      call: () => {},
    },
    interpolate: (_value: number, _input: number[], output: number[]) => {
      return output[1] ?? output[0] ?? 0
    },
    useAnimatedRef: () => ({ current: null }),
    useAnimatedStyle: (updater: () => Record<string, unknown>) => updater(),
    useScrollOffset: () => ({ value: 0 }),
  }
})

jest.mock('@react-navigation/elements', () => {
  return {
    PlatformPressable: React.forwardRef(
      (props: Record<string, unknown>, ref: ForwardedRef<typeof Pressable>) => {
        return React.createElement(Pressable, { ...props, ref })
      }
    ),
  }
})
