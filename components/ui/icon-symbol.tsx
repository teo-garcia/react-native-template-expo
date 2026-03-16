/**
 * Wraps SF Symbols (iOS) with a cross-platform fallback using @expo/vector-icons.
 * On iOS, renders native SF Symbol glyphs. On Android/web, falls back to MaterialIcons.
 */
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols'
import { Platform, StyleProp, ViewStyle } from 'react-native'

type IconSymbolName = React.ComponentProps<typeof MaterialIcons>['name']

const MAPPING: Record<string, IconSymbolName> = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
}

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  readonly name: string
  readonly size?: number
  readonly color: string
  readonly style?: StyleProp<ViewStyle>
  readonly weight?: SymbolWeight
}) {
  if (Platform.OS === 'ios') {
    return (
      <SymbolView
        weight={weight}
        tintColor={color}
        resizeMode="scaleAspectFit"
        name={name as SymbolViewProps['name']}
        style={[{ width: size, height: size }, style]}
      />
    )
  }

  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name] ?? 'help-outline'}
      style={style as StyleProp<import('react-native').TextStyle>}
    />
  )
}
