import { act } from 'react';
import { renderHook } from '@testing-library/react';

import { useFullScreen } from './useFullScreen';

describe('useFullScreen', () => {
  beforeAll(() => {
    document.documentElement.requestFullscreen = jest.fn();
    document.exitFullscreen = jest.fn();
  });

  afterEach(() => jest.clearAllMocks());

  it('should initialize isFullScreen state based on document.fullscreenElement', () => {
    Object.defineProperty(document, 'fullscreenElement', {
      configurable: true,
      value: document.documentElement,
    });

    const { result } = renderHook(() => useFullScreen());
    expect(result.current.isFullScreen).toBe(true);

    Object.defineProperty(document, 'fullscreenElement', {
      configurable: true,
      value: null,
    });
  });

  it('should call requestFullscreen when toggled on from non-fullscreen', () => {
    const { result } = renderHook(() => useFullScreen());

    act(() => result.current.toggleFullScreen());

    expect(document.documentElement.requestFullscreen).toHaveBeenCalled();
    expect(result.current.isFullScreen).toBe(true);
  });

  it('should call exitFullscreen when toggled off from fullscreen', () => {
    const { result } = renderHook(() => useFullScreen());

    act(() => result.current.toggleFullScreen());

    Object.defineProperty(document, 'fullscreenElement', {
      configurable: true,
      value: document.documentElement,
    });

    act(() => result.current.toggleFullScreen());

    expect(document.exitFullscreen).toHaveBeenCalled();
    expect(result.current.isFullScreen).toBe(false);
  });

  it('should toggle isFullScreen state correctly', () => {
    const { result } = renderHook(() => useFullScreen());

    expect(result.current.isFullScreen).toBe(true);

    act(() => result.current.toggleFullScreen());
    expect(result.current.isFullScreen).toBe(false);

    Object.defineProperty(document, 'fullscreenElement', {
      configurable: true,
      value: document.documentElement,
    });

    act(() => result.current.toggleFullScreen());
    expect(result.current.isFullScreen).toBe(true);
  });
});
