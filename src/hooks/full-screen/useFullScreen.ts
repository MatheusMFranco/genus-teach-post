import { useState, useCallback } from 'react';

export const useFullScreen = () => {
    const [isFullScreen, setIsFullScreen] = useState(!!document.fullscreenElement);

    const toggleFullScreen = useCallback(() => {
        /* istanbul ignore else */
        if (!isFullScreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullScreen((prev) => !prev);
    }, [isFullScreen]);

    return { toggleFullScreen, isFullScreen };
};
