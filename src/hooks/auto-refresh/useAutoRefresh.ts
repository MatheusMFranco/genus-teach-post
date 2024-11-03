import { useEffect } from 'react';

export const useAutoRefresh = (interval: number) => {
    const TIME = 60000;
    const minutes = interval * TIME;
    useEffect(() => {
        const intervalId = setInterval(() => window.location.reload(), minutes);
        return () => clearInterval(intervalId);
    }, [minutes]);
};
