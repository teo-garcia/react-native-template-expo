import { Zap } from 'lucide-react-native'
import { Dimensions, StyleSheet } from 'react-native'

import { ThemedView } from '~/components/themed-view/themed-view'
import { Colors } from '~/lib/constants/colors'
import { useColorScheme } from '~/lib/hooks/use-color-scheme'

const ICON_SIZE = Math.round(Dimensions.get('window').width * 0.55)

export default function HomeScreen() {
  const scheme = useColorScheme()

  return (
    <ThemedView style={styles.container}>
      <Zap size={ICON_SIZE} color={Colors[scheme].text} />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
