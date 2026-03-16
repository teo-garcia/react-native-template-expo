import { useHealth } from '~/features/health/use-health'
import { createWrapper, renderHook, waitFor } from '~/lib/test/render'

const mockFetch = jest.fn()
globalThis.fetch = mockFetch

describe('useHealth', () => {
  beforeEach(() => {
    mockFetch.mockReset()
  })

  it('returns health data on success', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        status: 'ok',
        timestamp: '2026-03-15T00:00:00.000Z',
        version: '1.0.0',
      }),
    })

    const { result } = renderHook(() => useHealth(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data?.status).toBe('ok')
  })

  it('returns error state when fetch fails', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'))

    const { result } = renderHook(() => useHealth(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
  })
})
