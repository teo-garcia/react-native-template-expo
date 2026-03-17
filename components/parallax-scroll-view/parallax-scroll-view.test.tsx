import { Text, View } from 'react-native'

import { render, screen } from '~/lib/test/render'

import ParallaxScrollView from './parallax-scroll-view'

describe('ParallaxScrollView', () => {
  it('renders children', () => {
    render(
      <ParallaxScrollView
        headerImage={<View />}
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      >
        <Text>scroll content</Text>
      </ParallaxScrollView>
    )
    expect(screen.getByText('scroll content')).toBeTruthy()
  })
})
