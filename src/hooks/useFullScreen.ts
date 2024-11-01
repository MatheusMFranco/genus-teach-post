import { useState, useCallback } from 'react';

export const useFullScreen = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = useCallback(() => {
        if (!isFullScreen) {
            document.documentElement.requestFullscreen();
        } else if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        setIsFullScreen(!isFullScreen);
    }, [isFullScreen]);

    return { toggleFullScreen };
};
