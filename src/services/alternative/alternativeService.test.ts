import { Quote } from '../../models/Quote';
import { fetchAlternativeQuote } from './alternativeService';

const API = 'https://api.example.com/quote';

describe('fetchAlternativeQuote', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should return a quote from the API when the response is OK', async () => {
    process.env.REACT_APP_ALTERNATIVE_API = API;

    const mockQuote = [{ quote: 'This is a quote', character: 'Author Name' }];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: jest.fn().mockResolvedValue(mockQuote),
      })
    ) as jest.Mock;

    const result: Quote = await fetchAlternativeQuote();

    expect(result).toEqual({
      quote: 'This is a quote',
      author: 'Author Name',
    });
    expect(global.fetch).toHaveBeenCalledWith(API);
  });

  it('should return a default quote when the response is not OK', async () => {
    process.env.REACT_APP_ALTERNATIVE_API = API;

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;

    const result: Quote = await fetchAlternativeQuote();

    expect(result).toEqual({
      quote: 'Mmmm mmmm mmmm mm!!!',
      author: 'Kenny',
    });
  });
});
