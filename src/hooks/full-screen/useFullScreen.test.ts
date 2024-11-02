import { act } from 'react';
import { renderHook } from '@testing-library/react';

import { useFullScreen } from './useFullScreen';

describe('useFullScreen', () => {
    beforeAll(() => {
      document.documentElement.requestFullscreen = jest.fn();
      document.exitFullscreen = jest.fn();
    });
  
    afterEach(() => jest.clearAllMocks());
  
    it('should call requestFullscreen when toggled on', () => {
      const { result } = renderHook(() => useFullScreen());
      act(() => result.current.toggleFullScreen());
      expect(document.documentElement.requestFullscreen).toHaveBeenCalled();
    });
  
    it('should call exitFullscreen when toggled off', () => {
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

    it('should toggle isFullScreen state', () => {
        const { result } = renderHook(() => useFullScreen());
    
        expect(result.current.isFullScreen).toBe(false);
    
        act(() => result.current.toggleFullScreen());
        expect(result.current.isFullScreen).toBe(true);
    
        Object.defineProperty(document, 'fullscreenElement', {
          configurable: true,
          value: document.documentElement,
        });
    
        act(() => result.current.toggleFullScreen());
        expect(result.current.isFullScreen).toBe(false);
      });

  });