interface WakeLockSentinel {
    release: () => Promise<void>;
    released: boolean;
    addEventListener: (type: string, listener: () => void) => void;
}

interface Navigator {
    wakeLock: {
        request: (type: 'screen') => Promise<WakeLockSentinel>;
    };
}
