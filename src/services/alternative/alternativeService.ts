import { Quote } from '../../models/Quote';

export const fetchAlternativeQuote = async (): Promise<Quote> => {
    const api = process.env.REACT_APP_ALTERNATIVE_API;
    const response = await fetch(`${api}`);

    if (response.ok) {
        const [data] = await response.json();
        const {quote, character} = data;
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
