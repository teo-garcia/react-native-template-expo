import { render } from '~/lib/test/render'

import { HapticTab } from './haptic-tab'

describe('HapticTab', () => {
  it('renders without crashing', () => {
    render(<HapticTab onPress={() => {}} />)
  })
})
