import { Text } from 'react-native'

import { fireEvent, render, screen } from '~/lib/test/render'

import { Collapsible } from './collapsible'

describe('Collapsible', () => {
  it('renders the title', () => {
    render(
      <Collapsible title='Section'>
        <Text>Hidden</Text>
      </Collapsible>
    )
    expect(screen.getByText('Section')).toBeTruthy()
  })

  it('hides content by default', () => {
    render(
      <Collapsible title='Section'>
        <Text>Hidden content</Text>
      </Collapsible>
    )
    expect(screen.queryByText('Hidden content')).toBeNull()
  })

  it('shows content after pressing', () => {
    render(
      <Collapsible title='Section'>
        <Text>Revealed content</Text>
      </Collapsible>
    )
    fireEvent.press(screen.getByRole('button'))
    expect(screen.getByText('Revealed content')).toBeTruthy()
  })

  it('hides content again when pressed twice', () => {
    render(
      <Collapsible title='Section'>
        <Text>Toggle content</Text>
      </Collapsible>
    )
    const button = screen.getByRole('button')
    fireEvent.press(button)
    fireEvent.press(button)
    expect(screen.queryByText('Toggle content')).toBeNull()
  })
})
