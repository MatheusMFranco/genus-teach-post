import { Quote } from '../models/Quote';

export const fetchRandomQuote = async (): Promise<Quote> => {
    const api = 'https://programming-quotesapi.vercel.app/api/random';
    const response = await fetch(api);
    if(response.ok) {
        return response.json();
    }
    return {
        quote: 'Houston, we have a problem',
        author: 'API',
    };
};

export const fetchAlternativeQuote = async (): Promise<Quote> => {
    const api = 'https://southparkquotes.onrender.com/v1/quotes';
    const response = await fetch(api);

    if (response.ok) {
        const {quote, character} = await response.json();
        return {
            quote,
            author: character,
        };
    }

    return {
        quote: 'Mmmm mmmm mmmm mm!!!',
        author: 'Kenny',
    };
};
