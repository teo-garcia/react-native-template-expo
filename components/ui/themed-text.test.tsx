import { ThemedText } from '~/components/ui/themed-text'
import { render, screen } from '~/lib/test/render'

describe('ThemedText', () => {
  it('renders children', () => {
    render(<ThemedText>Hello world</ThemedText>)
    expect(screen.getByText('Hello world')).toBeTruthy()
  })

  it('renders title type with correct role', () => {
    render(<ThemedText type="title">Page Title</ThemedText>)
    expect(screen.getByText('Page Title')).toBeTruthy()
  })
})
