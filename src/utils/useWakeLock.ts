import { useEffect, useState } from 'react';

export const useWakeLock = () => {
    const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null);

    useEffect(() => {
        const enableWakeLock = async () => {
            try {
                const lock = await navigator.wakeLock.request('screen');
                setWakeLock(lock);
                lock.addEventListener('release', () => {});
            } catch (err) {
                console.error('Wake Lock request failed:', err instanceof Error ? err.message : err);
            }
        };

        enableWakeLock();

        return () => {
            if (wakeLock) {
                wakeLock.release().then(() => {});
            }
        };
    }, [wakeLock]);

    return wakeLock;
};
