import { Quote } from '../models/Quote';

export const fetchRandomQuote = async (): Promise<Quote> => {
    const api = 'https://programming-quotesapi.vercel.app/api/random';
    const response = await fetch(api);
    if(!response.ok) {
        return {
            quote: 'Houston, we have a problem',
            author: 'API',
        };
    }
    return response.json();
};
