import { useState, useEffect } from 'react';

export const useWakeLock = () => {
  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null);

  useEffect(() => {
    const enableWakeLock = async () => {
      try {
        const lock = await navigator.wakeLock.request('screen');
        setWakeLock(lock);
      } catch (_) {
        console.error('Wake Lock request failed');
      }
    };
    enableWakeLock();
  });
  return wakeLock;
};
