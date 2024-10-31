import { useState, useEffect } from 'react';

import { Quote } from '../models/Quote';
import { fetchRandomQuote } from '../services/randomService';
import { fetchAlternativeQuote } from '../services/alternativeService';

export const useQuote = () => {
    const [message, setMessage] = useState({} as Quote);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const quote = await fetchRandomQuote();
                setMessage(quote);
            } catch (error) {
                try {
                    const alternativeQuote = await fetchAlternativeQuote();
                    setMessage(alternativeQuote);
                } catch (error) {
                    setMessage({
                        quote: `I'm sorry, Dave. I'm afraid I can't do that.`,
                        author: 'Hal 9000',
                    });
                }
            }
        };
        fetchQuote();
    }, []);

    return message;
};
