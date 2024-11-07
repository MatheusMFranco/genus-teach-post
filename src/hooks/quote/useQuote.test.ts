import { renderHook, waitFor } from '@testing-library/react';

import { useQuote } from './useQuote';
import { fetchRandomQuote } from '../../services/random/randomService';
import { fetchAlternativeQuote } from '../../services/alternative/alternativeService';
import { Quote } from '../../models/Quote';

jest.mock('../../services/random/randomService', () => ({
  fetchRandomQuote: jest.fn(),
}));
jest.mock('../../services/alternative/alternativeService', () => ({
  fetchAlternativeQuote: jest.fn(),
}));

describe('useQuote', () => {
  afterEach(() => jest.clearAllMocks());

  it('should successfully fetch a random quote', async () => {
    const mockQuote: Quote = { quote: 'Keep it simple.', author: 'Unknown' };
    (fetchRandomQuote as jest.Mock).mockResolvedValue(mockQuote);
    const { result } = renderHook(() => useQuote());
    await waitFor(() => expect(result.current).toEqual(mockQuote));
  });

  it('should fetch an alternative quote on random quote fetch failure', async () => {
    (fetchRandomQuote as jest.Mock).mockRejectedValue(
      new Error('Fetch failed')
    );
    const mockAlternativeQuote: Quote = {
      quote: 'Alternative quote.',
      author: 'Unknown',
    };
    (fetchAlternativeQuote as jest.Mock).mockResolvedValue(
      mockAlternativeQuote
    );
    const { result } = renderHook(() => useQuote());
    await waitFor(() => expect(result.current).toEqual(mockAlternativeQuote));
  });

  it('should set a default message on failure of both fetches', async () => {
    (fetchRandomQuote as jest.Mock).mockRejectedValue(
      new Error('Fetch failed')
    );
    (fetchAlternativeQuote as jest.Mock).mockRejectedValue(
      new Error('Alternative fetch failed')
    );
    const { result } = renderHook(() => useQuote());
    await waitFor(() => {
      expect(result.current).toEqual({
        quote: "I'm sorry, Dave. I'm afraid I can't do that.",
        author: 'Hal 9000',
      });
    });
  });
});
