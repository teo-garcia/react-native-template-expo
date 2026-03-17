import { render, screen } from '~/lib/test/render'

import { ThemedText } from './themed-text'

describe('ThemedText', () => {
  it('renders children', () => {
    render(<ThemedText>Hello world</ThemedText>)
    expect(screen.getByText('Hello world')).toBeTruthy()
  })

  it('renders title type', () => {
    render(<ThemedText type='title'>Page Title</ThemedText>)
    expect(screen.getByText('Page Title')).toBeTruthy()
  })

  it('renders defaultSemiBold type', () => {
    render(<ThemedText type='defaultSemiBold'>Bold Text</ThemedText>)
    expect(screen.getByText('Bold Text')).toBeTruthy()
  })

  it('renders subtitle type', () => {
    render(<ThemedText type='subtitle'>Subtitle</ThemedText>)
    expect(screen.getByText('Subtitle')).toBeTruthy()
  })

  it('renders link type', () => {
    render(<ThemedText type='link'>Click here</ThemedText>)
    expect(screen.getByText('Click here')).toBeTruthy()
  })
})
