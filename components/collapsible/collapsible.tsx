import { ChevronRight } from 'lucide-react-native'
import { PropsWithChildren, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { Colors } from '~/lib/constants/colors'
import { useColorScheme } from '~/lib/hooks/use-color-scheme'

export function Collapsible({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useColorScheme()

  return (
    <View>
      <TouchableOpacity
        className='flex-row items-center gap-[6px]'
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}
        accessibilityRole='button'
        accessibilityState={{ expanded: isOpen }}
      >
        <ChevronRight
          size={18}
          color={Colors[theme].icon}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }] }}
        />
        <Text className='text-default-semibold text-foreground'>{title}</Text>
      </TouchableOpacity>
      {isOpen && <View className='mt-[6px] ml-6'>{children}</View>}
    </View>
  )
}
