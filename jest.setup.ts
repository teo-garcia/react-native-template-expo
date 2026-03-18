import type { ComponentProps, ComponentRef, ForwardedRef } from 'react'

const mockReact = jest.requireActual<typeof import('react')>('react')
const mockReactNative =
  jest.requireActual<typeof import('react-native')>('react-native')

// Provide required env vars before any module that validates them at load time
process.env['EXPO_PUBLIC_API_BASE_URL'] = 'http://localhost:3000'

jest.mock('react-native-reanimated', () => {
  return {
    __esModule: true,
    default: {
      ScrollView: mockReactNative.ScrollView,
      View: mockReactNative.View,
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
    PlatformPressable: mockReact.forwardRef(
      (
        props: ComponentProps<typeof mockReactNative.Pressable>,
        ref: ForwardedRef<ComponentRef<typeof mockReactNative.Pressable>>
      ) => {
        return mockReact.createElement(mockReactNative.Pressable, {
          ...props,
          ref,
        })
      }
    ),
  }
})
