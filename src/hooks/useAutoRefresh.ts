import { useEffect } from 'react';

export const useAutoRefresh = (interval: number) => {
    const minutes = interval * 60 * 1000;
    useEffect(() => {
        const intervalId = setInterval(() => window.location.reload(), minutes);
        return () => clearInterval(intervalId);
    }, [minutes]);
};
