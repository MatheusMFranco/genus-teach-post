import { Quote } from '../../models/Quote';
import { fetchRandomQuote } from './randomService';

const API = 'https://api.example.com/random-quote';

describe('fetchRandomQuote', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should return a quote from the API when the response is OK', async () => {
    process.env.REACT_APP_RANDOM_API = API;

    const mockQuote: Quote = {
      quote:
        'The only limit to our realization of tomorrow is our doubts of today.',
      author: 'Franklin D. Roosevelt',
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: jest.fn().mockResolvedValue(mockQuote),
      })
    ) as jest.Mock;

    const result: Quote = await fetchRandomQuote();

    expect(result).toEqual(mockQuote);
    expect(global.fetch).toHaveBeenCalledWith(API);
  });

  it('should return a default quote when the response is not OK', async () => {
    process.env.REACT_APP_RANDOM_API = API;

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      })
    ) as jest.Mock;

    const result: Quote = await fetchRandomQuote();

    expect(result).toEqual({
      quote: 'Houston, we have a problem',
      author: 'API',
    });
  });
});
