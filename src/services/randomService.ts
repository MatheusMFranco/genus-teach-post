import { Quote } from '../models/Quote';

export const fetchRandomQuote = async (): Promise<Quote> => {
    const api = process.env.REACT_APP_RANDOM_API;
    const response = await fetch(`${api}`);

    if(response.ok) {
        return response.json();
    }
    return {
        quote: 'Houston, we have a problem',
        author: 'API',
    };
};
