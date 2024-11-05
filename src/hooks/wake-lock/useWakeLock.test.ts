import { renderHook, waitFor } from '@testing-library/react';

import { useWakeLock } from './useWakeLock';

const mockWakeLock = {
  release: jest.fn(),
  addEventListener: jest.fn(),
};

describe('useWakeLock', () => {
  beforeEach(() => {
    (window.navigator as any).wakeLock = {
      request: jest.fn().mockResolvedValue(mockWakeLock),
    };
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => jest.clearAllMocks());

  it('should successfully request a wake lock', async () => {
    const { result } = renderHook(() => useWakeLock());
    await waitFor(() =>
      expect((window.navigator as any).wakeLock.request).toHaveBeenCalledWith(
        'screen'
      )
    );
    await waitFor(() => expect(result.current).toBe(mockWakeLock));
  });

  it('should handle failure when requesting wake lock', async () => {
    (window.navigator as any).wakeLock.request.mockRejectedValue(
      new Error('Wake Lock request failed')
    );
    const { result } = renderHook(() => useWakeLock());
    await waitFor(() => expect(result.current).toBe(null));
    expect(console.error).toHaveBeenCalledWith('Wake Lock request failed');
  });
});
