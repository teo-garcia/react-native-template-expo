import { StyleSheet } from 'react-native'

import { Collapsible } from '~/components/ui/collapsible'
import { ExternalLink } from '~/components/ui/external-link'
import { IconSymbol } from '~/components/ui/icon-symbol'
import ParallaxScrollView from '~/components/ui/parallax-scroll-view'
import { ThemedText } from '~/components/ui/themed-text'
import { ThemedView } from '~/components/ui/themed-view'
import { Colors } from '~/lib/constants/colors'

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color={Colors.brand.placeholder}
          name='chevron.left.forwardslash.chevron.right'
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title'>Explore</ThemedText>
      </ThemedView>
      <ThemedText>
        This template includes example code to help you get started.
      </ThemedText>

      <Collapsible title='File-based routing'>
        <ThemedText>
          This app uses{' '}
          <ExternalLink href='https://docs.expo.dev/router/introduction'>
            <ThemedText type='defaultSemiBold'>Expo Router</ThemedText>
          </ExternalLink>{' '}
          for file-based routing. Add a file to{' '}
          <ThemedText type='defaultSemiBold'>app/</ThemedText> and it becomes a
          route automatically.
        </ThemedText>
      </Collapsible>

      <Collapsible title='New Architecture'>
        <ThemedText>
          SDK 55 ships with the New Architecture enabled by default. Old
          Architecture is no longer supported. This means better performance,
          concurrent rendering, and full React 19 support.
        </ThemedText>
      </Collapsible>

      <Collapsible title='TanStack Query'>
        <ThemedText>
          All API calls go through TanStack Query. See{' '}
          <ThemedText type='defaultSemiBold'>lib/api/</ThemedText> for the
          client setup and{' '}
          <ThemedText type='defaultSemiBold'>features/health/</ThemedText> for a
          usage example.
        </ThemedText>
      </Collapsible>

      <Collapsible title='Shared config packages'>
        <ThemedText>
          ESLint, Prettier, and TypeScript configs come from the{' '}
          <ThemedText type='defaultSemiBold'>@teo-garcia/*-shared</ThemedText>{' '}
          packages, keeping tooling consistent across the entire template
          ecosystem.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: Colors.brand.placeholder,
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
