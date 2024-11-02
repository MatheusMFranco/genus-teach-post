import { renderHook, act, waitFor } from '@testing-library/react';

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
    jest.spyOn(console, 'error').mockImplementation(() => { });
  });

  afterEach(() => jest.clearAllMocks());

  test('should successfully request a wake lock', async () => {
    const { result } = renderHook(() => useWakeLock());
    await waitFor(() => expect((window.navigator as any).wakeLock.request).toHaveBeenCalledWith('screen'));
    await waitFor(() => expect(result.current).toBe(mockWakeLock));
  });

  test('should release the wake lock when unmounting the hook', async () => {
    renderHook(() => useWakeLock());
    await waitFor(() => expect((window.navigator as any).wakeLock.request).toHaveBeenCalledWith('screen'));
  });

  test('should handle failure when requesting wake lock', async () => {
    (window.navigator as any).wakeLock.request.mockRejectedValue(new Error('Wake Lock request failed'));
    const { result } = renderHook(() => useWakeLock());
    await waitFor(() => expect(result.current).toBe(null));
    expect(console.error).toHaveBeenCalledWith('Wake Lock request failed');
  });

  test('should update the state to null when releasing the wake lock', async () => {
    const { result } = renderHook(() => useWakeLock());
    await waitFor(() => expect((window.navigator as any).wakeLock.request).toHaveBeenCalledWith('screen'));
    act(() => mockWakeLock.addEventListener.mock.calls[0][1]());
    await waitFor(() => expect(result.current).toBe(null));
  });
});
