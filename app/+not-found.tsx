import { Link, Stack } from 'expo-router'
import { Text, View } from 'react-native'

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not Found' }} />
      <View className='flex-1 items-center justify-center p-5 bg-background'>
        <Text className='text-title text-foreground'>
          This screen does not exist.
        </Text>
        <Link href='/' className='mt-[15px] py-[15px]'>
          <Text className='text-link text-tint'>Go to home screen</Text>
        </Link>
      </View>
    </>
  )
}
