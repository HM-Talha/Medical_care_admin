import { useEffect, useState } from 'react';

export default function useWindowDimensions() {
    const hasWindow = typeof window !== 'undefined';

    function getWindowDimensions() {
        const width = hasWindow ? window.innerWidth : 0;
        const height = hasWindow ? window.innerHeight : 0;
        return {
            width,
            height,
        };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (hasWindow) {
            const handleResize = () => {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
        // eslint-disable-next-line
    }, [hasWindow]);

    return windowDimensions;
}