import { renderHook } from '@testing-library/react';

import { useAutoRefresh } from './useAutoRefresh';

describe('useAutoRefresh', () => {
  beforeAll(() => {
    delete (window as any).location;
    (window as any).location = { reload: jest.fn() };
  });

  afterEach(() => jest.clearAllMocks());
  afterAll(() => (window as any).location = { reload: () => {} });

  it('should set an interval to refresh the page', () => {
    const interval = 1;
    jest.useFakeTimers();

    renderHook(() => useAutoRefresh(interval));

    expect(window.location.reload).not.toHaveBeenCalled();

    jest.advanceTimersByTime(60000);

    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });

  it('should clear the interval on unmount', () => {
    const interval = 1;
    jest.useFakeTimers();

    const { unmount } = renderHook(() => useAutoRefresh(interval));

    jest.advanceTimersByTime(60000);

    unmount();
    expect(window.location.reload).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(60000);
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
