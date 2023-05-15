import { useState, useEffect } from 'react';

export const useIsMobileScreen = (maxWidth = 767.9) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= maxWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [maxWidth]);

  return isMobile;
};
