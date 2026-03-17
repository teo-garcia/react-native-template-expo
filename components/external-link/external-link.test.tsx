import { render, screen } from '~/lib/test/render'

import { ExternalLink } from './external-link'

describe('ExternalLink', () => {
  it('renders link text', () => {
    render(<ExternalLink href='https://expo.dev'>Open Expo</ExternalLink>)
    expect(screen.getByText('Open Expo')).toBeTruthy()
  })
})
