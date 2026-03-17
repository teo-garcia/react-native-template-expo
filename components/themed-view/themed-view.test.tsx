import { Text } from 'react-native'

import { render, screen } from '~/lib/test/render'

import { ThemedView } from './themed-view'

describe('ThemedView', () => {
  it('renders children', () => {
    render(
      <ThemedView>
        <Text>content</Text>
      </ThemedView>
    )
    expect(screen.getByText('content')).toBeTruthy()
  })

  it('renders with surface variant', () => {
    render(
      <ThemedView variant='surface'>
        <Text>surface content</Text>
      </ThemedView>
    )
    expect(screen.getByText('surface content')).toBeTruthy()
  })
})
